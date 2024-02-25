import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Select,
  useStatStyles,
} from "@chakra-ui/react";
import { PageTitle } from "../../components";
import { useState } from "react";
import IncomeChartReport from "../../components/chart/incomeChart";
import ExpenseChartReport from "../../components/chart/expensereport";
import ExpensePieChart from "../../components/chart/ExpensePieChart";

const Report = () => {
  const [generateType, setGenerateType] = useState("");
  const [isGenerate, setIsGenerate] = useState(false);
  return (
    <Box textColor={"white"} bgColor={"#3A3B47"}>
      <Container minH={"100vh"} maxW={"container.xl"}>
        <PageTitle title={"Report"} />
        <HStack>
          <Box>
            <Select
              placeholder="Select Report Type"
              colorScheme="teal"
              value={generateType}
              onChange={(e) => {
                setGenerateType(e.target.value);
                setIsGenerate(false);
              }}
            >
              <option
                style={{ backgroundColor: "#181818" }}
                value={"Income Vs Expense"}
              >
                Income Vs Expense
              </option>
              <option
                style={{ backgroundColor: "#181818" }}
                value={"Expense Breakdown"}
              >
                Expense Breakdown
              </option>
            </Select>
          </Box>
          <Button
            isDisabled={!generateType}
            onClick={() => setIsGenerate(true)}
          >
            Generate Report
          </Button>
        </HStack>
        <Box>
          {generateType === "Income Vs Expense" && isGenerate && (
            <Box py={6}>
              <Grid gap={6} gridTemplateColumns={"1fr 1fr"}>
                <GridItem>
                  <Heading size={"lg"}>Income Report</Heading>
                  <IncomeChartReport />
                </GridItem>
                <GridItem>
                  <Heading size={"lg"}>Expense Report</Heading>
                  <ExpenseChartReport />
                </GridItem>
              </Grid>
            </Box>
          )}
          {generateType === "Expense Breakdown" && isGenerate && (
            <Box>
              <ExpensePieChart />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Report;
