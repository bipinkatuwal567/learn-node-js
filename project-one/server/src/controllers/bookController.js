import { Op } from "sequelize";
import bookModel from "../models/bookModel.js";

export default class bookController {
  async addBook(req, res, imageName) {
    try {
      const data = await bookModel.create({ ...req.body, image: imageName });

      if (data) {
        res.json(data);
      } else {
        res.json({ sucess: false, message: "Error during adding book" });
      }
    } catch (err) {
      return res.json({ success: false, message: "Error while querying in data" });
    }
  }

  async getBook(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await bookModel.findByPk(id, {
        raw: true
      });
      if (data) {
        data.image = "http://localhost:8000/uploads/" + data.image;
        res.json(data);
      } else {
        res.json([]);
      }
    } else {
      res.json({ sucess: false, message: "Book ID not provided" });
    }
  }

  async getBooks(req, res) {
    let { limit } = req.query;
    if (!limit) limit = 20;

    try {
      const data = await bookModel.findAll({
        limit: parseInt(limit),
        raw: true,
      });

      if (data) {
        for (let d of data) {
          d.image = "http://localhost:8000/uploads/" + d.image;
        }
        res.json(data);
      } else {
        res.json({ sucess: false, message: "No data found" });
      }
    } catch (err) {
      res.json({ sucess: true, message: err });
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
        raw: true
      });

      if (data) {
        for(let d of data){
          d.image = "http://localhost:8000/uploads/" + d.image;
        }
        res.json(data);
      } else {
        res.json([]);
      }
    } else {
      res.json({ sucess: false, message: "Empty query search string" });
    }
  }
}
