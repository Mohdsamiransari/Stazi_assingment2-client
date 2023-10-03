import React, { useState } from 'react'
import { Card } from './Card';

export const Home= () => {
    const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: 'New York', content: <Card/> },
    { id: 2, title: 'Paris', content: 'Content for Tab 2' },
    { id: 3, title: 'Mumbai', content: 'Content for Tab 3' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="relative w-10/12 mx-auto ">
      <div className="w-5/12 text-center mx-auto">
        <h1 className="text-3xl font-bold">Featured Listed Property</h1>
        <p className="">Real estate can be bought, sold or rented and can be a valueable invenstment opportunity. The value of real estate can be</p>
      </div>
      <div className=" mt-10">
        <ul className="flex gap-5">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`-mb-px mr-1 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white px-4 py-2 rounded-full'
                  : 'bg-gray-300 text-gray-700 px-4 py-2 rounded-full'
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`${
                activeTab === tab.id ? 'block' : 'hidden'
              } text-gray-700`}
            >
              {tab.content}
            </div>
          ))} 
        </div>
    </div>
      {/* <Card/> */}
    </div>
  )
}
