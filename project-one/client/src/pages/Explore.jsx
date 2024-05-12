import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/config.js";

const Explore = () => {
  const { state } = useLocation();
  const id = state.book.id;

  const [bookData, setBookData] = useState({});

  useEffect(() => {
    async function getBook() {
      const data = await api.get(`/book/${id}`);
      setBookData(data.data);
    }

    getBook();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "2rem",
      }}
    >
      <img
        src={bookData.image}
        alt={bookData.name}
        style={{
          height: "300px",
          width: "300px",
          objectFit: "contain",
        }}
      />
      <div style={{ marginTop: "2rem" }}>
        <h2
          style={{
            textTransform: "capitalize",
            fontSize: "18px",
            fontWeight: "500",
            color: "#000",
          }}
        >
          {bookData.name}
        </h2>
        <p
          style={{
            textTransform: "capitalize",
            fontSize: "14px",
            color: "gray",
            marginTop: ".5rem",
          }}
        >
          Author: {bookData.author}
        </p>
        <p
          style={{
            textTransform: "capitalize",
            fontSize: "14px",
            color: "gray",
            marginTop: ".5rem",
          }}
        >
          Genre: {bookData.genre}
        </p>
        <p
          style={{
            textTransform: "capitalize",
            fontSize: "14px",
            color: "#000",
            marginTop: "2rem",
          }}
        >
          Description: {bookData.description}
        </p>
      </div>
    </div>
  );
};

export default Explore;
