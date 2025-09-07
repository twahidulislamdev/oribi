import React from "react";

const Badge = ({ className, badgeText }) => {
  return (
    <div
      className={`py-1.5 bg-black text-white font-bold text-center text-sm w-[60px] ${className}`}
    >
      {badgeText}

    </div>
  );
};

export default Badge;
