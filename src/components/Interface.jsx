import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import {useConfigurator} from "../context/Configurator.jsx";
export const Interface = () => {
  const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor } =
    useConfigurator();
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Typography variant="caption">Table Configurator</Typography>
        {/*<Box className="glass" p={3}>*/}
        {/*  <FormControl>*/}
        {/*    <FormLabel>Table width</FormLabel>*/}
        {/*    <Slider*/}
        {/*      sx={{*/}
        {/*        width: "200px",*/}
        {/*      }}*/}
        {/*      min={50}*/}
        {/*      max={200}*/}
        {/*      value={tableWidth}*/}
        {/*      onChange={(e) => setTableWidth(e.target.value)}*/}
        {/*      valueLabelDisplay="auto"*/}
        {/*    />*/}
        {/*  </FormControl>*/}
        {/*</Box>*/}
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Layout</FormLabel>
            <RadioGroup
            value={legs}
            onChange={(e) => setLegs(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Standard"
              />
              <FormControlLabel value={1} control={<Radio />} label="Solid" />
              <FormControlLabel value={2} control={<Radio />} label="Design" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Legs Color</FormLabel>
            <RadioGroup
            value={legsColor}
            onChange={(e) => setLegsColor(e.target.value)}
            >
              <FormControlLabel
                value={"#777777"}
                control={<Radio />}
                label="Black"
              />
              <FormControlLabel
                value={"#ECECEC"}
                control={<Radio />}
                label="Chrome"
              />
              <FormControlLabel
                value={"#ffffff"}
                control={<Radio />}
                label="White"
              />
              <FormControlLabel
                value={"#a65808"}
                control={<Radio />}
                label="Wood"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};
