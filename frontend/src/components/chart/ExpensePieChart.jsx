import { Box, Heading } from "@chakra-ui/react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { generateChartData, getTotalAmount } from "../../utils";
import { useEffect } from "react";
import { fetchExpenses } from "../../store/features/expense";
import { MdCurrencyRupee } from "react-icons/md";

ChartJs.register(ArcElement, Tooltip, Legend);
const ExpensePieChart = () => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expense);
  const chartData = generateChartData(expenses, "Expense");
  useEffect(() => {
    if (expenses.length === 0) {
      dispatch(fetchExpenses());
    }
  }, []);
  return (
    <Box py={6}>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={4}
        maxW={"md"}
      >
        <Heading>Expense Breakdown</Heading>
        <Pie data={chartData} />
        <Heading display={"flex"} my={4}>
          Total Expense :
          <Box display={"flex"} alignItems={"center"}>
            {<MdCurrencyRupee />} {getTotalAmount(expenses)}
          </Box>
        </Heading>
      </Box>
    </Box>
  );
};

export default ExpensePieChart;
