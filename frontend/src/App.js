import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./components/Dashboard";

const App = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await axios.get("/api/users");
    setUsers(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Dashboard />
      {/* <h1>TEST</h1>
      {users.map((u) => (
        <h4 key={u._id}>userName : {u.username}</h4>
      ))} */}
    </div>
  );
};

export default App;
