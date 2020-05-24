
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";

// core components

function SectionLogin() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <hr/>
        <Container>
          <Row>
          <div className="nav-tabs-navigation mx-auto">
            <div className="nav-tabs-wrapper">
              <Nav tabs>
                <NavItem >
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Crear Foro 
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Foros Recientes
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Foros Antiguos
                  </NavLink>
                </NavItem>
               
              </Nav>
            </div>
          </div>
          </Row>
          <hr/>
          <TabContent activeTab={activeTab} className="text-center m-0">
                  <TabPane tabId="1">
                  <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto text-white">Foro Nuevo</h3>
                <Form className="register-form">
                  <label>Título</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-bold" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Inserte un Título" type="text" />
                  </InputGroup>
                  <label>Cuerpo</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-paper" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Insertar Texto" type="text" />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="success"
                    type="button"
                  >
                    Crear
                  </Button>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Cancelar
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
                  </TabPane>
                  <TabPane tabId="2">
                  <Row>
            <Col md="12">
          <Row className="example-page">
            <Col className="text-center mr-auto" md="6">
            <Card className=" ml-auto mr-auto">
            <Row className="pt-3 px-3">
                <Col md="2" sm="3">
                  <img
                    alt="..."
                    className="img-circle img-responsive border-0 p-0"
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
                  <Button className="btn-round ml-2 " color="warning" outline>
                  <i className="fa fa-eye" /> Ver Foro
                </Button> 
                </div>
              </Card>
            </Col>
         
            <Col className="text-center" md="6">
            <Card className=" ml-auto mr-auto">
            <Row className="pt-3 px-3">
                <Col md="2" sm="3">
                  <img
                    alt="..."
                    className="img-circle img-responsive border-0 p-0"
                    src={require("assets/img/faces/erik-lucatero-2.jpg")}
                  />
                </Col>
                <Col md="6" sm="9">
                <h4 className="mt-3 text-left text-white">Título del Foro</h4>
                <h6 className="mt-3 text-left text-white">Nombre del Docente</h6>
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
                  <Button className="btn-round ml-2 " color="warning" outline>
                  <i className="fa fa-eye" /> Ver Foro
                </Button>
               
                </div>
              </Card>
            </Col>
            <Col className="text-center" md="6">
            <Card className=" ml-auto mr-auto">
            <Row className="pt-3 px-3">
                <Col md="2" sm="3">
                  <img
                    alt="..."
                    className="img-circle img-responsive border-0 p-0"
                    src={require("assets/img/faces/erik-lucatero-2.jpg")}
                  />
                </Col>
                <Col md="6" sm="9">
                <h4 className="mt-3 text-left text-white">Título del Foro</h4>
                <h6 className="mt-3 text-left text-white">Nombre del Docente</h6>
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
                  <Button className="btn-round ml-2 " color="warning" outline>
                  <i className="fa fa-eye" /> Ver Foro
                </Button>
               
                </div>
              </Card>
            </Col>
          
          </Row>
          </Col>
          </Row>
                  </TabPane>
                  <TabPane tabId="3">
                  <Row>
            <Col md="12">
          <Row className="example-page">
            <Col className="text-center mr-auto" md="6">
            <Card className=" ml-auto mr-auto">
            <Row className="pt-3 px-3">
                <Col md="2" sm="3">
                  <img
                    alt="..."
                    className="img-circle img-responsive border-0 p-0"
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
                  <Button className="btn-round ml-2 " color="warning" outline>
                  <i className="fa fa-eye" /> Ver Foro
                </Button> 
                </div>
              </Card>
            </Col>
         
            <Col className="text-center" md="6">
            <Card className=" ml-auto mr-auto">
            <Row className="pt-3 px-3">
                <Col md="2" sm="3">
                  <img
                    alt="..."
                    className="img-circle img-responsive border-0 p-0"
                    src={require("assets/img/faces/erik-lucatero-2.jpg")}
                  />
                </Col>
                <Col md="6" sm="9">
                <h4 className="mt-3 text-left text-white">Título del Foro</h4>
                <h6 className="mt-3 text-left text-white">Nombre del Docente</h6>
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
                  <Button className="btn-round ml-2 " color="warning" outline>
                  <i className="fa fa-eye" /> Ver Foro
                </Button>
               
                </div>
              </Card>
            </Col>
          
          </Row>
          </Col>
          </Row>
                  </TabPane>
          </TabContent>
        </Container>
    </>
  );
}

export default SectionLogin;
