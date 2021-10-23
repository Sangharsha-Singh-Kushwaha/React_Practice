import React from "react";
import { Jumbotron, Button, Container,Row,Col } from "reactstrap";

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12}>
            <Jumbotron className="text-center">
              <h1>CTL</h1>
              <p>
                Show your ❤️ and support by giving a ⭐. Any suggestions are
                welcome! Take a look at the contributing guide.
              </p>
              <Container>
                <Button color="primary">Start</Button>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
