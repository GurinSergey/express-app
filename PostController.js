import Post from './Post.js'
import PostService from './PostService.js'

class PostController {
  async create(req, resp) {
    try {
      const post = await PostService.create(req.body, req.files.picture)
      resp.json(post)
    } catch (error) {
      resp.status(500).json(error.message)
    }
  }

  async getAll(req, resp) {
    try {
      const posts = await PostService.getAll()
      return resp.json(posts)
    } catch (error) {
      resp.status(500).json(error)
    }
  }

  async getOne(req, resp) {
    try {
      const posts = await PostService.getOne(req.params.id)
      return resp.json(posts)
    } catch (error) {
      resp.status(500).json(error)
    }
  }

  async update(req, resp) {
    try {
      const updatedPost = await PostService.update(req.body)
      return resp.json(updatedPost)
    } catch (error) {
      resp.status(500).json(error.message)
    }
  }

  async delete(req, resp) {
    try {
      const post = await PostService.delete(req.params.id)
      return resp.json(post)
    } catch (error) {
      resp.status(500).json(error)
    }
  }
}

export default new PostController()
