/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";
import {getStoredWishList } from "../../utilitis/locatstorage";
import WishlistBookDetails from "./WishlistBookDetails/WishlistBookDetails";
import { Helmet } from "react-helmet";
const WishlistBooks = () => {
    const wishlistsAdd = useLoaderData()

    const [books, setBooks] = useState([])
    const [wishlists, setWishLists] = useState([])

    useEffect(()=>{
        const storedWishList = getStoredWishList();
        if(wishlistsAdd.length > 0){
            const storedToWishListBook = []

            for(const id of storedWishList){
                const book = wishlistsAdd.find(book => book.bookId === id)
                if(book){
                    storedToWishListBook.push(book)
                }
            }
            setBooks(storedToWishListBook)
            setWishLists(storedToWishListBook)
        }
    
    },[wishlistsAdd])
    // console.log(readBooks)
    return (
        <div>
            <Helmet>
                <title>Wish List Book</title>
            </Helmet>
            <div>
                {
                    wishlists.map(wishlist => <WishlistBookDetails key={wishlist.bookId} wishlist={wishlist}></WishlistBookDetails>)
                }
            </div>
        </div>
    );
};

export default WishlistBooks;