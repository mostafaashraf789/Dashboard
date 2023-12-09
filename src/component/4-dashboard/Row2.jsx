import { Paper, Stack, useTheme } from "@mui/material";
import React from "react";
import { Box, Typography } from "@mui/material";
import Linechart from "./../13-lineChart/Linechart";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import { Transactions } from "./data";
export default function Row2() {
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      sx={{ marginTop: 1, gap: 1 }}
    >
      <Paper sx={{ maxWidth: 800, flexGrow: 1 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }} ml={7} mt={2}>
            <Typography
              variant="p"
              sx={{ fontSize: 25 }}
              color={theme.palette.secondary.main}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body" sx={{ fontSize: 13 }}>
              $59,342.32
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }} mr={4} mt={2}>
            <IconButton>
              <DownloadIcon />
            </IconButton>
          </Box>
        </Stack>

        <Linechart isDashboard={true} />
      </Paper>

      <Box sx={{ maxHeight: 400, flexGrow: 1, overflow: "auto" }}>
        <Paper sx={{ p: 1 }}>
          <Typography
            variant="p"
            sx={{ fontSize: 25 }}
            color={theme.palette.secondary.main}
          >
            Recent Transactions
          </Typography>
        </Paper>

        {Transactions.map((item, index) => {
          return (
            <Paper
              sx={{
                mt: 0.4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              key={index}
            >
              <Box p={1.2}>
                <Typography variant="body1">{item.txId}</Typography>
                <Typography variant="body2">{item.user} </Typography>
              </Box>
              <Typography variant="body1">{item.date} </Typography>

              <Typography
                borderRadius={1.4}
                p={1}
                bgcolor={theme.palette.error.main}
                color={theme.palette.getContrastText(theme.palette.error.main)}
                variant="body2"
              >
                ${item.cost}
              </Typography>
            </Paper>
          );
        })}
      </Box>
    </Stack>
  );
}
