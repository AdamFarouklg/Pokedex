import React, { useState } from "react";
import TabNavItem from "./TabNavItems";
import TabContent from "./TabContent"; 
import FirstTab from "./About";
import SecondTab from "./Stats";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab2");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem title="About" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="BaseStats" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Evolution" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <FirstTab />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <SecondTab />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;