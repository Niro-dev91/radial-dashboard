import React from "react";

const RadialDashboard = ({ assets }) => {
  const cx = 250;
  const cy = 250;
  const radius = 200;
  const total = assets.length;
  const angleStep = (2 * Math.PI) / total;

  return (
    <svg width={500} height={500}>
      {assets.map((asset, i) => {
        const theta = i * angleStep;
        const x = cx + radius * Math.cos(theta);
        const y = cy + radius * Math.sin(theta);
        const rotation = (theta * 180) / Math.PI + 90;

        return (
          <g key={i} transform={`translate(${x},${y}) rotate(${rotation})`}>
            <rect x={-50} y={-30} width={100} height={60} rx={10} fill="#4caf50" />
            <text x={0} y={0} textAnchor="middle" fill="#fff">
              {asset.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default RadialDashboard;
