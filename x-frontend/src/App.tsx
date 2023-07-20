import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import s from "./app.module.scss";

const SelectComponent = () => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="payment-options-label">{"Payment option"}</InputLabel>
      <Select
        labelId="payment-options-label"
        value={["a"]}
        onChange={(e) => {
          console.log(e);
        }}
        size="small"
        label={"Payment option"}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid rgba(75, 100, 215, 1)",
            borderRadius: "5px",
          },
        }}
        MenuProps={{
          PaperProps: {
            style: {
              background: "#39416B",
              borderRadius: "5px",
            },
          },
        }}
      >
        {["a", "b", "c", "d", "e"].map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const App = () => {
  return (
    <div className={s.App}>
      <Box className={s.wrap}>
        <Typography variant="caption">Text Sample123123123</Typography>
        <SelectComponent />
      </Box>
    </div>
  );
};

export default App;
