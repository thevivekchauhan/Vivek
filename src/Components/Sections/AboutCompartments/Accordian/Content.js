import React from "react";

const Content = ({ tabs, activeTab }) => {
  const numbers = [];
  for (let i = 1; i <= 18; i++) {
    numbers.push(i);
  }

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bodyWraperContent  border-end h-100 p-0">
      {activeTabData && (
        <div className="contantwrapper">
          <h3 className=" catName small p-2 border-end m-0">
            {activeTabData.title} <i className="bi bi-x"></i>
          </h3>
          <div className="row description p-0 m-0 border-top pt-3">
            <div className="col-md-1 p-0 number-list">
              <ul className="list-group ">
                {numbers.map((number) => (
                  <li
                    className=" list-group-item px-3 pt-1 pb-0 small"
                    key={number}
                  >
                    {number}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-11 p-0 pe-3">
              <div className=" ">{activeTabData.content}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
