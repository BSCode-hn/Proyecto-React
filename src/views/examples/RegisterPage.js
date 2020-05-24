import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col, FormGroup, Label } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
    <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/unah-image.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container className="mt-3">
          <Row className="example-page ">
            <Col className="ml-auto mr-auto " md="10 ">
              <Card className=" ml-auto mr-auto px-4">
                <h3 className="title mx-auto">Registro</h3>
                <Form className="register-form">
                  <Row className="pb-2">
                    <Col>
                  <label className="text-white">Nombres</label>
                  <Input placeholder="Nombres" type="text" />
                  </Col>
                  <Col>
                  <label className="text-white">Apellidos</label>
                  <Input placeholder="Apellidos" type="text" />
                  </Col>
                  <Col>
                  <label className="text-white">Nicknname</label>
                  <Input placeholder="Nicknname" type="text" />
                  </Col>
                  </Row>
                  <Row className="pb-2">
                  <Col>
                  <label className="text-white">Número de Cuenta</label>
                  <Input placeholder="# de Cuenta" type="number" />
                  </Col>
                  <Col>
                  <label className="text-white">Carrera</label>
                  <select class="form-control form-control-md">
                    <option selected>Seleccione una carrera</option>
                    <option >Carrera 1</option>
                    <option >Carrera 2</option>
                    <option >Carrera 3</option>
                  </select>
                  </Col>
                  </Row>
                  <Row className="pb-2">
                    <Col>
                  <label className="text-white">Email</label>
                  <Input placeholder="Email" type="email" />
                  </Col>
                  <Col>
                  <label className="text-white">Contraseña</label>
                  <Input placeholder="Contraseña" type="password" />
                  </Col>
                  <Col>
                  <label className="text-white">Confirmar Contraseña</label>
                  <Input placeholder="Confirmar Contraseña" type="password" />
                  </Col>
                  </Row>
                  <Row>
                  <FormGroup check className="mr-auto ml-auto py-3">
                            <Label className="text-white" check>
                              Acepto los terminos y condiciones
                              <Input
                                defaultValue=""
                                type="checkbox"
                                color="danger"
                              />
                              <span className="form-check-sign" />
                            </Label>
                          </FormGroup>
                          </Row>
                  <Row>
                  <Button block className="btn-round mb-4 " color="danger">
                    Registrarme
                  </Button>
                  </Row>
                 
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RegisterPage;
