import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Input,
  NavItem,
  TabContent,
  Col,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  TabPane,
  Row,
  Button,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Card,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
  Form

} from "reactstrap";



// core components
//import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
//import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
//import DemoFooter from "components/Footers/DemoFooter.js";

const items = [
  {
    src: require("assets/img/soroush-karimi.jpg"),
    altText: "Titulo que lleva la noticia",
    caption: "Resumen de la noticia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint soluta cum necessitatibus rerum quidem?"
  },
  {
    src: require("assets/img/federico-beccari.jpg"),
    altText: "Titulo que lleva la noticia",
    caption: "Resumen de la noticia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint soluta cum necessitatibus rerum quidem?"
  },
  {
    src: require("assets/img/joshua-stannard.jpg"),
    altText: "Titulo que lleva la noticia",
    caption: "Resumen de la noticia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque iste ad ipsum autem nostrum sed dicta, veritatis incidunt nemo officia voluptas optio quos sint soluta cum necessitatibus rerum quidem?"
  }
];
function LoginPage() {
  const [navbarColor, setNavbarColor] = React.useState("bg-dark");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("bg-dark");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  const [activeTab, setActiveTab] = React.useState("1");
    const toggle = tab => {
      if (activeTab !== tab) {
        setActiveTab(tab);
      }
    };

    const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

    return (
      <>
      <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              href="/index"
              target="_blank"
              title="Coded by Creative Tim"
            >
              UNAHXPERIENCE
            </NavbarBrand>
            <button
              aria-expanded={navbarCollapse}
              className={classnames("navbar-toggler navbar-toggler", {
                toggled: navbarCollapse
              })}
              onClick={toggleNavbarCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={navbarCollapse}
          >
            <Nav navbar>
                      <NavItem className="active" >
                        <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <InputGroup className="input-sm">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-zoom-split" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Buscar" type="text" />
                    </InputGroup>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-single-02 pt-2"
                          />
                          <p className="d-lg-none"> Usuario</p>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-bell-55 pt-2"
                          />
                          <p className="d-lg-none"> Notificaciones</p>
                        </NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle
                          aria-expanded={false}
                          aria-haspopup={true}
                          caret
                          color="default"
                          data-toggle="dropdown"
                          href="#pablo"
                          nav
                          onClick={e => e.preventDefault()}
                          role="button"
  
                        >
                          <i
                            aria-hidden={true}
                            className="nc-icon nc-settings-gear-65 pt-2"
                          />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-danger" right>
                          <DropdownItem header tag="span">
                            Ajustes
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Perfil
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                           Ayuda y FQA
                          </DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Configuración
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Cerrar Sesión
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      <div className="section pb-0">
        <Container className="pl-0 ml-0">
          <br />
          <Row >
            <Col md="12">
             
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav  id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                        Inicio
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
                        Foro
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "3" ? "active" : ""}
                        onClick={() => {
                          toggle("3");
                        }}
                      >
                        Docentes
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                </TabPane>
                <TabPane tabId="2">
                </TabPane>
                <TabPane tabId="3">
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>{" "}
      <div className="section p-0" id="carousel">
        
          <Row>
            <Col className="mr-auto" md="12">
              <Card className="page-carousel pt-0">
                <Carousel
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                  />
                  {items.map(item => {
                    return (
                      <CarouselItem
                        onExiting={onExiting}
                        onExited={onExited}
                        key={item.src}
                      >
                        <img src={item.src} alt={item.altText} />
                        <CarouselCaption
                          captionText={item.caption}
                          captionHeader=""
                        />
                      </CarouselItem>
                    );
                  })}
                  <a
                    className="left carousel-control carousel-control-prev"
                    data-slide="prev"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      previous();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control carousel-control-next"
                    data-slide="next"
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      next();
                    }}
                    role="button"
                  >
                    <span className="fa fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </a>
                </Carousel>
              </Card>
            </Col>
            <Col className="ml-auto">
            <div
        className="section section-image section-login"
        style={{
          backgroundImage: "url(" + require("assets/img/unah-image.jpg") + ")"
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto" lg="4" md="6">
              <Card className="card-register">
                <h3 className="title mx-auto">Inicia Sesión</h3>
                <Form className="register-form">
                  <label>Usuario</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-user-run" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Usuario" type="text" />
                  </InputGroup>
                  <label>Contraseña</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Contraseña" type="password" />
                  </InputGroup>
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    type="button"
                  >
                    Iniciar Sesión
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link text-white"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    ¿Olvidaste tu contraseña?
                  </Button>
                </div>
              </Card>
              <div className="col text-center">
                <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  href="/register-page"
                  size="lg"
                  target="_blank"
                >
                  Registrarte
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
            </Col>
          </Row>
      </div>{" "}
      <div id="images">
          <Container>
            <div className="title">
            <Row>
              <Col className="ml-auto" md="2" sm="3">
                <img
                  alt="..."
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/faces/erik-lucatero-2.jpg")}
                />
              </Col>
              <Col className="mr-auto">
                <h4>Titulo del Foro</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nunc fringilla quis, mi feugiat dui cras integer urna inceptos commodo lacinia pellentesque arcu, hendrerit sapien senectus per montes potenti eget aliquam cum. Potenti proin fusce id cum a consequat pellentesque, gravida morbi odio phasellus curabitur placerat habitasse dui, posuere sapien imperdiet neque quam penatibus. Et nulla pellentesque dui fringilla ligula lobortis rutrum torquent, senectus elementum aliquet tincidunt nisi vel magna molestie euismod, quis viverra non diam sagittis placerat varius.</p>
              </Col>
              <Col>
                      <Col>
                        <Card className="card-register">
                          <h3 className="title mx-auto text-white">Comentarios</h3>
                          <Row>
                            <Col className="bg-dark py-5  btn-round">
                             
                                      <Form className="register-form">
                                        <InputGroup className="form-group-no-border">
                                          <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                              <i className="nc-icon nc-send" />
                                            </InputGroupText>
                                          </InputGroupAddon>
                                          <Input placeholder="Escribe tu comentario aquí" type="text" />
                                        </InputGroup>   
                                      </Form>                                 
                                 
                              </Col>
                              <Button
                                block
                                className="btn-round"
                                color="danger"
                                type="button"
                              >
                                Escribir Comentario
                              </Button>
                          </Row>
                        </Card>
                      </Col>
              </Col>
            </Row>
            </div>
            
          </Container>
        </div>
    </>
    );

}

export default LoginPage;
