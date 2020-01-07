import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
 import SearchBox from './common/searchBox';

class Oem extends Component {
  state = {
    oems: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 10, //number of records on each page.
    //isLoaded: false
  };


 // componentDidMount() {
 //   fetch(
  //    "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/OEMsList"
  //  )
   //   .then(res => res.json())
   //   .then(json => {
     //   this.setState({
     //     isLoaded: true,
     //     oem: json
     //   });
    //  });
  //}
  async componentDidMount(){
    const {data: oems} = await axios.get("https://versergateway.com.au/VerserAssetLeasingServices/MasteData/OEMsList");
    this.setState({ oems});
  }
  
  delete(oem) {
    const newState = this.state.oems.slice();
    if (newState.indexOf(oem) > -1) {
      newState.splice(newState.indexOf(oem), 1);
      this.setState({ oems: newState });
      console.log(oem);
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
      oems: alloems
    } = this.state; //selectedGenre,

    let filtered = alloems;
    if (searchQuery)
      filtered = alloems.filter(m =>
        m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    // else if (selectedGenre && selectedGenre._id)
    //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

    //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const oems = paginate( currentPage, pageSize);

    return { totalCount: filtered.length, data: oems };
  };

  render() {
    const { length: count } = this.state.oems;
    const { pageSize, currentPage, oems: alloems, searchQuery } = this.state;

    //var { isLoaded, colours } = this.state; //colours is added in the above line

    if (count === 0) return <p>Loading...</p>
    
    const oems = paginate( alloems, currentPage, pageSize);
    //const { totalCount } = this.getPagedData();

    return (
      <React.Fragment>
        {/* <div className="App"> */}

        {/* <h3> Colours </h3> */}

        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>OEM Name</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              {/* <th /> */}
            </tr>
          </thead>
          <tbody>
            {oems.map(oem => (
              <tr key={oem.id}>
                <td> {oem.oemName}</td>
                <td> {oem.createdBy}</td>
                <td> {oem.created}</td>
                <td> {oem.modifiedBy}</td>
                <td> {oem.modified}</td>
                {/* <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={this.delete.bind(this, oem)}
                  >
                    Delete
                  </button></td> */}
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
export default Oem;
