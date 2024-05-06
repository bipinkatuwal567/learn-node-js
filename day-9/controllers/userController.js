import { Op } from "sequelize";
import Users from "../models/userModel.js";

export default class userController {
  // Add user to database
  async addUser(req, res) {
    const { username, location } = req.body;

    try {
      const data = await Users.create({ username, location });
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
    }
  }

  // Get user by userid
  async getUser(req, res) {
    const { id } = req.params;
    if (id) {
      const data = await Users.findByPk(id);

      if (data) {
        res.json(data);
      } else {
        res.json([]);
      }
    } else {
      res.status(200).json({ success: false, message: "User ID NOT provided" });
    }
  }

  // Update user
  async updateUser(req, res) {
    const { id } = req.params;

    if (id) {
      const { username, location } = req.body;

      const data = await Users.update(
        { username, location },
        {
          where: {
            id,
          },
        }
      );

      if (data[0] === 1) {
        res.status(200).json({ success: true, message: "User updated" });
      } else {
        res
          .status(200)
          .json({ success: false, message: "Unable to update the user" });
      }
    } else {
      res.status(200).json({ success: false, message: "User ID Not provided" });
    }
  }

  // Delete user
  async deleteUser(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await Users.destroy({
        where: {
          id,
        },
      });

      if (data) {
        res.json({ success: true, message: "Successfully delete user" });
      } else {
        res.json({ success: false, message: "Couldn't delete user" });
      }
    } else {
      res.status(200).json({ success: false, message: "User ID Not provided" });
    }
  }

  // Search user by location
  async searchUser(req, res) {
    const { location } = req.query;

    const data = await Users.findAll({
      where: {
        location: {
          [Op.like]: `%${location}%`,
        },
      },
    });

    console.log(data);
    if (data) {
      res.json(data);
    } else {
      res.json([]);
    }
  }
}
