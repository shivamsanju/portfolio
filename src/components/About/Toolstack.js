import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiAzuredevops,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiMicrosoftazure,
  SiDocker,
  SiGit
} from 'react-icons/si';

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiAzuredevops />
        <p>Azure Devops</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
        <p>VS Code</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiDocker />
        <p>Docker</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMicrosoftazure />
        <p>Microsoft Azure</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiHeroku />
        <p>Heroku</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
