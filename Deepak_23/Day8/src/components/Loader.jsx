import React from "react";
const Loader = () => (
  <div className="space-y-3">
    {[1,2,3,4,5].map(i => (
      <div key={i}
        className="h-4 bg-white/20 rounded animate-pulse">
      </div>
    ))}
  </div>
);

export default Loader;
