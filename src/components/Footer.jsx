import React from "react";
import { Box, Text, HStack, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" py={8}>
      <HStack spacing={4} justifyContent="center" mb={4}>
        <Link href="https://github.com/maks" isExternal _hover={{ color: "blue.400" }}>
          <FaGithub size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/maks" isExternal _hover={{ color: "blue.400" }}>
          <FaLinkedin size={24} />
        </Link>
        <Link href="mailto:maks@email.com" _hover={{ color: "blue.400" }}>
          <FaEnvelope size={24} />
        </Link>
      </HStack>
      <Text textAlign="center" fontSize="sm">
        &copy; {new Date().getFullYear()} Maks. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
