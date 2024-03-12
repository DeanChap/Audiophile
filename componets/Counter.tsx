import { Box, Button } from "@mui/material";
import { count } from "console";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: "#f1f1f1",
        padding: "0.7rem",
        marginRight: "0.5rem",
      }}
    >
      <Button onClick={() => setCount(count - 1)}>-</Button>
      {count}
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </Box>
  );
};

export default Counter;
