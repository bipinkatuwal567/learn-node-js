import bookModel from "../models/bookModel.js";

export default class bookController {
  async addBook(req, res, imageName) {
    console.log(req.body);
    const data = await bookModel.create({ ...req.body, image: imageName });
    console.log(data);

    if (data) {
      res.json(data);
    } else {
      res.json({ sucess: false, message: "Error during adding book" });
    }
  }
}
