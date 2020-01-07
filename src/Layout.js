
import React, { Component } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
// import React from 'react';
import SplitterLayout from 'react-splitter-layout';

import Test from './Test';
import Assets from './Assets';
import Carriers from './Carriers';
import Colours from './Colours';

 
class Layout extends Component {
  render() {
    return (
      
    //   <SplitterLayout>
    //     <div>Pane 1</div>
    //     <div>Pane 2</div>
      
    //   </SplitterLayout>

    <SplitterLayout primaryIndex={1} secondaryInitialSize={250}>
  <div>This is a sample text which consists of no data from other components</div>
  <SplitterLayout secondaryInitialSize={250}>
    <SplitterLayout vertical secondaryInitialSize={250}>
      <div><Assets/></div>
      <SplitterLayout secondaryInitialSize={250}>
        <div><Carriers/></div>
        <div><Colours/></div>
      </SplitterLayout>
    </SplitterLayout>
    <div><Test/></div>
  </SplitterLayout>
</SplitterLayout>
    );
  }
}
 
export default Layout;