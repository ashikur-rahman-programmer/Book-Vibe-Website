import React, { use } from "react";
import { Link } from "react-router";

const bookPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(bookPromise);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center font-bold text-4xl mb-4">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
        {books.map((book, index) => (
          <Link
            key={index}
            to={`/bookDetails/${book.bookId}`}
            className="card bg-base-100 w-96 p-4 shadow-lg space-y-4"
          >
            <figure className="bg-gray-100">
              <img
                src={book.image}
                className="h-58 w-82 object-contain p-4 rounded-2xl"
                alt="Shoes"
              />
            </figure>
            <div className="card-body p-0 space-y-1">
              <div className=" flex gap-6 items-center">
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge text-green-500 bg-green-100 font-bold text-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="card-title text-2xl">{book.bookName}</h2>
              <p className="text-gray-500 text-lg font-semibold italic">
                By : {book.author}
              </p>
              <div className="card-actions justify-between border-t border-dashed pt-1 border-gray-300">
                <div className=" font-semibold">Fashion</div>
                <div className=" font-semibold">Products</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
