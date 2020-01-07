import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
 import SearchBox from './common/searchBox';

class DeviceCategories extends Component {
  state = {
    deviceCategories: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 10, //number of records on each page.
    //isLoaded: false
  };


  //componentDidMount() {
  //  fetch(
   //   "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/DevicecategoriesList"
    //)
   //   .then(res => res.json())
    //  .then(json => {
    //    this.setState({
      //    isLoaded: true,
      //    catagories: json
      //  });
     // });
 // }


 async componentDidMount(){
  const {data: deviceCategories} = await axios.get("https://versergateway.com.au/VerserAssetLeasingServices/MasteData/DevicecategoriesList");
  this.setState({ deviceCategories});
}


delete(deviceCategorie) {
  const newState = this.state.deviceCategories.slice();
  if (newState.indexOf(deviceCategorie) > -1) {
    newState.splice(newState.indexOf(deviceCategorie), 1);
    this.setState({ deviceCategories: newState });
    console.log(deviceCategorie);
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
    deviceCategories: alldeviceCategories
  } = this.state; //selectedGenre,

  let filtered = alldeviceCategories;
  if (searchQuery)
    filtered = alldeviceCategories.filter(m =>
      m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

  // else if (selectedGenre && selectedGenre._id)
  //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

  //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const deviceCategories = paginate( currentPage, pageSize);

  return { totalCount: filtered.length, data: deviceCategories };
};

render() {
  const { length: count } = this.state.deviceCategories;
  const { pageSize, currentPage, deviceCategories: alldeviceCategories, searchQuery } = this.state;

  //var { isLoaded, colours } = this.state; //colours is added in the above line

  if (count === 0) return <p>Loading...</p>
  
  const deviceCategories = paginate( alldeviceCategories, currentPage, pageSize);
  //const { totalCount } = this.getPagedData();

  return (
    <React.Fragment>
      {/* <div className="App"> */}

      {/* <h3> Colours </h3> */}

      <SearchBox value={searchQuery} onChange={this.handleSearch} />

      <table className="table table-list-search">
        <thead>
          <tr>
            <th>Device Category Name</th>
            <th>Created By</th>
            <th>Created</th>
            <th>Modified By</th>
            <th>Modified</th>
            {/* <th /> */}
          </tr>
        </thead>
        <tbody> 
          {deviceCategories.map(deviceCategorie => (
            <tr key={deviceCategorie.id}> 
              <td> {deviceCategorie.deviceCategoryName}</td> 
              <td> {deviceCategorie.createdBy}</td>
              <td> {deviceCategorie.created}</td>
              <td> {deviceCategorie.modifiedBy}</td>
              <td> {deviceCategorie.modified}</td>
              {/* <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={this.delete.bind(this, deviceCategorie)}
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
export default DeviceCategories;



