import React, { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        secondary: {
            main: "#e3df6b",
            light: "#faf79d",
            dark: "#aba978",
            contrastText: "black",
        },
        primary: {
            main: "#1c1c1c",
            /* light: "#292929", */
            light: "#00000",
            dark: "black",
            contrastText: "#f7f7f7",
        },
    },
});

const MuiThemeProvider = ({ children }: React.PropsWithChildren<any>) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
