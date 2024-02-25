import { Heading } from "@chakra-ui/react";

const PageTitle = ({ title }) => {
  return <Heading textColor={'white'} as={'h2'} py={4} size={"lg"}>{title}</Heading>;
};

export default PageTitle;
