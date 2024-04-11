import React from "react";
import { Box, Container, VStack, Heading, Text, Image, HStack, Icon, Link, UnorderedList, ListItem, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.900" minH="100vh">
      <Container maxW="container.lg" py={{base: 8, md: 16}}>
        <VStack spacing={{base: 8, md: 16}} align="center">
          <Image borderRadius="full" boxSize={{base: "150px", md: "200px"}} src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjBtYWxlJTIwcHJvZ3JhbW1lcnxlbnwwfHx8fDE3MTI4NTgwNDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Maks" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Heading as="h1" size={{base: "xl", md: "2xl"}} color="white">
            Hallo, ik ben Maks!
          </Heading>
          <Text fontSize={{base: "lg", md: "xl"}} textAlign="center" color="white">
            Ik ben een gepassioneerde programmeur met een voorliefde voor het bouwen van coole webapplicaties en het leren van nieuwe technologieën.
          </Text>

          <Stack direction={{base: "column", md: "row"}} spacing={4}>
            <Link href="https://github.com/maks" isExternal _hover={{ transform: "scale(1.1)" }} transition="0.2s ease-in-out">
              <Icon as={FaGithub} w={8} h={8} color="white" />
            </Link>
            <Link href="https://www.linkedin.com/in/maks" isExternal _hover={{ transform: "scale(1.1)" }} transition="0.2s ease-in-out">
              <Icon as={FaLinkedin} w={8} h={8} color="white" />
            </Link>
            <Link href="mailto:maks@email.com" _hover={{ transform: "scale(1.1)" }} transition="0.2s ease-in-out">
              <Icon as={FaEnvelope} w={8} h={8} color="white" />
            </Link>
          </Stack>
        </motion.div>

        <VStack align="stretch" spacing={{base: 4, md: 8}} maxW="xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Heading as="h2" size={{base: "lg", md: "xl"}} color="white">
              Over mij
            </Heading>
            <Text color="white">Ik ben een fullstack ontwikkelaar met ervaring in Vue/Nuxt 3 en C#. Ik houd ervan om uitdagende projecten aan te pakken en altijd nieuwe dingen te leren.</Text>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Heading as="h2" size={{base: "lg", md: "xl"}} color="white">
              Skills
            </Heading>
            <Text color="white">Mijn belangrijkste technologieën zijn:</Text>
            <UnorderedList color="white">
              <ListItem>Vue/Nuxt 3</ListItem>
              <ListItem>C#</ListItem>
              <ListItem>JavaScript</ListItem>
            </UnorderedList>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Heading as="h2" size={{base: "lg", md: "xl"}} color="white">
              Projecten
            </Heading>
            <Text>
              Bekijk mijn recente projecten op{" "}
              <Link color="blue.500" href="https://github.com/maks">
                GitHub
              </Link>
              . Ik werk graag aan open-source en persoonlijke projecten in mijn vrije tijd.
            </Text>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <Heading as="h2" size={{base: "lg", md: "xl"}} color="white">
              Contact
            </Heading>
            <Text>
              Neem gerust contact met me op via{" "}
              <Link color="blue.500" href="mailto:maks@email.com">
                e-mail
              </Link>{" "}
              of connecteer met mij op{" "}
              <Link color="blue.500" href="https://www.linkedin.com/in/maks">
                LinkedIn
              </Link>
              .
            </Text>
          </motion.div>
        </VStack>
      </VStack>
      </Container>
    </Box>
  );
};

export default Index;
