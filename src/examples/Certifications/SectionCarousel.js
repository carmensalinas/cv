import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// @mui material components
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

const items = [
  {
    src: require("assets/images/certificados/policy.png"),
    altText: "Guidewire PolicyCenter Specialist",
    typeKey: "certCertification",
  },
  {
    // no certificate image: rendered as a badge card that links to Credly
    altText: "GitHub Foundations",
    issuer: "GitHub",
    typeKey: "certCertification",
    link: "https://www.credly.com/badges/5ad3e467-d2d5-4a14-8640-7f5e771ce3b1",
  },
  {
    src: require("assets/images/certificados/azure cloud.png"),
    altText: "Azure Cloud Architect",
    typeKey: "certCourse",
  },
  {
    src: require("assets/images/certificados/azure az104.png"),
    altText: "Azure AZ-104",
    typeKey: "certTraining",
  },
  {
    src: require("assets/images/certificados/azure az305.png"),
    altText: "Azure AZ-305",
    typeKey: "certCourse",
  },
  {
    src: require("assets/images/certificados/azure fundamentals.png"),
    altText: "Azure Fundamentals",
    typeKey: "certTraining",
  },
  {
    src: require("assets/images/certificados/meta-data analytics.png"),
    altText: "Meta Data Analytics",
    typeKey: "certCourse",
  },
  {
    src: require("assets/images/certificados/michigan-developing ar.png"),
    altText: "Developing AR",
    typeKey: "certCourse",
  },
  {
    src: require("assets/images/certificados/uc davis spark sql.png"),
    altText: "Spark SQL",
    typeKey: "certCourse",
  },
  {
    src: require("assets/images/certificados/uc davis sql.png"),
    altText: "SQL",
    typeKey: "certCourse",
  },
];

// minimum horizontal distance (px) for a touch move to count as a swipe
const SWIPE_THRESHOLD = 40;

const githubPath =
  "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z";

const arrowSx = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  color: "#fff",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
  "&:hover, &:focus-visible": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
};

function SectionCarousel() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const goTo = (index) => setActiveIndex((index + items.length) % items.length);
  const next = () => goTo(activeIndex + 1);
  const previous = () => goTo(activeIndex - 1);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };
  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (delta <= -SWIPE_THRESHOLD) next();
    if (delta >= SWIPE_THRESHOLD) previous();
    touchStartX.current = null;
  };
  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") next();
    if (event.key === "ArrowLeft") previous();
  };

  const current = items[activeIndex];

  return (
    <MDBox
      maxWidth="450px"
      role="region"
      aria-roledescription="carousel"
      aria-label={t("title4")}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      sx={{ outline: "none" }}
    >
      <MDBox
        position="relative"
        borderRadius="lg"
        overflow="hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        sx={{ touchAction: "pan-y" }}
      >
        {current.src ? (
          <img
            src={current.src}
            alt={current.altText}
            style={{ display: "block", width: "100%", maxHeight: "270px", objectFit: "contain" }}
          />
        ) : (
          <MDBox
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
            height="240px"
            px={6}
            textAlign="center"
            sx={{ background: "linear-gradient(135deg, #24292f 0%, #3d4b5c 100%)" }}
          >
            <svg width="56" height="56" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
              <path d={githubPath} />
            </svg>
            <MDTypography variant="h5" sx={{ color: "#ffffff" }}>
              {current.altText}
            </MDTypography>
            <MDTypography variant="button" sx={{ color: "rgba(255, 255, 255, 0.75)" }}>
              {current.issuer} · {t(current.typeKey)}
            </MDTypography>
          </MDBox>
        )}
        <IconButton
          size="small"
          onClick={previous}
          aria-label={t("previousCertificate")}
          sx={{ ...arrowSx, left: 8 }}
        >
          <Icon>chevron_left</Icon>
        </IconButton>
        <IconButton
          size="small"
          onClick={next}
          aria-label={t("nextCertificate")}
          sx={{ ...arrowSx, right: 8 }}
        >
          <Icon>chevron_right</Icon>
        </IconButton>
      </MDBox>

      <MDBox display="flex" justifyContent="space-between" alignItems="center" mt={1} px={0.5}>
        <MDBox aria-live="polite">
          <MDTypography variant="button" fontWeight="medium">
            {current.altText}
          </MDTypography>
          {current.typeKey && (
            <MDTypography variant="caption" color="text" display="block">
              {t(current.typeKey)}
            </MDTypography>
          )}
          {current.link && (
            <MDTypography
              component="a"
              href={current.link}
              target="_blank"
              rel="noreferrer"
              variant="button"
              color="info"
              fontWeight="medium"
              ml={1}
            >
              {t("viewCredential")} ↗
            </MDTypography>
          )}
        </MDBox>
        <MDTypography variant="caption" color="text" sx={{ fontVariantNumeric: "tabular-nums" }}>
          {activeIndex + 1} / {items.length}
        </MDTypography>
      </MDBox>

      <MDBox display="flex" justifyContent="center" gap={0.75} mt={1}>
        {items.map((item, index) => (
          <MDBox
            key={item.altText}
            component="button"
            type="button"
            onClick={() => goTo(index)}
            aria-label={item.altText}
            aria-current={index === activeIndex}
            sx={({ palette: { info, grey } }) => ({
              width: index === activeIndex ? 20 : 8,
              height: 8,
              p: 0,
              border: 0,
              borderRadius: 4,
              cursor: "pointer",
              backgroundColor: index === activeIndex ? info.main : grey[400],
              transition: "width 0.2s ease",
            })}
          />
        ))}
      </MDBox>
    </MDBox>
  );
}

export default SectionCarousel;
