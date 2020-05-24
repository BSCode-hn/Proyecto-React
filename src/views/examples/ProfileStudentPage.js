
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
  Card,
  Input
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
            <Col className="ml-auto mr-auto text-center" md="12">
            <h6 className="description">Docente</h6>  
            
                <i className="nc-icon nc-trophy  p-1" /> 
                <i className="nc-icon nc-trophy  p-1" /> 
                <i className="nc-icon nc-trophy  p-1" /> 
                <i className="nc-icon nc-trophy  p-1" /> 
                <i className="nc-icon nc-trophy  p-1" /> 
                <i className="nc-icon nc-trophy  p-1" /> 
            
            <br />
            </Col>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="2">
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
              </Nav>
            </div>
          </div>
          </Col>
          </Row>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            
            <TabPane className="text-center" tabId="1" id="comments">
            <Container>
          <Row>
            <Col md="8">
          <Row className="example-page">
            <Col className="text-center mr-auto" md="12">
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
                <h4 className="mt-3 text-left text-white">Nombre del Estudiante</h4>
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
                
                <Col className="mr-auto p-2">
                <h6 className=" text-center text-white">Comentario</h6>
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
                </Col>
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
                  <Button
                    className="btn-neutral btn-just-icon ml-1"
                    color="success"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-times" />
                  </Button>
                  <Button className="btn-round ml-2" color="danger" outline>
                  <i className="fa fa-star" /> Calificar
                </Button>
                </div>
              </Card>
            </Col>
          </Row>
          <Row className="example-page">
            <Col className="text-center" md="12">
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
                <h4 className="mt-3 text-left text-white">Nombre del Estudiante</h4>
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
                
                
              <Col className="mr-auto p-2">
              <h6 className=" text-center text-white">Comentario</h6>
              <Input placeholder="Escribe tu comentario aquí" type="text" />
                </Col>
                  <div className="social-line text-center p-3">
                  <Button
                    className="btn-neutral btn-just-icon ml-1"
                    color="success"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-times" />
                  </Button>
                  <Button className="btn-round ml-2" color="danger" outline>
                  <i className="fa fa-comments" /> Publicar Comentario 
                </Button>
               
                </div>
              </Card>
            </Col>
          
          </Row>
          </Col>
          <Col md="4">
            <Card className="card-register ml-auto mr-auto mt-0">
                <h3 className="title mx-auto text-white">Información del Docente</h3>
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
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
