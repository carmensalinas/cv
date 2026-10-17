import { useTranslation } from "react-i18next";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Overview page components
import ExperienceDetails from "layouts/profile/components/ExperienceDetails";

// one color per module, same palette as the experience timeline
const moduleColors = ["info", "success", "warning"];

function FunctionalExperience() {
  const { t } = useTranslation();
  const modules = t("functionalModules", { returnObjects: true });

  return (
    <MDBox px={2} pb={2}>
      <MDTypography variant="h6" fontWeight="medium" mb={1}>
        {t("functionalTitle")}
      </MDTypography>
      <Grid container spacing={2}>
        {modules.map(({ name, items }, index) => {
          const color = moduleColors[index % moduleColors.length];
          return (
            <Grid item xs={12} md={4} key={name}>
              <MDBox borderLeft="3px solid" borderColor={`${color}.main`} pl={1.5}>
                <MDTypography variant="button" fontWeight="bold" display="block">
                  {name}
                </MDTypography>
                <ExperienceDetails id={name} color={color} items={items} />
              </MDBox>
            </Grid>
          );
        })}
      </Grid>
    </MDBox>
  );
}

export default FunctionalExperience;
