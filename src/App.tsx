import React from "react";
import styled from "styled-components";
import img from "./img/Rectangle 1.png";

function App() {
  return (
    <Wrap>
      <Box>
        <img src={img} alt="Photo" />
        <TextWrapper>
          <h1>Headline</h1>
          <p>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </p>
          <div>
            <StyledBtn>See more</StyledBtn>
            <SuperBtn>Save</SuperBtn>
          </div>
        </TextWrapper>
      </Box>
    </Wrap>
  );
}

const StyledBtn = styled.button`
  min-width: 86px;
  border-radius: 5px 0px 0px 0px;
  border: none;
  background-color: #4e71fe;
  border-radius: 5px;
  padding: 4px 20px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  border: 2px solid #4e71fe;


  &:hover {
    background-color: #fff;
    border: 2px solid #4e71fe;
    color: #4e71fe;
  }
`;

const SuperBtn = styled(StyledBtn)`
  background-color: #fff;
  border: 2px solid #4e71fe;
  color: #4e71fe;
  outline: none;

  &:hover{
    background-color: #4e71fe;
    color: #fff;
    border-color: #4e71fe;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #dcdcdc;
`;

const Box = styled.div`
  height: 350px;
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 20px 5px #0000001a;
  gap: 10px;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const TextWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  

  h1 {
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.36px;
  }
  p {
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
  }
  div{
    display:  flex;
    gap: 20px;
  }
`;

export default App;
