import { Box, Container, Grid } from "@chakra-ui/react";

import PageTitle from "../../components/pagetitle/PageTitle";
import {
  expenseIcon,
  incomeIcon,
  savingIcon,
  currentBalanceIcon,
} from "../../assets";
import CardComp from "../../components/card/CardComp";
import { useDispatch, useSelector } from "react-redux";
import { getTotalAmount } from "../../utils";
import { useEffect } from "react";
import { fetchIncomes } from "../../store/features/income";
import { MdCurrencyRupee } from "react-icons/md";
import { fetchExpenses } from "../../store/features/expense";
import { fetchSaving } from "../../store/features/saving";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { incomes } = useSelector((state) => state.income);
  const { expenses } = useSelector((state) => state.expense);
  const { savings } = useSelector((state) => state.saving);

  const cardData = [
    {
      title: "Total Income",
      value: getTotalAmount(incomes),
      icon: incomeIcon,
      currencyIcon: <MdCurrencyRupee />,
    },
    {
      title: "Total Expenses",
      value: getTotalAmount(expenses),
      icon: expenseIcon,
      currencyIcon: <MdCurrencyRupee />,
    },
    {
      title: "Total Saving",
      value: getTotalAmount(savings),
      icon: savingIcon,
      currencyIcon: <MdCurrencyRupee />,
    },
    {
      title: "Current Balance",
      value: getTotalAmount(incomes) - getTotalAmount(expenses),
      icon: currentBalanceIcon,
      currencyIcon: <MdCurrencyRupee />,
    },
  ];
  useEffect(() => {
    if (incomes.length === 0) {
      dispatch(fetchIncomes());
    }
    if (expenses.length === 0) {
      dispatch(fetchExpenses());
    }
    if (savings.length === 0) {
      dispatch(fetchSaving());
    }
  }, []);
  return (
    <Box minH={"100vh"} bgColor={"#3A3B47"}>
      <Container maxW={"container.xl"}>
        <PageTitle title="Dashboard" />
        <Grid my={4} templateColumns={"repeat(4,1fr)"} gap={4}>
          {cardData.map((ele, idx) => (
            <CardComp key={idx} {...ele} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
