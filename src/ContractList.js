import React, { Component } from 'react';
import axios from "axios";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Pagination from "./Pagination";
import { paginate } from "../src/Paginate";
import _ from "lodash";
// import TableHead from './TableHead';
 import SearchBox from './common/searchBox';

class ContractList extends Component {
    state = {
        contractlists: [],
        searchQuery: "",
        currentPage: 1,
        pageSize: 10, //number of records on each page.
        //isLoaded: false
      };

      async componentDidMount(){
        const {data: contractlists} = await axios.get("https://versergateway.com.au/VerserAssetLeasingServices/Contracts/ContractsList");
        this.setState({ contractlists});
      }

      delete(contractlist) {
        const newState = this.state.contractlists.slice();
        if (newState.indexOf(contractlist) > -1) {
          newState.splice(newState.indexOf(contractlist), 1);
          this.setState({ contractlists: newState });
          console.log(contractlist);
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
          contractlists: allcontractlists
        } = this.state; //selectedGenre,
      
        let filtered = allcontractlists;
        if (searchQuery)
          filtered = allcontractlists.filter(m =>
            m.id.toLowerCase().startsWith(searchQuery.toLowerCase())
          );
      
        // else if (selectedGenre && selectedGenre._id)
        //   filtered = allColours.filter(m => m.genre._id === selectedGenre._id);
      
        //const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
      
        const contractlists = paginate( currentPage, pageSize);
      
        return { totalCount: filtered.length, data: contractlists };
    };

    render() {
        const { length: count } = this.state.contractlists;
        const { pageSize, currentPage, contractlists: allcontractlists, searchQuery } = this.state;
      
        //var { isLoaded, colours } = this.state; //colours is added in the above line
      
        if (count === 0) return <p>Loading...</p>
        
        const contractlists = paginate( allcontractlists, currentPage, pageSize);
        //const { totalCount } = this.getPagedData();
      
        return (
          <React.Fragment>
            {/* <div className="App"> */}
      
            {/* <h3> Colours </h3> */}
      
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
      
            <table className="table table-list-search">
              <thead>
                <tr>
                  <th>Plan</th>
                  <th>Contract End User</th>
                  <th>Contract Company</th>
                  <th>Service Number</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Created By</th>
                  <th>Created</th>
                  <th>Modified By</th>
                  <th>Modified</th>
                  <th />
                </tr>
              </thead>
              <tbody> 
                {contractlists.map(contractlist => (
                  <tr key={contractlist.id}> 
                    <td> {contractlist.contract_Plan}</td> 
                    <td> {contractlist.contract_EndUser}</td>
                      <td> {contractlist.contract_Company}</td>
                      <td>{contractlist.serviceNo}</td>
                      <td> {contractlist.startDate}</td>
                      <td> {contractlist.endDate}</td>
                      <td> {contractlist.createdBy}</td>
                      <td> {contractlist.created}</td>
                      <td> {contractlist.modifiedBy}</td>
                      <td> {contractlist.modified}</td>
                    {/* <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={this.delete.bind(this, contractlist)}
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
export default ContractList;