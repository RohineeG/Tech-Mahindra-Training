import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://openlibrary.org/works/${id}.json`)
      .then(response => {
        setBook({
          title: response.data.title,
          author: response.data.authors?.[0]?.name || "Unknown",
          description: response.data.description?.value || "No description available",
          image: `https://covers.openlibrary.org/b/id/${response.data.covers?.[0]}-L.jpg`,
        });
      })
      .catch(error => console.error("Error fetching book details:", error));
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Book added to cart!");
    navigate("/cart");
  };

  if (!book) return <h2>Loading book details...</h2>;

  return (
    <div className="container">
      <div className="card p-4">
        <div className="row">
          <div className="col-md-4">
            <img src={book.image} alt={book.title} className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <button className="btn btn-success" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
