import React from "react";
import { Box, Heading, Text, Stack, Container, Button, Image, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaBook, FaPenNib, FaShippingFast } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack align="center">
      <Icon as={icon} boxSize={12} color="blue.500" />
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Index = () => {
  return (
    <Container maxW={"5xl"} py={12}>
      <Stack textAlign={"center"} align={"center"} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>
        <Heading fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
          Swift Work Publishing
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          We are a modern publishing company that helps authors bring their books to life quickly and efficiently. From editing to distribution, we handle it all!
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button rounded={"full"} px={6} colorScheme={"blue"}>
            Get started
          </Button>
          <Button rounded={"full"} px={6}>
            Learn more
          </Button>
        </Stack>
        <Image src="https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxib29rJTIwcHVibGlzaGluZ3xlbnwwfHx8fDE3MTIzODE1MTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Book publishing" />
      </Stack>

      <Box p={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature icon={FaBook} title={"Quality Publishing"} text={"We work with you to publish high-quality books that meet industry standards."} />
          <Feature icon={FaPenNib} title={"Expert Editing"} text={"Our team of experienced editors will refine your manuscript to perfection."} />
          <Feature icon={FaShippingFast} title={"Fast Distribution"} text={"We ensure your books are distributed quickly to all major platforms and stores."} />
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;
