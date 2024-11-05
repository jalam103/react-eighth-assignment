import { LuMapPin } from "react-icons/lu";
import { IoIosMan } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";

const ReadBook = ({ book }) => {
  const { logo, book_name, hashtags, author, book_types, ratings, number_of_pages, publisher, publishing_year, comments } = book;
  return (
    <div>
      <div className="border-2 border-solid card card-side bg-base-100 p-5 items-center">
        <figure className="p-4 bg-gray-100 rounded-lg w-1/3">
          <img
            src={logo}
            alt="" />
        </figure>
        <div className="w-2/3 ml-5 space-y-5">
          <h2 className="text-xl font-bold">{book_name}</h2>
          <p>By: {author}</p>
          <div className="flex gap-12">
            <p><span className="font-bold">Tag</span> <span className="ml-3">{hashtags}</span></p>
            <p className="flex items-center"><span><LuMapPin></LuMapPin></span> Year of Publishing: {publishing_year}</p>
          </div>
          <div className="flex gap-12">
            <p className="flex items-center"><span><IoIosMan></IoIosMan></span> Publisher: {publisher}</p>
            <p className="flex items-center"><span><MdOutlineContactPage></MdOutlineContactPage></span>Page: {number_of_pages}</p>
          </div>
          <hr />
          <div className="flex gap-6">
            <p className="bg-blue-200 text-blue-500 px-3 py-1 rounded-full">Category: {book_types}</p>
            <p className="bg-orange-200 text-orange-500 px-3 py-1 rounded-full">Ratings: {ratings}</p>
            <button className="bg-green-500 text-white px-3 py-1 rounded-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;