export const dataRowStyle = {
  display: "flex",
};

export const labelStyle = {
  marginRight: 5,
  fontWeight: "bold",
  display: "inline-block",
};

export const datumStyle = {
  display: "inline-block",
};

export const container = {
  textAlign: "start" as "start",
};

export const header = { marginBottom: 5 };

export const description1Style = { marginTop: 17, marginBottom: 17 };

export const description2Style = (showBottomLine: boolean) => {
  if (showBottomLine) {
    return { marginBottom: 0 };
  }
  return { marginBottom: 17 };
};

export const horizontalLine = {
  borderBottom: "1px solid #bababa",
  margin: "auto",
  marginTop: 10,
  marginBottom: 5,
};
