import { Card, CardContent, CardHeader, Link, Typography } from "@mui/material";

export interface IResourceCardProps {
  title: string;
  website?: string;
  address?: string;
  hours?: string;
  phone?: string;
  email?: string;
  description1?: string;
  description2?: string;
}

const dataRowStyle = {
  justifyContent: "center",
  display: "flex",
  // flexDirection: "row" as "row",
};

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
  description1,
  description2,
}: IResourceCardProps) => {
  // needs easier on the eyes styling
  return (
    <Card
      style={{ maxWidth: 550, margin: "auto", marginBottom: 15, padding: 5 }}
    >
      <CardHeader title={title} />
      <CardContent
      // style={{
      //   margin: "auto",
      // }}
      >
        {website && (
          <div style={{ ...dataRowStyle }}>
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
          <div style={{ ...dataRowStyle }}>
            <Typography style={labelStyle}>Address:</Typography>
            <Typography>{address}</Typography>
          </div>
        )}
        {phone && (
          <div style={{ ...dataRowStyle }}>
            <Typography style={labelStyle}>Phone:</Typography>
            <Typography>{phone}</Typography>
          </div>
        )}
        {email && (
          <div style={{ ...dataRowStyle }}>
            <Typography style={labelStyle}>Email:</Typography>
            <Typography>{email}</Typography>
          </div>
        )}
        {hours && (
          <div style={{ ...dataRowStyle }}>
            <Typography style={labelStyle}>Hours:</Typography>
            <Typography>{hours}</Typography>
          </div>
        )}
        {description1 && (
          <Typography style={{ marginTop: 17, marginBottom: 17 }}>
            {description1}
          </Typography>
        )}
        {description2 && (
          <Typography style={{ marginBottom: 17 }}>{description2}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
