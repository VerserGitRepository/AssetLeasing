import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
import SearchBox from "./common/searchBox";

class EndUsersList extends Component {
  state = {
    EndUsers: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 10 //number of records on each page.
    //isLoaded: false
  };

  // componentDidMount() {
  //fetch(
  //   "https://versergateway.com.au/VerserAssetLeasingServices/EndUsers/EndUsersList"
  //  )
  //    .then(res => res.json())
  //    .then(json => {
  //     this.setState({
  //    isLoaded: true,
  //      enduserlist: json
  //    });
  //   });
  // }

  async componentDidMount() {
    const { data: EndUsers } = await axios.get(
      "https://versergateway.com.au/VerserAssetLeasingServices/EndUsers/EndUsersList"
    );
    this.setState({ EndUsers });
  }

  // handleDelete = colour => {
  // console.log(colour); //Delete this line to use next 2 lines.

  //   const colours = this.state.colours.filter(c => c._id !== colour._id);
  //   this.setState({ colours });
  // };

  delete(EndUser) {
    const newState = this.state.EndUsers.slice();
    if (newState.indexOf(EndUser) > -1) {
      newState.splice(newState.indexOf(EndUser), 1);
      this.setState({ EndUsers: newState });
      console.log(EndUser);
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
      EndUsers: allEndUsers
    } = this.state; //selectedGenre,

    let filtered = allEndUsers;
    if (searchQuery)
      filtered = allEndUsers.filter(m =>
        m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    // else if (selectedGenre && selectedGenre._id)
    //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

    //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const EndUsers = paginate(currentPage, pageSize);

    return { totalCount: filtered.length, data: EndUsers };
  };

  render() {
    const { length: count } = this.state.EndUsers;
    const {
      pageSize,
      currentPage,
      EndUsers: allEndUsers,
      searchQuery
    } = this.state;

    //var { isLoaded, colours } = this.state; //colours is added in the above line

    if (count === 0) return <p>Loading...</p>;

    const EndUsers = paginate(allEndUsers, currentPage, pageSize);
    //const { totalCount } = this.getPagedData();

    return (
      <React.Fragment>
        {/* <div className="App"> */}

        {/* <h3> Colours </h3> */}

        <SearchBox value={searchQuery} onChange={this.handleSearch} />

        <table className="table table-list-search">
          <thead>
            <tr>
              <th>End User Company</th>
              <th>Employee No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Cost Code</th>
              <th>End User Status</th>
              <th>Commencement Date</th>
              <th>Termination Date</th>
              <th>User Name</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              <th>End User Site</th>
            </tr>
          </thead>
          <tbody>
            {EndUsers.map(EndUser => (
              <tr key={EndUser.id}>
                <td> {EndUser.endUser_Company}</td>
                <td> {EndUser.employeeNo}</td>
                <td> {EndUser.firstName} </td>
                <td> {EndUser.lastName}</td>
                <td>{EndUser.department}</td>
                <td> {EndUser.costCode}</td>
                <td> {EndUser.endUserStatus}</td>
                <td> {EndUser.commencementDate}</td>
                <td> {EndUser.terminationDate}</td>
                <td> {EndUser.userName}</td>
                <td> {EndUser.createdBy}</td>
                <td> {EndUser.created}</td>
                <td> {EndUser.modifiedBy}</td>
                <td> {EndUser.modified}</td>
                <td> {EndUser.endUser_Site}</td>
                {/* <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.delete.bind(this, EndUser)}
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
export default EndUsersList;
