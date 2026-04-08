import React, { useContext } from "react";
import { BookContext } from "../../context/Context";
import { FileText, MapPin, Users } from "lucide-react";

const WishListBooks = () => {
  const bookContext = useContext(BookContext);
  const { wishList } = bookContext;

  //////////////////

  return wishList.length > 0 ? (
    <div className="container mx-auto space-y-8 my-8">
      {wishList.map((book) => (
        <div
          key={book.bookId}
          className="flex gap-6 items-center  rounded-xl shadow-md border border-gray-100 p-8 "
        >
          {/* Image */}
          <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center w-[150px] h-[180px]">
            <img
              src={book.image}
              alt={book.bookName}
              className="h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800">{book.bookName}</h2>

            {/* Author */}
            <p className="text-gray-500 italic">By : {book.author}</p>

            {/* Tags + Year */}
            <div className="flex flex-wrap items-center gap-3 ">
              <span className="font-semibold text-gray-700 text-lg">Tag</span>

              {book.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-green-600 bg-green-100 px-2 py-1 rounded-full font-semibold text-[10px"
                >
                  #{tag}
                </span>
              ))}

              <span className="flex items-center gap-1 text-gray-500">
                <MapPin /> Year of Publishing: {book.yearOfPublishing}
              </span>
            </div>

            {/* Publisher + Pages */}
            <div className="flex gap-6 text-sm text-gray-500 pb-3">
              <span className="flex items-center gap-2">
                <Users /> Publisher: {book.publisher}
              </span>
              <span className="flex items-center gap-2">
                <FileText /> Page {book.totalPages}
              </span>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center gap-4 pt-3 border-t border-t-gray-300">
              {/* Category */}
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                Category: {book.category}
              </span>

              {/* Rating */}
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                Rating: {book.rating}
              </span>

              {/* Button */}
              <button className=" bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full text-sm transition">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="container mx-auto space-y-8 flex flex-col items-center justify-center py-16 text-center">
      {/* Icon */}
      <div className="text-6xl mb-4">📚</div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-700">
        Your Wishlist is Empty
      </h2>

      {/* Message */}
      <p className="text-gray-500 mt-2 max-w-md">
        Save books to your wishlist and find them here later.
      </p>
    </div>
  );
};

export default WishListBooks;
