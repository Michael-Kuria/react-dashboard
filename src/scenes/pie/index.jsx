import PieChart from "../../components/PieChart";
import Header from "../../components/Header";
import { Box } from "@mui/system";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
