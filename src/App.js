
import './App.css';
import "antd/dist/antd.css";
import Header from "./components/Header"
import Filters from "./components/Filters"
import Books from "./components/Books"
// import BookCard from "./components/BookCard"
// import AddBook from "./components/AddBook"

function App() {
  return (
    <div className="App">
        <Header title="BOOKS"/>
        <div className="content">
          <Filters styles={{flex: 1}} />
          <Books styles={{flex: 2}}/>
          {/* <BookCard 
            title="example" 
            description="description"
            voters="4"
            rating="3"/>

            <AddBook /> */}
        </div>
    </div>
  );
}

export default App;
