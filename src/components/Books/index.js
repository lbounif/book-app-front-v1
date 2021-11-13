
import "./books.css"
import { useState } from "react"
import AddBook from "../AddBook"
import BookCard from "../BookCard"

const Books = ({styles}) => {
    //state: bookslist
    const bookList = [
        {
            title: "title 1",
            author: "author 1",
            rating: 4,
            voters: 24,
            description: "this is book 1",
            img: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
        },
        {
            title: "title 2",
            author: "author 2",
            rating: 2,
            voters: 29,
            description: "this is book 2",
            img: "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
        }
    ]
    const [books, setBooks] = useState(bookList)
    return (
        <div style={{...styles}}>
            <div className="add-book-container">
                <AddBook />
            </div>
            <div className="books-container">
                {
                    books.map((book, index) => (
                        <BookCard 
                            key={index}
                            title={book.title}
                            author={book.author}
                            rating={book.rating}
                            voters={book.voters}
                            description={book.description}
                            img={book.img}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Books