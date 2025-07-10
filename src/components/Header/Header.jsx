import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styles } from "./header.styles.js";

const Header = () => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <AppBar position="static">
      <Toolbar sx={classes.toolbar}>
        <Typography variant="h5" sx={classes.title}>
          WanderWise
        </Typography>

        <Box display="flex" alignItems="center">
          <Typography variant="h6" sx={{ ...classes.title, mr: 2 }}>
            Explore new places
          </Typography>

          {/* <Autocomplete> */}
          <Box sx={classes.search}>
            <Box sx={classes.searchIcon}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search ...."
              sx={{
                ...classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </Box>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
