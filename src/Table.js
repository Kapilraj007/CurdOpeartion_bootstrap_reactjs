import { Component } from "react"

const TableHeader = ()=>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) =>{
const {characterData,removecharacter}=props;
const rows = characterData.map((data,index)=>{
    return (<tr key={index}>
        <td>{data.name}</td>
        <td>{data.job}</td>
        <td><button className="btn btn-danger" onClick={()=>removecharacter(index)}>Delete</button></td>
        </tr>)
})
    return(
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends Component{
    render(){
        const {characterData,removecharacter}=this.props;
        return(
            <div className="container">
           <table className="table table-dark table-striped">
            <TableHeader/>
            <TableBody removecharacter={removecharacter} characterData={characterData}/>
           </table>
           <hr></hr></div>
        )
    }
}
export default Table;