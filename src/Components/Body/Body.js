import React from "react";
import { Box, Typography, Divider, TextField } from "@mui/material";
import Charts from "./Chart/Chart";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AddIcon from "@mui/icons-material/Add";

const Body = () => {
  const [value, setValue] = React.useState([null, null]);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        mt={"2%"}
        ml={"18%"}
      >
        <Box
          display={"flex"}
          width={"25%"}
          height={"10vh"}
          p={"10px"}
          border={"1px solid gray"}
          borderRadius={"8px"}
        >
          <Box border={"36px solid grey"} borderRadius={"100px"} />
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            justifyContent={"center"}
            ml={"2%"}
          >
            <Typography>All Users</Typography>
            <Typography>100.00% users</Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          width={"25%"}
          height={"10vh"}
          p={"10px"}
          border={"dotted 2px gray"}
          borderRadius={"8px"}
          style={{
            opacity: 0.5,
          }}
        >
          <Box border={"36px solid grey"} borderRadius={"100px"} />
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            ml={"2%"}
          >
            <AddIcon />
            <Typography> Add Segment</Typography>
          </Box>
        </Box>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          style={{ justifyContent: "flex-end" }}
        >
          <DateRangePicker
            startText="Start-Date"
            endText="End-Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} style={{ width: "25%" }} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} style={{ width: "25%" }} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </Box>
      <Divider style={{ margin: 30 }} />
      <Charts />
    </>
  );
};

export default Body;
