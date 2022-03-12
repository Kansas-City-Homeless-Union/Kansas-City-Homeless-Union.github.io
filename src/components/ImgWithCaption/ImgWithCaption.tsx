import { Typography } from "@mui/material";

export interface IImgWithCaptionProps {
  src: any; // media that was already imported
  caption: string;
  alt?: string;
  styleOverride?: any;
}

const ImgWithCaption = ({
  src,
  caption,
  alt = "",
  styleOverride = {},
}: IImgWithCaptionProps) => {
  const altText = alt ?? caption;
  const imageStyle = {
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 5,
    ...styleOverride,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img src={src} alt={altText} style={imageStyle} />
      <Typography variant="caption" color="text.secondary">
        {caption}
      </Typography>
    </div>
  );
};

export default ImgWithCaption;
