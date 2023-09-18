import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import ecommerce from '../../Assets/Projects/ecommerce.jpg';
import dsa from '../../Assets/Projects/dsa.png';
import nx from '../../Assets/Projects/nx.png';
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
          <Col md={5} className='project-card'>
            <ProjectCard
              imgPath={nx}
              isBlog={false}
              title='@shvmsnju/nx'
              description='This package extends next-auth for easy integration into existing projects, using in-memory caching for session keys and user data. Session keys auto-refresh at user-defined intervals, allowing only one valid key across all clients.'
              link='https://www.npmjs.com/package/@shvmsnju/nx'
            />
          </Col>
          <Col md={5} className='project-card'>
            <ProjectCard
              imgPath={dsa}
              isBlog={false}
              title='Online Coding Website'
              description='A web application designed for the purpose of coding practice, incorporating an integrated IDE, built using React for the front end, Express for the back end, and PostgreSQL as the database management system, with deployment on the Vercel platform.'
              link='https://leetcodeproblems.vercel.app/'
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={5} className='project-card'>
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title='Ecommerce Backend'
              description='Fully featured backend for an ecommerce platform with user management, jwt authentication, order management and product management.'
              link='https://github.com/shivamsanju/mern-ecommerce'
            />
          </Col>
          <Col md={5} className='project-card'>
            <ProjectCard
              imgPath={calhouse}
              isBlog={false}
              title='California Houses Price Prediction'
              description='A machine learning solution for predicting the price of houses based on previous data. Includes initial data exploration, data cleaning, model training, prediction and model performace evaluation.'
              link='https://github.com/shivamsanju/california-houses'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
