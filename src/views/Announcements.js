import React from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";

export default function Announcements() {
  return (
    <div className=" container jumbotron">
      <Jumbotron>
        <Row>
          <Col lg={6}>
            <h1>2021</h1>
            <p>
              Jan 30, 2021 @ 1pm - 5 pm
              <br />
              Feb 28, 2021 @ 1pm - 5 pm
              <br />
              Mar 30, 2021 @ 1pm - 5 pm
              <br />
              April 26, 2021 @ 1pm - 5 pm
              <br />
              May 15, 2021 @ 1pm - 5 pm
              <br />
              Jun 27 , 2021 @ 1pm - 5 pm
              <br />
              Rabi/Winter (November to April),
            </p>

            <p>
              <Button variant="primary">
                For next months, schedule to be updated soon
              </Button>
            </p>
          </Col>
          <Col lg={6}>
            <img
              height="300"
              width="300"
              src="http://clipart-library.com/images_k/calendar-clipart-transparent/calendar-clipart-transparent-24.png"
            />
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}
