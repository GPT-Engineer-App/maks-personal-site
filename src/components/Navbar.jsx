import React from "react";
import { Box, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="gray.800" py={4}>
      <HStack spacing={8} justifyContent="center">
        <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "blue.400" }}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none", color: "blue.400" }}>
          About
        </Link>
        <Link as={RouterLink} to="/skills" _hover={{ textDecoration: "none", color: "blue.400" }}>
          Skills
        </Link>
        <Link as={RouterLink} to="/projects" _hover={{ textDecoration: "none", color: "blue.400" }}>
          Projects
        </Link>
        <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "blue.400" }}>
          Contact
        </Link>
      </HStack>
    </Box>
  );
};

export default Navbar;
