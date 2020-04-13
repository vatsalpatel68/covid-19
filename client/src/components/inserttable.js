import React , { Component } from 'react';

class InsertTable extends Component{
    
    render(){
           
           
            var instance = this.props.data.data.map((ones,index) => {
                return(
                    <tr key = {index}>
                        <td>{ones.country}</td>
                        <td>{ones.cases}</td>
                        <td>{ones.todayCases}</td>
                        <td>{ones.deaths}</td>
                        <td>{ones.todayDeaths}</td>
                        <td>{ones.recovered}</td>
                        <td>{ones.active}</td>
                        <td>{ones.casesPerOneMillion}</td>
                        <td>{ones.deathsPerOneMillion}</td>
                    </tr>
                )
            })
            return(
                <React.Fragment>
                    <table>
                        <thead>
                        <tr>
                            <th>Country</th>
                            <th>Cases</th>
                            <th>todaycases</th>
                            <th>deaths</th>
                            <th>todaydeaths</th>
                            <th>recovered</th>
                            <th>active</th>
                            <th>cases/million</th>
                            <th>Deaths/million</th>
                        </tr>
                        </thead>
                        <tbody>
                            {instance}
                        </tbody>
                    </table>
                </React.Fragment>
            )
     
    }
}

export default InsertTable;