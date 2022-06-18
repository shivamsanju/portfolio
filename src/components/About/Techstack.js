import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from 'react-icons/di';
import {
  SiFastapi,
  SiTypescript,
  SiNextdotjs,
  SiRedis,
  SiPostgresql,
} from 'react-icons/si';

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPython />
        <p>Python</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
        <p>Javascript</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFastapi />
        <p>FastAPI</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
        <p>Node.js</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
        <p>React</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
        <p>Mongo DB</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNextdotjs />
        <p>Next.js</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiTypescript />
        <p>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiRedis />
        <p>Redis</p>
      </Col>
    </Row>
  );
}

export default Techstack;
