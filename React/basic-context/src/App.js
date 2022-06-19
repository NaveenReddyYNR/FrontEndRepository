import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "./Menu";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import UserCreate from "./components/UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./contexts/ColorContext";

function App() {
  const [language, setLanguage] = React.useState("english");

  return (
    <Box>
      <Menu />
      <FormControl sx={{ margin: 2 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Select Language to fill a Form:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="english"
        >
          <FormControlLabel
            value="english"
            control={<Radio />}
            label="English"
            onClick={() => setLanguage("english")}
          />
          <FormControlLabel
            value="spanish"
            control={<Radio />}
            label="Spanish"
            onClick={() => setLanguage("spanish")}
          />
        </RadioGroup>
      </FormControl>

      <LanguageContext.Provider value={language}>
        <ColorContext.Provider value="secondary">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageContext.Provider>
    </Box>
  );
}

export default App;
