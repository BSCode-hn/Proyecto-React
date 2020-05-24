
import React from "react";

// reactstrap components
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import NavigationTabs from "components/Navbars/NavigationTabs";


function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <NavigationTabs />
    </>
  );
}

export default Index;
