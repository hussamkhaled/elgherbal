import React from "react";
import { Stack, AppBar, Box, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#0C9FC1", height: "80px", py: 1 }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
          }}
        >
          <Stack pl={2}>
            <Typography variant={"h6"} fontFamily="SemiBold">
              {t("logo")}
            </Typography>
          </Stack>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent:
                i18n.language === "ar" ? "flex-start" : "flex-end",
            }}
          >
            {i18n.language === "en" ? (
              <NavLink
                to="/ar"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "white",
                    textDecoration: "none",
                  };
                }}
                onClick={() => changeLanguage("ar")}
              >
                <Box mx={2.5} py={2} fontSize={"1.15rem"}>
                  <Typography fontFamily="Regular">عربي</Typography>
                </Box>
              </NavLink>
            ) : (
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "white",
                    textDecoration: "none",
                  };
                }}
                onClick={() => changeLanguage("en")}
              >
                <Box mx={2.5} py={2} fontSize={"1.15rem"}>
                  <Typography fontFamily="Regular">English</Typography>
                </Box>
              </NavLink>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
