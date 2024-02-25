export const LOW_TO_HIGH = "LOW_TO_HIGH";
export const HIGH_TO_LOW = "HIGH_TO_LOW";
export const extractCategory = (data) => {
  return [...new Set(data.map((ele) => ele?.category))];
};

export const getTotalAmount = (data) => {
  return data.reduce((acc, curr) => acc + curr?.amount, 0);
};

export const sortData = (data, sortBy) => {
  if (sortBy === LOW_TO_HIGH) {
    return [...data]?.sort((a, b) => a?.amount - b?.amount);
  } else if (sortBy === HIGH_TO_LOW) {
    return [...data]?.sort((a, b) => b.amount - a.amount);
  }
  return data;
};

export const filterDataByCategory = (data, category) => {
  return data?.filter(
    (ele, idx) => ele?.category?.toLowerCase() === category?.toLowerCase()
  );
};

export const filterAndSortData = (data, sortBy, category) => {
  let filteredData = [...data];
  console.log(category);

  if (sortBy) {
    filteredData = sortData(filteredData, sortBy);
  }

  if (category) {
    filteredData = filterDataByCategory(filteredData, category);
  }
  return filteredData;
};

export const generateChartData = (data, title) => {
  const labels = extractCategory(data);
  const amounts = labels.map((item, idx) => {
    return data.reduce(
      (acc, curr) =>
        curr.category.toLowerCase() === item.toLowerCase()
          ? acc + curr.amount
          : acc,
      0
    );
  });

  return {
    labels: labels,
    datasets: [
      {
        label: title,
        data: amounts,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9966FF",
          "#FF9800",
          "#009688",
          "#FF5722",
          "#8BC34A",
          "#03A9F4",
          "#673AB7",
          "#FFC107",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4CAF50",
          "#9966FF",
          "#FF9800",
          "#009688",
          "#FF5722",
          "#8BC34A",
          "#03A9F4",
          "#673AB7",
          "#FFC107",
        ],
        
      },
    ],
    
  };
};
