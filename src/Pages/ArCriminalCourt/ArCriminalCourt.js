import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import TabComp from "../../Components/Tabs/TabComp";
import { Box, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ArCriminalCourt() {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0,0);
    i18n.changeLanguage("ar");
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
