import React, { Component } from "react";
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
 import SearchBox from './common/searchBox';

class Plans extends Component {
  state = {
    plans: [],
    searchQuery: "",
    currentPage: 1,
    pageSize: 10, //number of records on each page.
    //isLoaded: false
  };


 // componentDidMount() {
 //   fetch(
 //     "https://versergateway.com.au/VerserAssetLeasingServices/MasteData/PlansList"
  //  )
   //   .then(res => res.json())
    //  .then(json => {
    //    this.setState({
     //     isLoaded: true,
     //     plans: json
     //   });
    //  });
 // }

 async componentDidMount(){
  const {data: plans} = await axios.get("https://versergateway.com.au/VerserAssetLeasingServices/MasteData/PlansList");
  this.setState({ plans});
}





  // handleDelete = colour => {
  // console.log(colour); //Delete this line to use next 2 lines.

  //   const colours = this.state.colours.filter(c => c._id !== colour._id);
  //   this.setState({ colours });
  // };

  delete(plan) {
    const newState = this.state.plans.slice();
    if (newState.indexOf(plan) > -1) {
      newState.splice(newState.indexOf(plan), 1);
      this.setState({ plans: newState });
      console.log(plan);
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
      plans: allplans
    } = this.state; //selectedGenre,

    let filtered = allplans;
    if (searchQuery)
      filtered = allplans.filter(m =>
        m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    // else if (selectedGenre && selectedGenre._id)
    //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);

    //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const plans = paginate( currentPage, pageSize);

    return { totalCount: filtered.length, data: plans };
  };

  render() {
    const { length: count } = this.state.plans;
    const { pageSize, currentPage, plans: allplans, searchQuery } = this.state;

    //var { isLoaded, colours } = this.state; //colours is added in the above line

    if (count === 0) return <p>Loading...</p>
    
    const plans = paginate( allplans, currentPage, pageSize);
    //const { totalCount } = this.getPagedData();

    return (
      <React.Fragment>
        {/* <div className="App"> */}

        {/* <h3> Colours </h3> */}

        <SearchBox value={searchQuery} onChange={this.handleSearch} />
        <table className="table table-list-search">
          <thead>
            <tr>
              <th>Plan Name</th>
              <th>Monthly Cost</th>
              <th>Contract Length</th>
              <th>Created By</th>
              <th>Created</th>
              <th>Modified By</th>
              <th>Modified</th>
              {/* <th /> */}
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={plans.id}>
                <td> {plan.planName}</td>
                <td> {plan.monthyCost}</td>
                <td> {plan.contractLength}</td>
                <td> {plan.createdBy}</td>
                <td> {plan.created}</td>
                <td> {plan.modifiedBy}</td>
                <td> {plan.modified}</td>
                {/* <td>
                <button
                    className="btn btn-danger btn-sm"
                    onClick={this.delete.bind(this, plan)}
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
export default Plans;
