/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import { getStoredToBookCart } from "../../utilitis/locatstorage";
import ReadBookDetails from "./ReadBookDetails/ReadBookDetails";
import { Helmet } from "react-helmet";

const ReadBooks = () => {
    const reads = useLoaderData()

    const [books, setBooks] = useState([])
    const [readBooks, setReadBooks] = useState([])

    useEffect(()=>{
        const storedBooks = getStoredToBookCart();
        if(reads.length > 0){
            const storedToCartBooks = []

            for(const id of storedBooks){
                const book = reads.find(book => book.bookId === id)
                if(book){
                    storedToCartBooks.push(book)
                }
            }
            setBooks(storedToCartBooks)
            setReadBooks(storedToCartBooks)
        }
    
    },[reads])
    // console.log(readBooks)
    return (
        <div>
            <Helmet>
                <title>Read Book</title>
            </Helmet>
            <div>
                {
                    readBooks.map(readBook => <ReadBookDetails key={readBook.bookId} readBook={readBook}></ReadBookDetails>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;