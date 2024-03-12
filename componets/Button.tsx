import React, { ReactElement } from 'react'
import MuiButton from '@mui/material/Button';

interface Props {
    color: string;
    variant: "text" | "outlined" | "contained";
    children: React.ReactNode;
    sx?: any;
}

const Button = ({ color, variant, children, sx }: Props) => {
  return (
    <MuiButton 
        variant={variant}
        sx={{ 
            background: color,
            width: "10rem",
            padding: "1rem 2rem",
            borderRadius:0,
            fontWeight: 800,
            ...sx,   
        }}
    > 
        {children}
    </MuiButton>
    
  )
}

export default Button
