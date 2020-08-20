const { generateToken } = require('../helpers/jwt.helpers')
let _userService = null

class AuthService {
    constructor({ UserService }) {
        _userService = UserService
    }

    async signUp(user) {
        const { username } = user
        const userExist = await _userService.getUserByUsername(username);
        if (userExist) {
            const error = new Error();
            error.status = 400;
            error.message = "user already exists";
            throw error;
        }

        return await _userService.create(user);
    }

    async signIn(user) {
        const { username, password } = user;
        const userExist = await _userService.getUserByUsername(username);
        if (!userExist) {
            const error = new Error();
            error.status = 400;
            error.message = "User or Password is invalid";
            throw error;
        }

        const validPassword = userExist.comparePassword(password);
        if (!validPassword) {
            const error = new Error();
            error.status = 400;
            error.message = "User or Password is invalid";
            throw error;
        }
        const userToEncode = {
            username: userExist.username,
            id: userExist._id,
        };
        const token = generateToken(userToEncode);

        return { token, user: userExist }

    }
}


module.exports = AuthService;