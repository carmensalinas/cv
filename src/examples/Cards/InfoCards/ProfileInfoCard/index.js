// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

function ProfileInfoCard({ title, description, info1, info2, info3, info4, social, socialLabel }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;

  // Convert this form `objectKey` of the object key in to this `object key`
  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <MDBox key={label} display="flex" py={1} pr={2}>
      <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </MDTypography>
      <MDTypography variant="button" fontWeight="regular" color="text">
        &nbsp;{values[key]}
      </MDTypography>
    </MDBox>
  ));

  // Render the card social media icons
  const renderSocial = social.map(({ link, icon, color, label }) => (
    <MDBox
      key={label}
      aria-label={label}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      color={socialMediaColors[color].main}
      // 44px touch target (Apple/Google guideline) around a 26px icon
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      width="44px"
      height="44px"
      sx={{ "& svg": { fontSize: "26px", width: "26px", height: "26px" } }}
    >
      {icon}
    </MDBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: "none" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox mb={2} lineHeight={1}>
          <MDTypography variant="button" color="black" fontWeight="regular">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox>
          <MDBox p={0}>
            <MDBox mb={2} lineHeight={1}></MDBox>
            <MDTypography variant="button" color="black" fontWeight="regular">
              {info1}
              <br></br>
              {info2}
              <br></br>
              {info3}
              <br></br>
              {info4}
            </MDTypography>
          </MDBox>
          <Divider />

          <Divider />
        </MDBox>
        <MDBox>
          {renderItems}
          <MDBox display="flex" alignItems="center" flexWrap="wrap" py={1} pr={2}>
            <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
              {socialLabel}: &nbsp;
            </MDTypography>
            {renderSocial}
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

ProfileInfoCard.defaultProps = {
  socialLabel: "social",
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  info1: PropTypes.string.isRequired,
  info2: PropTypes.string.isRequired,
  info3: PropTypes.node.isRequired,
  info4: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(PropTypes.object).isRequired,
  socialLabel: PropTypes.string,
};

export default ProfileInfoCard;
