import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Harry Potter and the Deathly Hallows", author: "JK Rowling" },
    { title: "They Both Die in the End", author: "Adam Silvera" },
    { title: "Caste", author: "Isabel Wilkerson" },
    { title: "When Breath Becomes Air", author: "Paul Kalanithi" },
  ]);

  const [newBook, setNewBook] = useState([{ title: "", author: "" }]);

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a New Book</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Book Title: </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="title"
              name="title"
              value={newBook.title}
            />
            <br />
            <br />
            <label htmlFor="author">Author: </label>
            <input
              onChange={handleInputChange}
              type="text"
              id="author"
              name="author"
              value={newBook.author}
            />
            <br />
            <br />
            <button type="submit">Add Book</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.map((book, index) => (
            <div key={index} className="bookCard">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
