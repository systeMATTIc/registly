import React from "react";

function Icon() {
  return <div className="bg-white rounded-full p-2"></div>;
}

export default function ButtonWithIcon({ label, icon = <Icon /> }) {
  return (
    <div className="flex items-center">
      {icon}
      <div className="ml-1 text-white text-sm">{label}</div>
    </div>
  );
}
