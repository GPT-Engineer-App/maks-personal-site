import React from "react";
import { Box, Container, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Box bg="gray.900" minH="100vh">
      <Container maxW="container.lg" py={{ base: 8, md: 16 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="white" mb={8}>
            Skills
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="white" mb={4}>
            Mijn belangrijkste technologieën zijn:
          </Text>
          <UnorderedList color="white" spacing={2}>
            <ListItem>Vue/Nuxt 3</ListItem>
            <ListItem>C#</ListItem>
            <ListItem>JavaScript</ListItem>
          </UnorderedList>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills;
