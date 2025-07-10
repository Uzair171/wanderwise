import {
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  useTheme,
} from "@mui/material";
import { styles } from "./list.styles.js";
import { useState } from "react";

const List = () => {
  const theme = useTheme();
  const styleObj = styles(theme); // get the style object from your file

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  return (
    <div style={styleObj.container}>
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
    </div>
  );
};

export default List;
