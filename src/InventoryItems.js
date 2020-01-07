import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
 import SearchBox from './common/searchBox';


class InventoryItems extends Component {
  state = {
   inventoryItems: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 10, //number of records on each page.
    //isLoaded: false
  };

  //componentDidMount() {
  //  fetch(
  //    "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/InventoryItems"
   // )
   //   .then(res => res.json())
    //  .then(json => {
     //   this.setState({
      //    isLoaded: true,
      //    inventoryitems: json
      //  });
   //   });
//  }

async componentDidMount(){
  const {data: inventoryItems} = await axios.get("https://versergateway.com.au/VerserAssetLeasingServices/MasteData/InventoryItems");
  this.setState({ inventoryItems});
}


delete(inventoryItem) {
  const newState = this.state.inventoryItems.slice();
  if (newState.indexOf(inventoryItem) > -1) {
    newState.splice(newState.indexOf(inventoryItem), 1);
    this.setState({ inventoryItems: newState });
    console.log(inventoryItem);
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
    inventoryItems: allinventoryItems
  } = this.state; //selectedGenre,

  let filtered = allinventoryItems;
  if (searchQuery)
    filtered = allinventoryItems.filter(m =>
      m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

  // else if (selectedGenre && selectedGenre._id)
  //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

  //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const inventoryItems = paginate( currentPage, pageSize);

  return { totalCount: filtered.length, data: inventoryItems };
};

render() {
  const { length: count } = this.state.inventoryItems;
  const { pageSize, currentPage, inventoryItems: allinventoryItems, searchQuery } = this.state;

  //var { isLoaded, colours } = this.state; //colours is added in the above line

  if (count === 0) return <p>Loading...</p>
  
  const inventoryItems = paginate( allinventoryItems, currentPage, pageSize);
  //const { totalCount } = this.getPagedData();

  return (
    <React.Fragment>
      {/* <div className="App"> */}

      {/* <h3> Colours </h3> */}

      <SearchBox value={searchQuery} onChange={this.handleSearch} />
      <table className="table table-list-search">
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              <th>Warranty</th>
              <th>Maintenance</th>
              <th>Supplier Lead Time</th>
              <th>Colour</th>
              <th>Category</th>
              <th>Form Factor</th>
              <th>OEM</th>
              <th>OS</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              {/* <th/> */}
            </tr>
          </thead>
          <tbody>
            {inventoryItems.map(inventoryitem => (
              <tr key={inventoryitem.id}>
                <td> {inventoryitem.inventoryItemName}</td>
                <td> {inventoryitem.model}</td>
                <td> {inventoryitem.warrantyPeriod}</td>
                <td> {inventoryitem.maintenancePeriod} </td>
                <td> {inventoryitem.supplierLeadTime}</td>
                <td> {inventoryitem.inventoryItem_Colour}</td>
                <td> {inventoryitem.inventoryItem_DeviceCategory}</td>
                <td> {inventoryitem.inventoryItem_FormFactor} </td>
                <td> {inventoryitem.inventoryItem_OEM}</td>
                <td> {inventoryitem.inventoryItem_OperatingSystem}</td>
                <td> {inventoryitem.createdBy} </td>
                <td> {inventoryitem.created}</td>
                <td> {inventoryitem.modifiedBy}</td>
                <td> {inventoryitem.modified}</td>
                {/* <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={this.delete.bind(this, inventoryitem)}
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


export default InventoryItems;
