import React, { useState } from "react";
import "../assets/sass/form.scss";
import api from "../api/config";

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

    try{
      const response = await api.post(
        "/book/add",
        {
          ...formData,
          image: imageData,
        }, {
          headers: {
              "Content-Type": "multipart/form-data",
          }
        }
      );
      console.log("Response : ",response);
    }catch(error){
      console.log(error.response);
    }

  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
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
