import React from "react";

// move to a higher level file (theme?)
const widthBreakpoint = 925;

const ResponsiveContainer = ({ children }: { children: React.ReactNode[] }) => {
  const windowWidth = window.innerWidth;
  if (windowWidth < widthBreakpoint) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 20,
          gap: 10,
        }}
      >
        {children}
      </div>
    );
  }
  const gridTemplateColumns = "1fr ".repeat(children.length);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns,
        marginBottom: 20,
        gap: 10,
      }}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
