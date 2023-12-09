import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, useTheme } from "@mui/material";
import { Typography, Stack } from "@mui/material";

export default function Barchart({ isBarchart = false }) {
  const theme = useTheme();

  const data = [
    {
      year: 2019,
      Spain: 900,
      French: 1400,
      Germany: 1700,
    },

    {
      year: 2020,
      Spain: 1000,
      French: 1500,
      Germany: 1800,
    },

    {
      year: 2021,
      Spain: 1100,
      French: 1600,
      Germany: 1900,
    },

    {
      year: 2022,
      Spain: 1200,
      French: 1700,
      Germany: 2000,
    },

    {
      year: 2023,
      Spain: 1260,
      French: 1709,
      Germany: 2080,
    },
  ];

  return (
    <Box>
      {isBarchart ? null : (
        <Stack mb={5}>
          <Typography
            variant="p"
            sx={{ fontSize: 30 }}
            color={theme.palette.primary.main}
          >
            Bar Chart
          </Typography>

          <Typography variant="p" sx={{ fontSize: 15 }}>
            The minimum wage in Germany, France and Spain (EUR/month)
          </Typography>
        </Stack>
      )}

      <Box sx={{ height: isBarchart ? 350 : "600px" }}>
        <ResponsiveBar
          data={data}
          keys={["Germany", "French", "Spain"]}
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
                  fontSize: 15,
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
                stroke: theme.palette.text.primary,
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
          indexBy="year"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "paired" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "fries",
              },
              id: "dots",
            },
            {
              match: {
                id: "sandwich",
              },
              id: "lines",
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isBarchart === true ? null : "Year",
            legendPosition: "middle",
            legendOffset: 45,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 6,
            tickPadding: 0,
            tickRotation: 0,
            legend: isBarchart === true ? null : "salary/month",
            legendPosition: "middle",
            legendOffset: -55,
            truncateTickAt: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
      </Box>
    </Box>
  );
}
