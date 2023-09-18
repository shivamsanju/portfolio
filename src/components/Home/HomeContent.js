import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dp.png";
import Tilt from "react-parallax-tilt";
import Type from "./Type";
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <p style={{ color: "rgb(155 126 172)", marginTop: "9vh", fontSize: '1em' }}>
            "When you don't create things, you become defined by your tastes
            rather than ability. your tastes only narrow & exclude people. so
            create."{" "}
          </p>
          <footer className="blockquote-footer">Why The Lucky Stiff</footer>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <div style={{ textAlign: "left" }}>
              <Type />
            </div>
            <p className="home-about-body">
              I stumbled head over heels into the wacky world of programming,
              and guess what? I've managed to pick up a thing or two (I think...
              🤷‍♂️). Now, I'm all about this wild journey of turning brain-bending
              ideas into super-duper efficient solutions. It's like trying to
              teach a dog to dance the cha-cha, challenging but oddly
              satisfying! 😄💻
              <br />
              <br />
              Oh, and I've developed a little reading addiction, too. Every day,
              I'm on a quest to absorb new knowledge like a sponge in a library.
              Who needs sleep when there's a world of code and concepts to
              explore, right?
              <br />
              <br />
              And here's the kicker: I've been known to channel my inner bard
              from time to time. Yep, I occasionally pen down articles sharing
              the wild and wacky things I've learned on this programming
              rollercoaster. It's like my way of saying, "Hey world, check out
              this quirky brain of mine!" 📚🖋️
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shivamsanju"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shvmsnju/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/shvmsnju/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
