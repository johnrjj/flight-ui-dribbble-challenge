import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const AppContainer = styled.div`
  background-color: red;
  width: 300px;
  height: 592px;
  background-image: linear-gradient(-180deg, #d8a6ff 0%, #5f79fc 100%);
`;

const DayContainer = styled.div`
  position: relative;
  margin-top: 32px;
  height: 72px;
`;

const DayTextContainer = styled.div`
  position: absolute;
  top: 24px;
  left: 16px;
`;

const DayText = styled.div`
  color: #fff;
  font-family: 'SF Pro Text';
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 24px;
`;

const DayFloatingTextContainer = styled.div`
  position: absolute;
  top: 0;
  left: -16px;
`;

const DayFloatingText = styled.div`
  font-size: 72px;
  opacity: 0.2;
  color: #fff;
  font-weight: 900;
  font-family: 'SF Pro Text';
`;

const HeroContainer = styled.div`
  margin: -8px 16px 32px 16px;
  background-color: #fff;
  padding: 24px 32px 32px;
  border-radius: 8px;
  box-shadow: 0 8px 12px 6px rgba(125, 102, 219, 0.28);
`;

const HeroIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 100%;
  margin: 0 auto;
  background-image: linear-gradient(134deg, #ff8d94 0%, #fdcbbc 100%);
  margin-bottom: 26px;
  position: relative;
`;

const HeroIconCheckmark = styled.div`
  position: absolute;
  background-color: #503c7f;
  height: 30px;
  width: 30px;
  right: -8px;
  top: 0;
  border-radius: 100%;
`;

const HeroText = styled.div`
  text-align: center;
  margin: 0 auto;
  color: #5a4963;
  font-size: 16px;
  font-family: 'SF Pro Text';
  font-weight: 600;
  letter-spacing: 0.75px;
`;

const ExploreContainer = styled.div`
  margin: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 28px;
`;

const ExploreTitleContainer = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 24px;
`;

const ExploreTitleText = styled.div`
  color: #fff;
  font-family: 'SF Pro Text';
  font-weight: 600;
  letter-spacing: 0.75px;
  font-size: 16px;
`;

const ExploreIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  width: 100%;
`;

const ExploreIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExploreIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #fff;
  height: 48px;
  width: 48px;
  box-shadow: 0 8px 12px 6px rgba(125, 102, 219, 0.28);
  margin-bottom: 12px;
`;

const ExploreIconText = styled.div`
  color: #fff;
  font-family: 'SF Pro Text';
  font-weight: 300;
  letter-spacing: 0.75px;
  font-size: 8px;
  opacity: 0.7;
`;

const WeatherContainer = styled.div`
  margin: 0 12px;
  padding: 16px 4px;
  background-color: #8290ff;
  height: 86px;
  border-radius: 8px;
  box-shadow: 0 8px 12px 6px rgba(125, 102, 219, 0.28);
`;

class App extends Component {
  render() {
    return (
      <Center>
        <AppContainer>
          <DayContainer>
            <DayTextContainer>
              <DayText>Today</DayText>
            </DayTextContainer>
            <DayFloatingTextContainer>
              <DayFloatingText>Today</DayFloatingText>
            </DayFloatingTextContainer>
          </DayContainer>
          <HeroContainer>
            <HeroIcon>
              <HeroIconCheckmark />
            </HeroIcon>
            <HeroText>You just landed in SeaTac Airport</HeroText>
          </HeroContainer>
          <ExploreContainer>
            <ExploreTitleContainer>
              <ExploreTitleText>Explore nearby</ExploreTitleText>
            </ExploreTitleContainer>
            <ExploreIconsContainer>
              <ExploreIconContainer>
                <ExploreIcon>
                  <Icon1 />
                </ExploreIcon>
                <ExploreIconText>Mobile</ExploreIconText>
              </ExploreIconContainer>
              <ExploreIconContainer>
                <ExploreIcon>
                  <Icon2 />
                </ExploreIcon>{' '}
                <ExploreIconText>Hotel</ExploreIconText>
              </ExploreIconContainer>
              <ExploreIconContainer>
                <ExploreIcon>
                  <Icon3 />
                </ExploreIcon>{' '}
                <ExploreIconText>Guide</ExploreIconText>
              </ExploreIconContainer>
              <ExploreIconContainer>
                <ExploreIcon>
                  <Icon4 />
                </ExploreIcon>{' '}
                <ExploreIconText>Restaurant</ExploreIconText>
              </ExploreIconContainer>
            </ExploreIconsContainer>
          </ExploreContainer>
          <WeatherContainer />
        </AppContainer>
      </Center>
    );
  }
}

// Temp Icons modified via Sketch
const Icon1 = ({ color, size, ...otherProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="url(#linearGradient-1)"
    stroke="url(#linearGradient-1)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...otherProps}
  >
    <defs>
      <linearGradient x1="0%" y1="50%" x2="103.746528%" y2="50%" id="linearGradient-1">
        <stop stop-color="#B486F6" offset="0%" />
        <stop stop-color="#E88CDC" offset="100%" />
      </linearGradient>
    </defs>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Icon2 = ({ color, size, ...otherProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="url(#linearGradient-2)"
    stroke="url(#linearGradient-2)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...otherProps}
  >
    <defs>
      <linearGradient x1="-4.04459635%" y1="50%" x2="109.629313%" y2="50%" id="linearGradient-2">
        <stop stop-color="#84C5FD" offset="0%" />
        <stop stop-color="#B2A0FF" offset="100%" />
      </linearGradient>
    </defs>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Icon3 = ({ color, size, ...otherProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="url(#linearGradient-3)"
    stroke="url(#linearGradient-3)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...otherProps}
  >
    <defs>
      <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-3">
        <stop stop-color="#FEADCB" offset="0%" />
        <stop stop-color="#FEA898" offset="100%" />
      </linearGradient>
    </defs>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Icon4 = ({ color, size, ...otherProps }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="url(#linearGradient-4)"
    stroke="url(#linearGradient-4)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...otherProps}
  >
    <defs>
      <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="linearGradient-4">
        <stop stop-color="#B9E0D4" offset="0%" />
        <stop stop-color="#94BFE2" offset="100%" />
      </linearGradient>
    </defs>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default App;
