import React from "react";
import { Jumbotron, Image, Col } from "react-bootstrap";

export default function ContactUs() {
  return (
    <div className=" container ">
      <Jumbotron>
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
        <p>Founder- Rahul s/o Sh.Anoop Singh</p>
        <p>
          Rahul is the founder of "learnFarmingCommunity". Graduated in Finance,
        </p>
        <p>
          <p style={{ color: "#337ab7", fontWeight: "bold" }}>
            {" "}
            <small>
              Email - rahulshokeen@gmail.com <br /> Contact - +919891171178
              ,+919560426896 <br />
              Office Address - Gher no.- 97, Near Shiv Mandir, Dichaon Kalan,
              Najafgarh, New Delhi-110043
            </small>
          </p>
        </p>
      </Jumbotron>
      <br />
      <br />
      <Jumbotron>
        <Col lg={6}>
          <p>Co-Founder- Ramesh Singh</p>

          <p style={{ color: "#337ab7", fontWeight: "bold" }}>
            {" "}
            <small>
              Email - archanashokeeniitg@gmail.com <br /> Contact -
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
    </div>
  );
}
