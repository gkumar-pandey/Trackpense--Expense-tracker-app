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

const ExpenseBodyData = ({ idx, pay_to, amount, category, description }) => {
  return (
    <Tr>
      <Td>{idx + 1}</Td>
      <Td>{pay_to}</Td>
      <Td>{amount}</Td>
      <Td>{category}</Td>
      <Td>{description}</Td>
    </Tr>
  );
};

const IncomeBodyData = ({ idx, amount, description, source, category }) => {
  return (
    <Tr>
      <Td>{idx + 1}</Td>
      <Td>{amount}</Td>
      <Td>{description}</Td>
      <Td>{category}</Td>
    </Tr>
  );
};

const SavingBodyData = ({ idx, source, amount, description, category }) => {
  return (
    <Tr>
      <Td>{idx + 1}</Td>
      <Td>{source}</Td>
      <Td>{amount}</Td>
      <Td>{category}</Td>
      <Td>{description}</Td>
    </Tr>
  );
};

const DataTable = ({ tableHeadData, tableBodyData, type }) => {
  return (
    <>
      <Box my={6}>
        <TableContainer>
          <Table
            textColor={"white"}
            bgColor={"#181818"}
            border={"1px solid #D9E1EC"}
            variant="simple"
            size={"md"}
          >
            <Thead>
              <Tr>
                {tableHeadData.map((ele, idx) => (
                  <Td key={idx}>
                    <Text as={"b"}>{ele}</Text>
                  </Td>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {tableBodyData.map((ele, idx) => {
                if (type === "income") {
                  return <IncomeBodyData {...ele} idx={idx} key={idx} />;
                } else if (type === "expense") {
                  return <ExpenseBodyData {...ele} idx={idx} key={idx} />;
                } else if (type === "saving") {
                  return <SavingBodyData {...ele} idx={idx} key={idx} />;
                }
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default DataTable;
