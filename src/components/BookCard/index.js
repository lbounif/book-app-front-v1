import { Rate } from "antd"
import "./bookCard.css"

const bookCard = ({title, author, img, rating, voters, description}) => {
    return (
        <div className="book-card-container">
            <div className="book-img-container">
                <img 
                    src={img} 
                    width="140"
                    height="220"
                    alt="book-img"/>
            </div>
            <div className="book-content">
                <div className="book-title">{title}</div>
                <div className="book-author"></div>
            </div>
        </div>
    )
}
export default bookCard