import React from "react";
import styled from "styled-components";

interface DotsProps {
  numOfSlides: number;
  crIndex: number; 
  changeCrIndex: React.Dispatch<React.SetStateAction<number>>;
}
interface DotActive {
    active:boolean
}

export const Dots: React.FC<DotsProps> = ({ numOfSlides, crIndex,changeCrIndex }) => {

    const handleChange = (index: number) => {
        changeCrIndex(index)
    }
  return (
    <DotComponent>
      {[...Array(numOfSlides)].map((e, i :number) => (
        <Dot key={i} active={crIndex === i ? true : false} onClick={() =>handleChange(i)}/>
      ))}
    </DotComponent>
  );
};

const DotComponent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.li`
  background: ${(props : DotActive) => (props.active ? "black" : "#cfe2f3")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  cursor: pointer;
  user-select: none;
  transition:.5s background-color;
`;
