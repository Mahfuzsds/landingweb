import React from "react";
import {
  CompOne,
  CompTwo,
  CompThree,
  CompFour,
  CompFive,
  CompSix,
} from "../assets/icons/CompaniesIcons";

function CompanyList() {
  const companies = [
    { name: "Company 1", icon: <CompOne /> },
    { name: "Company 2", icon: <CompTwo /> },
    { name: "Company 3", icon: <CompThree /> },
    { name: "Company 4", icon: <CompFour /> },
    { name: "Company 5", icon: <CompFive /> },
    { name: "Company 6", icon: <CompSix /> },
  ];

  return (
    <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
      {companies.map((company, index) => (
        <a key={index} href="#" className="flex items-center lg:justify-center">
          {company.icon}
        </a>
      ))}
    </div>
  );
}

const Companies = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <CompanyList />
      </div>
    </section>
  );
};

export default Companies;
