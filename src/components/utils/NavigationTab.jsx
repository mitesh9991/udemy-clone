import React, { useState } from "react";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    {
      name: "Web Devlopment",
      disabled: false,
      cards: [
        {
          id: 1,
          title: "Profile Card 1",
          description: "This is the first profile card.",
        },
        {
          id: 2,
          title: "Profile Card 2",
          description: "This is the second profile card.",
        },
      ],
    },
    {
      name: "IT Certification",
      disabled: false,
      cards: [
        {
          id: 1,
          title: "Dashboard Card 1",
          description: "This is the first dashboard card.",
        },
        {
          id: 2,
          title: "Dashboard Card 2",
          description: "This is the second dashboard card.",
        },
      ],
    },
    {
      name: "Leadership",
      disabled: false,
      cards: [
        {
          id: 1,
          title: "Settings Card 1",
          description: "This is the first settings card.",
        },
        {
          id: 2,
          title: "Settings Card 2",
          description: "This is the second settings card.",
        },
      ],
    },
    {
      name: "Data Science",
      disabled: false,
      cards: [
        {
          id: 1,
          title: "Contacts Card 1",
          description: "This is the first contacts card.",
        },
        {
          id: 2,
          title: "Contacts Card 2",
          description: "This is the second contacts card.",
        },
      ],
    },
    {
      name: "Communication",
      disabled: false,
      cards: [
        {
          id: 1,
          title: "Contacts Card 1",
          description: "This is the first contacts card.",
        },
        {
          id: 2,
          title: "Contacts Card 2",
          description: "This is the second contacts card.",
        },
      ],
    },
    {
      name: "Bussiness Analytics & Intelligence",
      disabled: false,
      cards: [
        {
          id: 1,
          title: "Contacts Card 1",
          description: "This is the first contacts card.",
        },
        {
          id: 2,
          title: "Contacts Card 2",
          description: "This is the second contacts card.",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="text-sm font-medium text-center text-gray-800 border-b border-gray-200 dark:text-gray-600 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li key={tab.name} className="me-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (!tab.disabled) {
                    setActiveTab(tab.name);
                  }
                }}
                className={`inline-block p-2 border-b-2 rounded-t-lg text-lg font-bold ${
                  activeTab === tab.name
                    ? "text-black border-black "
                    : "border-transparent hover:text-black  "
                } ${tab.disabled ? "text-gray-900 cursor-not-allowed" : ""}`}
                aria-current={activeTab === tab.name ? "page" : undefined}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tabs
          .find((tab) => tab.name === activeTab)
          ?.cards.map((card) => (
            <div
              key={card.id}
              className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
            >
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TabNavigation;
