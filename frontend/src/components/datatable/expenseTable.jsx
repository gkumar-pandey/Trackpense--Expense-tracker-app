import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { sampleExpenseData } from "../../data/data";
import { getTotalIncome } from "../../utils";

const ExpenseTable = () => {
  const expenseTableHead = [
    "SI NO",
    "Pay To",
    "Amount",
    "Category",
    "Description",
  ];
  return (
    <>
      <Box my={6}>
        <TableContainer>
          <Table border={"1px solid #eee"} variant="simple" size={"md"}>
            <Thead>
              <Tr>
                {expenseTableHead.map((ele, idx) => (
                  <Td key={idx}>
                    <Text as={"b"}>{ele}</Text>
                  </Td>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {sampleExpenseData.map((ele, idx) => (
                <Tr key={idx}>
                  <Td>{idx + 1}</Td>
                  <Td>{ele?.pay_to}</Td>
                  <Td>{ele?.amount}</Td>
                  <Td>{ele?.category}</Td>
                  <Td>{ele?.description}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Box py={4}>
          <Heading>Total Expense : {getTotalIncome(sampleExpenseData)}</Heading>
        </Box>
      </Box>
    </>
  );
};

export default ExpenseTable;
