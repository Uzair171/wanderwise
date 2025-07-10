import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  useTheme,
  Grid,
  Box,
} from "@mui/material";
import { styles } from "./list.styles.js";
import { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails.jsx";

const List = () => {
  const theme = useTheme();
  const styleObj = styles(theme);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [
    { name: "CoolPlace" },
    { name: "Best Bear" },
    { name: "Best Veg" },
    { name: "CoolPlace" },
    { name: "Best Bear" },
    { name: "Best Veg" },
    { name: "CoolPlace" },
    { name: "Best Bear" },
    { name: "Best Veg" },
  ];

  return (
    <Box sx={styleObj.container}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Restaurants, Hotels & Attractions around you
      </Typography>

      <FormControl sx={styleObj.formControl}>
        <InputLabel>Type</InputLabel>
        <Select
          variant="standard"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={styleObj.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select
          variant="standard"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} sx={styleObj.list}>
        {places?.map((place, index) => (
          <Grid key={index} size={{ xs: 12 }}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default List;
