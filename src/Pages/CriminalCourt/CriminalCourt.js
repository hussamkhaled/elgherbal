import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import TabComp from "../../Components/Tabs/TabComp";
import { Box, Stack } from "@mui/material";

export default function CriminalCourt() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <Stack width="100%" justifyContent="center" alignItems="center" mt="85px">
      <Box width="85%">
        <Header />
        <TabComp />
      </Box>
    </Stack>
  );
}
