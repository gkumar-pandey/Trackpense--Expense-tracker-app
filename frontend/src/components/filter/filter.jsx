import { Box, Text } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { HIGH_TO_LOW, LOW_TO_HIGH } from "../../utils";

const Filter = ({
  sortBy,
  handleSort,
  categories,
  handleFilter,
  filterCategoryValue,
}) => {
  const sortFilterTypes = [
    { text: "Amount (Low To High)", value: LOW_TO_HIGH },
    { text: "Amount (High To Low)", value: HIGH_TO_LOW },
  ];

  return (
    <Box
      boxShadow={"md"}
      border={"1px solid grey"}
      px={2}
      py={1}
      borderRadius={6}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      bgColor={"#181818"}
      textColor={"white"}
      gap={4}
    >
      <Box display={"flex"} gap={2}>
        <Text as={"b"} fontSize={"lg"}>
          Sort
        </Text>
        <RadioGroup
          onChange={handleSort}
          display={"flex"}
          gap={4}
          value={sortBy}
        >
          {sortFilterTypes.map((ele, idx) => (
            <Radio key={idx} value={ele?.value}>
              {ele?.text}
            </Radio>
          ))}
        </RadioGroup>
      </Box>
      <Box flexDirection={"row"} display={"flex"} gap={4} alignItems={"center"}>
        <Text fontSize={"lg"} as={"b"}>
          Filter
        </Text>
        <Select
          onChange={handleFilter}
          value={filterCategoryValue}
          placeholder="Select Category"
        >
          {categories.map((ele, idx) => (
            <option
              style={{ backgroundColor: "#181818" }}
              value={ele}
              key={idx}
            >
              {ele}
            </option>
          ))}
        </Select>
      </Box>
    </Box>
  );
};

export default Filter;
