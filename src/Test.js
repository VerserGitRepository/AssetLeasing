import React, { Component } from "react";
import $ from "jquery"; 

// This is Assets in Create New Company with manually entered data

$(document).ready(function() {
    var activeSystemClass = $('.list-group-item.active');

    //something is entered in search form
    $('#system-search').keyup( function() {
       var that = this;
        // affect all table rows on in systems table
        var tableBody = $('.table-list-search tbody');
        var tableRowsClass = $('.table-list-search tbody tr');
        $('.search-sf').remove();
        tableRowsClass.each( function(i, val) {
        
            //Lower text for case insensitive
            var rowText = $(val).text().toLowerCase();
            var inputText = $(that).val().toLowerCase();
            if(inputText != '')
            {
                $('.search-query-sf').remove();
                tableBody.prepend('<tr class="search-query-sf"><td colspan="6"><strong>Searching for: "'
                    + $(that).val()
                    + '"</strong></td></tr>');
            }
            else
            {
                $('.search-query-sf').remove();
            }

            if( rowText.indexOf( inputText ) == -1 )
            {
                //hide rows
                tableRowsClass.eq(i).hide();
                
            }
            else
            {
                $('.search-sf').remove();
                tableRowsClass.eq(i).show();
            }
        });
        //all tr elements are hidden
        if(tableRowsClass.children(':visible').length == 0)
        {
            tableBody.append('<tr class="search-sf"><td class="text-muted" colspan="6">No entries found.</td></tr>');
        }
    });
});
class Test extends Component {

    render() {
        return (
        <div className="container">
        <h1> Test </h1>
	<div className="row">
        <div className="col-md-3">
            <form action="#" method="get">
                <div className="input-group">
                    {/* <input className="form-control" id="system-search" name="q" placeholder="Search with keyword" required/> */}
                    {/* <input type="search" className="searchbox" placeholder="Search" ref={input => this.search = input} onChange={this.handleInputChange} /> */}
                </div>
            </form>
        </div>
        {/* <input type="search" className="searchbox" placeholder="Search" ref={input => this.search = input} onChange={this.handleInputChange} /> */}
		<div className="col-md-9">
        
    	 <table className="table table-list-search">
                    <thead>
                        <tr>
                            <th>Asset ID</th>
                            <th>Inventory Ite</th>
                            <th>IMEI</th>
                            <th>Serial No.</th>
                            <th>SIM No.</th>
                            <th>Purchase Date</th>
                            <th>Contract</th>
                            <th>End User</th>
                            <th>Date Issued</th>
                            <th>Lifecycle Status</th>
                            <th>Created By</th>
                            <th>Date Created</th>
                            <th>Modified By</th>
                            <th>Modified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>123</td>
                            <td>1</td>
                            <td>12345678</td>
                            <td>12345</td>
                            <td>123</td>
                            <td>10</td>
                            <td>12/02/2014</td>
                            <td>Telstra</td>
                            <td>Doe</td>
                            <td>12/02/2014</td>
                            <td>Ready for Sale</td>
                            <td>Verser</td>
                            <td>12/02/2014</td>
                            <td>Brightstar</td>
                        </tr>
                        <tr>
                            <td>456</td>
                            <td>2</td>
                            <td>546456778</td>
                            <td>435435</td>
                            <td>123</td>
                            <td>10</td>
                            <td>12/02/2014</td>
                            <td>Telstra</td>
                            <td>Doe</td>
                            <td>12/02/2014</td>
                            <td>Ready for Sale</td>
                            <td>Verser</td>
                            <td>12/02/2014</td>
                            <td>Brightstar</td>
                        </tr>
                        <tr>
                            <td>123</td>
                            <td>1</td>
                            <td>12345678</td>
                            <td>12345</td>
                            <td>123</td>
                            <td>10</td>
                            <td>12/02/2014</td>
                            <td>Telstra</td>
                            <td>Doe</td>
                            <td>12/02/2014</td>
                            <td>Ready for Sale</td>
                            <td>Verser</td>
                            <td>12/02/2014</td>
                            <td>Brightstar</td>
                        </tr>
                    </tbody>
                </table>   
		</div>
	</div>
</div>
        );
    }
}
export default Test;