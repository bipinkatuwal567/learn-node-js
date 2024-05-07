import bookModel from "../models/bookModel.js";

export default class bookController {
  async addBook(req, res, imageName) {
    const data = await bookModel.create({ ...req.body, image: imageName });
    console.log(data);

    if (data) {
      res.json(data);
    } else {
      res.json({ sucess: false, message: "Error during adding book" });
    }
  }

  async getBook(req, res){
    const {id} = req.params;

    if(id){
        const data = await bookModel.findByPk(id);
        if(data){
            res.json(data);
        }else{
            res.json([]);
        }
    }else{
        res.json({sucess: false, message: "Unable to fetch book data"})
    }
  }
}
