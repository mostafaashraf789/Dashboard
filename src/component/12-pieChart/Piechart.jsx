import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, useTheme } from "@mui/material";
import { Typography, Stack, } from '@mui/material'
export default function Piechart({ isPiechart = false }) {
  const theme = useTheme();

  const data = [
    {
      id: "React",
      label: "React",
      value: 272,
      color: "hsl(107, 70%, 50%)",
    },
    {
      id: "stylus",
      label: "stylus",
      value: 543,
      color: "hsl(64, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 401,
      color: "hsl(41, 70%, 50%)",
    },
    {
      id: "haskell",
      label: "haskell",
      value: 434,
      color: "hsl(172, 70%, 50%)",
    },
    {
      id: "nue",
      label: "nue",
      value: 333,
      color: "hsl(219, 70%, 50%)",
    },
  ];

  return (
   
   
   
   <Box>
     
     
   {isPiechart?null:  <Stack mb={5}>
   <Typography
              variant="p"
              sx={{ fontSize: 30 }}
              color={theme.palette.primary.main}
            >
              
              Pie Chart
            </Typography>
            
   <Typography
              variant="p"
              sx={{ fontSize: 15}}
             
            >
             Simple Pie Chart
            </Typography>
            
            
            
               </Stack>
   }
     
      <Box sx={{ height: isPiechart ? 350 : 550 }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        theme={{
          text: {
            fontSize: 15,
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
              stroke: theme.palette.text.primary,
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            outline: {
              stroke: theme.palette.text.primary,
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: theme.palette.text.primary,
              outlineOpacity: 1,
            },
            symbol: {
              fill: theme.palette.text.primary,
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
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={isPiechart ? false : true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        enableArcLabels={isPiechart ? false : true}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={
          isPiechart
            ? false
            : true && [
                {
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: theme.palette.text.primary,
                      },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
   </Box>
 
  );
}
