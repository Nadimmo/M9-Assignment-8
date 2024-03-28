/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import PageRead from './PageRead'; // Assuming PageRead component is in the same directory
import { getStoredToBookCart } from '../../utilitis/locatstorage';

const PageReads = () => {
    const reads = useLoaderData();

    const [books, setBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedBooks = getStoredToBookCart();
        if (reads.length > 0) {
            const storedToCartBooks = reads.filter(book => storedBooks.includes(book.bookId));
            setBooks(storedToCartBooks);
            setReadBooks(storedToCartBooks);
        }
    }, [reads]);

    return (
        <div>
            <PageRead readBooks={readBooks} />
        </div>
    );
};

export default PageReads;
