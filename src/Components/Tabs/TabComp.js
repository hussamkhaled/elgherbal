import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import JurisidictionTab from "./JurisidictionTab";
import DelayOfAppealTab from "./DelayOfAppealTab";
import { useTranslation } from "react-i18next";
const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#0C9FC1",
  },
});

const AntTab = styled(Tab)({
  fontSize: "0.9rem",
  fontFamily: "Regular",
  color: "#0C9FC1",
  "&:hover": {
    color: "#0C9FC1",
    opacity: 1,
  },
  "&.Mui-selected": {
    color: "#0C9FC1",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#0C9FC1",
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box mt={5}>
          <Typography component={"span"} variant={"body2"}>
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function TabComp() {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (i18n.language === "ar") {
      setValue(1);
    }
  }, [i18n.language]);
  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: i18n.language === "ar" ? "flex-end" : "flex-start",
        }}
      >
        {i18n.language === "ar" ? (
          <AntTabs value={value} onChange={handleChange} opacity="1">
            <AntTab
              label={t("juri.delay")}
              sx={{ mr: 4 }}
              color="#0C9FC1"
              {...a11yProps(1)}
            />
            <AntTab
              label={t("juri.juri")}
              sx={{ mr: 4, px: "3%" }}
              color="#0C9FC1"
              {...a11yProps(0)}
            />
          </AntTabs>
        ) : (
          <AntTabs value={value} onChange={handleChange} opacity="1">
            <AntTab
              label={t("juri.juri")}
              sx={{ mr: 4, pl: "12%" }}
              color="#0C9FC1"
              {...a11yProps(0)}
            />
            <AntTab
              label={t("juri.delay")}
              sx={{ mr: 4 }}
              color="#0C9FC1"
              {...a11yProps(1)}
            />
          </AntTabs>
        )}
      </Box>
      <TabPanel
        label="Jurisdiction"
        value={value}
        sx={{ mr: 4 }}
        index={i18n.language === "ar" ? 1 : 0}
      >
        <JurisidictionTab />
      </TabPanel>
      <TabPanel
        label="Delay Of Appeal"
        value={value}
        index={i18n.language === "ar" ? 0 : 1}
      >
        <DelayOfAppealTab />
      </TabPanel>
    </Box>
  );
}
