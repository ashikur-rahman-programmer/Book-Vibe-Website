import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();

  const books = useLoaderData();
  // console.log(books);

  const expectedBook = books.find((book) => book.bookId === Number(bookId));
  console.log(expectedBook);

  return (
    <div className="container mx-auto my-8">
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-2xl overflow-hidden">
        {/* Image Section */}
        <figure className="bg-gray-100 flex items-center justify-center p-6 lg:w-1/2">
          <img
            src={expectedBook.image}
            alt={expectedBook.bookName}
            className="h-[350px] object-contain"
          />
        </figure>

        {/* Content Section */}
        <div className="card-body lg:w-1/2 space-y-4">
          {/* Title + Author */}
          <div>
            <h2 className="card-title text-3xl font-bold">
              {expectedBook.bookName}
            </h2>
            <p className="text-gray-500 italic">By: {expectedBook.author}</p>
          </div>

          {/* Category */}
          <div className="text-lg font-semibold border-b border-t border-dashed border-gray-300 py-3">
            {expectedBook.category}
          </div>

          {/* Review */}
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Review:</span> {expectedBook.review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 items-center border-b pb-6 border-dashed border-gray-300">
            <span className="font-semibold">Tags:</span>
            {expectedBook.tags.map((tag, i) => (
              <span key={i} className="badge badge-success badge-outline">
                {tag}
              </span>
            ))}
          </div>

          {/* Info */}
          <div className=" text-sm text-gray-600 space-y-2">
            <div className="flex">
              <span className="w-44">Number of Pages:</span>
              <span className="font-semibold text-gray-800">
                {expectedBook.totalPages}
              </span>
            </div>

            <div className="flex">
              <span className="w-44">Publisher:</span>
              <span className="font-semibold text-gray-800">
                {expectedBook.publisher}
              </span>
            </div>

            <div className="flex">
              <span className="w-44">Year of Publishing:</span>
              <span className="font-semibold text-gray-800">
                {expectedBook.yearOfPublishing}
              </span>
            </div>

            <div className="flex">
              <span className="w-44">Rating:</span>
              <span className="font-semibold text-gray-800">
                {expectedBook.rating}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-200 transition">
              Read
            </button>
            <button className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
