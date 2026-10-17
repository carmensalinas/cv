import { useTranslation } from "react-i18next";

// @mui material components
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Skills() {
  const { t } = useTranslation();
  const groups = t("skillGroups", { returnObjects: true });

  return (
    <MDBox px={2} pb={2}>
      <MDTypography variant="h6" fontWeight="medium" mb={2}>
        {t("skills")}
      </MDTypography>
      <Grid container spacing={2}>
        {groups.map(({ name, items }, index) => (
          <Grid item xs={12} md={6} key={name}>
            <MDTypography
              variant="caption"
              fontWeight="bold"
              color="text"
              textTransform="uppercase"
              sx={{ letterSpacing: "0.05em" }}
            >
              {name}
            </MDTypography>
            <MDBox display="flex" flexWrap="wrap" gap={0.75} mt={0.75}>
              {items.map((item) => (
                <Chip
                  key={item}
                  label={item}
                  size="small"
                  color="info"
                  // the first group (Guidewire) is the core profile, so it stands out
                  variant={index === 0 ? "filled" : "outlined"}
                  sx={{ fontWeight: index === 0 ? 600 : 400 }}
                />
              ))}
            </MDBox>
          </Grid>
        ))}
      </Grid>
    </MDBox>
  );
}

export default Skills;
