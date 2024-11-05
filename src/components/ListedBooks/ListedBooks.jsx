import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../../utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";
import { IoIosArrowDown } from "react-icons/io";


const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([])

  useEffect(() => {
    const storedBookIds = getStoredReadBook();
    if (books.length > 0) {

      const booksRead = books.filter(book => storedBookIds.includes(book.id));
      // alternative formula.......
      // const booksRead = [];
      // for (const id of storedBookIds) {
      //   const book = books.find(book => book.id === id);
      //   if (book) {
      //     booksRead.push(id)
      //   }
      // }
      setReadBooks(booksRead);
      console.log(books, storedBookIds, booksRead)
    }
  }, [])



  return (
    <div>
      <h2 className="text-xl font-bold text-center bg-gray-100 rounded-lg p-5">Books</h2>
      <div className="text-center my-5">
        <details className="dropdown">
          <summary className="btn bg-green-500 text-white font-medium">Sort By <span><IoIosArrowDown></IoIosArrowDown></span></summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </details>
      </div>
      <div className="flex border-b border-gray-300">
        <button className="px-2 py-2 border border-transparent border-b-0 rounded-t-md focus:outline-none">
          Read Books
        </button>
        <button className="px-4 py-2 border border-transparent border-b-0 rounded-t-md focus:outline-none">
          Wishlist Books
        </button>
      </div>
      {/* <ul>
        {
          readBooks.map(book => <li key={book.id}>
            <span>{book.author}</span>
          </li>)
        }
      </ul> */}
      <div className="grid grid-cols-1 gap-5 mt-5">
        {
          readBooks.map(book => <ReadBook key={book.id} book={book}></ReadBook>)
        }
      </div>

    </div>
  );
};

export default ListedBooks;