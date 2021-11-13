
import { Button, Modal, Input, Rate } from "antd"
import { useDispatch, useSelector} from "react-redux"
import allActions from "../../redux/actions"

const AddBook = () => {
    const dispatch = useDispatch()
    //get visible from bookReducer state

    //state.book = {
//     visible: false,
//     books: [],
//     newBook: {
//         title: "",
//         author: "",
//         description: "",
//         rating: 0
//     }
// }
    const { visible, newBook } = useSelector(state => state.book)
    return (
        <div>
            <Button
                size="large"
                onClick={()=> dispatch(allActions.bookActions.updateVisible(true))} 
                >
                Add new Book
            </Button>
            <Modal
                title="Add New Book"
                visible={visible}
                onCancel={()=> {
                    dispatch(allActions.bookActions.updateVisible(false))
                }}
                onOk={()=> {
                   dispatch(allActions.bookActions.addNewBook(newBook))
                   dispatch(allActions.bookActions.updateVisible(false))
                }}
                >
                <Input 
                    style={{ margin: 10}} 
                    placeholder= "Book Title"
                    size="large"
                    onChange ={(ev)=>
                        dispatch(allActions.bookActions.updateNewBook({...newBook, title: ev.target.value}))
                    }
                    value={newBook.title}
                />
                <Input 
                    style={{ margin: 10}} 
                    placeholder= "Book Author"
                    size="large"
                    onChange ={(ev)=>
                        dispatch(allActions.bookActions.updateNewBook({...newBook, author: ev.target.value}))
                    }
                    value={newBook.author}
                />
                <Input 
                    style={{ margin: 10}} 
                    placeholder= "Book Description"
                    size="large"
                    onChange ={(ev)=>
                        dispatch(allActions.bookActions.updateNewBook({...newBook, description: ev.target.value}))
                    }
                    value={newBook.description}
                />
                <Rate 
                    style={{ margin: 10}} 
                    onChange ={(value)=>
                        dispatch(allActions.bookActions.updateNewBook({...newBook, rating: value}))
                    }
                    value={newBook.rating}
                />
            </Modal>
        </div>
    )
}

export default AddBook