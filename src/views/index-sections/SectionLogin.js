/* -------------------- Sección login de la página principal  -------------------- */
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
  Col
} from "reactstrap";

// core components

function SectionLogin() {
  return (
    <>
    {/* -------------------- Imagen de fondo -------------------- */}
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
                  {/* -------------------- Formulario de login  -------------------- */}
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
                  {/* -------------------- Botón para iniciar sesión  -------------------- */}
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
              {/* -------------------- Botón para registrarse  -------------------- */}
              <div className="col text-center">
                <Button
                  className="btn-round"
                  outline
                  color="neutral"
                  href="/register-page"
                  size="lg"
                >
                  Registrate
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionLogin;
