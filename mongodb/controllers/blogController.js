import blogModel from "../models/schema.js";

export default class BlogController {
  async addBlog(req, res) {
    try {
      const response = await blogModel.create({
        title: "Title Two",
        description: "Description Two",
      });
      res.json(response);
    } catch (err) {
      res.json({
        success: false,
        message: err.message,
      });
    }
  }

  async getBlog(req, res) {
    const { id } = req.params;
    try {
      const response = await blogModel.findById(id);
      res.json(response);
    } catch (err) {
      res.json({
        success: false,
        message: err.message,
      });
    }
  }

  async updateBlog(req, res) {
    const { id } = req.params;

    try {
      const response = await blogModel.findOne({
        _id: id,
      });
      /* We can update data in mongoose using this */
      response.title = "Updated title";
      response.save();

      res.json(response);
    } catch (err) {
      res.json({
        success: false,
        message: err.message,
      });
    }
  }

  async deleteBlog(req, res) {
    const { id } = req.params;

    try {
      const response = await blogModel.deleteOne({
        _id: id,
      });
      res.json(response);
    } catch (err) {
      res.json({
        success: false,
        message: err.message,
      });
    }
  }
}
