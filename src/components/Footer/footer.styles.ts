export const footerContainer = {
  minHeight: 100,
  margin: "auto",
  marginTop: 20,
  backgroundColor: "white",
  color: "#1c1c1c",
  display: "flex",
  justifyContent: "center",
  // the casting below is necessary to satisfy the typescript gods
  flexDirection: "column" as "column",
};

export const footerTopBorder = {
  borderTop: "1px solid #e8e8e8",
  width: "95%",
  margin: "auto",
};

export const footerLinkContainer = {
  display: "flex",
  flexDirection: "row" as "row",
  flexWrap: "wrap" as "wrap",
  gap: 15,
  maxWidth: 900,
  margin: "auto",
  padding: 5,
  justifyContent: "center",
};

export const footerBottomLabelStyle = {
  textAlign: "center" as "center",
  marginBottom: 15,
  marginTop: 10,
};
