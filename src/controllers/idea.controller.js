let _ideaService = null;

class IdeaController {
    constructor({ IdeaService }) {
        _ideaService = IdeaService;
    }

    async get(req, res) {
        const { IdeaId } = req.params;
        const Idea = await _IdeaService.get(IdeaId);
        return res.send(Idea);
    }

    async getAll(req, res) {
        const { pageSize, pageNum } = req.query;
        const ideas = await _ideaService.getAll(pageSize, pageNum);
        return res.send(ideas);
    }

    async create(req, res) {
        const { body } = req;
        const createdIdea = await _ideaService.create(body);
        return res.send(createdIdea);
    }

    async update(req, res) {
        const { body } = req;
        const { ideaId } = req.params;
        const updateIdea = await _ideaService.update(ideaId, body);
        return res.send(updateIdea);
    }

    async delete(req, res) {
        const { ideaId } = req.params;
        const deletedIdea = await _ideaService.delete(ideaId);
        return res.send(deletedIdea);
    }

    async getUserIdeas(req, res) {
        const { userId } = req.params;
        const ideas = await _ideaService.getUserIdeas(userId);
        return res.send(ideas);
    }

    async upvoteIdea(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaService.updateIdea(ideaId);
        return res.send(idea);
    }
    async downvoteIdea(req, res) {
        const { ideaId } = req.params;
        const idea = await _ideaService.downdateIdea(ideaId);
        return res.send(idea);
    }
}

module.exports = IdeaController;