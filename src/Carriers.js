import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
 import SearchBox from './common/searchBox';


class Carriers extends Component {
  state = {
    carriers: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 10, //number of records on each page.
    //isLoaded: false
  };

 // componentDidMount() {
 //   fetch(
  //    "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/CarriersList"
  //  )
  //    .then(res => res.json())
   //   .then(json => {
  //      this.setState({
   //       isLoaded: true,
   //       carriers: json
   //     });
   //   });
 // }

   
async componentDidMount(){
  const {data: carriers} = await axios.get("https://versergateway.com.au/VerserAssetLeasingServices/MasteData/CarriersList");
  this.setState({ carriers});
}


delete(carrier) {
  const newState = this.state.carriers.slice();
  if (newState.indexOf(carrier) > -1) {
    newState.splice(newState.indexOf(carrier), 1);
    this.setState({ carriers: newState });
    console.log(carrier);
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
    carriers: allCarriers
  } = this.state; //selectedGenre,

  let filtered = allCarriers;
  if (searchQuery)
    filtered = allCarriers.filter(m =>
      m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

  // else if (selectedGenre && selectedGenre._id)
  //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

  //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const carriers = paginate( currentPage, pageSize);

  return { totalCount: filtered.length, data: carriers };
};

render() {
  const { length: count } = this.state.carriers;
  const { pageSize, currentPage, carriers: allCarriers, searchQuery } = this.state;

  //var { isLoaded, colours } = this.state; //colours is added in the above line

  if (count === 0) return <p>Loading...</p>
  
  const carriers = paginate( allCarriers, currentPage, pageSize);
  //const { totalCount } = this.getPagedData();

  return (
    <React.Fragment>
      {/* <div className="App"> */}

      {/* <h3> Colours </h3> */}

      <SearchBox value={searchQuery} onChange={this.handleSearch} />

      <table className="table table-list-search">
        <thead>
          <tr>
            <th>Carrier Name</th>
            <th>Created By</th>
            <th>Created</th>
            <th>Modified By</th>
            <th>Modified</th>
            {/* <th /> */}
          </tr>
        </thead>
        <tbody> 
          {carriers.map(carrier => (
            <tr key={carrier.id}> 
              <td> {carrier.carrierName}</td> 
              <td> {carrier.createdBy}</td>
                <td> 
                {carrier.created=carrier.created.substring(0,carrier.created.length-23)}
                </td>
                <td>{carrier.modifiedBy}</td>
                <td> { carrier.modified=carrier.modified.substring(0,carrier.modified.length-23)}</td>
              {/* <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={this.delete.bind(this, carrier)}
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
export default Carriers;
 

