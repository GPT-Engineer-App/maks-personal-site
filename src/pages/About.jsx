import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Box bg="gray.900" minH="100vh">
      <Container maxW="container.lg" py={{ base: 8, md: 16 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="white" mb={8}>
            Over mij
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="white">
            Ik ben een fullstack ontwikkelaar met ervaring in Vue/Nuxt 3 en C#. Ik houd ervan om uitdagende projecten aan te pakken en altijd nieuwe dingen te leren.
          </Text>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
