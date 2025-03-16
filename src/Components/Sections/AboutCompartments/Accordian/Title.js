// Sidebar.js

import React from 'react';

const Title = ({ tabs, activeTab, handleTabClick }) => {
  return (
    <div className='TitleTabsNew'>
          <ul className="list-group px-4 border-top rounded-0 py-2">
      {tabs.map(tab => (
        <li 
          key={tab.id}
          className={"list-group-item py-1 small pe-cursor " + (tab.id === activeTab ? ' active ' : '')}
          onClick={() => handleTabClick(tab.id)}
        ><i className="bi bi-folder"></i>
          {tab.title}
        </li>
      ))}
    </ul>

    </div>
  );
};

export default Title;
