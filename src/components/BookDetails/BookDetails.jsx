import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookRead } from "../../utility/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find(book => book.id === idInt);

  const { logo, book_name, hashtags, author, book_types, ratings, number_of_pages, publisher, publishing_year, comments } = book;

  const handleReadBook = () => {
    saveBookRead(idInt);
    toast('You have read the book!');
  }

  const handleWishList = () =>{
    toast('You have added the book in wish list!')
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-6 mb-20">
        <div>
          <img src={logo} alt="" className="bg-gray-100 rounded-2xl p-6 h-full" />
        </div>
        <div className="space-y-10">
          <h2 className="text-4xl font-bold">{book_name}</h2>
          <p className="font-medium">By: {author}</p>
          <hr />
          <p>{book_types}</p>
          <hr />
          <p className="font-medium"><span className="font-bold">Review:</span> {comments}</p>
          <hr />
          <p><span className="font-bold">Number of pages:</span>  {number_of_pages}</p>
          <p><span className="font-bold">Publisher:</span>            {publisher}</p>
          <p><span className="font-bold">Year of publishing:</span>    {publishing_year}</p>
          <p><span className="font-bold">Rating:</span>                {ratings}</p>
          <div>
            <button onClick={handleReadBook} className="border border-black hover:bg-green-400 rounded-lg font-semibold py-2 px-5 mr-5">Read</button>
            <button onClick={handleWishList} className="bg-cyan-400 rounded-lg font-semibold py-2 px-5">Wishlist</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;