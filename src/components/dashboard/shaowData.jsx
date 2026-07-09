import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowData = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/trend");
      setData(res.data.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-5">
      {data.map((item, index) => (
        <div key={index} className="border rounded-lg shadow p-4 bg-white">
          <h2 className="font-bold text-lg">{item.description}</h2>

          <p>
            <b>Host:</b> {item.host}
          </p>
          <p>
            <b>Instance:</b> {item.instance}
          </p>
          <p>
            <b>Logged Host:</b> {item.loggedHost}
          </p>
          <p>
            <b>Logged Instance:</b> {item.loggedInstance}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
