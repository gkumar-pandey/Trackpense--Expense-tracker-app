import { Box, Flex, Heading } from "@chakra-ui/react";
import { TbPigMoney } from "react-icons/tb";
const Logo = () => {
  return (
    <Flex textColor={'white'} alignItems={"center"}>
      <Heading>
        <TbPigMoney />
      </Heading>
      <Heading  >Trackpense</Heading>
    </Flex>
  );
};

export default Logo;
