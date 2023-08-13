import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <Stack
        sx={{ flexDirection:{ xs:'column',sm:"column",md:i18n.language === "ar" ? "row-reverse" : "row"} }}
        width="100%"
        py={6}
        spacing={6}
      >
        <Box
          width={{xs:"100%",sm:"100%", md:"50%"}}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            fontFamily="SemiBold"
            color="#202020"
            fontWeight="600"
            mb={4}
            variant={"h4"}
          sx={{textAlign:i18n.language === "ar"?"right":"left"}}
          >
            {t("header.title")}
          </Typography>
          <Typography
            fontFamily="Regular"
            color="#202020"
            fontSize="1.1rem"
            lineHeight="35px"
            sx={{textAlign:i18n.language === "ar"?"right":"left"}}
          >
            {" "}
           {t('header.txt1')}
          </Typography>
          <Typography
            fontFamily="Regular"
            color="#202020"
            fontSize="1.1rem"
            lineHeight="35px"
            sx={{textAlign:i18n.language === "ar"?"right":"left"}}
          >
            {" "}
          {t('header.txt2')}
          </Typography>
          <Typography
            fontFamily="Regular"
            color="#202020"
            fontSize="1.1rem"
            lineHeight="35px"
            sx={{textAlign:i18n.language === "ar"?"right":"left"}}
          >
            {t('header.txt3')}{" "}
          </Typography>{" "}
        </Box>
        <Box width={{xs:"100%",sm:"100%", md:"50%"}}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/elgherbal.appspot.com/o/civil-justice%2Fappeal-court-image.jpg?alt=media&token=55871579-4e19-44f5-8229-5eab70e53b56"
            alt="court"
            width="100%"
            height="auto"
            style={{ borderRadius: "7px" }}
          />
        </Box>
      </Stack>
    </React.Fragment>
  );
}
