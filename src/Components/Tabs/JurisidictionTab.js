import React from "react";
import { Alert, Box, Stack, Typography, Grid } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { useTranslation } from "react-i18next";
import Circles from "./JurisidictionComp/Circles";

export default function JurisidictionTab() {
  const { t, i18n } = useTranslation();

  const circlesTxt = [
    { txt: t("juri.circle"), name: "c1" },
    { txt: t("juri.circle1"), name: "c2" },
    { txt: t("juri.circle2"), name: "c3" },
    { txt: t("juri.circle3"), name: "c4" },
  ];

  return (
    <React.Fragment>
      <Box px={4} pb={6}>
        <Typography
          sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
          fontFamily="SemiBold"
          color="#202020"
          variant={"h5"}
        >
          {t("juri.Their Jurisdiction")}
        </Typography>
        <Typography
          py={2}
          fontFamily="Regular"
          sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
        >
          {t("juri.txt")}
          <br />
          {t("juri.txt1")}
        </Typography>

        <Box pt={3}>
          <Box
            width="100%"
            sx={{
              display: "flex",
              justifyContent:
                i18n.language === "ar" ? "flex-end" : "flex-start",
            }}
          >
            <Typography
              sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
              backgroundColor="rgba(251,168,0,0.2)"
              color="#FD9200"
              fontWeight="bold"
              fontSize="1.1rem"
              fontFamily="SemiBold"
              borderRadius="7px"
              p={1}
              width={{ xs: "100%", sm: "60%", md: "20%" }}
            >
              {t("juri.ex")}
            </Typography>
          </Box>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem
              sx={{
                flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
              }}
            >
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontFamily: "Regular",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("juri.t1")}
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              sx={{
                flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
              }}
            >
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontFamily: "Regular",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("juri.t2")}
              </TimelineContent>
            </TimelineItem>

            <TimelineItem
              sx={{
                flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
              }}
            >
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  fontFamily: "Regular",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("juri.t3")}
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
        <Stack
          direction={{
            xs: "column",
            sm: i18n.language === "ar" ? "row-reverse" : "row",
            md: i18n.language === "ar" ? "row-reverse" : "row",
          }}
          width="100%"
          alignItems="center"
          my={4}
        >
          <Box width={{ xs: "100%", sm: "60%", md: "15%" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/elgherbal.appspot.com/o/special_courts%2Fjudge1.png?alt=media&token=07b459af-b94f-4b05-9659-c7f0d0d80227"
              alt="one"
              width="100%"
              height="auto"
            />
          </Box>
          <Box width="85%">
            <Typography
              fontFamily="Regular"
              sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
            >
              {t("juri.advo")}
            </Typography>
          </Box>
        </Stack>
        <Grid container mb={4} rowSpacing={2} columnSpacing={4}>
          {circlesTxt.map((grid, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={3}
              container
              display="flex"
              justifyContent="center"
            >
              <Circles text={grid.txt} />
            </Grid>
          ))}
        </Grid>
        <Alert
          sx={{
            display: "flex",
            flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
          }}
          severity="info"
        >
          <Typography
            fontFamily="Regular"
            sx={{
              textAlign: i18n.language === "ar" ? "right" : "left",
              pr: i18n.language === "ar" ? 2 : 0,
            }}
          >
            {t("juri.alert")}
          </Typography>
        </Alert>
      </Box>
    </React.Fragment>
  );
}
