import React from "react";
import { Box, Container, VStack, Heading, Text, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box bg="gray.900" minH="100vh">
      <Container maxW="container.lg" py={{ base: 8, md: 16 }}>
        <VStack spacing={{ base: 8, md: 16 }} align="center">
          <Image borderRadius="full" boxSize={{ base: "150px", md: "200px" }} src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjBtYWxlJTIwcHJvZ3JhbW1lcnxlbnwwfHx8fDE3MTI4NTgwNDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Maks" />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} color="white">
              Hallo, ik ben Maks!
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} textAlign="center" color="white" mb={8}>
              Ik ben een gepassioneerde programmeur met een voorliefde voor het bouwen van coole webapplicaties en het leren van nieuwe technologieën.
            </Text>
            <Button as={RouterLink} to="/contact" colorScheme="blue" size="lg" _hover={{ transform: "scale(1.05)" }} transition="0.2s ease-in-out">
              Neem contact op
            </Button>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
