const getStoredReadBook = () =>{
  const storedReadBook = localStorage.getItem('book-read');
  if(storedReadBook){
    return JSON.parse(storedReadBook);
  }
  return [];
}


const saveBookRead = id => {
  const storedReadBooks = getStoredReadBook(); 
  // for cheeking duplication...
  const exists = storedReadBooks.find(bookId => bookId === id);
  if(!exists){
    storedReadBooks.push(id);
    localStorage.setItem('book-read', JSON.stringify(storedReadBooks));
  }
}



export {getStoredReadBook, saveBookRead};