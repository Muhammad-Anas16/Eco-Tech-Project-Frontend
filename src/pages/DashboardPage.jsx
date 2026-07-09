import React from "react";
import PageHeader from "../components/dashboard/PageHeader";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import axios from "axios";

const DashboardPage = () => {
  const getData = async (url) => {
    try {
      const data = await axios.get(`http://localhost:5000/trend`);
      console.log(data?.data?.data);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  getData();

  return (
    <div className="space-y-6">
      <PageHeader />

      <DashboardCharts />
    </div>
  );
};

export default DashboardPage;
