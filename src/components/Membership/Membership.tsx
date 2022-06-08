import { Typography } from "@mui/material";
import { textMargin } from "./Membership.styles";

const Membership = () => {

    return (
        <div style={{ textAlign: "left" }}>
            <Typography variant="h4" component="h2" style={{ marginBottom: 25 }}>
                Union Membership
            </Typography>
            <Typography style={textMargin}>
                Are you homeless and want to join us? Fill out the form below, free of charge, and register with the Union. We can accomplish great things together, but very little alone. Many people are under the false impression that homelessness is a result of laziness or a sense of entitlement. That the homeless would rather sit back and accept handouts or do drugs rather than contribute to their communities. This is patently false.
            </Typography>
            <Typography style={textMargin}>
                Remember the information that you provide on the form, it will be used to identify you. We will get you a union card as soon as possible.
            </Typography>
            <Typography style={textMargin}>
                Add form here
            </Typography>
        </div>
    );
};

export default Membership;
