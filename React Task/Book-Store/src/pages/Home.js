import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://openlibrary.org/subjects/fiction.json?limit=10")
      .then(response => {
        const bookList = response.data.works.map((book) => ({
          id: book.key.split("/")[2], // Extract unique book ID
          title: book.title,
          author: book.authors?.[0]?.name || "Unknown",
          image: `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`,
          description: "No description available", // OpenLibrary API lacks descriptions
        }));
        setBooks(bookList);
      })
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Available Books</h2>
      <div className="row">
        {books.length === 0 ? (
          <p>Loading books...</p>
        ) : (
          books.map((book) => (
            <div key={book.id} className="col-md-4 mb-4">
              <div className="card p-3">
                <img src={book.image} alt={book.title} className="card-img-top" />
                <div className="card-body">
                  <h5>{book.title}</h5>
                  <p><strong>Author:</strong> {book.author}</p>
                  <p>{book.description}</p>
                  <Link className="btn btn-primary" to={`/book/${book.id}`}>View Details</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
