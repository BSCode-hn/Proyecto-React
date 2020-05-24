/* -------------------- Perfil del Administrador  -------------------- */
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
  CardBody,
  CardFooter,
  CardTitle,
  Modal,
  InputGroupAddon,
  InputGroupText,
  Input, 
  InputGroup,
  Form
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

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
  const [modal, setModal] = React.useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
    {/* -------------------- HEADER  -------------------- */}
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
              
              <h6 className="description text-center">Administrador</h6>  
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
                <Button className="btn-round" color="default" outline>
                  <i className="fa fa-cog" /> Editar Perfil
                </Button>
            </Col>
            <Col className="ml-auto mr-auto text-center" md="6">
                <Button className="btn-round" color="primary" outline>
                  <i className="fa fa-university" /> Cambiar Periodo
                </Button>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
          <br />
          <hr />
          {/* -------------------- TABS  -------------------- */}
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
                    Mooderadores
                  </NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Docentes
                  </NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    Solicitudes de Docentes
                  </NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <NavLink
                    className={activeTab === "4" ? "active" : ""}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    Foros
                  </NavLink>
                </NavItem>
                <NavItem className="pl-3">
                  <NavLink
                    className={activeTab === "5" ? "active" : ""}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    Usuarios
                  </NavLink>
                </NavItem>
               
              </Nav>
            </div>
          </div>
          <hr />
          </Col>
          </Row>
          {/* ----------------- Tab panes ------------------- */}
          <TabContent className="following" activeTab={activeTab}>
            
            <TabPane className="text-center" tabId="1" id="moderators">
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain p-3 ">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-white">Moderador</h6>
                        <h5 className="card-category text-white">Clase</h5>
                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-white">Moderador</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-white">Moderador</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3 ">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-white">Moderador</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-white">Moderador</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-white">Moderador</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="teachers">
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain p-3 ">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-white">Docente</h6>
                        <h5 className="card-category text-white">Clase</h5>
                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-white">Docente</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-white">Docente</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3 ">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-white">Docente</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-white">Docente</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-white">Docente</h6>
                        <h5 className="card-category text-white">Clase</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            </TabPane>
            <TabPane className="text-center" tabId="3" id="teachers-solicitudes">
            <Container>
          <Row className="example-page">
            <Col className="text-center ml-auto mr-auto" md="10">
            <Card className=" ml-auto mr-auto">
            <Row className="pt-3 px-3">
                
                <Col md="12"  >
                <h4 className="mt-3 text-center text-white">Nombre del Docente</h4>
                </Col>
              </Row>
                
              <Row className="px-2">
              <Col className="mr-auto p-2">
              <h6 className="text-white">Información del Docente</h6>
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
              <h6 className="text-white">Clase Solicitada</h6>
                <h6 className="text-white">
                Ecuaciones Diferenciales 
                </h6>
                </Col>
              </Row>
                  <div className="social-line text-center p-3">
                  
                  <Button className="btn-round ml-2" color="success" outline onClick={toggleModal}>
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
                
                <Col md="12"  >
                <h4 className="mt-3 text-center text-white">Nombre del Docente</h4>
                </Col>
              </Row>
                
              <Row className="px-2">
              <Col className="mr-auto p-2">
              <h6 className="text-white">Información del Docente</h6>
                <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint 
                </p>
              <h6 className="text-white">Clase Solicitada</h6>
                <h6 className="text-white">
                Ecuaciones Diferenciales 
                </h6>
                </Col>
              </Row>
                  <div className="social-line text-center p-3">
                  
                  <Button className="btn-round ml-2" color="success" outline onClick={toggleModal}>
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
            <TabPane className="text-center" tabId="4" id="foros">
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
                  <i className="fa fa-eye" /> Ver Foro
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
                  <i className="fa fa-eye" /> Ver Foro
                </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
            </TabPane>
            <TabPane className="text-center" tabId="5" id="students">
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain p-3 ">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-white">Estudiante</h6>
                        <h5 className="card-category text-white">Clases Matriculadas</h5>
                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-white">Estudiante</h6>
                        <h5 className="card-category text-white">Clases Matriculadas</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-white">Estudiante</h6>
                        <h5 className="card-category text-white">Clases Matriculadas</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3 ">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category text-white">Estudiante</h6>
                        <h5 className="card-category text-white">Clases Matriculadas</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category text-white">Estudiante</h6>
                        <h5 className="card-category text-white">Clases Matriculadas</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain p-3">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <div className="author">
                        <CardTitle className="text-white" tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category text-white">Estudiante</h6>
                        <h5 className="card-category text-white">Clases Matriculadas</h5>                      </div>
                    </a>
                    <p className="card-description text-center text-white">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-user" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-send" />
                    </Button>
                    <Button
                    className="btn-neutral btn-just-icon"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fa fa-times" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            </TabPane>
          </TabContent>
          {/* Modal */}
          <Modal isOpen={modal} toggle={toggleModal}>
                <div className="modal-header  bg-dark">
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span className="text-white" aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center text-white"
                    id="exampleModalLabel"
                  >
                   Docente
                  </h5>
                </div>
                <div className="modal-body bg-dark">
                <Form className="register-form ">
                  <label className="text-white">Nombre Completo</label>
                  <InputGroup className="form-group-no-border pb-2">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input  placeholder="Nombre Completo" type="text" />
                  </InputGroup>
                  <label className="text-white">Carrera</label>
                  <select class="form-control form-control-md ">
                    <option selected>Seleccione una carrera</option>
                    <option >Carrera 1</option>
                    <option >Carrera 2</option>
                    <option >Carrera 3</option>
                  </select>
                  <label className="text-white pt-2 ">Clase que impartirá</label>
                  <InputGroup className="form-group-no-border pb-2">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-bulb-63" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Nombre de la clase" type="text" />
                  </InputGroup>
                  <label className="text-white">Imagen</label>
                  <InputGroup className="form-group-no-border pb-2">
                    <Input className="text-white" placeholder="Seleccione una Imagen" type="file" />
                  </InputGroup>
                  <label className="text-white">Documentación</label>
                  <InputGroup className="form-group-no-border pb-2">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-paper" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                    placeholder="Documentación"
                    type="textarea"
                    rows="4"
                  />
                  </InputGroup>
                </Form>
                </div>
                <div className="modal-footer bg-dark">
                  <div className="left-side">
                    <Button
                      className="btn-link  bg-dark border-0"
                      color="danger"
                      type="button"
                      onClick={toggleModal}
                    >
                      Cancelar
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button className="btn-link bg-dark" color="success" type="button">
                      Crear Docente
                    </Button>
                  </div>
                </div>
              </Modal>
        </Container>
      </div>
    </>
  );
}

export default ProfilePage;
