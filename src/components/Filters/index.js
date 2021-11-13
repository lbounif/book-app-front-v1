
import "./filters.css"
import { Input } from "antd"
const Filters = ({styles}) => {
    return (
        <div style={{...styles}}className="filters-container">
            <div className="filters-header">Filters</div>
            <div className="filters">
                <Input 
                    style={{height: 50, marginBottom: 35}}
                    placeholder="Search by title"
                    onChange={(event)=> {
                        //dispatch search by title action 
                    }}/>
                <Input
                    style={{height: 50, marginBottom: 35}}
                    placeholder="Search by author"
                    onChange={(event)=> {
                        //dispatch search by author action 
                    }} />
            </div>
        </div>
    )
}

export default Filters