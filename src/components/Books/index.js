
import "./books.css"
import { useDispatch, useSelector} from "react-redux"
import allActions from "../../redux/actions"
import AddBook from "../AddBook"
import BookCard from "../BookCard"

const Books = ({styles}) => {
    //state: bookslist
    const {books} = useSelector(state=> state.book)
    
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