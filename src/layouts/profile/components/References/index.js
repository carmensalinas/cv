import { useTranslation } from "react-i18next";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function References() {
  const { t } = useTranslation();
  const references = t("references", { returnObjects: true });

  return (
    <MDBox pb={2}>
      <MDTypography variant="h5" fontWeight="medium">
        {t("referencesTitle")}
      </MDTypography>
      <MDTypography variant="caption" color="text" display="block" mb={2}>
        {t("referencesNote")}
      </MDTypography>
      <Grid container spacing={2}>
        {references.map(({ name, role, company }) => (
          <Grid item xs={6} key={name}>
            <MDBox borderLeft="3px solid" borderColor="info.main" pl={1.5} py={0.5}>
              <MDTypography variant="button" fontWeight="bold" display="block">
                {name}
              </MDTypography>
              <MDTypography variant="caption" color="text" display="block">
                {role}
              </MDTypography>
              <MDTypography variant="caption" fontWeight="medium" display="block">
                {company}
              </MDTypography>
            </MDBox>
          </Grid>
        ))}
      </Grid>
    </MDBox>
  );
}

export default References;
