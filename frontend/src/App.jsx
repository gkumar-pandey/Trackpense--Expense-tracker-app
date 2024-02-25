import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard, Expense, Income, Report, Saving } from "./pages";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { SideBar } from "./components";

function App() {
  return (
    <Router>
      <Box>
        <Grid gridTemplateColumns={"1fr 6fr"} minH={"100vh"}>
          <GridItem bgColor={"#181818"} maxW={"300px"}>
            <SideBar />
          </GridItem>
          <GridItem>
            <Box>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/income" element={<Income />} />
                <Route path="/expense" element={<Expense />} />
                <Route path="/saving" element={<Saving />} />
                <Route path="/report" element={<Report />} />
              </Routes>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
