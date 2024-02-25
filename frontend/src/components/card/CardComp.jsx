import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
const CardComp = ({ title, value, icon, currencyIcon }) => {
  return (
    <>
      <Card
        textColor={"white"}
        bgGradient="linear(to-l, #4FDCD8, #5D67F1)"
        boxShadow={"md"}
        maxW={"350px"}
      >
        <CardHeader>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Heading size={"md"}>{title}</Heading>
            <Image
              boxSize={"30px"}
              objectFit="cover"
              src={icon}
              alt="Dan Abramov"
            />
          </Box>
        </CardHeader>
        <CardBody>
          <Heading flexDirection={'row'} alignItems={'center'} display={'flex'} as={"h1"} size={"lg"}>
            <Box>{currencyIcon}</Box>
            <Box>{value}</Box>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default CardComp;
