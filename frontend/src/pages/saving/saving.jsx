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
import { sampleExpenseData } from "../../data/data";
import {
  extractCategory,
  filterAndSortData,
  getTotalAmount,
} from "../../utils";
import { AddSavingForm, Filter, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchSaving,
  handleFilter,
  handleSort,
} from "../../store/features/saving";

const Saving = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { savings, isLoading, error, filter } = useSelector(
    (state) => state.saving
  );
  const savingTableHeadTitle = [
    "SI NO",
    "Source",
    "Amount",
    "Category",
    "Description",
  ];

  useEffect(() => {
    if (savings.length === 0) {
      dispatch(fetchSaving());
    }
  }, []);

  const savingData = filterAndSortData(savings, filter.sortBy, filter.category);
  const savingCategories = extractCategory(savings);

  return (
    <>
      <Box minH={"100vh"} bgColor={"#3A3B47"}>
        <Container maxW={"container.xl"}>
          <PageTitle title={"Saving"} />
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
                  Add Saving
                </Button>
                <Filter
                  handleSort={(value) => dispatch(handleSort(value))}
                  handleFilter={(e) => dispatch(handleFilter(e.target.value))}
                  sortBy={filter?.sortBy}
                  filterCategoryValue={filter?.category}
                  categories={savingCategories}
                />
              </Box>
              <DataTable
                tableBodyData={savingData}
                tableHeadData={savingTableHeadTitle}
                type={"saving"}
              />
              <Box textColor={"white"} py={4}>
                <Heading>Total Saving : {getTotalAmount(savings)}</Heading>
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
            <ModalHeader>Add Saving</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddSavingForm onClose={onClose} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Saving;
