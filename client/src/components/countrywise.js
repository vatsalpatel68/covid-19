import React , { Component }from 'react';
import axios from 'axios';
import InsertTable from './inserttable.js';
class CountryWise extends Component{
    constructor(){
        super();
        this.state = {
            data : [],
            status : false
        }
    }
    componentDidMount(){
        axios.get("http://localhost:5000/country")
        .then(res => {
            this.setState({
                data : res,
                status : true
            })
        
        })
        .catch(err => {console.log(err)});
    }
    render(){
        return(
            <React.Fragment>
                {this.state.status ? <InsertTable data = {this.state.data}/> : <h1 className = 'no-country2' >Data is Loading</h1>} 
           </React.Fragment>
        )
    }
}

export default CountryWise;