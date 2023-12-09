import React from "react";
import Button from "@mui/material/Button";
import { Box, Stack, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Typography } from "@mui/material";

export default function Dashboard() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack>
          <Typography
            variant="body"
            sx={{ fontSize: 30 }}
            color={theme.palette.primary.main}
          >
            DASHBOARD
          </Typography>
          <Typography variant="body" sx={{ fontSize: 20 }}>
            Welcome to your dashboard
          </Typography>
        </Stack>

        <Stack>
          <Button
            sx={{ textTransform: "capitalize" }}
            startIcon={<DownloadIcon />}
            variant="contained"
          >
            Download reports
          </Button>
        </Stack>
      </Box>

      <Row1 />

      <Row2 />

      <Row3 />
    </>
  );
}
