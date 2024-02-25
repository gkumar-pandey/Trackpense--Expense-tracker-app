import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { extractCategory } from "../../utils";
import sampleIncomeData, { sampleExpenseData } from "../../data/data";
import { useDispatch } from "react-redux";
import { addNewIncome } from "../../store/features/income";
import { addNewExpense } from "../../store/features/expense";
import { addNewSaving } from "../../store/features/saving";

const AddIncomeForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const incomeFormValues = {
    amount: 0,
    description: "",
    category: "",
  };
  const categories = extractCategory(sampleIncomeData);

  return (
    <Box>
      <Formik
        initialValues={incomeFormValues}
        onSubmit={(values, actions) => {
          onClose();
          dispatch(addNewIncome(values));
          actions.resetForm(incomeFormValues);
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={2}>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="amount">Amount</FormLabel>
                <Field
                  as={Input}
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="Amount"
                />
              </FormControl>

              <FormControl isRequired={true}>
                <FormLabel>Description</FormLabel>
                <Field
                  as={Textarea}
                  name="description"
                  type="text"
                  id="description"
                  placeholder="Description"
                />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel>Category</FormLabel>
                <Field as={Select} id="category" name="category" size={"md"}>
                  <option style={{ backgroundColor: "#181818" }}>
                    Select Category
                  </option>
                  {categories.map((ele, idx) => (
                    <option
                      value={ele}
                      key={idx}
                      style={{ backgroundColor: "#181818" }}
                    >
                      {ele}
                    </option>
                  ))}
                </Field>
              </FormControl>
            </VStack>
            <HStack justifyContent={"flex-end"}>
              <Button colorScheme="teal" type="button" variant={"outline"}>
                Close
              </Button>
              <Button my={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export const AddExpenseForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const expenseFormValues = {
    pay_to: "",
    amount: 0,
    category: "",
    description: "",
  };
  const categories = extractCategory(sampleExpenseData);

  return (
    <Box>
      <Formik
        initialValues={expenseFormValues}
        onSubmit={(values, actions) => {
          dispatch(addNewExpense(values));
          actions.resetForm(expenseFormValues);
          onClose();
        }}
      >
        {({ handleSubmit, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={2}>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="pay_to">Pay To</FormLabel>
                <Field
                  name="pay_to"
                  id="pay_to"
                  as={Input}
                  type="text"
                  placeholder="Pay To"
                />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="amount">Amount</FormLabel>
                <Field
                  name="amount"
                  id="amount"
                  as={Input}
                  type="number"
                  placeholder="Amount"
                />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Field
                  as={Textarea}
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Description"
                />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Field name="category" id="category" as={Select} size={"md"}>
                  <option style={{ backgroundColor: "#181818" }}>
                    Select Category
                  </option>
                  {categories.map((ele, idx) => (
                    <option key={idx} style={{ backgroundColor: "#181818" }}>
                      {ele}
                    </option>
                  ))}
                </Field>
              </FormControl>
            </VStack>
            <HStack justifyContent={"flex-end"}>
              <Button colorScheme="teal" type="button" variant={"outline"}>
                Close
              </Button>
              <Button my={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export const AddSavingForm = ({ onClose }) => {
  const initialSavingFormValues = {
    source: "",
    description: "",
    amount: 0,
    category: "",
  };
  const dispatch = useDispatch();
  const savingCategories = ["Emergency Fund", "Retirement", "Car Fund"];
  return (
    <Box>
      <Formik
        initialValues={initialSavingFormValues}
        onSubmit={(values, actions) => {
          dispatch(addNewSaving(values));
          actions.resetForm(initialSavingFormValues);
          onClose();
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <VStack>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="source">Source</FormLabel>
                <Field
                  placeholder="Source"
                  as={Input}
                  type="text"
                  name="source"
                  id="source"
                />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="amount">Amount</FormLabel>
                <Field
                  as={Input}
                  type="number"
                  name="amount"
                  id="amount"
                  placeholder="Amount"
                />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Field
                  as={Textarea}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                />
              </FormControl>
              <FormControl isRequired={true}>
                <FormLabel htmlFor="category">Category</FormLabel>
                <Field as={Select} name="category" id="category">
                  <option style={{ backgroundColor: "#181818" }}>
                    Select Category
                  </option>
                  {savingCategories.map((ele, idx) => (
                    <option
                      style={{ backgroundColor: "#181818" }}
                      value={ele}
                      key={idx}
                    >
                      {ele}
                    </option>
                  ))}
                </Field>
              </FormControl>
            </VStack>
            <HStack justifyContent={"flex-end"}>
              <Button colorScheme="teal" type="button" variant={"outline"}>
                Close
              </Button>
              <Button my={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </HStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddIncomeForm;
