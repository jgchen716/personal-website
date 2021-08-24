import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Publications = () => {
  const { publications } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="publications">
      <Container>
        <div className="publications-wrapper">
          <Title title="Publications" />
          {publications.map((publication) => {
            const { title, info, date, url, img, id } = publication;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="publications-wrapper__text">
                      <h3 className="publications-wrapper__text-title">
                        {title || 'Publication Title'}
                      </h3>
                      <p className="mb-4">{date || ''}</p>
                      <div className="publications-wrapper__text">
                        <p className="publication-info">
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        Read It!
                      </a>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="publications-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Publication Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Publications;
