import React from "react";
import { Jumbotron, Button, Row, Col } from "react-bootstrap";

export default function Announcements() {
  return (
    <div className=" container jumbotron">
      <Jumbotron>
        <Row>
          <Col lg={4}>
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
          <Col lg={4} className="floatRight">
            <img
              height="300"
              width="300"
              src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84451/preview.svg"
            />
          </Col>
          <Col lg={4}>
            <Button variant="warning">
              Schedule - 2020 <b> [Archived]</b>
            </Button>
            <br />

            <br />
            <Button variant="warning">
              Schedule - 2019 <b> [Archived]</b>
            </Button>
            <br />

            <br />
            <Button variant="warning">
              Schedule - 2018 <b> [Archived]</b>
            </Button>
            <br />

            <br />
            <Button variant="warning">
              Schedule - 2017 <b> [Archived]</b>
            </Button>
            <br />

            <br />
            <Button variant="warning">
              Schedule - 2016<b> [Archived]</b>
            </Button>
            <br />

            <br />
            <Button variant="warning">
              Schedule - 2015 <b> [Archived]</b>
            </Button>
            <br />

            <br />
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}
