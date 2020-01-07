import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
 import SearchBox from './common/searchBox';



// constructor(props) {
//   super(props);
//   this.state = {   // add above 3 lines instead of "state ={ "      and also add "}" after    "isLoaded: false};"

class Colours extends Component {
  state = {
      colours: [],
      searchQuery: "",
      currentPage: 1,
      pageSize: 10, //number of records on each page.
      //isLoaded: false
    };
  

  // componentDidMount() {
  //   fetch(
  //     "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/Colours"
  //   )
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         //isLoaded: true,
  //         colours: json
  //       });
  //     });
  // }  this is commmented because using another approach i.e. axios

  
async componentDidMount(){
  const {data: colours} = await axios.get("https://versergateway.com.au/VerserAssetLeasingServices/MasteData/Colours");
  this.setState({ colours});
}





  // handleDelete = colour => {
  // console.log(colour); //Delete this line to use next 2 lines.

  //   const colours = this.state.colours.filter(c => c._id !== colour._id);
  //   this.setState({ colours });
  // };

  delete(colour) {
    const newState = this.state.colours.slice();
    if (newState.indexOf(colour) > -1) {
      newState.splice(newState.indexOf(colour), 1);
      this.setState({ colours: newState });
      console.log(colour);
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
      colours: allColours
    } = this.state; //selectedGenre,

    let filtered = allColours;
    if (searchQuery)
      filtered = allColours.filter(m =>
        m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    // else if (selectedGenre && selectedGenre._id)
    //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

    //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const colours = paginate( currentPage, pageSize);

    return { totalCount: filtered.length, data: colours };
  };

  render() {
    const { length: count } = this.state.colours;
    const { pageSize, currentPage, colours: allColours, searchQuery } = this.state;

    //var { isLoaded, colours } = this.state; //colours is added in the above line

    if (count === 0) return <p>Loading...</p>
    
    const colours = paginate( allColours, currentPage, pageSize);
    //const { totalCount } = this.getPagedData();

    return (
      <React.Fragment>
        {/* <div className="App"> */}

        {/* <h3> Colours </h3> */}

        <SearchBox value={searchQuery} onChange={this.handleSearch} />

        <table className="table table-list-search">
          <thead>
            <tr>
              <th>Colour Name</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              {/* <th /> */}
            </tr>
          </thead>
          <tbody> 
            {colours.map(colour => (
              <tr key={colour.id}> 
                <td> {colour.colourName}</td> 
                <td> {colour.createdBy}</td>
                <td> {colour.created}</td>
                <td> {colour.modifiedBy}</td>
                <td> {colour.modified}</td>
                {/* <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.delete.bind(this, colour)}
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
export default Colours;
