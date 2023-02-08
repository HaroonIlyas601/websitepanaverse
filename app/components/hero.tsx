"use client"
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Link,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Hero() {
    return (
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={650}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'red.400',
                  zIndex: -1,
                }}>
                Panaverse Dao
              </Text>
              <br />
              <Text as={'span'} color={'red.400'}>
                Web 3.0 and Metaverse
              </Text>
            </Heading>
            <Text color={'gray.500'}>
            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={16}
                colorScheme={'red'}
                bg={'red.400'}
                color="black"
                _hover={{ bg: 'red.500' }}>
                <Link href="https://www.piaic.org/">Apply</Link>
              </Button>
            
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
           
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
           
              <Image
                alt={'Hero Image'}
                align={'center'}
                w={'100%'}
                h={'100%'}
               
                  src={
                    '/image/panaverse.png'
                  }>
                  </Image>
            
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
  
 