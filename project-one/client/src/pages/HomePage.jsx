import React, { useEffect, useState } from "react";
import api from "../api/config.js";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [tempBooks, setTempBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      const response = await api.get("/book");
      setBooks(response.data);
      setTempBooks(response.data);
    }
    fetchBooks();
  }, []);

  useEffect(() => {
    async function handleQuery() {
      const response = await api.get(`/book/search/by?book=${searchQuery}`);
      
      if(response.data){
        setBooks(response.data);
      }
    }

    if(searchQuery) handleQuery();
    else setBooks(tempBooks);
  }, [searchQuery]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <input
            type="text"
            style={{
              width: "400px",
            }}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {books.length > 0 ? books.map((book) => (
          <div
            key={book.id}
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "6px",
              boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={book.image}
              alt="hello"
              style={{ height: "200px", width: "200px", objectFit: "contain" }}
            />
            <p>{book.name}</p>
          </div>
        )): (
          <div>
            No Books found...
          </div>
        )}
      </div>
    </main>
  );
};

export default HomePage;
