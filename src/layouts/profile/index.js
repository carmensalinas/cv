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
import DataTable from "examples/Tables/DataTable";
// Material Dashboard 2 React example components
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import SectionCarousel from "examples/Certifications/SectionCarousel.js";

// Overview page components
import Header from "layouts/profile/components/Header";

// Data
import data from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/bg-pappas.jpeg";
import homeDecor3 from "assets/images/bg-softtek.jpeg";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

var ingles = true

function Overview() {

  const [checked, setChecked] = useState({ value: true });

  let { t, i18n } = useTranslation("translation");

  const handleChange = event => {
    ingles = event.target.checked;
    i18n.changeLanguage(Idi());
    setChecked(event.target.checked);
  };
  const { columns, rows } = data();

  return (
    <>
    <FormControlLabel
          control={<Switch defaultChecked
            size="medium"
            checked={checked}
            onChange={handleChange}
            checkedIcon={
              <svg viewBox="0 0 10 10" height="90%" width="100%" fill="pink">
                <circle r={2} cx={3} cy={2.5} />
              </svg>
            }
            height={40}
            width={70} />}
          label={t('language')} />
          



      <MDBox>
        
        <Header>


          <MDBox mb={2} />
          <MDBox mt={5} mb={3}>
            <Grid item xs={12} md={6} xl={9} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title={t('title')}
                description={t('description')}
                info1={
                  t('infoName') +" : "+ t('name')
                }
                info2={
                  t('infoPhone') +" : "+ t('phone')
                }
                info3={
                  t('infoEmail') +" : "+ t('mail')
                }
                info4={
                  t('infoLocation') +" : "+ t('location')
                }
                social={[
                  {
                    link: "https://www.linkedin.com/in/carmensalinas/",
                    icon: <LinkedInIcon />,
                    color: "linkedin",
                  },
                  {
                    link: "https://github.com/carmensalinas",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 22 22"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                    color: "github",
                  },
                  {
                    link: "https://t.me/carmensalinaszavala",
                    icon: <TelegramIcon />,
                    color: "linkedin",
                  },
                  {
                    link: "https://api.whatsapp.com/send/?phone=978645087&text=Buenas+estoy+interesado+en+su+perfil+para+el+puesto+de+...+&type=phone_number&app_absent=0",
                    icon: <WhatsAppIcon />,
                    color: "whatsapp",
                  },
                ]} />


            </Grid>
            <DataTable
              table={{ columns, rows }}
              showTotalEntries={false}
              isSorted={false}
              noEndBorder
              entriesPerPage={false} />
          </MDBox>
          <MDBox pt={2} px={2} lineHeight={1.25} sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <MDTypography variant="h6" fontWeight="medium">
            {t('title2')}
            </MDTypography>
          </MDBox>
          <MDBox p={2}>
            <Grid container spacing={6} sx={{
              backgroundColor: "transparent",
              boxShadow: "none"
            }}>
              <Grid item xs={12} md={8} xl={4} sx={{
                backgroundColor: "transparent",
                boxShadow: "none"
              }}>
                <DefaultProjectCard
                  image={homeDecor3}
                  height="10"
                  label=""
                  title={t('job1')}
                  description={t('des1Job1')}
                  des2={t('des1Job2')}
                  des3={t('des1Job3')}
                  des4={t('des1Job4')}
                  des5={t('des1Job5')}
                  des6={t('des1Job6')}
                  des7={t('des1Job7')}
                  action={{
                    type: "external",
                    route: "https://education.guidewire.com/lmt/xlr8login.login?site=guidewire",
                    color: "warning",
                    label: t('labelJob1'),
                  }} />
              </Grid>

              <Grid item xs={12} md={4} xl={4.5} sx={{
                backgroundColor: "transparent",
                boxShadow: "none"
              }}>
                <DefaultProjectCard
                  image={homeDecor1}
                  title={t('job2')}
                  description={t('des2Job1')}
                  des2={t('des2Job2')}
                  des3={t('des2Job3')}
                  des4={t('des2Job4')}
                  des5={t('des2Job5')}
                  des6={t('des2Job6')}
                  des7={t('des2Job7')}
                  action={{
                    type: "external",
                    route: "https://admin.pappas.pe/login",
                    color: "warning",
                    label: t('labelJob2'),
                  }} />
              </Grid>
            </Grid>
          </MDBox>

          <Grid container spacing={0}>
            <Grid item xs={12} md={6} xl={4}>
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
                      2024
                    </MDTypography>{" "}
                    ...
                  </MDTypography>
                </MDBox>
                <TimelineItem
                  color="success"
                  icon="payment"
                  title="Software Engineer - Softtek "
                  dateTime="Mar 2022 - Actualmente" />
                <TimelineItem
                  color="info"
                  icon="payment"
                  title="Software Developer - Softtek"
                  dateTime="Dic 2021 - Mar 2022" />
                <TimelineItem
                  color="warning"
                  icon="store"
                  title="Software Developer - Pappas Grill"
                  dateTime="Mar 2020 - Nov 2021" />
                <TimelineItem
                  color="primary"
                  icon="account_balance"
                  title="Accounting Analyst- Pappas Grill"
                  dateTime="Ene 2016 - Nov 2021"
                  lastItem />
              </MDBox>

            </Grid>
            <Grid item xs={12} md={6} xl={4.5} sx={{
              backgroundColor: "transparent",
              boxShadow: "none"
            }}>
              <MDBox pt={0} px={0} sx={{
                backgroundColor: "transparent",
                boxShadow: "none"
              }}>
                <MDTypography variant="h5" fontWeight="medium">
                {t('title4')}
                </MDTypography>
                <SectionCarousel />
              </MDBox>

            </Grid>
          </Grid>
          <Footer />
        </Header>

      </MDBox></>
  );
}

function Idi(){
  if (!ingles) return (
    'es'
)
  return (
    'en')

}
;
export default Overview;
