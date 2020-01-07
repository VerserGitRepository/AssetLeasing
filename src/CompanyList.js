import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
 import SearchBox from './common/searchBox';

class CompanyList extends Component {
  state = {
    comapnylists: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 10, //number of records on each page.
    //isLoaded: false
  };


 // componentDidMount() {
  //  fetch(
   //   "https://versergateway.com.au/VerserAssetLeasingServices/Company/CompanyList"
   // )
   //   .then(res => res.json())
   //   .then(json => {
    //    this.setState({
     //     isLoaded: true,
     //     companys: json
      //  });
     // });
// }

async componentDidMount(){
  const {data: comapnylists} = await axios.get("https://versergateway.com.au/VerserAssetLeasingServices/Company/CompanyList");
  this.setState({ comapnylists});
}





  // handleDelete = colour => {
  // console.log(colour); //Delete this line to use next 2 lines.

  //   const colours = this.state.colours.filter(c => c._id !== colour._id);
  //   this.setState({ colours });
  // };

  delete(comapnylist) {
    const newState = this.state.comapnylists.slice();
    if (newState.indexOf(comapnylist) > -1) {
      newState.splice(newState.indexOf(comapnylist), 1);
      this.setState({ comapnylists: newState });
      console.log(comapnylist);
    }
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 }); //selectedGenre: null,
  };

  // handleSort = sortColumn => {
  //   this.setState({ sortColumn });
  // };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      searchQuery,
      comapnylists: allcomapnylists
    } = this.state; //selectedGenre,

    let filtered = allcomapnylists;
    if (searchQuery)
      filtered = allcomapnylists.filter(m =>
        m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    // else if (selectedGenre && selectedGenre._id)
    //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

    //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const comapnylists = paginate( currentPage, pageSize);

    return { totalCount: filtered.length, data: comapnylists };
  };

  render() {
    const { length: count } = this.state.comapnylists;
    const { pageSize, currentPage, comapnylists: allcomapnylists, searchQuery } = this.state;

    //var { isLoaded, colours } = this.state; //colours is added in the above line

    if (count === 0) return <p>Loading...</p>
    
    const comapnylists = paginate( allcomapnylists, currentPage, pageSize);
    //const { totalCount } = this.getPagedData();

    return (
      <React.Fragment>
        {/* <div className="App"> */}

        {/* <h3> Colours </h3> */}

        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Address</th>
              <th>Suburb</th>
              <th>State</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Start Date</th>
              <th>End Date</th>
              {/* <th /> */}
            </tr>
          </thead>
          <tbody>
            {comapnylists.map(comapnylist => (
              <tr key={comapnylist.id}>
                <td> {comapnylist.companyName} </td>
                <td> {comapnylist.addressLine1}</td>
                <td> {comapnylist.suburb}</td>
                <td>{comapnylist.state}</td>
                <td> {comapnylist.phone}</td>
                <td> {comapnylist.email}</td>
                <td> {comapnylist.createdBy}</td>
                <td> {comapnylist.created}</td>
                <td> {comapnylist.serviceStartDate}</td>
                <td> {comapnylist.serviceEndDate}</td>
                {/* <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={this.delete.bind(this, comapnylist)}
                  >
                    Delete
                  </button> 
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}
export default CompanyList;
