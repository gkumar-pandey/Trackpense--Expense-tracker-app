import { Spinner, Text, VStack } from "@chakra-ui/react";

const Loader = () => {
  return (
    <VStack>
      <Spinner size={'xl'} color="#00D4FF" />
      <Text as={'b'} fontSize={'2xl'} color={'#00D4FF'} >Loading..</Text>
    </VStack>
  );
};

export default Loader;
