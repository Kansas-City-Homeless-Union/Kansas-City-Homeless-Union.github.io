import { Card, CardContent, CardHeader, Link, Typography } from "@mui/material";
import React from "react";

export interface IResourceCardProps {
  title: string;
  website?: string;
  address?: string;
  hours?: string;
  phone?: string;
  email?: string;
  description?: string;
}

const labelStyle = {
  marginRight: 5,
  fontWeight: "bold",
  display: "inline-block",
};

const datumStyle = {
  display: "inline-block",
};

const ResourceCard = ({
  title,
  website,
  address,
  hours,
  phone,
  email,
  description,
}: IResourceCardProps) => {
  // needs easier on the eyes styling
  return (
    <Card style={{ marginBottom: 15, padding: 5 }}>
      <CardHeader title={title} />
      <CardContent
        style={{
          maxWidth: 250,
          margin: "auto",
        }}
      >
        {website && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography style={labelStyle}>Website:</Typography>
            <Link
              underline="hover"
              href={website}
              target="_blank"
              style={datumStyle}
              color="black"
            >
              {website}
            </Link>
          </div>
        )}
        {address && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography style={labelStyle}>Address:</Typography>
            <Typography>{address}</Typography>
          </div>
        )}
        {phone && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography style={labelStyle}>Phone:</Typography>
            <Typography>{phone}</Typography>
          </div>
        )}
        {email && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography style={labelStyle}>Email:</Typography>
            <Typography>{email}</Typography>
          </div>
        )}
        {hours && (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography style={labelStyle}>Hours:</Typography>
            <Typography>{hours}</Typography>
          </div>
        )}
        {description && <Typography>{description}</Typography>}
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
