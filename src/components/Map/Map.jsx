import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@mui/material";
import LocationOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import Rating from "@mui/material/Rating";

import { styles } from "./map.styles copy.js";
import { useTheme } from "@mui/material/styles";

const Map = ({ setCoordinates, coordinates, setBounds }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(min-width: 600px)");
  const classes = styles(theme);
  const cordinates = { lat: 0, lng: 0 };
  return (
    <div style={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
