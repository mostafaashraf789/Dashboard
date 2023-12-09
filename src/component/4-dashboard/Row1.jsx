import { Stack, useTheme } from "@mui/material";
import React from "react";

import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Card from "./Card";
import { data1, data2, data3, data4 } from './data';

export default function Row1() {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        gap: 1,
        justifyContent: { xs: "center", md: "space-between" },
        marginTop: 3,
        flexWrap: "wrap",
      }}
    >
      <Card
        title={"12.365"}
        icon={
          <LocalPostOfficeIcon
            sx={{ color: theme.palette.secondary.main, fontSize: "25px" }}
          />
        }
        subTitle={"Email sent"}
        percent={"+14%"}
          data={data1}
          scheme={'paired'}
      />
      <Card
        title={"431,225"}
        icon={
          <PointOfSaleIcon
            sx={{ color: theme.palette.secondary.main, fontSize: "25px" }}
            
          />
        }
        subTitle={"Sales obtained"}
        percent={"+21%"}
        data={data2}
        scheme={'category10'}
      />

      <Card
        title={"32,441"}
        icon={
          <PersonAddIcon
            sx={{ color: theme.palette.secondary.main, fontSize: "25px" }}
            
          />
        }
        subTitle={"New Clients"}
        percent={"+5%"}
        data={data3}
        scheme={'accent'}
      />
      <Card
        title={"1,325,134"}
        icon={
          <TrafficIcon
            sx={{ color: theme.palette.secondary.main, fontSize: "25px" }}
          />
        }
        subTitle={"Traffic Received"}
        percent={"+43%"}
        data={data4}
        scheme={'set1'}
      />
    </Stack>
  );
}
