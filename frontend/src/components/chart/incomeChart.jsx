import { Pie, Bar } from "react-chartjs-2";
import {
  extractCategory,
  generateChartData,
  getTotalAmount,
} from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { fetchIncomes } from "../../store/features/income";
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
const IncomeChartReport = () => {
  const { incomes } = useSelector((state) => state.income);
  const dispatch = useDispatch();
  const labels = extractCategory(incomes);

  useEffect(() => {
    if (incomes.length === 0) {
      dispatch(fetchIncomes());
    }
  }, []);
  const chartData = generateChartData(incomes, "Income");

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
      <Heading display={'flex'} my={4}>
        Total Income :
        <Box display={"flex"} alignItems={"center"}>
          {<MdCurrencyRupee />} {getTotalAmount(incomes)}
        </Box>
      </Heading>
    </Box>
  );
};

export default IncomeChartReport;
