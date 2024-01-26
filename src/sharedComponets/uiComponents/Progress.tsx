import React from "react";

interface ProgressProps {
  value: number;
  total: number;
}

const Progress: React.FC<ProgressProps> = ({ value, total }) => {

  return (
    <div className="flex h-2 overflow-hidden bg-gray-700 rounded">
      <div
        style={{ width: `${(value / total) * 100}%` }}
        className="bg-teal-500"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={total}
      />
    </div>
  );
};

export default Progress;
