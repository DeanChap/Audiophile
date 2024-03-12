import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div
      style={{
        padding: "2rem 0",
        color: "white",
        backgroundColor: "#191919",
      }}
    >
      <Container sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        }}
      >
        <Image
          src="./assets/shared/desktop/logo.svg"
          alt="logo"
          width={150}
          height={30}
        />
        <ul
          style={{
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
            Home
          </Link>
          <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
            Headphones
          </Link>
          <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
            Speakers
          </Link>
          <Link href="/" style={{ marginRight: "2rem", fontWeight: 700 }}>
            Earphones
          </Link>
        </ul>
        <Image
          src="./assets/shared/desktop/icon-cart.svg"
          alt="logo"
          width={30}
          height={30}
        />
      </Container>
    </div>
  );
};

export default Nav;
