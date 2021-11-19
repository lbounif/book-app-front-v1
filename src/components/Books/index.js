
import "./books.css"
import {  useSelector} from "react-redux"
import AddBook from "../AddBook"
import BookCard from "../BookCard"

const Books = ({styles}) => {
    //state: bookslist
    const {books} = useSelector(state=> state.book)
    const { title, author } = useSelector(state => state.filter)
    
    return (
        <div style={{...styles}}>
            <div className="add-book-container">
                <AddBook />
            </div>
            <div className="books-container">
                {
                    // if books exist and is not empty
                    !books || books.length === 0 ? (
                        <div> No Data to display </div>
                    ): (
                        books
                        .filter((elem)=>
                                elem.title.toLowerCase().indexOf(title.toLowerCase()) !== -1
                        )
                        .filter((elem)=>
                                elem.author.toLowerCase().indexOf(author.toLowerCase()) !== -1
                        )
                        .map((book, index) => (
                            <BookCard 
                                key={index}
                                title={book.title}
                                author={book.author}
                                rating={book.rating}
                                voters={book.voters}
                                description={book.description}
                                img={book.img}/>
                        ))

                    )
                    
                }
            </div>
        </div>
    )
}

export default Books