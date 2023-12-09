import { Box, Paper, Stack } from '@mui/material'
import React from 'react'
import Piechart from './../12-pieChart/Piechart';
import { Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import Barchart from './../11-barchart/Barchart';
import Geopraphy from './../14-geography/Geopraphy';

export default function Row3() {

const theme =useTheme()

  return (
    <Stack direction={'row'} flexWrap={'wrap'} sx={{gap:1}} mt={1}>

    
      <Paper sx={{minWidth:'400px',width:'33%',flexGrow:1}}>
        
      <Box  ml={7} mt={2}>
            <Typography
              variant="p"
              sx={{ fontSize: 25 }}
              color={theme.palette.secondary.main}
            >
              Campaign
            </Typography>
        </Box>
        
        <Piechart isPiechart={true} />


        <Box sx={{ display: "flex", flexDirection: "column",textAlign:'center',mt:-5,mb:1 }}>
            <Typography
              variant="p"
              sx={{ fontSize: 20 }}
              
            >
              $48,352 revenue generated
            </Typography>
            <Typography variant="body" sx={{ fontSize: 15 }}>
            Includes extra misc expenditures and costs  
            </Typography>
          </Box>







      </Paper>
     
   
   
     {/* 111111111111111111111111111111111111 */}
     <Paper sx={{minWidth:'400px',width:'33%',flexGrow:1}}>
        
        <Box  ml={7} mt={2}>
              <Typography
                variant="p"
                sx={{ fontSize: 25 }}
                color={theme.palette.secondary.main}
              >
                Sales Quantity
              </Typography>
          </Box>
          
          <Barchart isBarchart={true} />
  
  
      
  
  
  
  
  
  
        </Paper>
       
     
     {/* 111111111111111111111111111111111111 */}
    
    
    
     <Paper sx={{minWidth:'400px',width:'33%',flexGrow:1}}>
        
      
          
          <Geopraphy isGeochart={true} />
  
  
      
  
  
  
  
  
  
        </Paper>
       
     


    </Stack>
  )
}
