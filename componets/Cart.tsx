import { Box, Typography } from "@mui/material";
import React from "react";
import Button from "./Button";

const Cart = () => {
  return (
    <Box
      sx={{
        postion: "absolute",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          right: 150,
          minHeight: "20vh",
          width: "25vw",
          backgroundColor: "white",
          color: "black",
          padding: "1.5rem",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Cart</Typography>
          <Typography>Remove All</Typography>
        </Box>
        <Box>PRODUCTS</Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Total</Typography>
          <Typography>$$$</Typography>
        </Box>
        <Button color="#d97d45" variant="contained" sx={{ width: "100%" }}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
