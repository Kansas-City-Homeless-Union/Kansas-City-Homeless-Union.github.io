import { Typography } from "@mui/material";
import ResponsiveContainer from "../ResponsiveContainer/ResponsiveContainer";
import kchuCityHall from "./kchuCityHall.jpg";
import bothMayorQs from "./bothMayorQs.png";
import stopTheSweepRally from "./stopTheSweepRally.jpg";
import ImgWithCaption from "../ImgWithCaption/ImgWithCaption";
import { textMargin } from "./WhoWeAre.styles";

const WhoWeAre = () => {
  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: 25 }}>
        Who We Are
      </Typography>
      <ResponsiveContainer>
        <div>
          <Typography style={textMargin}>
            Give the history of the organization on this page. Tell the story.
            Nulla ullamcorper tellus eu porttitor tincidunt. Maecenas et felis
            sapien. Cras mattis lectus nisi, at consequat tortor dapibus a.
            Phasellus mattis commodo erat, eu placerat libero aliquam in.
          </Typography>
          <Typography style={textMargin}>
            Maecenas viverra metus a vulputate viverra. Morbi sed urna purus.
            Donec ultrices euismod lacus quis tincidunt. Praesent quam ex,
            fermentum a interdum a, malesuada eu metus.
          </Typography>
          <Typography style={textMargin}>
            Vivamus felis nisi, gravida sit amet porttitor eget, egestas nec
            justo. Suspendisse eu quam a justo vulputate mattis sed at diam.
            Mauris molestie dapibus elit, vitae imperdiet elit porttitor eget.
            Sed vel sapien mattis, suscipit urna vel, pretium nunc. Mauris
            dapibus mattis mollis. Nulla ullamcorper tellus eu porttitor
            tincidunt. Maecenas et felis sapien. Cras mattis lectus nisi, at
            consequat tortor dapibus a. Phasellus mattis commodo erat, eu
            placerat libero aliquam in.
          </Typography>
        </div>
        <ImgWithCaption
          src={stopTheSweepRally}
          caption="Stop the Sweep Rally at City Hall"
        />
      </ResponsiveContainer>
      <Typography style={{ marginBottom: 25 }}>
        Phasellus mollis, ligula ut hendrerit lobortis, nisl urna hendrerit
        justo, in aliquam libero sem quis nulla. Donec sed justo eu ipsum
        dapibus commodo ut sed massa. Vivamus felis nisi, gravida sit amet
        porttitor eget, egestas nec justo. Suspendisse eu quam a justo vulputate
        mattis sed at diam. Mauris molestie dapibus elit, vitae imperdiet elit
        porttitor eget. Sed vel sapien mattis, suscipit urna vel, pretium nunc.
        Mauris dapibus mattis mollis. Nulla ullamcorper tellus eu porttitor
        tincidunt. Maecenas et felis sapien. Cras mattis lectus nisi, at
        consequat tortor dapibus a. Phasellus mattis commodo erat, eu placerat
        libero aliquam in.
      </Typography>
      <ResponsiveContainer>
        <ImgWithCaption
          src={bothMayorQs}
          caption="Mayor Qadhafi speaking to Mayor Quinton Lucas"
        />
        <Typography>
          Aenean tristique orci purus, sit amet rhoncus nunc placerat a. In non
          est sed diam dapibus cursus a at ante. Donec fringilla urna iaculis
          ornare congue. Nullam facilisis mollis ligula eget elementum. Maecenas
          aliquam lobortis justo, at iaculis nisi efficitur quis. Nam eu
          consectetur augue, id condimentum ex. Duis maximus dolor vitae sodales
          tincidunt. Fusce tempus posuere quam, sollicitudin vestibulum augue
          egestas eu. In sit amet elementum purus.
        </Typography>
      </ResponsiveContainer>
      <ResponsiveContainer>
        <Typography>
          Quisque sagittis dapibus mauris, at interdum tellus volutpat eu. Nam
          interdum urna tortor. Pellentesque id laoreet mauris, et ullamcorper
          odio. Duis erat urna, iaculis id porttitor eu, vestibulum vel ex.
          Pellentesque arcu sapien, dignissim et rutrum venenatis, laoreet ut
          neque. Etiam lorem sapien, laoreet malesuada neque sit amet, imperdiet
          eleifend massa. Donec nisi lectus, tristique eget commodo a, luctus ac
          lectus.
        </Typography>
        <ImgWithCaption src={kchuCityHall} caption="KCHU at City Hall" />
      </ResponsiveContainer>
    </div>
  );
};

export default WhoWeAre;
