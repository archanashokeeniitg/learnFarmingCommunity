import React from "react";
import { Jumbotron, Image, Col, Row } from "react-bootstrap";

export default function ContactUs() {
  return (
    <div className=" container ">
      <Jumbotron>
        <Col lg={6}>
          <p>Founder- Ramesh Singh</p>

          <p style={{ color: "#337ab7", fontWeight: "bold" }}>
            {" "}
            <small>
              Email - learnfarmingcommunity@gmail.com <br /> Contact -
              +919711129387
              <br />
              Office Address - Gher no.- 97, Near Shiv Mandir, Dichaon Kalan,
              Najafgarh, New Delhi-110043
            </small>
          </p>
        </Col>

        <Image
          style={{
            borderRadius: "50%",
            height: 250,
            width: 250,
            alignSelf: "end",
          }}
          src="https://user-images.githubusercontent.com/66199202/113366542-5af89d80-930e-11eb-9764-d9b11c9181e4.jpeg"
          roundedCircle
        />
      </Jumbotron>
      <Jumbotron>
        <Row>
          <Col lg={6}>
            <Image
              style={{
                borderRadius: "50%",
                height: 250,
                width: 250,
                alignSelf: "end",
              }}
              src="https://user-images.githubusercontent.com/66199202/114683473-e7b73a00-9cc4-11eb-83e0-c0b4d6c1e6ae.png"
              roundedCircle
            />
          </Col>
          <Col lg={6}>
            <p>Co-Founder- Archana Devi</p>

            <p style={{ color: "#337ab7", fontWeight: "bold" }}>
              {" "}
              <small>
                Email - archanashokeeniitg@gmail.com <br /> Contact -
                +918076135040
                <br />
                Office Address - Gher no.- 97, Near Shiv Mandir, Dichaon Kalan,
                Najafgarh, New Delhi-110043
              </small>
            </p>
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron>
        <Row>
          <Col lg={6} md={4}>
            <p>Manager- Rahul s/o Sh.Anoop Singh</p>

            <p style={{ color: "#337ab7", fontWeight: "bold" }}>
              {" "}
              <small>
                Email - rahulshokeen91@gmail.com <br /> Contact - +919891171178
                ,+919560426896 <br />
                Office Address - Gher no.- 97, Near Shiv Mandir, Dichaon Kalan,
                Najafgarh, New Delhi-110043
              </small>
            </p>
          </Col>

          <Col lg={6} md={4}>
            <Image
              style={{
                borderRadius: "50%",
                height: 250,
                width: 250,
                //padding: 20,
              }}
              src="https://user-images.githubusercontent.com/66199202/113363484-d99d0d00-9305-11eb-9c92-cbff42142b7a.jpeg"
            />
          </Col>
        </Row>
      </Jumbotron>
      <Jumbotron>
        <Col lg={6} md={4}>
          <Image
            style={{
              borderRadius: "50%",
              height: 250,
              width: 250,
              //padding: 20,
            }}
            src="https://user-images.githubusercontent.com/66199202/114686127-572e2900-9cc7-11eb-8cbc-8e334f3cb41b.jpeg"
          />
        </Col>
        <p>Operation Manager- Punit Tayal</p>
        <p>
          <p style={{ color: "#337ab7", fontWeight: "bold" }}>
            {" "}
            <small>
              <br /> Contact - +919990074523
              <br />
              Office Address - Gher no.- 97, Near Shiv Mandir, Dichaon Kalan,
              Najafgarh, New Delhi-110043
            </small>
          </p>
        </p>
      </Jumbotron>
      <br />
      <br />
    </div>
  );
}
