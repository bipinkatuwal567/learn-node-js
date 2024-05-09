import { Op } from "sequelize";
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

  async getBook(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await bookModel.findByPk(id);
      if (data) {
        res.json(data);
      } else {
        res.json([]);
      }
    } else {
      res.json({ sucess: false, message: "Book ID not provided" });
    }
  }

  async updateBook(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await bookModel.update(req.body, {
        where: {
          id,
        },
      });
      if (data[0] === 1) {
        res.json(data);
      } else {
        res.json({ sucess: false, message: "Unable to update book data" });
      }
    } else {
      res.json({ sucess: false, message: "Book ID not provided" });
    }
  }

  async deleteBook(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await bookModel.destroy({
        where: {
          id,
        },
      });
      if (data === 1) {
        res.json({ sucess: true, message: "Book has been deleted" });
      } else {
        res.json({ sucess: false, message: "Unable to delete book" });
      }
    } else {
      res.json({ sucess: false, message: "Book ID not provided" });
    }
  }

  async searchBook(req, res) {
    const { book } = req.query;

    if (book) {
      const data = await bookModel.findAll({
        where: {
          [Op.or]: {
            name: {
              [Op.like]: `%${book}%`,
            },
            author: {
              [Op.like]: `%${book}%`,
            },
          },
        },
      });

      if(data){
        res.json(data);
      }else{
        res.json([]);
      }
    } else {
      res.json({ sucess: false, message: "Empty query search string" });
    }
  }
}
