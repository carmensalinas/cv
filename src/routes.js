// Material Dashboard 2 React layouts
import Profile from "layouts/profile";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/",
    component: <Profile />,
  },
  // one address per language, so search engines index both versions
  {
    key: "profile-es",
    route: "/es",
    component: <Profile />,
  },
  {
    key: "profile-en",
    route: "/en",
    component: <Profile />,
  },
];

export default routes;
