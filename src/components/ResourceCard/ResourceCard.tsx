import { Box, Link, Typography } from "@mui/material";
import React from 'react';
import {
  container,
  dataRowStyle,
  datumStyle,
  descriptionStyle,
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
  description?: string;
}

const Description = ({ content } : { content : string }) => {
    const lines = content.split('\n');
    const inner = lines.map((line: string, index: number) => {
        const isLast = index === lines.length - 1;
        return <React.Fragment key={index}><Typography style={descriptionStyle(index, lines.length)}>{line}</Typography><div style={isLast ? horizontalLine : {}} /></React.Fragment>
    });
    return <div>{inner}</div>
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
      {description && <Description content={description}/>}
    </Box>
  );
};

export default ResourceCard;
