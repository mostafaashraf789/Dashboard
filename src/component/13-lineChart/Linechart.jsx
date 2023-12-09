import { Box, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Typography, Stack, } from '@mui/material'
export default function Linechart({isDashboard=false}) {
  const theme = useTheme();

  const data = [
    {
      id: "france",
      color: "hsl(208, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 67,
        },
        {
          x: "helicopter",
          y: 47,
        },
        {
          x: "boat",
          y: 135,
        },
        {
          x: "train",
          y: 266,
        },
        {
          x: "subway",
          y: 187,
        },
        {
          x: "bus",
          y: 241,
        },
        {
          x: "car",
          y: 172,
        },
        {
          x: "moto",
          y: 137,
        },
        {
          x: "bicycle",
          y: 104,
        },
        {
          x: "horse",
          y: 277,
        },
        {
          x: "skateboard",
          y: 146,
        },
        {
          x: "others",
          y: 119,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(278, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 159,
        },
        {
          x: "helicopter",
          y: 23,
        },
        {
          x: "boat",
          y: 32,
        },
        {
          x: "train",
          y: 216,
        },
        {
          x: "subway",
          y: 154,
        },
        {
          x: "bus",
          y: 282,
        },
        {
          x: "car",
          y: 1,
        },
        {
          x: "moto",
          y: 186,
        },
        {
          x: "bicycle",
          y: 232,
        },
        {
          x: "horse",
          y: 167,
        },
        {
          x: "skateboard",
          y: 31,
        },
        {
          x: "others",
          y: 203,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(245, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 299,
        },
        {
          x: "helicopter",
          y: 205,
        },
        {
          x: "boat",
          y: 119,
        },
        {
          x: "train",
          y: 270,
        },
        {
          x: "subway",
          y: 252,
        },
        {
          x: "bus",
          y: 102,
        },
        {
          x: "car",
          y: 186,
        },
        {
          x: "moto",
          y: 226,
        },
        {
          x: "bicycle",
          y: 285,
        },
        {
          x: "horse",
          y: 174,
        },
        {
          x: "skateboard",
          y: 162,
        },
        {
          x: "others",
          y: 81,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(255, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 78,
        },
        {
          x: "helicopter",
          y: 172,
        },
        {
          x: "boat",
          y: 296,
        },
        {
          x: "train",
          y: 145,
        },
        {
          x: "subway",
          y: 277,
        },
        {
          x: "bus",
          y: 232,
        },
        {
          x: "car",
          y: 18,
        },
        {
          x: "moto",
          y: 136,
        },
        {
          x: "bicycle",
          y: 262,
        },
        {
          x: "horse",
          y: 218,
        },
        {
          x: "skateboard",
          y: 21,
        },
        {
          x: "others",
          y: 218,
        },
      ],
    },
  ];

  return (
   
   
   
   
   <Box>
    { isDashboard?null: <Stack mb={5}>
   <Typography
              variant="p"
              sx={{ fontSize: 30 }}
              color={theme.palette.primary.main}
            >
              
Line Chart
            </Typography>
            
   <Typography
              variant="p"
              sx={{ fontSize: 15}}
             
            >
             Simple Line Chart
            </Typography>
            
            
            
               </Stack>}
   
     
     
     
     
     <Box sx={{ height:isDashboard?300: 550 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        theme={{
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.text.primary,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: "#dddddd",
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
          },
          tooltip: {
            container: {
              background: theme.palette.background.paper,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard? null:"transportation",
          legendOffset: 45,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend:isDashboard? null:"count",
          legendOffset: -50,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={3}
        pointColor={{ theme: "background" }}
        pointBorderWidth={4}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
   </Box>
  
  );
}
