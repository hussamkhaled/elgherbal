import React from "react";
import { Alert, Box, Stack, Typography, Grid, Card } from "@mui/material";
import arrow from "../../assets/arrow.png";
import { useTranslation } from "react-i18next";
import left from "../../assets/leftarrow.png";

export default function DelayOfAppealTab() {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <Box
        px={4}
        pb={6}
        sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
      >
        <Typography
          sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
          mb={2}
          fontFamily="SemiBold"
          color="#202020"
          variant={"h5"}
        >
          {t("delay.final")}
        </Typography>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            container
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                width: { xs: "100%", sm: "100%", md: "40%" },
                height: "100%",
              }}
            >
              <Box
                px={{ xs: 2, sm: 3, md: 6 }}
                py={2}
                borderTop="7px solid #FD9200"
              >
                <Typography
                  sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
                  fontFamily="Regular"
                  pt={2}
                >
                  {t("delay.p1")}
                  <strong> {t("delay.days")}</strong>
                </Typography>

                <Box
                  borderRadius="7px"
                  backgroundColor="#FAFAFA"
                  boxShadow="0px 4px 7px rgba(0, 0, 0, 0.1)"
                  px={1.5}
                  py={1}
                  my={2}
                  fontFamily="Regular"
                  sx={{
                    borderLeft:
                      i18n.language === "ar" ? "none" : "7px solid #0C9FC1",
                    borderRight:
                      i18n.language === "ar" ? "7px solid #0C9FC1" : "none",
                    textAlign: i18n.language === "ar" ? "right" : "left",
                  }}
                >
                  {t("delay.c1")}
                </Box>

                <Box
                  borderRadius="7px"
                  backgroundColor="#FAFAFA"
                  boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                  px={1.5}
                  py={1}
                  my={2}
                  fontFamily="Regular"
                  sx={{
                    borderLeft:
                      i18n.language === "ar" ? "none" : "7px solid #0C9FC1",
                    borderRight:
                      i18n.language === "ar" ? "7px solid #0C9FC1" : "none",
                    textAlign: i18n.language === "ar" ? "right" : "left",
                  }}
                >
                  {t("delay.c2")}
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                width: { xs: "100%", sm: "100%", md: "80%" },
                height: "100%",
              }}
            >
              <Box
                px={{ xs: 2, sm: 3, md: 6 }}
                py={2}
                borderTop="7px solid #FD9200"
              >
                <Typography
                  sx={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
                  fontFamily="Regular"
                  pt={2}
                >
                  {t("delay.p2")}
                  <strong> {t("month")}</strong>
                </Typography>
                <Box
                  borderRadius="7px"
                  backgroundColor="#FAFAFA"
                  boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                  px={1.5}
                  py={1}
                  my={2}
                  fontFamily="Regular"
                  sx={{
                    borderLeft:
                      i18n.language === "ar" ? "none" : "7px solid #0C9FC1",
                    borderRight:
                      i18n.language === "ar" ? "7px solid #0C9FC1" : "none",
                    textAlign: i18n.language === "ar" ? "right" : "left",
                  }}
                >
                  {t("delay.pc2")}
                </Box>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                width: { xs: "100%", sm: "100%", md: "80%" },
                height: "100%",
              }}
            >
              <Box
                px={{ xs: 2, sm: 3, md: 6 }}
                py={2}
                borderTop="7px solid #FD9200"
              >
                <Typography fontFamily="Regular" pt={2}>
                  {t("delay.p3")}
                  <strong> {t("delay.months")}</strong>
                </Typography>
                <Box
                  borderRadius="7px"
                  backgroundColor="#FAFAFA"
                  boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
                  px={1.5}
                  py={1}
                  my={2}
                  fontFamily="Regular"
                  sx={{
                    borderLeft:
                      i18n.language === "ar" ? "none" : "7px solid #0C9FC1",
                    borderRight:
                      i18n.language === "ar" ? "7px solid #0C9FC1" : "none",
                  }}
                >
                  {t("delay.pc3")}
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Box my={6}>
          <Typography
            my={3}
            fontFamily="SemiBold"
            color="#202020"
            variant={"h5"}
          >
            {t("delay.title2")}
          </Typography>
          <Typography fontFamily="Regular">
            {t("delay.tp1")}
            <strong> {t("delay.hours")}</strong>
          </Typography>{" "}
          <Stack
            sx={{
              flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
            }}
            pl={6}
            alignItems="flex-end"
          >
            {i18n.language === "ar" ? (
              <img src={left} alt="left" />
            ) : (
              <img src={arrow} alt="arrow" />
            )}
            <Typography
              fontFamily="Regular"
              sx={{ pr: i18n.language === "ar" ? 1 : 0 }}
              pl={2}
            >
              {t("delay.bullet1")}
            </Typography>
          </Stack>
        </Box>
        <Box mb={4}>
          <Typography fontFamily="Regular">
            {t("delay.tp2")}
            <strong> {t("delay.hours2")}</strong>
          </Typography>{" "}
          <Stack
            sx={{
              flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
            }}
            pl={6}
            alignItems="flex-end"
          >
            {i18n.language === "ar" ? (
              <img src={left} alt="left" />
            ) : (
              <img src={arrow} alt="arrow" />
            )}
            <Typography
              fontFamily="Regular"
              sx={{ pr: i18n.language === "ar" ? 1 : 0 }}
              pl={2}
            >
              {t("delay.bullet2")}
            </Typography>
          </Stack>
        </Box>
        <Alert
          sx={{
            display: "flex",
            flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
          }}
          severity="warning"
        >
          <Typography
            sx={{ pr: i18n.language === "ar" ? 2 : 0 }}
            fontFamily="Regular"
          >
            {t("delay.alert")}
          </Typography>
        </Alert>
        <Typography my={3} fontFamily="SemiBold" color="#202020" variant={"h5"}>
          {t("delay.title3")}
        </Typography>
        <Stack
          sx={{
            flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
          }}
          pl={6}
          alignItems="flex-end"
        >
          {i18n.language === "ar" ? (
            <img src={left} alt="left" />
          ) : (
            <img src={arrow} alt="arrow" />
          )}
          <Typography
            fontFamily="Regular"
            sx={{ pr: i18n.language === "ar" ? 1 : 0 }}
            pl={2}
          >
            {t("delay.tb1")}
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: i18n.language === "ar" ? "row-reverse" : "row",
          }}
          pl={6}
          alignItems="flex-end"
        >
          {i18n.language === "ar" ? (
            <img src={left} alt="left" />
          ) : (
            <img src={arrow} alt="arrow" />
          )}
          <Typography
            fontFamily="Regular"
            sx={{ pr: i18n.language === "ar" ? 1 : 0 }}
            pl={2}
          >
            {t("delay.tb2")}
          </Typography>
        </Stack>
      </Box>
    </React.Fragment>
  );
}
