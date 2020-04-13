import React, { Component } from 'react';
import CountryWise from './countrywise.js';


class TotalCases extends Component{
    constructor(){
        super();
        this.state = {
            ren : false
        }
    }
    
    
    render(props){
        var ShowCountry = () => {
            this.setState({
                ren : !this.state.ren
            })

        }
        return(
            <React.Fragment>
                <div className = 'label'>COVID - 19</div> 
                <ul className = 'list'>
                    <li className = 'listitem'><h1 className='total-Cases'>{this.props.Cases}</h1></li>
                    <li className = 'listitem'><h1 className='total-Deaths'>{this.props.Deaths}</h1></li>
                    <li className = 'listitem'><h1 className='total-Recovered'>{this.props.Recovered}</h1></li>
                </ul>
                <h1 onClick = {ShowCountry} className = 'showcountry-button'>Show Country Wise</h1>
                { this.state.ren ? <CountryWise />:<h1 className = 'no-country'>Click on the Button</h1>}
            </React.Fragment>
        )
    }
}

export default TotalCases;