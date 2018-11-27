/* global tw */
import React from 'react';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import { Carousel } from 'react-responsive-carousel';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import {
  rotate,
  UpDown,
  UpDownWide,
  waveAnimation,
} from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';

import '../styles/global';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SG1 from '../images/SG1.gif';
import SG2 from '../images/SG2.gif';
import SG3 from '../images/SG3.gif';
import SG4 from '../images/SG4.gif';
import M1 from '../images/M1.gif';
import M2 from '../images/M2.gif';
import avatar from '../images/jimin.jpg';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw(
    'text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block'
  )};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const CarouselWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw(
    'text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify'
  )};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e9af32;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw(
    'text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg'
  )};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG
            icon="triangle"
            className={hidden}
            width={48}
            stroke="#B39BC8"
            left="10%"
            top="20%"
          />
          <SVG icon="hexa" width={48} stroke="#B39BC8" left="60%" top="70%" />
          <SVG icon="box" width={6} fill={colors.purple} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors.purple}
            left="80%"
            top="10%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="90%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={16}
            fill={colors.yellow}
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width={16}
            stroke="#B39BC8"
            left="30%"
            top="65%"
          />
          <SVG icon="circle" width={6} fill="#E64398" left="75%" top="10%" />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill="#E64398"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="circle"
          className={hidden}
          width={24}
          fill="#E64398"
          left="5%"
          top="70%"
        />
        <SVG icon="circle" width={6} fill="#E64398" left="4%" top="20%" />
        <SVG icon="circle" width={12} fill="#E64398" left="50%" top="60%" />
        <SVG icon="upDown" width={8} fill="#E64398" left="95%" top="90%" />
        <SVG
          icon="upDown"
          className={hidden}
          width={24}
          fill="#E64398"
          left="40%"
          top="80%"
        />
        <SVG icon="triangle" width={8} stroke="#E64398" left="25%" top="5%" />
        <SVG
          icon="circle"
          width={64}
          fill={colors.yellow}
          left="95%"
          top="5%"
        />
        <SVG
          icon="box"
          className={hidden}
          width={64}
          fill={colors.yellow}
          left="5%"
          top="90%"
        />
        <SVG icon="box" width={6} fill="#E64398" left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.purple} left="40%" top="30%" />
        <SVG
          icon="hexa"
          width={16}
          stroke={colors.purple}
          left="10%"
          top="50%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors.yellow}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <BigTitle>
            Hello, <br /> I'm Jimin Park.
          </BigTitle>
          <Subtitle>
            Software engineer focused on front-end development .
          </Subtitle>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, #A1C3D1 0%, #B39BC8
          100%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.4} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <CarouselWrapper>
            <Carousel>
              <div>
                <img alt="picture" src={SG1} />
              </div>
              <div>
                <img alt="picture" src={SG2} />
              </div>
              <div>
                <img alt="picture" src={SG3} />
              </div>
              <div>
                <img alt="picture" src={SG4} />
              </div>
            </Carousel>

            <Carousel>
              <div>
                <img alt="picture" src={M1} />
              </div>
              <div>
                <img alt="picture" src={M2} />
              </div>
            </Carousel>
          </CarouselWrapper>

          <ProjectsWrapper>
            <ProjectCard
              title="StickerGo"
              link="https://github.com/StickerGo/StickerGo1"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
            >
              A multiplayer mobile IOS game that allows users to create drawings
              to "stick" in Augmented Reality.
            </ProjectCard>

            <ProjectCard
              title="Minimalist"
              link="https://github.com/parkjimin0/Minimalist"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
            >
              An aesthetically pleasing minimalistic mobile task manager.
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="box" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG
            icon="upDown"
            width={8}
            fill={colors.yellow}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors.purple}
            left="25%"
            top="5%"
          />
          <SVG
            icon="circle"
            className={hidden}
            width={24}
            fill={colors.white}
            left="17%"
            top="60%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors.green}
            left="20%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="90%"
            top="30%"
          />
          <SVG
            icon="circle"
            width={16}
            fill={colors.yellow}
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            className={hidden}
            width={16}
            stroke={colors.purple}
            left="18%"
            top="75%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="75%"
            top="10%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors.yellow}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="hexa" width={16} stroke={colors.red} left="75%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors.yellow}
          left="80%"
          top="70%"
        />
      </Divider>
      <Divider
        bg="#F172A1"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={3}
      />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG
            icon="box"
            className={hidden}
            width={6}
            fill={colors.blue}
            left="50%"
            top="75%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors.yellow}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors.purple}
            left="25%"
            top="5%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={24}
            fill={colors.yellow}
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            className={hidden}
            width={16}
            fill={colors.purple}
            left="5%"
            top="80%"
          />
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors.yellow}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill="#F172A1" left="70%" top="60%" />
        <SVG icon="box" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="box" width={12} fill="#F172A1" left="20%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors.yellow}
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              From travelling around the world to now exploring new "languages"
              in a programmatic field.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            Previously working in education with governments and private
            agencies in various countries, I enjoyed the flexibility and
            creativity of being able to plan my own lesson plans yet applying my
            analytical sense to my students in test preparations for SAT and
            TOEFL. Being introduced to Javascript through a friend, I found
            coding to come between a fine balance between art and logic.
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#A1C3D1" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 338.05"
              preserveAspectRatio="none"
            >
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Contact <a href="mailto:parkjimin0@gmail.com">Me</a> or find me on
            other platforms:{' '}
            <a href="https://www.linkedin.com/in/parkjimin0/">LinkedIn</a> &{' '}
            <a href="https://github.com/parkjimin0">GitHub</a> &{' '}
            <a href="https://www.instagram.com/jiminycricket0/">Instagram</a>
          </ContactText>
        </Inner>
      </Content>
      <Footer>&copy; 2018 by Gatsby Starter Portfolio Cara. </Footer>
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors.green}
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke={colors.yellow}
            left="25%"
            top="5%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="triangle"
            width={12}
            stroke={colors.white}
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            fill={colors.white}
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            className={hidden}
            width={8}
            fill={colors.purple}
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          fill={colors.purple}
          left="70%"
          top="60%"
        />
        <SVG icon="box" width={12} fill={colors.yellow} left="20%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors.purple}
          left="80%"
          top="70%"
        />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;
