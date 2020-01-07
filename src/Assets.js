import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
import SearchBox from "./common/searchBox";

class Assets extends Component {
  state = {
    assets:[],
    searchQuery: "",
    currentPage: 1,
    pageSize: 10 //number of records on each page.
    //isLoaded: false
  };
  //  componentDidMount() {
  //  fetch("https://versergateway.com.au/VerserAssetLeasingServices/assets/ssn")
  //    .then(res => res.json())
  //   .then(json => {
  //     this.setState({
  //     isLoaded: true,
  //     assets: json
  //    });
  //  });
  // }

  async componentDidMount() {
    const { data: assets } = await axios.get(
      "https://versergateway.com.au/VerserAssetLeasingServices/assets/ssn"
    );
    this.setState({ assets });
  }

  // handleDelete = colour => {
  // console.log(colour); //Delete this line to use next 2 lines.

  //   const colours = this.state.colours.filter(c => c._id !== colour._id);
  //   this.setState({ colours });
  // };

  delete(asset) {
    const newState = this.state.assets.slice();
    if (newState.indexOf(asset) > -1) {
      newState.splice(newState.indexOf(asset), 1);
      this.setState({ assets: newState });
      console.log(asset);
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
      assets: allassets
    } = this.state; //selectedGenre,

    let filtered = allassets;
    if (searchQuery)
      filtered = allassets.filter(m =>
        m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    // else if (selectedGenre && selectedGenre._id)
    //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

    //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const assets = paginate(currentPage, pageSize);

    return { totalCount: filtered.length, data: assets };
  };

  render() {
    const { length: count } = this.state.assets;
    const {
      pageSize,
      currentPage,
      assets: allassets,
      searchQuery
    } = this.state;

    //var { isLoaded, colours } = this.state; //colours is added in the above line

    if (count === 0) return <p>Loading...</p>;

    const assets = paginate(allassets, currentPage, pageSize);
    //const { totalCount } = this.getPagedData();

    return (
      <React.Fragment>
        {/* <div className="App"> */}

        {/* <h3> Colours </h3> */}

        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <table className="table table-list-search">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Asset ID</th>
              <th>Serial No</th>
              <th>Company</th>
              <th>IMEI</th>
              <th>SIM</th>
              <th>Order</th>
              <th>Date</th>
              <th>Price</th>
              <th>Decomission</th>
              <th>Condition</th>
              <th>Buy Price</th>
              <th>Aquisition</th>
              <th>SPMD</th>
              <th>First Commission</th>
              <th>Last Commission</th>
              <th>Repaired</th>
              {/* <th>CreatedBy</th>
              <th>Created</th>
              <th>ModifiedBy</th>
              <th>Modified</th> */}
              <th>Contract</th>
              <th>EndUser</th>
              <th>Status</th>
              <th>Inventory</th>
              <th>OS</th>
            </tr>
          </thead>
          <tbody>
            {assets.map(asset => (
              <tr key={asset.Id}>
                {/* <td> {item.Id}</td> */}
                <td> {asset.AssetID}</td>
                <td> {asset.SerialNo}</td>
                <td> {asset.Asset_Company}</td>
                <td> {asset.IMEI}</td>
                <td> {asset.SIMNo}</td>
                <td> {asset.PurchaseOrderNo}</td>
                <td>{asset.PurchaseDate = asset.PurchaseDate.substring( 0,asset.PurchaseDate.length - 9)}</td>
                <td> {asset.PurchasePrice}</td>
                <td> {asset.DecomissionDate}</td>
                <td> {asset.Condition}</td>
                <td> {asset.BuyBackPrice}</td>
                <td> {asset.AquisitionDate}</td>
                <td> {asset.SPMD}</td>
                <td>{asset.FirstCommissionDate}</td>
                <td> {asset.LastCommissionDate}</td>
                <td> {asset.LastRepairDate}</td>
                {/* <td> {asset.createdBy}</td>
                <td> {asset.created}</td>
                <td> {asset.modifiedBy}</td>
                <td> {asset.modified}</td> */}
                <td> {asset.Asset_Contract}</td>
                <td> {asset.Asset_EndUser}</td>
                <td> {asset.Asset_LifecycleStatus}</td>
                <td> {asset.Asset_InventoryItem}</td>
                <td> {asset.Asset_OSVersion}</td>
                 {/* <td>
                  
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.delete.bind(this, asset)}
                  >
                    Delete
                  </button> </td> */}
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
export default Assets;
