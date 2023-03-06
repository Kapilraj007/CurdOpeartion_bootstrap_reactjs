import { Component } from "react";
import ApiExample from "./ApiExample";
import Form from "./Form";
import Table from "./Table";

class App extends Component{
    state ={
        characters:[]
    
    }
    removecharacter = (index) =>{
        const {characters}=this.state
        let filtered = characters.filter((data,i)=>{
            return i!==index
        });
        this.setState({characters:filtered});
    }
    handleSubmit = (character) => {
        this.setState({characters:[...this.state.characters,character]})

    }
   
    render(){
        const {characters}=this.state
        return(
            <div className="container">
                <h1>Table</h1>
          <Table removecharacter={this.removecharacter} characterData={characters}/>
         <Form handleSubmit={this.handleSubmit}/>
            <h1>Api Example</h1>
          <ApiExample/>
          </div>
        )
    }
}
export default App;