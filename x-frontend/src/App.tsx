import { Box } from "@mui/material";
import { HumanContainerMemoized } from "human/memoized";
import { HumanContainerMemoizedSplitted } from "human/memoized-splitted";
import { HumanContainerRaw } from "human/raw";
import s from "./app.module.scss";

const App = () => {
  return (
    <div className={s.App}>
      <Box className={s.wrap}>
        <HumanContainerRaw />
        {/* <HumanContainerMemoized /> */}
        {/* <HumanContainerMemoizedSplitted /> */}
      </Box>
    </div>
  );
};

export { App };
