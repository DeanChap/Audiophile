import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Counter from './Counter'

const Product = () => {
  return (
    <Container sx={{ 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        }}
    >
        <Image
            src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
            alt='Headphones Preview'
            width={500}
            height={500}
        />
        <Box 
        sx={{ 
            display: "flex", 
            flexDirection: "column", 
            height: "75vh", 
            width: "30vw",
            justifyContent: "center",
            marginLeft: "8rem",
        }}
        >
            <Typography 
                variant='h3' 
                sx={{
                textTransform: 'uppercase',
                fontSize: "1.5rem",
                letterSpacing: "0.5rem",
                color: "#d97d45",
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
            
            
        </Box>
    </Container>
  )
}

export default Product
