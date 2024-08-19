import React, { useState } from "react";
import LearnerCarousel from "./LearnerCard";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("Web Development");
  const [activeLearner, setActiveLearner] = useState(1);

  const tabs = [
    {
      name: "Web Development",
      disabled: false,
      learners: "15M+",
      cards: [
        {
          id: 1,
          title: "The Complete 2024 Web Development Bootcamp",
          description: "Dr.angela Yu",
          price: "$39",
        },
        {
          id: 2,
          title: "The Complete 2024 Web Development Bootcamp",
          description: "This is the second profile card.",
          price: "$39",
        },
        {
          id: 3,
          title: "The Complete 2024 Web Development Bootcamp",
          description: "This is the second profile card.",
          price: "$39",
        },
        {
          id: 4,
          title: "The Complete 2024 Web Development Bootcamp",
          description: "This is the second profile card.",
          price: "$39",
        },
      ],
    },
    {
      name: "IT Certification",
      disabled: false,
      learners: "8M+",
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
      learners: "6M+",
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
      learners: "12M+",
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
      learners: "9M+",
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
      name: "Business Analytics & Intelligence",
      disabled: false,
      learners: "11M+",
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

  const learnerData = [
    { id: 1, title: "Web Development", learners: "15M+" },
    { id: 2, title: "Javascript", learners: "8M+" },
    { id: 3, title: "React js", learners: "6M+" },
    { id: 4, title: "Next js", learners: "12M+" },
    { id: 5, title: "Java", learners: "9M+" },
    { id: 6, title: "Android Development", learners: "11M+" },
    { id: 7, title: "Python", learners: "14M+" },
    { id: 8, title: "Machine Learning", learners: "10M+" },
    { id: 9, title: "Data Science", learners: "13M+" },
    { id: 10, title: "Cloud Computing", learners: "7M+" },
    { id: 11, title: "Artificial Intelligence", learners: "8.5M+" },
    { id: 12, title: "Cybersecurity", learners: "6.5M+" },
    { id: 13, title: "UI/UX Design", learners: "5M+" },
    { id: 14, title: "DevOps", learners: "4.5M+" },
    { id: 15, title: "Blockchain", learners: "3M+" },
    { id: 16, title: "IoT", learners: "2.5M+" },
    { id: 17, title: "Game Development", learners: "7.5M+" },
    { id: 18, title: "Big Data", learners: "6M+" },
    { id: 19, title: "SQL", learners: "8M+" },
    { id: 20, title: "Ruby on Rails", learners: "3.5M+" },
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
                    ? "text-black border-black"
                    : "border-transparent hover:text-black"
                } ${tab.disabled ? "text-gray-400 cursor-not-allowed" : ""}`}
                aria-current={activeTab === tab.name ? "page" : undefined}
              >
                {tab.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <LearnerCarousel learnerData={learnerData} />

      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-3">
        {tabs
          .find((tab) => tab.name === activeTab)
          ?.cards.map((card) => (
            <div key={card.id} className=" bg-white rounded-lg shadow-md ">
              <div className=" ">
                <img
                  className="rounded-se-lg rounded-ss-lg"
                  src="/complete-web-development-boot-camp.jpg"
                  alt=""
                />
              </div>
              <div className="py-2 px-6 space-y-1">
                <h3 className="text-lg font-bold text-gray-800 leading-6">
                  {card.title}
                </h3>
                <p className="text-gray-600 ">{card.description}</p>
                <p className="text-black text-xl font-bold ">$39</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TabNavigation;
