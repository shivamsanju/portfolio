import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Shivam Sanju </span>
            from <span className='purple'> Bangalore, India.</span>
            <br />I am a Software Engineer working at Tredence Analytics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Travelling
            </li>
            <li className='about-activity'>
              <ImPointRight /> Motorcycles
            </li>
            <li className='about-activity'>
              <ImPointRight /> Reading Crime Books
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "when you don't create things, you become defined by your tastes
            rather than ability. your tastes only narrow & exclude people. so
            create."{' '}
          </p>
          <footer className='blockquote-footer'>Why The Lucky Stiff</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
