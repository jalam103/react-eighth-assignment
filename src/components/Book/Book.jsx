import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { id, logo, book_name, hashtags, author, book_types, ratings } = book;
  return (
    <div>
      <Link to={`/book/${id}`}>
        <div className="border-solid border-2 border-slate-300 shadow-xl rounded-lg">
          <div className="p-4 space-y-3">
            <img src={logo} alt="" className="bg-gray-200 rounded-lg" />
            <h2 className="text-2xl font-bold">{book_name}</h2>
            <p className="font-medium">By: {author}</p>
            <hr />
            <div className="flex justify-between">
              <p>{book_types}</p>
              <div className="flex items-center gap-2">
                <p>{ratings}</p>
                <p><CiStar></CiStar></p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;