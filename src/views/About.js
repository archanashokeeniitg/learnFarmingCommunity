import React from "react";

import { Jumbotron, Carousel, Col, Row, Alert } from "react-bootstrap";

const About = () => {
  return (
    <div className="container">
      <Jumbotron>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://user-images.githubusercontent.com/66199202/113365611-9c3b7e00-930b-11eb-8f6a-00bf131eb159.png"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://user-images.githubusercontent.com/66199202/113375260-e29cd700-9323-11eb-9b40-1d77c9a4dfb1.jpeg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://user-images.githubusercontent.com/66199202/113375253-e03a7d00-9323-11eb-895e-bfeeb3a20f5a.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row>
          <Col lg={6}>
            <p>
              This community was established in 2014 by Rahul Shokeen son of
              Anoop Singh as a dream and legacy of his hardworking father . His
              Father's dream was to see our village an advanced educated hub
              where science and agriculture is amalgated. The aim of this
              community is to inspire and guide the fellow farmers towards a
              better farming experience using science and biotechnology. We
              provide the guidance for distribution and chain management. We
              have helped small farmers to do better judgements . This
              Self-Learning community welcomes the farmers to build trust and
              unity.
            </p>
          </Col>
          <Col lg={6}>
            <p>
              इस समुदाय की स्थापना 2014 में अनूप सिंह के बेटे राहुल शोकेन ने
              अपने मेहनती पिता के सपने और विरासत के रूप में की थी। उनके पिता का
              सपना था कि हमारा गाँव एक उन्नत शिक्षित हब बने जहाँ विज्ञान और कृषि
              का समामेलन हो। इस समुदाय का उद्देश्य विज्ञान और जैव प्रौद्योगिकी
              का उपयोग करके बेहतर खेती के अनुभव के लिए साथी किसानों को प्रेरित
              करना और मार्गदर्शन करना है। हम वितरण और श्रृंखला प्रबंधन के लिए
              मार्गदर्शन प्रदान करते हैं। हमने छोटे किसानों को बेहतर निर्णय लेने
              में मदद की है। यह सेल्फ लर्निंग समुदाय किसानों का विश्वास और एकता
              बनाने के लिए स्वागत करता है।
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
export default About;
