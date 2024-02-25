import { Box, Button, Flex } from "@chakra-ui/react";
import Logo from "../logo/Logo";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineDashboard } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
  const navlinks = [
    { link: "/", text: "Dashboard", icon: <MdOutlineDashboard /> },
    { link: "/income", text: "Income", icon: <GiTakeMyMoney /> },
    { link: "/expense", text: "Expense", icon: <GiPayMoney /> },
    { link: "/saving", text: "Saving", icon: <MdOutlineAttachMoney /> },
    { link: "/report", text: "Report", icon: <TbReportMoney /> },
  ];
  return (
    <Box position={"fixed"} top={0} p={4}>
      <Box my={6}>
        <Logo />
      </Box>
      <Box display={"flex"} gap={4} flexDirection={"column"}>
        {navlinks.map((ele, idx) => (
          <Link key={idx} to={ele?.link}>
            <Button
              justifyContent={"flex-start"}
              leftIcon={ele?.icon}
              variant="outline"
              colorScheme="gray"
              textColor={"gray.50"}
              _hover={{ bgColor: "gray.50", textColor: "black" }}
              w={"100%"}
            >
              {ele.text}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;
