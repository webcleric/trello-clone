import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  height: 100px;
  width: 280px;
  padding: 10px;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0 2px 4px grey;
  border-radius: 7px;
  background-color: white; 
  background-size: cover; 
  background-repeat: no-repeat;
`;

const Title = styled.h4`
  color: #ffffff;
  text-decoration: none;
  top: 0;
  left: 0;
  color: #757575;
  width: 90%;
  height: 3em;
  overflow: hidden;
  word-wrap: break-word;
  font-weight: bold;
  line-height: 1.5em;
  text-shadow: 1px 1px #000000;
  padding-left: 8px;
  font-size: 1.1em;
`;

const BoardThumbnail = ({ title }) => {
  console.log(title);
  return (
    <Thumbnail>
      <Title>{title}</Title>
    </Thumbnail>
  );
};

export default BoardThumbnail;
