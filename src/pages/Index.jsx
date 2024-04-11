import React from "react";
import { Box, VStack, Heading, Text, Image, HStack, Icon, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh" p={8}>
      <VStack spacing={8} align="center" maxW="container.lg" mx="auto">
        <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwYSUyMHNtaWxpbmclMjBtYWxlJTIwcHJvZ3JhbW1lcnxlbnwwfHx8fDE3MTI4NTgwNDR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Maks" />
        <Heading as="h1" size="2xl">
          Hallo, ik ben Maks!
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Ik ben een gepassioneerde programmeur met een voorliefde voor het bouwen van coole webapplicaties en het leren van nieuwe technologieën.
        </Text>

        <HStack spacing={4}>
          <Link href="https://github.com/maks" isExternal>
            <Icon as={FaGithub} w={8} h={8} />
          </Link>
          <Link href="https://www.linkedin.com/in/maks" isExternal>
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
          <Link href="mailto:maks@email.com">
            <Icon as={FaEnvelope} w={8} h={8} />
          </Link>
        </HStack>

        <VStack align="stretch" spacing={4} maxW="xl">
          <Heading as="h2" size="xl">
            Over mij
          </Heading>
          <Text>Ik ben een fullstack JavaScript ontwikkelaar met ervaring in React, Node.js en moderne webontwikkeling. Ik houd ervan om uitdagende projecten aan te pakken en altijd nieuwe dingen te leren.</Text>

          <Heading as="h2" size="xl">
            Projecten
          </Heading>
          <Text>
            Bekijk mijn recente projecten op{" "}
            <Link color="blue.500" href="https://github.com/maks">
              GitHub
            </Link>
            . Ik werk graag aan open-source en persoonlijke projecten in mijn vrije tijd.
          </Text>

          <Heading as="h2" size="xl">
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
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;
