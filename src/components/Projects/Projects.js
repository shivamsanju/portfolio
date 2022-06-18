import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import ecommerce from '../../Assets/Projects/ecommerce.jpg';
import dsa from '../../Assets/Projects/dsa.png';
import calhouse from '../../Assets/Projects/calhouse.jpg';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={dsa}
              isBlog={false}
              title='Leetcode Problems'
              description='Web application for practicing Leetcode Problems with integrated IDE, built using React, Express and PostgreSQL for database and deployed on Vercel'
              link='https://leetcodeproblems.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={calhouse}
              isBlog={false}
              title='California Houses Price Prediction'
              description='A machine learning solution for predicting the price of houses based on previous data. Includes initial data exploration, data cleaning, model training, prediction and model performace evaluation.'
              link='https://github.com/shivamsanju/california-houses'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title='Ecommerce Backend'
              description='Fully featured backend for an ecommerce platform with user management, jwt authentication, order management and product management.'
              link='https://github.com/shivamsanju/mern-ecommerce'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
