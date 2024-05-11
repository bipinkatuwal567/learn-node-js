import React, { useState } from "react";
import "../assets/sass/form.scss";
import api from "../api/config";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
  const [formData, setFormData] = useState({});
  const [imageData, setImageData] = useState();

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleImageData(e) {
    setImageData(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post(
        "/book/add",
        {
          ...formData,
          image: imageData,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.id) {
        console.log(response);
        toast.success("Successfully book added");
        e.target.reset();
        setFormData({});
        setImageData();
      } else {
        toast.error(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ToastContainer />
      <form
        style={{ display: "flex", flexDirection: "column", padding: "1rem" }}
        onSubmit={handleSubmit}
      >
        Name
        <input name="name" id="name" type="text" onChange={handleFormData} />
        Author
        <input
          name="author"
          id="author"
          type="text"
          onChange={handleFormData}
        />
        Genre
        <input name="genre" id="genre" type="text" onChange={handleFormData} />
        Description
        <textarea name="description" id="image" onChange={handleFormData} />
        Image
        <input type="file" name="image" id="image" onChange={handleImageData} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
