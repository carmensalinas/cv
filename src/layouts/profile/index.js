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
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import SectionCarousel from "examples/Certifications/SectionCarousel.js";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import data from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/bg-pappas.jpeg";
import homeDecor3 from "assets/images/bg-softtek.jpeg";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function Overview() {
  const { columns, rows } = data();
  return (
    <DashboardLayout>
      <MDBox mb={2} />
      <Header>         
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={9} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="Professional Profile"
                description=
                "I consider myself a persevering, proactive, dedicated and responsible person. I am dedicated to backend development in Guidewire software that is used by banking and insurance companies however I am always open to using other more modern technologies to keep myself constantly learning. What I expect from the company that wants to contact me are constant challenges a pleasant work environment and continuous learning."
                //"Me considero una persona perseverante, proactiva, dedicada y responsable. 
                //Me dedico al desarrollo backend en el software Guidewire que es usado por empresas de banca y seguros, sin embargo siempre estoy abierta a usar otras tecnologías más modernas para mantenerme en constante aprendizaje. 
                //Lo que espero de la empresa que me quiera contactar son retos constantes, ambiente laboral agradable y aprendizaje continuo."

                info={{
                  fullName: "Carmen T. Salinas Zavala",
                  Phone: "(+51) 932676612",
                  email: "carmensalinaszavala@gmail.com",
                  Location: "PE",
                }}
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
                    link: "https://wa.me/+51932676612text=hola%20sale",
                    icon: <WhatsAppIcon />,
                    color: "whatsapp",
                  },
                ]}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <PlatformSettings />
            </Grid>
          </Grid>
          <DataTable
            table={{ columns, rows }}
            showTotalEntries={false}
            isSorted={false}
            noEndBorder
            entriesPerPage={false}
          />
        </MDBox>
        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Last Jobs
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={4}>
              <DefaultProjectCard
                image={homeDecor3}
                height="10"
                label=""
                title="Softtek"
                description="Creation of microservices in spring boot to be consumed by an external web to Guidewire's PolicyCenter and BillingCenter.
                Dana service integration for electronic policy migration, use of messaging queues and API creation.
                Generation of reports in SQL servers at client's request.
                Modifications to products within Guidewire at the customer's request.
                Continuous work through agile methodology within squads and tribes."
                action={{
                  type: "external",
                  route: "https://education.guidewire.com/lmt/xlr8login.login?site=guidewire",
                  color: "warning",
                  label: "Guidewire Certification Checker",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={8}>
              <DefaultProjectCard
                image={homeDecor1}
                title="Pappas Grill"
                description="Support in the integration of the accounting system with the logistics system through scripts in JavaScript. 
                Macro maintenance. Maintenance of SQL databases through the creation of queries. 
                NoSQL database maintenance by creating crud paths in nodejs for mongoDB. 
                Automated short tests using Selenium."
                action={{
                  type: "external",
                  route: "https://admin.pappas.pe/login",
                  color: "warning",
                  label: "Accounting Admin Web",
                }}
              />
            </Grid>
          </Grid>
        </MDBox>
        
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} xl={4}>
            <MDBox pt={2} px={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Experience
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
                  is waiting for you
                </MDTypography>
              </MDBox>
              <TimelineItem
                color="success"
                icon="payment"
                title="Software Engineer Jr - Softtek "
                dateTime="Mar 2022 - Present"
              />
              <TimelineItem
                color="info"
                icon="payment"
                title="Software Developer Bg - Softtek"
                dateTime="Dec 2021 - Mar 2023"
              />
              <TimelineItem
                color="warning"
                icon="store"
                title="System Assistant - Pappas Grill"
                dateTime="Feb 2021 - Feb 2022"
              />
              <TimelineItem
                color="primary"
                icon="account_balance"
                title="Accounting Analyst- Pappas Grill"
                dateTime="Jan 2016 - Nov 2021"
                lastItem
              /> 
            </MDBox>
            
          </Grid>
          <Grid item xs={12} md={6} xl={8} >
            <MDBox pt={0} px={0} >
              <MDTypography variant="h5" fontWeight="medium">
                  Certifications
              </MDTypography>
            </MDBox>
            <SectionCarousel />
          </Grid>
        </Grid>
        
        

        <Footer />

      </Header>
      
    </DashboardLayout>
    
  );
}

export default Overview;
