import React, { useEffect, useState } from "react";
import api from "../api/config.js";

const HomePage = () => {
  const [books, getBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await api.get("/book");
      getBooks(response.data);
    }
    fetchBooks();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "2rem",
        marginTop: "2rem",
      }}
      >
      {books.map((book) => (
        <div
        key={book.id}
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "6px",
          boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.2)"
          }}
        >
          <img
            src={book.image}
            alt="hello"
            style={{ height: "200px", width: "200px", objectFit: "contain" }}
          />
          <p>{book.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
