import { Box, Link, Typography } from "@mui/material";
import {
  container,
  dataRowStyle,
  datumStyle,
  description1Style,
  description2Style,
  header,
  horizontalLine,
  labelStyle,
} from "./ResourceCard.styles";

export interface IResourceCardProps {
  title: string;
  website?: string;
  address?: string;
  hours?: string;
  phone?: string;
  email?: string;
  description1?: string;
  description2?: string;
  showBottomLine?: boolean;
}

const ResourceCard = ({
  title,
  website,
  address,
  hours,
  phone,
  email,
  description1,
  description2,
  showBottomLine = true,
}: IResourceCardProps) => {
  return (
    <Box style={container}>
      <Typography variant="h6" style={header}>
        {title}
      </Typography>
      {website && (
        <div style={dataRowStyle}>
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
        <div style={dataRowStyle}>
          <Typography style={labelStyle}>Address:</Typography>
          <Typography>{address}</Typography>
        </div>
      )}
      {phone && (
        <div style={dataRowStyle}>
          <Typography style={labelStyle}>Phone:</Typography>
          <Typography>{phone}</Typography>
        </div>
      )}
      {email && (
        <div style={dataRowStyle}>
          <Typography style={labelStyle}>Email:</Typography>
          <Typography>{email}</Typography>
        </div>
      )}
      {hours && (
        <div style={dataRowStyle}>
          <Typography style={labelStyle}>Hours:</Typography>
          <Typography>{hours}</Typography>
        </div>
      )}
      {description1 && (
        <Typography style={description1Style}>{description1}</Typography>
      )}
      {description2 && (
        <Typography style={description2Style(showBottomLine)}>
          {description2}
        </Typography>
      )}
      {showBottomLine && <div style={horizontalLine} />}
    </Box>
  );
};

export default ResourceCard;
