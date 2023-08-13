import React from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <Stack direction="column">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        backgroundColor="#0C9FC1"
        height="35vh"
        mt={6}
      >
        <Typography py={1} fontFamily="Medium" fontSize={{xs:"1.1rem",sm:"1.5rem",md:"2rem"}} color="white">
          {t("footer.sign")}
        </Typography>
        <Typography pb={4} fontFamily="Regular" fontSize={{xs:"0.6rem",sm:"0.8rem",md:"1rem"}} color="white">
          {t("footer.update")}
        </Typography>
        <Stack direction="row" width="100%" justifyContent="center">
          <TextField
            placeholder={t("footer.placeholder")}
            inputProps={{
              sx: {
                textAlign: i18n.language === "ar" ? "right" : "left",
                "&::placeholder": {
                  textAlign: i18n.language === "ar" ? "right" : "left",
                },
              },
            }}
            sx={{ bgcolor: "white", borderRadius: "7px", width: "35%" }}
          />
          <Button
            sx={{
              color: "white",
              bgcolor: "#252525",
              fontFamily: "Regular",
              borderRadius: "7px",
              marginLeft: 2,
              px: 4,
            }}
          >
            {t("footer.subscribe")}
          </Button>
        </Stack>
      </Box>
      <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}} backgroundColor="#252525" height="12vh">
        <Typography
          py={2}
          textAlign="center"
          fontFamily="Regular"
          color="white"
        >
          {t("footer.rights")}
          <br />
          {t("footer.copy")}
        </Typography>
      </Box>
    </Stack>
  );
}
