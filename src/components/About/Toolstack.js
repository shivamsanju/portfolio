import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiAzuredevops,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';
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
        <SiPostman />
        <p>Postman</p>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
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
