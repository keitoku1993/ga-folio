import React from 'react';
import styled from 'styled-components';

const Works = ({ title, mvPath, url, skills, gitUrl }) => {
  return (
    <Wrapper>
      <MainVisual href={url}>
        <MainVisualImage src={mvPath} target="_blank" />
      </MainVisual>
      <WorkLayout>
        <Title>{title}</Title>
        <Skills>{skills}</Skills>
        <GitLink href={gitUrl} target="_blank">
          Github
        </GitLink>
      </WorkLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  width: 32%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 28px;
  }
`;

const MainVisual = styled.a`
  height: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const MainVisualImage = styled.img`
  width: 100%;
`;

const WorkLayout = styled.div`
  padding: 8px 8px 16px;
  position: relative;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 1;
  margin-top: 26px;
`;

const Skills = styled.div`
  font-size: 16px;
  word-break: break-all;
  line-height: 1.2;
  margin-top: 10px;
`;

const GitLink = styled.a`
  display: block;
  color: #fff;
  background-color: cornflowerblue;
  border-radius: 4px;
  font-size: 16px;
  width: 110px;
  height: 24px;
  line-height: 24px;
  margin: 22px auto 0;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default Works;
