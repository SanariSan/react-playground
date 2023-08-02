import { Box } from "@mui/material";
import {
  subscribeClearLogs,
  subscribeLogger,
  unsubscribeClearLogs,
  unsubscribeLogger,
} from "log";
import type { FC } from "react";
import { useEffect, useState } from "react";

type TLogsComponent = {
  [key: string]: unknown;
};

export const LogsComponent: FC<TLogsComponent> = () => {
  const [logs, setLogs] = useState<unknown[]>([]);

  useEffect(() => {
    const cb = (...data: unknown[]) => {
      setLogs((prev) => [...prev, ...data]);
    };

    subscribeLogger(cb);

    return () => {
      unsubscribeLogger(cb);
    };
  }, []);

  useEffect(() => {
    const cb = (...data: unknown[]) => {
      setLogs([]);
    };

    subscribeClearLogs(cb);

    return () => {
      unsubscribeClearLogs(cb);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      LOGS:
      <br />
      <textarea
        value={JSON.stringify(logs, null, 2)}
        style={{ width: "100%", height: "100%" }}
      ></textarea>
    </Box>
  );
};
