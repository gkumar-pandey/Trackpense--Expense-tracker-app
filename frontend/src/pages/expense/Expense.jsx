import {
  Box,
  Button,
  Container,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import PageTitle from "../../components/pagetitle/PageTitle";
import { MdAdd } from "react-icons/md";
import DataTable from "../../components/datatable/dataTable";
import {
  extractCategory,
  filterAndSortData,
  getTotalAmount,
} from "../../utils";
import { AddExpenseForm, Filter, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchExpenses,
  handleFilter,
  handleSort,
} from "../../store/features/expense";

const Expense = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { expenses, isLoading, error, filter } = useSelector(
    (state) => state.expense
  );
  const dispatch = useDispatch();

  const expenseTableHeadTitle = [
    "SI NO",
    "Pay To",
    "Amount",
    "Category",
    "Description",
  ];

  useEffect(() => {
    if (expenses.length === 0) {
      dispatch(fetchExpenses());
    }
  }, []);

  const expenseData = filterAndSortData(
    expenses,
    filter.sortBy,
    filter.category
  );
  const expenseCategories = extractCategory(expenses);

  return (
    <div>
      <Box minH={"100vh"} bgColor={"#3A3B47"}>
        <Container maxW={"container.xl"}>
          <PageTitle title={"Expense"} />
          {isLoading ? (
            <Loader />
          ) : (
            <Box>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Button
                  onClick={onOpen}
                  leftIcon={<MdAdd />}
                  colorScheme="teal"
                  variant="solid"
                >
                  Add Expense
                </Button>
                <Filter
                  handleSort={(value) => dispatch(handleSort(value))}
                  handleFilter={(e) => dispatch(handleFilter(e.target.value))}
                  sortBy={filter?.sortBy}
                  filterCategoryValue={filter?.category}
                  categories={expenseCategories}
                />
              </Box>
              <DataTable
                tableBodyData={expenseData}
                tableHeadData={expenseTableHeadTitle}
                type={"expense"}
              />
              <Box textColor={"white"} py={4}>
                <Heading>Total Expense : {getTotalAmount(expenses)}</Heading>
              </Box>
            </Box>
          )}
        </Container>
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent textColor={"white"} bgColor={"#3A3B47"}>
            <ModalHeader>Add Expense</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddExpenseForm onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};

export default Expense;
