import { Box } from "@mui/material";
import { HumanContainerMemoized } from "human/memoized";
import { HumanContainerMemoizedSplitted } from "human/memoized-splitted";
import { HumanContainerRaw } from "human/raw";
import s from "./app.module.scss";
import { LogsComponent } from "Logs";
import { useState } from "react";
import { clearLogs } from "log";

const examples = [
  <HumanContainerRaw />,

  <HumanContainerMemoized />,
  <HumanContainerMemoizedSplitted />,
];

const App = () => {
  const [selectedExampleIdx, setSelectedExampleIdx] = useState(0);
  const selectedExample = examples[selectedExampleIdx];

  const rotateExample = () => {
    setSelectedExampleIdx((state) =>
      state === examples.length - 1 ? 0 : state + 1
    );

    clearLogs();
  };

  return (
    <div className={s.App}>
      <button onClick={rotateExample} style={{ width: "100px" }}>
        rotate example
      </button>
      <Box className={s.wrap}>{selectedExample}</Box>
      <LogsComponent />
    </div>
  );
};

export { App };
