import React from "react";
import PageHeader from "../components/dashboard/PageHeader";
import DashboardCharts from "../components/dashboard/DashboardCharts";

const DashboardPage = () => {
  return (
    <div className="space-y-6">
      <PageHeader />

      <DashboardCharts />
    </div>
  );
};

export default DashboardPage;
