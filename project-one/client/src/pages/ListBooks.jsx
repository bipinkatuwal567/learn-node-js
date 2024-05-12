import React, { useEffect, useState } from "react";
import api from "../api/config.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdDelete } from "react-icons/md";

const ListBooks = () => {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/book");
      setBooksList(response.data);
    }
    getBooks();
  }, []);

  const deleteBook = async (id, index) => {
    const data = window.confirm("Do you want to delete this book?");
    if (data) {
      try {
        const response = await api.delete(`/book/delete/${id}`);
        if (response.data.sucess) {
          const newBooksList = booksList.filter((book, i) => i !== index);
          setBooksList(newBooksList);
          toast.success("Book has been delete!")
        } else {
          toast.delete("Unable to delete book");
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };
  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <ToastContainer />
      {booksList.map((data, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              border: "1px solid black",
              minWidth: "500px",
              padding: ".5rem",
              borderRadius: "4px",
            }}
          >
            <p style={{ color: "#000" }}>{data.name}</p>
            <MdDelete
              style={{ fontSize: "24px", cursor: "pointer" }}
              onClick={() => deleteBook(data.id, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListBooks;
