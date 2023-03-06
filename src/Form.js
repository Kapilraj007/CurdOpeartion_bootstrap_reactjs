import { Component } from "react";


class Form extends Component{
    initialState={
        name:"",
        job:""
    }
    state = this.initialState;

    handleChange = (event) =>{
       const {name,value} = event.target
       this.setState({[name]:[value]});
    }
    submitForm = ()=>{
   let character = this.state
   this.props.handleSubmit(character)
   this.setState(this.initialState)


    }
    render(){
        return(
            <form className="col-md-6">
                <label htmlFor="name" className="form-label">Name
            <input type="text" 
            name="name" 
            id="name"
            className="form-control"
            value={this.state.name}
            onChange={this.handleChange}
            /></label>
            <label htmlFor="job" className="form-label">Job
            <input type="text" 
            name="job" 
            id="job"
            className="form-control"
            value={this.state.job}
            onChange={this.handleChange}
            /></label>
        <button type="button" value="submit" onClick={this.submitForm} className="btn btn-primary">submit</button>
            </form>
        )
    }
}
export default Form;