// react-i18next
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// @mui material components
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

const languages = [
  { code: "es", label: "ES", name: "Español" },
  { code: "en", label: "EN", name: "English" },
];

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const current = i18n.resolvedLanguage || "en";

  const handleChange = (event, lng) => {
    // ToggleButtonGroup sends null when the active button is clicked again
    if (!lng) return;
    i18n.changeLanguage(lng);
    navigate(`/${lng}`);
  };

  return (
    <MDBox
      className="no-print"
      display="flex"
      alignItems="center"
      gap={1}
      position="fixed"
      top="1rem"
      right="1rem"
      zIndex={1200}
      bgColor="white"
      shadow="md"
      borderRadius="xl"
      p={0.5}
    >
      <ToggleButtonGroup
        value={current}
        exclusive
        size="small"
        onChange={handleChange}
        aria-label={t("language")}
      >
        {languages.map(({ code, label, name }) => (
          <ToggleButton
            key={code}
            value={code}
            lang={code}
            aria-label={name}
            sx={{ px: 1.5, fontWeight: "bold" }}
          >
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Tooltip title={t("downloadCv")}>
        <IconButton size="small" onClick={() => window.print()} aria-label={t("downloadCv")}>
          <Icon fontSize="small">download</Icon>
        </IconButton>
      </Tooltip>
    </MDBox>
  );
}

export default LanguageSwitcher;
