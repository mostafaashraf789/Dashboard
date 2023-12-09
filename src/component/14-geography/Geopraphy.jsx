import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Geo } from "./World_countries";
import { Typography } from "@mui/material";
export default function Geopraphy({ isGeochart = false }) {
  const theme = useTheme();

  const data = [
    {
      id: "AFG",
      value: 40196,
    },
    {
      id: "AGO",
      value: 402745,
    },
    {
      id: "ALB",
      value: 107354,
    },
    {
      id: "ARE",
      value: 143984,
    },
    {
      id: "ARG",
      value: 834957,
    },
    {
      id: "ARM",
      value: 432422,
    },
    {
      id: "ATA",
      value: 123638,
    },
    {
      id: "ATF",
      value: 691115,
    },
    {
      id: "AUT",
      value: 649394,
    },
    {
      id: "AZE",
      value: 362329,
    },
    {
      id: "BDI",
      value: 767286,
    },
    {
      id: "BEL",
      value: 763115,
    },
    {
      id: "BEN",
      value: 952112,
    },
    {
      id: "BFA",
      value: 702038,
    },
    {
      id: "BGD",
      value: 377425,
    },
    {
      id: "BGR",
      value: 45647,
    },
    {
      id: "BHS",
      value: 590197,
    },
    {
      id: "BIH",
      value: 566997,
    },
    {
      id: "BLR",
      value: 664377,
    },
    {
      id: "BLZ",
      value: 113907,
    },
    {
      id: "BOL",
      value: 695934,
    },
    {
      id: "BRN",
      value: 544098,
    },
    {
      id: "BTN",
      value: 625134,
    },
    {
      id: "BWA",
      value: 266090,
    },
    {
      id: "CAF",
      value: 704986,
    },
    {
      id: "CAN",
      value: 98000,
    },
    {
      id: "CHE",
      value: 805620,
    },
    {
      id: "CHL",
      value: 523173,
    },
    {
      id: "CHN",
      value: 702541,
    },
    {
      id: "CIV",
      value: 262353,
    },
    {
      id: "CMR",
      value: 288032,
    },
    {
      id: "COG",
      value: 627703,
    },
    {
      id: "COL",
      value: 122429,
    },
    {
      id: "CRI",
      value: 584041,
    },
    {
      id: "CUB",
      value: 555681,
    },
    {
      id: "-99",
      value: 263448,
    },
    {
      id: "CYP",
      value: 779039,
    },
    {
      id: "CZE",
      value: 422502,
    },
    {
      id: "DEU",
      value: 130222,
    },
    {
      id: "DJI",
      value: 2551,
    },
    {
      id: "DNK",
      value: 573068,
    },
    {
      id: "DOM",
      value: 363887,
    },
    {
      id: "DZA",
      value: 165292,
    },
    {
      id: "ECU",
      value: 952402,
    },
    {
      id: "EGY",
      value: 910000,
    },
    {
      id: "ERI",
      value: 406105,
    },
    {
      id: "ESP",
      value: 975167,
    },
    {
      id: "EST",
      value: 655102,
    },
    {
      id: "ETH",
      value: 728641,
    },
    {
      id: "FIN",
      value: 216741,
    },
    {
      id: "FJI",
      value: 573872,
    },
    {
      id: "FLK",
      value: 957596,
    },
    {
      id: "FRA",
      value: 697661,
    },
    {
      id: "GAB",
      value: 394117,
    },
    {
      id: "GBR",
      value: 434161,
    },
    {
      id: "GEO",
      value: 743855,
    },
    {
      id: "GHA",
      value: 681592,
    },
    {
      id: "GIN",
      value: 925702,
    },
    {
      id: "GMB",
      value: 253715,
    },
    {
      id: "GNB",
      value: 737288,
    },
    {
      id: "GNQ",
      value: 729587,
    },
    {
      id: "GRC",
      value: 566623,
    },
    {
      id: "GTM",
      value: 530346,
    },
    {
      id: "GUY",
      value: 651845,
    },
    {
      id: "HND",
      value: 762864,
    },
    {
      id: "HRV",
      value: 623146,
    },
    {
      id: "HTI",
      value: 731665,
    },
    {
      id: "HUN",
      value: 956531,
    },
    {
      id: "IDN",
      value: 105160,
    },
    {
      id: "IND",
      value: 614024,
    },
    {
      id: "IRL",
      value: 35877,
    },
    {
      id: "IRN",
      value: 890029,
    },
    {
      id: "IRQ",
      value: 583130,
    },
    {
      id: "ISL",
      value: 707193,
    },
    {
      id: "ISR",
      value: 317118,
    },
    {
      id: "ITA",
      value: 613871,
    },
    {
      id: "JAM",
      value: 176090,
    },
    {
      id: "JOR",
      value: 932369,
    },
    {
      id: "JPN",
      value: 221307,
    },
    {
      id: "KAZ",
      value: 941248,
    },
    {
      id: "KEN",
      value: 315866,
    },
    {
      id: "KGZ",
      value: 157941,
    },
    {
      id: "KHM",
      value: 870583,
    },
    {
      id: "OSA",
      value: 803034,
    },
    {
      id: "KWT",
      value: 703042,
    },
    {
      id: "LAO",
      value: 263985,
    },
    {
      id: "LBN",
      value: 886624,
    },
    {
      id: "LBR",
      value: 929753,
    },
    {
      id: "LBY",
      value: 462663,
    },
    {
      id: "LKA",
      value: 532697,
    },
    {
      id: "LSO",
      value: 60593,
    },
    {
      id: "LTU",
      value: 117032,
    },
    {
      id: "LUX",
      value: 980048,
    },
    {
      id: "LVA",
      value: 154190,
    },
    {
      id: "MAR",
      value: 940792,
    },
    {
      id: "MDA",
      value: 992827,
    },
    {
      id: "MDG",
      value: 848103,
    },
    {
      id: "MEX",
      value: 173596,
    },
    {
      id: "MKD",
      value: 325885,
    },
    {
      id: "MLI",
      value: 104332,
    },
    {
      id: "MMR",
      value: 543699,
    },
    {
      id: "MNE",
      value: 168964,
    },
    {
      id: "MNG",
      value: 89000,
    },
    {
      id: "MOZ",
      value: 428058,
    },
    {
      id: "MRT",
      value: 348351,
    },
    {
      id: "MWI",
      value: 614734,
    },
    {
      id: "MYS",
      value: 89677,
    },
    {
      id: "NAM",
      value: 395,
    },
    {
      id: "NCL",
      value: 478878,
    },
    {
      id: "NER",
      value: 491472,
    },
    {
      id: "NGA",
      value: 687779,
    },
    {
      id: "NIC",
      value: 602040,
    },
    {
      id: "NLD",
      value: 193711,
    },
    {
      id: "NOR",
      value: 840145,
    },
    {
      id: "NPL",
      value: 721973,
    },
    {
      id: "NZL",
      value: 58286,
    },
    {
      id: "OMN",
      value: 558763,
    },
    {
      id: "PAK",
      value: 550763,
    },
    {
      id: "PAN",
      value: 746044,
    },
    {
      id: "PER",
      value: 533993,
    },
    {
      id: "PHL",
      value: 273894,
    },
    {
      id: "PNG",
      value: 301672,
    },
    {
      id: "POL",
      value: 716435,
    },
    {
      id: "PRI",
      value: 491172,
    },
    {
      id: "PRT",
      value: 124670,
    },
    {
      id: "PRY",
      value: 160310,
    },
    {
      id: "QAT",
      value: 825718,
    },
    {
      id: "ROU",
      value: 182902,
    },
    {
      id: "RUS",
      value: 322456,
    },
    {
      id: "RWA",
      value: 348051,
    },
    {
      id: "ESH",
      value: 938625,
    },
    {
      id: "SAU",
      value: 730097,
    },
    {
      id: "SDN",
      value: 787871,
    },
    {
      id: "SDS",
      value: 47549,
    },
    {
      id: "SEN",
      value: 398753,
    },
    {
      id: "SLB",
      value: 863631,
    },
    {
      id: "SLE",
      value: 571490,
    },
    {
      id: "SLV",
      value: 667066,
    },
    {
      id: "ABV",
      value: 602811,
    },
    {
      id: "SOM",
      value: 626995,
    },
    {
      id: "SRB",
      value: 648059,
    },
    {
      id: "SUR",
      value: 754342,
    },
    {
      id: "SVK",
      value: 34927,
    },
    {
      id: "SVN",
      value: 730563,
    },
    {
      id: "SWZ",
      value: 63239,
    },
    {
      id: "SYR",
      value: 616955,
    },
    {
      id: "TCD",
      value: 12275,
    },
    {
      id: "TGO",
      value: 799956,
    },
    {
      id: "THA",
      value: 354463,
    },
    {
      id: "TJK",
      value: 613837,
    },
    {
      id: "TKM",
      value: 710378,
    },
    {
      id: "TLS",
      value: 924869,
    },
    {
      id: "TTO",
      value: 925700,
    },
    {
      id: "TUN",
      value: 882558,
    },
    {
      id: "TUR",
      value: 727233,
    },
    {
      id: "TWN",
      value: 904490,
    },
    {
      id: "TZA",
      value: 206512,
    },
    {
      id: "UGA",
      value: 483855,
    },
    {
      id: "UKR",
      value: 175348,
    },
    {
      id: "URY",
      value: 132028,
    },
    {
      id: "USA",
      value: 849493,
    },
    {
      id: "UZB",
      value: 273527,
    },
    {
      id: "VEN",
      value: 529821,
    },
    {
      id: "VNM",
      value: 163406,
    },
    {
      id: "VUT",
      value: 360583,
    },
    {
      id: "PSE",
      value: 127944,
    },
    {
      id: "YEM",
      value: 57381,
    },
    {
      id: "ZAF",
      value: 59234,
    },
    {
      id: "ZMB",
      value: 1329,
    },
    {
      id: "ZWE",
      value: 967709,
    },
    {
      id: "KOR",
      value: 202616,
    },
  ];

  return (
    <Box>
      {isGeochart ? null : (
        <Stack mb={5}>
          <Typography
            variant="p"
            sx={{ fontSize: 25 }}
            color={theme.palette.primary.main}
          >
            Geography
          </Typography>

          <Typography variant="p" sx={{ fontSize: 15 }}>
            Simple Geography Chart
          </Typography>
        </Stack>
      )}

      <Box
        sx={{
          height: isGeochart ? 350 : "75vh",
          border: isGeochart ? null : `2px solid ${theme.palette.text.primary}`,
          borderRadius: "3px",
        }}
      >
        <ResponsiveChoropleth
          data={data}
          features={Geo.features}
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
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors="spectral"
          domain={[0, 1000000]}
          unknownColor="#666666"
          label="properties.name"
          valueFormat=".2s"
          projectionScale={200}
          projectionTranslation={[0.5, 0.45]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1}
          borderColor={theme.palette.text.primary}
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
            {
              id: "gradient",
              type: "linearGradient",
              colors: [
                {
                  offset: 0,
                  color: "#000",
                },
                {
                  offset: 100,
                  color: "inherit",
                },
              ],
            },
          ]}
          fill={[
            {
              match: {
                id: "CAN",
              },
              id: "dots",
            },
            {
              match: {
                id: "CHN",
              },
              id: "lines",
            },
            {
              match: {
                id: "ATA",
              },
              id: "gradient",
            },
          ]}
          legends={
            isGeochart
              ? []
              : [
                  {
                    anchor: "bottom-left",
                    direction: "column",
                    justify: true,
                    translateX: 20,
                    translateY: -20,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: "left-to-right",
                    itemTextColor: theme.palette.text.primary,
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemTextColor: theme.palette.text.primary,
                          itemOpacity: 1,
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
