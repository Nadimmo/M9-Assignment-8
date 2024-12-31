import { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('../BooksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Books</h1><br /><br />
            <div className="lg:grid grid-cols-3 gap-4">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;