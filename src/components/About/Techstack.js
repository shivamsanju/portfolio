import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiReact,
  DiJavascript1,
  DiMongodb,
} from 'react-icons/di';

import {
  SiFastapi,
  SiTypescript,
  SiNextdotjs,
  SiRedis,
  SiPostgresql,
  SiJava,
  SiGo,
  SiNodedotjs,
  SiPython,
} from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
        <p>Javascript</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTypescript />
        <p>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiJava />
        <p>Java</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiGo />
        <p>Go</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs />
        <p>Next.js</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNodedotjs />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFastapi />
        <p>FastAPI</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
        <p>Mongo DB</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedis />
        <p>Redis</p>
      </Col>
    </Row>
  );
}

export default Techstack;
