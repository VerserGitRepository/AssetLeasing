import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
import SearchBox from "./common/searchBox";

class LifecycleStatus extends Component {
  state = {
    lifecycleStatus: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 10 //number of records on each page.
    //isLoaded: false
  };

  // componentDidMount() {
  // fetch(
  //   "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/LifeCycleStatusSetList"
  // )
  //   .then(res => res.json())
  //  .then(json => {
  //   this.setState({
  //   isLoaded: true,
  //   lifecyclestatuslist: json
  //  });
  // });
  // }
  async componentDidMount() {
    const { data: lifecycleStatus } = await axios.get(
      "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/LifeCycleStatusSetList"
    );
    this.setState({ lifecycleStatus });
  }
  delete(lifecycle) {
    const newState = this.state.lifecycleStatus.slice();
    if (newState.indexOf(lifecycle) > -1) {
      newState.splice(newState.indexOf(lifecycle), 1);
      this.setState({ lifecycleStatus: newState });
      console.log(lifecycle);
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
      lifecycleStatus: alllifecycleStatus
    } = this.state; //selectedGenre,

    let filtered = alllifecycleStatus;
    if (searchQuery)
      filtered = alllifecycleStatus.filter(m =>
        m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    // else if (selectedGenre && selectedGenre._id)
    //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

    //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const lifecycleStatus = paginate(currentPage, pageSize);

    return { totalCount: filtered.length, data: lifecycleStatus };
  };

  render() {
    const { length: count } = this.state.lifecycleStatus;
    const {
      pageSize,
      currentPage,
      lifecycleStatus: alllifecycleStatus,
      searchQuery
    } = this.state;

    //var { isLoaded, colours } = this.state; //colours is added in the above line

    if (count === 0) return <p>Loading...</p>;

    const lifecycleStatus = paginate(alllifecycleStatus, currentPage, pageSize);
    //const { totalCount } = this.getPagedData();

    return (
      <React.Fragment>
        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>Status Name</th>
              <th>Sort Order</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              {/* <th/> */}
            </tr>
          </thead>
          <tbody>
            {lifecycleStatus.map(lifecycle => (
              <tr key={lifecycle.id}>
                <td> {lifecycle.lifecycleStatusName} </td>
                <td> {lifecycle.sortOrder}</td>
                <td> {lifecycle.createdBy}</td>
                <td> {lifecycle.created}</td>
                <td> {lifecycle.modifiedBy}</td>
                <td> {lifecycle.modified}</td>
                {/* <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={this.delete.bind(this, lifecycle)}
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

export default LifecycleStatus;
