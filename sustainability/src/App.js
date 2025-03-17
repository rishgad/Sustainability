// src/App.js
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [appliances, setAppliances] = useState([]);

  useEffect(() => {
    const fetchAppliances = async () => {
      const querySnapshot = await getDocs(collection(db, "appliances"));
      setAppliances(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchAppliances();
  }, []);

  return (
    <div className="App">
      <h1>Home Sustainability Dashboard</h1>
      <h2>Appliances</h2>
      <ul>
        {appliances.map((appliance) => (
          <li key={appliance.id}>
            {appliance.name} - {appliance.status} - {appliance.powerUsage}W
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
