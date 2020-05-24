/* -------------------- Página de Perfil  -------------------- */
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
    if (activeTab !== 1) {
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
            <h6 className="description">Docente</h6>  
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
              </p>
              <br />
            </Col>
            <Col className="ml-auto mr-auto text-center" md="6">
            <h6 className="description"><i className="nc-icon nc-calendar-60" />  Cumpleaños</h6>  
            <h6 className="description"><i className="nc-icon nc-favourite-28" />  Votos a Favor</h6>  
            <h6 className="description"><i className="nc-icon nc-circle-10" />  Cuando se unió</h6>  
          
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="4">
                <Button className="btn-round" color="default" outline>
                  <i className="fa fa-cog" /> Editar Perfil
                </Button>
          
          <br />

          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Comentarios 
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Discuciones
                  </NavLink>
                </NavItem>
               
              </Nav>
            </div>
          </div>
          </Col>
          </Row>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane className="text-center" tabId="2" id="discutions">
              <h3 className="text-muted">No hay discuciones :(</h3>
              <Button className="btn-round" color="warning">
                Encontrar discuciones
              </Button>
            </TabPane>
            <TabPane className="text-center" tabId="1" id="comments">
            <Container>
          <Row className="example-page">
            <Col className="text-center ml-auto mr-auto" md="10">
            <Card className=" ml-auto mr-auto">
                <h3 className="title mx-auto text-white">Titulo del Foro</h3>
                <h6 className="text-white">Comentarios 22</h6>
                <Row className=" ml-auto mr-auto">
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                </Row>
                
              <Row className="p-3">
                <Col className="mr-auto p-2" md="2" sm="3">
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive border-0 p-0"
                    src={require("assets/img/faces/erik-lucatero-2.jpg")}
                  />
                </Col>
                <Col className="mr-auto p-2">
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
                </Col>
              </Row>
                  <div className="social-line text-center p-3">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-heart" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="success"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-share" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                  <Button className="btn-round ml-2" color="danger" outline>
                  <i className="fa fa-eye" /> Ver Publicación
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
                <h3 className="title mx-auto text-white">Titulo del Foro</h3>
                <h6 className="text-white">Comentarios 22</h6>
                <Row className=" ml-auto mr-auto">
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                <i className="nc-icon nc-trophy text-white p-1" /> 
                </Row>
                
              <Row className="p-3">
                <Col className="mr-auto p-2" md="2" sm="3">
                  <img
                    alt="..."
                    className="img-thumbnail img-responsive border-0 p-0"
                    src={require("assets/img/faces/erik-lucatero-2.jpg")}
                  />
                </Col>
                <Col className="mr-auto p-2">
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
                </Col>
              </Row>
                  <div className="social-line text-center p-3">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-heart" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="success"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-share" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                  <Button className="btn-round ml-2" color="danger" outline>
                  <i className="fa fa-eye" /> Ver Publicación
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
