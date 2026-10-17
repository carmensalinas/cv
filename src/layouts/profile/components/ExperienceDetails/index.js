import { useState } from "react";
import { useTranslation } from "react-i18next";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

function ExperienceDetails({ id, color, image, alt, note, noteColor, project, items, tools }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const detailsId = `experience-details-${id}`;

  return (
    <MDBox lineHeight={1.25}>
      {note && (
        <MDTypography variant="caption" color={noteColor} fontWeight="medium" display="block">
          {note}
        </MDTypography>
      )}
      {project && (
        <MDTypography variant="caption" color="text" display="block">
          {project}
        </MDTypography>
      )}
      <MDButton
        variant="text"
        color={color}
        size="small"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={detailsId}
        className="no-print"
        sx={{ px: 0, minHeight: 0 }}
      >
        {open ? t("hideDetails") : t("showDetails")}
        <Icon sx={{ ml: 0.5, transform: open ? "rotate(180deg)" : "none" }}>expand_more</Icon>
      </MDButton>

      {/* always expanded when printing, see the print styles in public/index.html */}
      <Collapse in={open} id={detailsId} className="print-expand">
        <MDBox pt={1}>
          {image && (
            <MDBox
              component="img"
              src={image}
              alt={alt}
              loading="lazy"
              width="100%"
              maxWidth="420px"
              maxHeight="220px"
              borderRadius="lg"
              mb={1}
              sx={{ objectFit: "cover", display: "block" }}
            />
          )}
          <MDTypography variant="button" fontWeight="regular" color="black">
            <ul style={{ paddingLeft: "1.2rem", margin: 0 }}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </MDTypography>
          {tools && (
            <MDTypography display="block" variant="caption" color="text" mt={1} lineHeight={1.5}>
              {tools}
            </MDTypography>
          )}
        </MDBox>
      </Collapse>
    </MDBox>
  );
}

ExperienceDetails.defaultProps = {
  color: "info",
  image: "",
  alt: "",
  note: "",
  noteColor: "success",
  project: "",
  items: [],
  tools: "",
};

ExperienceDetails.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  note: PropTypes.string,
  noteColor: PropTypes.string,
  project: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  tools: PropTypes.string,
};

export default ExperienceDetails;
