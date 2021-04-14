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
              This community was established in 2014 by a group of farmers who
              hailed from the outskirts of Delhi. They wanted to take the
              agricultures on the heights where was to see our villages an
              advanced educated hub where science and agriculture is amalgated.
              These farmer hailed from Dichao, Mitraon, Jharoda kalan, Hiran
              kudna etc. The aim of this community is to inspire and guide the
              fellow farmers towards a better farming experience using science
              and biotechnology. We provide the guidance for distribution and
              chain management. We have helped small farmers to do better
              judgements . This Self-Learning community welcomes the farmers to
              build trust and unity.
            </p>
          </Col>
          <Col lg={6}>
            <p>
              यह समुदाय 2014 में किसानों के एक समूह द्वारा स्थापित किया गया था
              दिल्ली के बाहरी इलाके से आया। वे लेना चाहते थे जहाँ हमारे गाँवों
              को देखना था वहाँ की ऊँचाई पर खेती उन्नत शिक्षित हब जहां विज्ञान और
              कृषि का समामेलन किया जाता है। ये किसान डिचाओ, मित्राँ, झरोदा कलां,
              हिरण कुदना आदि से प्रभावित हैं। इस समुदाय का उद्देश्य साथी को
              प्रेरित करना और मार्गदर्शन करना है विज्ञान का उपयोग करते हुए एक
              बेहतर कृषि अनुभव की ओर किसान जैव प्रौद्योगिकी। हम वितरण और
              श्रृंखला के लिए मार्गदर्शन प्रदान करते हैं प्रबंधन। हमने छोटे
              किसानों को बेहतर निर्णय लेने में मदद की है। यह सेल्फ लर्निंग
              समुदाय किसानों का विश्वास बनाने के लिए स्वागत करता है और एकता।
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};
export default About;
