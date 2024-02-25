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
import { MdCurrencyRupee, MdAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  PageTitle,
  Loader,
  Filter,
  DataTable,
  AddIncomeForm,
} from "../../components";
import {
  extractCategory,
  filterAndSortData,
  getTotalAmount,
} from "../../utils";
import {
  fetchIncomes,
  handleFilter,
  handleSort,
} from "../../store/features/income";

const Income = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { incomes, error, isLoading, filter } = useSelector(
    (state) => state.income
  );
  const dispatch = useDispatch();
  const incomeTableHeadTitle = ["SI NO", "Amount", "Description", "Category"];
  const categories = extractCategory(incomes);
  useEffect(() => {
    if (incomes.length === 0) {
      dispatch(fetchIncomes());
    }
  }, []);
  const incomesData = filterAndSortData(
    incomes,
    filter?.sortBy,
    filter?.category
  );

  return (
    <>
      <Box bgColor={"#3A3B47"}>
        <Container minH={"100vh"} maxW={"container.xl"}>
          <PageTitle title={"Income"} />
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
                  Add Income
                </Button>
                <Filter
                  handleSort={(value) => dispatch(handleSort(value))}
                  handleFilter={(e) => dispatch(handleFilter(e.target.value))}
                  sortBy={filter?.sortBy}
                  filterCategoryValue={filter?.category}
                  categories={categories}
                />
              </Box>
              <DataTable
                tableBodyData={incomesData}
                tableHeadData={incomeTableHeadTitle}
                type={"income"}
              />
              <Box py={4}>
                <Heading display={"flex"} alignItems={"center"} color={"white"}>
                  Total Income :
                  <Box display={"flex"} alignItems={"center"}>
                    <MdCurrencyRupee />
                    {getTotalAmount(incomes)}
                  </Box>
                </Heading>
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
            <ModalHeader>Add Income</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddIncomeForm onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Income;
