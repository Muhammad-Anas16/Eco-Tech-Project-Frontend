import React from "react";
import PageHeader from "../components/dashboard/PageHeader";
import DashboardCharts from "../components/dashboard/DashboardCharts";
import axios from "axios";
import ShowData from "../components/dashboard/shaowData";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <PageHeader />

      {/* <DashboardCharts /> */}
      <ShowData />
    </div>
  );
};

export default DashboardPage;
