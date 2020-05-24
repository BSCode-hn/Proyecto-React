/* -------------------- Perfil del moderador  -------------------- */
import React from "react";

// reactstrap components
import {
  Button,

  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
//import NavigationTabs from "components/Navbars/NavigationTabs";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
    {/* -------------------- HEADER -------------------- */}
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/joe-gardner-2.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Jane Faker <br />
              </h4>
              
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h6 className="description">Moderador</h6>  
                <Button className="btn-round" color="default" outline>
                  <i className="fa fa-cog" /> Editar Perfil
                </Button>
            </Col>
          </Row>
          <Row>
          
            <Col className="mx-auto text-center" md="4">
          <br />
          {/* -------------------- TABS -------------------- */}
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav tabs>
                <NavItem className="pl-3">
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Solicitudes 
                  </NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Reportes
                  </NavLink>
                </NavItem>
               
              </Nav>
            </div>
          </div>
          </Col>
          </Row>
          {/* --------------------- Tab panes ----------------------- */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane className="text-center" tabId="2" id="discutions">
              <h3 className="text-muted">No hay reportes :)</h3>
              <br />
              <Button className="btn-round" color="warning">
                Eliminar todo
              </Button>
            </TabPane>
            <TabPane className="text-center" tabId="1" id="comments">
              {/* -------------------- LISTADO DE FOROS  -------------------- */}
            <Container>
          <Row className="example-page">
            <Col className="text-center ml-auto mr-auto" md="10">
            <Card className=" ml-auto mr-auto">
            <Row className="pt-3 px-3">
                <Col md="2" sm="3">
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive border-0 p-0"
                    src={require("assets/img/faces/erik-lucatero-2.jpg")}
                  />
                </Col>
                <Col md="6" sm="9">
                <h4 className="mt-3 text-left text-white">Nombre del Foro</h4>
                </Col>
                <Col md="4" className="mt-3">
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                </Col>
              </Row>
                
              <Row className="px-2">
              <Col className="mr-auto p-2">
              <h6 className="text-white">Información del Foro</h6>
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
              <h6 className="text-white">Comentario</h6>
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
                </Col>
              </Row>
                  <div className="social-line text-center p-3">
                  
                  <Button className="btn-round ml-2" color="success" outline>
                  <i className="fa fa-check" /> Aceptar
                </Button>
                  <Button className="btn-round ml-2" color="danger" outline>
                  <i className="fa fa-times" /> Rechazar
                </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="example-page">
            <Col className="text-center ml-auto mr-auto" md="10">
            <Card className=" ml-auto mr-auto">
            <Row className="pt-3 px-3">
                <Col md="2" sm="3">
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive border-0 p-0"
                    src={require("assets/img/faces/erik-lucatero-2.jpg")}
                  />
                </Col>
                <Col md="6" sm="9">
                <h4 className="mt-3 text-left text-white">Nombre del Foro</h4>
                </Col>
                <Col md="4" className="mt-3">
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                </Col>
              </Row>
                
              <Row className="px-2">
              <Col className="mr-auto p-2">
              <h6 className="text-white">Información del Foro</h6>
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
              <h6 className="text-white">Comentario</h6>
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
                </Col>
              </Row>
                  <div className="social-line text-center p-3">
                  
                  <Button className="btn-round ml-2" color="success" outline>
                  <i className="fa fa-check" /> Aceptar
                </Button>
                  <Button className="btn-round ml-2" color="danger" outline>
                  <i className="fa fa-times" /> Rechazar
                </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
