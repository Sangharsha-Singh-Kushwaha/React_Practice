import React from "react";
import { Card, CardText, CardSubtitle, Button, Container, Row ,Col} from "reactstrap";

const Course = function ({ course }) {
  return (
    <Container >
      <Row style={{marginBottom:10}}>
        <Col md={{span:6 }}>
          <Card className="text-center ">
            <CardSubtitle className="font-weight-bold">
              {course.title}
            </CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
              <Button
                color="danger"
                style={{ marginBottom: 20, marginTop: 20 }}
              >
                Delete
              </Button>
              <Button
                color="primary"
                style={{ marginLeft: 20, marginBottom: 20, marginTop: 20 }}
              >
                Update
              </Button>
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Course;
