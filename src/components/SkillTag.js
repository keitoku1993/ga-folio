import React from 'react';
import styled from 'styled-components';

const SkillTag = ({ title, tags }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <TagWrapper>
        {tags.map(tag => {
          return <Tag>{tag}</Tag>;
        })}
      </TagWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: block;
  border: 1px solid #ccc;
  border-radius: 2px;
  position: relative;
  padding: 18px 10px;
  flex: 0.3;
  @media (max-width: 768px) {
    padding: 12px 10px;
    margin: 23px 8px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  text-align: left;
  position: absolute;
  top: -22px;
  background-color: #ecf1f1;
  padding: 0px 14px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  color: #fff;
  background-color: cornflowerblue;
  margin: 4px 16px 4px 0;
  font-size: 22px;
  padding: 3px 24px;
  border-radius: 4px;
  @media (max-width: 768px) {
    margin: 4px 8px 4px 0;
    font-size: 16px;
    padding: 0 14px;
    border-radius: 2px;
  }
`;

export default SkillTag;
