import React from 'react';
import Cards from'./Cards'

import Books from '../data/books.json';

const Home = () => {
    return (
        <div className = "list">
            {
            Books.map((book, index) => {
            console.log(book.imageLink);
                return <Cards
                        key = {index}
                        image={book.imageLink}
                        title={book.title}
                        author={book.author}
                        published={book.year}
        
                        />
        })
        
            }
        </div>
    )
}


export default Home;

