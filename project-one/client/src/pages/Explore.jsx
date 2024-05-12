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
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        marginTop: "2rem"
      }}
    >
      <img
        src={bookData.image}
        alt={bookData.name}
        style={{ height: "300px", width: "300px", objectFit: "contain" }}
      />
      <p>Title: {bookData.name}</p>
      <p>Description: {bookData.description}</p>
    </div>
  );
};

export default Explore;
