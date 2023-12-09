import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SecurityIcon from "@mui/icons-material/Security";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
export default function ManageTeam() {
  const theme = useTheme();

  const rows = [
    {
      id: 1,
      Name: "Jon Snow",
      Email: "jonsnow@gmail.com",
      Age: 35,
      Phone: "(665)121-4545",
      Access: "Admin",
    },
    {
      id: 2,
      Name: "Cersei Lannister",
      Email: "cerseilannister@gmail.com",
      Age: 42,
      Phone: "(421)314-2288",
      Access: "Admin",
    },
    {
      id: 3,
      Name: "Jaime Lannister",
      Email: "jaimelannister@gmail.com",
      Age: 45,
      Phone: "(422)982-6739",
      Access: "Admin",
    },
    {
      id: 4,
      Name: "Anya Stark",
      Email: "anyastark@gmail.com",
      Age: 16,
      Phone: "(921)425-6742",
      Access: "ManAger",
    },
    {
      id: 5,
      Name: "Daenerys Targaryen",
      Email: "daenerystargaryen@gmail.com",
      Age: 31,
      Phone: "(421)445-1189",
      Access: "ManAger",
    },
    {
      id: 6,
      Name: "Ever Melisandre",
      Email: "evermelisandre@gmail.com",
      Age: 150,
      Phone: "(232)545-6483",
      Access: "User",
    },
    {
      id: 7,
      Name: "Ferrara Clifford",
      Email: "ferraraclifford@gmail.com",
      Age: 44,
      Phone: "(543)124-0123",
      Access: "User",
    },
    {
      id: 8,
      Name: "Rossini Frances",
      Email: "rossinifrances@gmail.com",
      Age: 36,
      Phone: "(222)444-5555",
      Access: "User",
    },
    {
      id: 9,
      Name: "Harvey Roxie",
      Email: "harveyroxie@gmail.com",
      Age: 65,
      Phone: "(444)555-6239",
      Access: "User",
    },
  ];

  const columns = [
    { field: "id", headerName: "Id", width: 33 },
    {
      field: "Name",
      headerName: "Name",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    { field: "Age", headerName: "Age", align: "center", headerAlign: "center" },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Access",
      headerName: "Access",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { Access } }) => {
        return (
          <Box
            sx={{
              p: 0.5,
              borderRadius: 2,
              width: 100,
              textAlign: "center",
              bgcolor:
                Access === "Admin"
                  ? theme.palette.primary.dark
                  : Access === "ManAger"
                  ? theme.palette.secondary.dark
                  : theme.palette.info.light,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            {Access === "Admin" ? (
              <AdminPanelSettingsOutlinedIcon
                fontSize="small"
                sx={{ color: "white" }}
              />
            ) : Access === "ManAger" ? (
              <SecurityIcon fontSize="small" sx={{ color: "white" }} />
            ) : (
              <LockOpenIcon fontSize="small" sx={{ color: "white" }} />
            )}
            <Typography
              sx={{ fontSize: "13px", fontWeight: "Bold", color: "white" }}
            >
              {Access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div
      style={{
        height: 600,
        width: "98%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Stack mb={5}>
        <Typography
          variant="p"
          sx={{ fontSize: 30 }}
          color={theme.palette.primary.main}
        >
          TEAM
        </Typography>

        <Typography variant="p" sx={{ fontSize: 15 }}>
          Managing the Team Members
        </Typography>
      </Stack>

      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
