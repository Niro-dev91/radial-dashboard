import React, { useState } from "react";
import RadialDashboard from "./components/RadialDashboard";

function App() {
  const [assets, setAssets] = useState([
    { name: "Stock A" },
    { name: "Stock B" },
    { name: "ETF C" },
    { name: "Crypto D" },
    { name: "Bond E" },
  ]);

  const addAsset = () => {
    const newAssetName = `Asset ${assets.length + 1}`;
    setAssets([...assets, { name: newAssetName }]);
  };

  const removeLastAsset = () => {
    if (assets.length === 0) return;
    setAssets(assets.slice(0, -1));
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "0.2s",
    fontSize: "16px",
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Portfolio Radial Dashboard</h1>
      <RadialDashboard assets={assets} />

      <div style={{ marginTop: "20px" }}>
        <button
          style={{ ...buttonStyle, backgroundColor: "#4CAF50", color: "white" }}
          onClick={addAsset}
        >
          + Add Asset
        </button>
        <button
          style={{ ...buttonStyle, backgroundColor: "#f44336", color: "white" }}
          onClick={removeLastAsset}
        >
          - Remove Asset
        </button>
      </div>
    </div>
  );
}

export default App;
