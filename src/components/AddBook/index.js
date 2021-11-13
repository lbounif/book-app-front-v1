
import { Button, Modal, Input, Rate } from "antd"

const AddBook = () => {
    //state: visible
    //state newbook
    //state: books list
    return (
        <div>
            <Button
                size="large"
                // onClick={()=> } //make visible true
                >
                Add new Book
            </Button>
            <Modal
                title="Add New Book"
                visible={false}
                onCancel={()=> {
                    //action : make visible false
                }}
                onOk={()=> {
                   //add new book to books list
                   //make visible false
                }}
                >
                <Input 
                    style={{ margin: 10}} 
                    placeholder= "Book Title"
                    size="large"
                    // onChange ={(event)=>
                    // update state of new book
                    // }
                    //value={}
                />
                <Input 
                    style={{ margin: 10}} 
                    placeholder= "Book Author"
                    size="large"
                    // onChange ={(event)=>
                    // update state of new book
                    // }
                    //value={}
                />
                <Input 
                    style={{ margin: 10}} 
                    placeholder= "Book Description"
                    size="large"
                    // onChange ={(event)=>
                    // update state of new book
                    // }
                    //value={}
                />
                <Rate 
                    style={{ margin: 10}} 
                    // onChange ={(event)=>
                    // update state of new book
                    // }
                    //value={}
                />
            </Modal>
        </div>
    )
}

export default AddBook