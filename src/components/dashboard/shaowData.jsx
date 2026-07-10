// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ShowData = () => {
//   const [data, setData] = useState([]);

//   const getData = async () => {
//     try {
//       const res = await axios.get("http://192.168.1.106:5000/trend");
//       const res1 = await axios.get("http://192.168.1.106:5000/trend/0");
//       setData(res.data.data);
//       console.log(res1.data?.data)
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div className="grid grid-cols-4 gap-4 p-5">
//       {data.map((item, index) => (
//         <div key={index} className="border rounded-lg shadow p-4 bg-white">
//           <h2 className="font-bold text-lg">{item.description}</h2>

//           <p>
//             <b>Host:</b> {item.host}
//           </p>
//           <p>
//             <b>Instance:</b> {item.instance}
//           </p>
//           <p>
//             <b>Logged Host:</b> {item.loggedHost}
//           </p>
//           <p>
//             <b>Logged Instance:</b> {item.loggedInstance}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ShowData;
import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowData = () => {
  const [data, setData] = useState([]);

  // Get All Trend Logs
  const getData = async () => {
    try {
      const res = await axios.get("http://192.168.1.106:5000/api/trend");

      setData(res.data.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Get Single Trend + History
  const handleClick = async (instance) => {
    try {
      const res = await axios.get(
        `http://192.168.1.106:5000/api/trend/${instance}`,
      );

      console.log(res?.data?.data?.history);

      // alert(JSON.stringify(res.data.data, null, 2));
    } catch (error) {
      console.error(error);
      alert("No Data Found");
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {data.map((item) => (
        <div
          key={item.id}
          onClick={() => handleClick(item.instance)}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,.1)",
          }}
        >
          <h3>{item.description}</h3>

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

          <p>
            <b>Created:</b> {item.created_at}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
