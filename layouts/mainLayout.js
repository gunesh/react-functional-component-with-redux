// import external modules
import React, { PureComponent, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MainLayout = (props) => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col>
            <main className="app-main-body">{props.children}</main>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default MainLayout;