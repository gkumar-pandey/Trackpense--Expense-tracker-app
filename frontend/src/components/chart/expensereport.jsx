import { Pie, Bar } from "react-chartjs-2";
import { generateChartData, getTotalAmount } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchExpenses } from "../../store/features/expense";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import { MdCurrencyRupee } from "react-icons/md";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const ExpenseChartReport = () => {
  const dispatch = useDispatch();
  const { expenses } = useSelector((state) => state.expense);

  useEffect(() => {
    if (expenses.length === 0) {
      dispatch(fetchExpenses());
    }
  }, []);
  const chartData = generateChartData(expenses, "Expense");

  return (
    <Box my={4} width={"100%"} height={"100%"}>
      <Bar
        options={{
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "#ffff",
              },
            },
            x: {
              beginAtZero: true,
              ticks: {
                color: "#ffff",
              },
            },
          },
        }}
        data={chartData}
      />
      <Heading display={"flex"} my={4}>
        Total Expense :
        <Box display={"flex"} alignItems={"center"}>
          {<MdCurrencyRupee />} {getTotalAmount(expenses)}
        </Box>
      </Heading>
    </Box>
  );
};

export default ExpenseChartReport;
