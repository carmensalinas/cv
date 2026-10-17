/*eslint-disable*/
// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// Material Dashboard 2 React examples
// Material Dashboard 2 React example components
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import SectionCarousel from "examples/Certifications/SectionCarousel.js";

// Overview page components
import Header from "layouts/profile/components/Header";
import Skills from "layouts/profile/components/Skills";
import FunctionalExperience from "layouts/profile/components/FunctionalExperience";
import References from "layouts/profile/components/References";
import ExperienceDetails from "layouts/profile/components/ExperienceDetails";


// Data
import jobDetails from "layouts/profile/data/jobs";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import LanguageSwitcher from "components/LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import PrintResume from "layouts/profile/components/PrintResume";

const timelineStyles = [
  { color: "info", icon: "tune" },
  { color: "error", icon: "architecture" },
  { color: "success", icon: "code" },
  { color: "warning", icon: "store" },
  { color: "primary", icon: "account_balance" },
  { color: "dark", icon: "account_balance" },
];

function Overview() {
  const { t } = useTranslation("translation");
  const timeline = t("timeline", { returnObjects: true });

  // the printable CV is only mounted while the browser prints (button or Ctrl+P)
  const [printing, setPrinting] = useState(false);
  useEffect(() => {
    const before = () => flushSync(() => setPrinting(true));
    const after = () => setPrinting(false);
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, []);

  return (
    <>
    <LanguageSwitcher />
    {printing && <PrintResume />}
          



      <MDBox className="no-print">
        
        <Header>


          <MDBox mt={1} mb={3}>
            <Grid item xs={12} md={6} xl={9} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title={t('title')}
                description={t('description')}
                info1={
                  t('infoName') + ": " + t('name')
                }
                info2={
                  t('infoPhone') + ": " + t('phone')
                }
                info3={
                  <>
                    {t('infoEmail')}:{" "}
                    <MDTypography component="a" href={`mailto:${t('mail')}`} variant="button" color="info">
                      {t('mail')}
                    </MDTypography>
                  </>
                }
                info4={
                  t('infoLocation') + ": " + t('location')
                }
                social={[
                  {
                    link: "https://www.linkedin.com/in/carmensalinas/",
                    label: "LinkedIn",
                    icon: <LinkedInIcon />,
                    color: "linkedin",
                  },
                  {
                    link: "https://github.com/carmensalinas",
                    label: "GitHub",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        // the GitHub mark has no inner padding, so it is drawn a bit smaller to match the other icons
                        style={{ width: 22, height: 22 }}
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                    color: "github",
                  },
                  {
                    link: "https://t.me/carmensalinaszavala",
                    label: "Telegram",
                    icon: <TelegramIcon />,
                    color: "linkedin",
                  },
                  {
                    label: "WhatsApp",
                    link: `https://api.whatsapp.com/send/?phone=51978645087&text=${encodeURIComponent(t('whatsappMessage'))}`,
                    icon: <WhatsAppIcon />,
                    color: "whatsapp",
                  },
                ]}
                socialLabel={t('social')} />


            </Grid>
            <Skills />
            <FunctionalExperience />
          </MDBox>
          <MDBox pt={2} px={1}>
            <MDTypography variant="h5" fontWeight="medium">
            {t('title3')}
            </MDTypography>
            <MDBox mt={0} mb={1}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                <MDTypography display="inline" variant="body2" verticalAlign="middle">
                  <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
                </MDTypography>
                &nbsp;
                <MDTypography variant="button" color="text" fontWeight="medium">
                  2026
                </MDTypography>{" "}
                ...
              </MDTypography>
            </MDBox>
            {timeline.map(({ title, date, job, note }, index) => (
              <TimelineItem
                key={title}
                color={timelineStyles[index % timelineStyles.length].color}
                icon={timelineStyles[index % timelineStyles.length].icon}
                title={title}
                dateTime={date}
                description={job && (
                  <ExperienceDetails
                    id={job}
                    color={timelineStyles[index % timelineStyles.length].color}
                    image={jobDetails[job].image}
                    alt={title}
                    note={note}
                    noteColor={jobDetails[job].noteColor}
                    project={jobDetails[job].project && t('project') + ": " + jobDetails[job].project}
                    items={t(job + 'Items', { returnObjects: true })}
                    tools={jobDetails[job].tools ? t('tools') + ": " + t(job + 'Tools') : ""} />
                )}
                lastItem={index === timeline.length - 1} />
            ))}
          </MDBox>

          <Grid container spacing={3} px={1} pt={2} pb={3}>
            <Grid item xs={12} md={6}>
              <MDTypography variant="h5" fontWeight="medium">
              {t('title4')}
              </MDTypography>
              <SectionCarousel />
            </Grid>
            <Grid item xs={12} md={6}>
              <References />
            </Grid>
          </Grid>
          <Footer />
        </Header>

      </MDBox></>
  );
}

export default Overview;
