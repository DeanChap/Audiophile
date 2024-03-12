import { Box, Typography } from '@mui/material'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <Box 
        sx={{ 
            display: "flex", 
            flexDirection: "column", 
            height: "75vh", 
            width: "30vw",
            justifyContent: "center",
        }}
    >
        <Typography 
            variant='h3' 
            sx={{
            textTransform: 'uppercase',
            fontSize: "1.5rem",
            letterSpacing: "0.5rem",
            color: "#4f4f4f",
            marginBottom: "1rem",
        }}
    >
            New Product
        </Typography>
        <Typography 
            variant='h2' 
            sx={{ 
                textTransform: 'uppercase', 
                fontWeight: 700, 
                marginBottom: "2rem"
            }}
        >
            XX99 Mark II Headphones
        </Typography>
        <Typography variant='body1' sx={{ color: "#727272", marginBottom: "3rem", fontSize: "1.2rem"}}>
            Experience natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast.
        </Typography>
        <Button variant='contained' color='#d97d45'>See Product</Button>
    </Box>
  )
}

export default Hero
