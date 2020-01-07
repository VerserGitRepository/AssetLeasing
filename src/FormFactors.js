import React, { Component } from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


class FormFactors extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('') //No link to fetch
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });

    }

    render() {
        
            var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading</div>
    }

    
    return (
      <div className="App">
   
            {items.map(item => (

<table className="table table-list-search" >
<thead>
<tr >
  <th>Form Factor Name</th>
  <th>Created By</th>
  <th>created</th>
  <th>Modified By</th>
  <th>Modified</th>
</tr>
</thead>
<tbody>
<tr> 
  <td> {item.colourName} </td>
  <td> {item.createdBy}</td>
  <td> {item.created}</td>
  <td>{item.modifiedBy}</td>
  <td> {item.modified}</td>
</tr>
</tbody>
              </table>
              
            ))}
      
      </div>
    
    );
  }
}
export default FormFactors;