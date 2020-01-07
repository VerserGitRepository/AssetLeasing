import React, { Component } from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';


class OperatingSystemsList extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items: [],
    //         isLoaded: false,
    //     }
    // }

    // componentDidMount() {

    //     fetch('') //No Link to fetch
    //         .then(res => res.json())
    //         .then(json => {
    //             this.setState({
    //                 isLoaded: true,
    //                 items: json,
    //             })
    //         });

    // }

    render() {

        //     var { isLoaded, items } = this.state;

        //     if (!isLoaded) {
        //         return <div>Loading</div> 
        // }


        return (
            <div className="App">
            {/* <h5>Operating Systems</h5> */}
                <table className="table table-list-search" >
                    <thead>
                        <tr >

                            <th>Version Name</th>
                            <th>OS Version</th>
                            <th>Created By</th>
                            <th>Created</th>
                            <th>Modified By</th>
                            <th>Modified</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>iOS</td>
                        <td>12.1</td>
                        <td>Verser</td>
                        <td>2014-03-17</td>
                        <td>2014-03-17</td>
                        <td>Verser</td>
                    </tr>
                    <tr>
                        <td>Windows</td>
                        <td>5.4</td>
                        <td>Brightstar</td>
                        <td>2014-03-17</td>
                        <td>2014-03-17</td>
                        <td>Brightstar</td>
                    </tr>
                    <tr>
                        <td>Symbian</td>
                        <td>3.8</td>
                        <td>Brightstar</td>
                        <td>2014-03-17</td>
                        <td>2014-03-17</td>
                        <td>Brightstar</td>
                    </tr>
                </table>
            </div>

        );
    }
}
export default OperatingSystemsList;