//This component is used for DELETE alert functioning. It is showing a pop-up window but the records are not getting delete after clicking yes.

import React, { Component } from "react";
import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

class TableHead extends Component {
    submit = () => {
        confirmAlert({
            title: "Confirm to Detete",
            message: "Are you sure you want to delete this record?",
            // buttons:[
            //     {
            //         label: 'Yes',
            //         onClick: () => alert('Click Yes')
            //     },
            //     {
            //         label: 'No',
            //         onClick: () => alert('Click No')
            //     }
            // ]
        })
    };

    render() { 
        return ( 
            <div className="container">
        <button className="btn btn-danger btn-sm" onClick={this.submit}>Delete</button>
      </div>
         );
    }
}
 
export default TableHead;