import {
  Avatar,
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <Box bgColor={'#181818'} width={"100%"} position={'sticky'} shadow={'md'} top={0} zIndex={5} >
      <Container
        maxW={"container.xl"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        py={2}
      >
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <ImSearch color="white" />
            </InputLeftElement>
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>
        </Box>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Container>
    </Box>
  );
};

export default Header;
