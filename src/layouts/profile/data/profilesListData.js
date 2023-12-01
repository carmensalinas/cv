/*eslint-disable*/
import React from "react";

// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import gw from "assets/images/small-logos/logo-guidewire.svg";
import javascript from "assets/images/small-logos/javascript.png";
import git from "assets/images/small-logos/git.png";
import react from "assets/images/small-logos/react.png";
import angular from "assets/images/small-logos/angular.png";
import sql from "assets/images/small-logos/sql.png";
import java from "assets/images/small-logos/java.png";

export default function data() {
  const Company = ({ image, name }) => (
    <MDBox display= "auto" alignItems="left" lineHeight={1}>
      <MDAvatar src={image} name={name} size="md" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Conocimientos", accessor: "companies", width: "15%", align: "left" },
      { Header: "Nivel", accessor: "completion", align: "left" },
    ],

    rows: [
      {
        companies: <Company image={gw} name="Guidewire" />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={80} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={javascript} name="Javascript" />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={java} name="Java" />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={react} name="React Js" />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={angular} name="Angular" />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={20} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      
      {
        companies: <Company image={git} name="Git" />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={55} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={sql} name="SQL" />,
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
