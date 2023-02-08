"use client"
import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  Link,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function Courses() {
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
         Web 3.0 and Metaverse
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              (Core)
            </Text>
            <HStack justifyContent="center">
              
              <Text fontSize="5xl" fontWeight="700">
                Quarter1
              </Text>
              
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                HTML and CSS
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Web 3.0 and Metaverse Theory
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Object-Oriented Programming with TypeScript
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                TypeScript for React
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
              <Link href="https://www.piaic.org/">Apply</Link>
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>     
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                (Core)
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="5xl" fontWeight="700">
                  Quarter2
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue('gray.50', 'gray.700')}
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Next.js 13 Web Development
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Next.js 13 using Chakra UI (Remote Zoom Class)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote Zoom Class)
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  API Routes with Next.js
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  SQL and Prisma
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Apply
              </Button>
            </Box>
            </VStack>
        </PriceWrapper>

        <PriceWrapper>
        <Box position="relative">
        <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg={useColorModeValue('red.300', 'red.700')}
                px={3}
                py={1}
                color={useColorModeValue('gray.900', 'gray.300')}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Important
              </Text>
            </Box>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              (Core)
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="5xl" fontWeight="700">
                Quarter3
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Blockchain and Metaverse Theory
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Smart Contract Development in Solidity
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Dapp Development using Ethers.js and Next.js 13
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Tokennomics
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Apply
              </Button>
            </Box>
          </VStack>
          </Box> 
        </PriceWrapper>


        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              (Core)
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="5xl" fontWeight="700">
                Quarter4
              </Text>
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Open Metaverse Web Development
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Blender 3D asset Creation for the Metaverse (Remote Zoom Class)
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Assignments
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Apply
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
    
  );
}