import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const API = "http://192.168.1.106:5000/api/trend";

const TrendLogPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedHistory, setSelectedHistory] = useState([]);
  const [selectedTrend, setSelectedTrend] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(API);

      setData(res.data.data || []);
    } catch (error) {
      console.error(error);
      alert("Unable to fetch Trend Logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = async (instance) => {
    try {
      const res = await axios.get(`${API}/${instance}`);

      setSelectedTrend(res.data.data);
      setSelectedHistory(res?.data?.data?.history || []);
      if (res.data.data.history.length === 0) {
        alert("Data is Empty in this Trend");
      }
      // console.log(res.data.data.history);

    } catch (error) {
      console.error(error);
      alert("No Data Found");
    }
  };

  return (
    <div className="p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Trend Log Data</h1>

        <button
          onClick={getData}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Refresh
        </button>
      </div>

      {/* ========================= */}
      {/* Trend Log Table */}
      {/* ========================= */}

      <div className="border rounded-xl overflow-hidden shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>

              <TableHead>Host</TableHead>

              <TableHead>Instance</TableHead>

              <TableHead>Logged Host</TableHead>

              <TableHead>Logged Instance</TableHead>

              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  Loading...
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No Trend Logs Found
                </TableCell>
              </TableRow>
            ) : (
              data.map((item) => (
                <TableRow
                  key={item.id}
                  onClick={() => handleClick(item.instance)}
                  className="cursor-pointer hover:bg-slate-100"
                >
                  <TableCell className="font-medium">
                    {item.description}
                  </TableCell>

                  <TableCell>{item.host}</TableCell>

                  <TableCell>{item.instance}</TableCell>

                  <TableCell>{item.loggedHost}</TableCell>

                  <TableCell>{item.loggedInstance}</TableCell>

                  <TableCell>
                    {new Date(item.created_at).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* ========================= */}
      {/* Selected Trend */}
      {/* ========================= */}

      {selectedTrend && (
        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-4">Selected Trend</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Description:</strong> {selectedTrend.description}
            </div>

            <div>
              <strong>Host:</strong> {selectedTrend.host}
            </div>

            <div>
              <strong>Instance:</strong> {selectedTrend.instance}
            </div>

            <div>
              <strong>Logged Host:</strong> {selectedTrend.loggedHost}
            </div>

            <div>
              <strong>Logged Instance:</strong> {selectedTrend.loggedInstance}
            </div>

            <div>
              <strong>Created:</strong>{" "}
              {new Date(selectedTrend.created_at).toLocaleString()}
            </div>
          </div>
        </div>
      )}

      {/* ========================= */}
      {/* History Table */}
      {/* ========================= */}

      {selectedHistory.length > 0 && (
        <div className="border rounded-xl shadow overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-2xl font-bold">Trend History</h2>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>

                <TableHead>Value</TableHead>

                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {selectedHistory.map((history, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>{history.value}</TableCell>

                  <TableCell>
                    {new Date(history.timestamp).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default TrendLogPage;
