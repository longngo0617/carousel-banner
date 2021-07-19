import React from "react";
import styled from "styled-components";
import { BannerData } from "../BannerData";
import { Dots } from "./Dots";

interface SliderProps {
  dots?: boolean;
}

export const Slider: React.FC<SliderProps> = ({ dots = true }) => {
  const [current, setCurrent] = React.useState(0);
  const [numOfSlides, setNumOfSlides] = React.useState(3);
  const [input, setInput] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.validity.valid ? e.target.value : input;
    setInput(value);
  };
  const handleClick = () => {
    if(parseInt(input) < 3) {
      return;
    }
    setNumOfSlides(parseInt(input));
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? numOfSlides - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === numOfSlides - 1 ? 0 : current + 1);
  };

  return (
    <SliderWrap>
      <InputWrap>
        <Input
          type="text"
          pattern="[0-9]*"
          name="num"
          placeholder="Enter the number of images"
          value={input}
          onChange={handleChange}
        />
        <ButtonEnter onClick={handleClick}>Enter</ButtonEnter>
      </InputWrap>
      <SliderContainer>
        {numOfSlides > 1 && <ButtonLeft onClick={prevSlide} />}
        <CarouselContainer>
          <CarouselSlide
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {[...Array(numOfSlides)].map((banner, index) => (
              <Banner key={index}>
                <TextBanner>Banner {index}</TextBanner>
              </Banner>
            ))}
          </CarouselSlide>
        </CarouselContainer>
        {numOfSlides > 1 && <ButtonRight onClick={nextSlide} />}
      </SliderContainer>
      {dots && numOfSlides > 1 && (
        <Dots
          numOfSlides={numOfSlides}
          crIndex={current}
          changeCrIndex={setCurrent}
        />
      )}
    </SliderWrap>
  );
};

const SliderWrap = styled.div`
  width: 100%;
`;

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const ButtonRight = styled(Button)`
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 50px solid #cfe2f3;
`;

const ButtonLeft = styled(Button)`
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-right: 50px solid #cfe2f3;
`;

const CarouselContainer = styled.div`
  margin: 0 40px;
  overflow: hidden;
  border: 2px solid black;
  width: 50%;
`;

const CarouselSlide = styled.div`
  width: 100%;
  height: 300px;
  white-space: nowrap;
  transition: transform 0.3s;
`;

const Banner = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #cfe2f3;
`;

const TextBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
`;

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 600px) {
    flex-direction:column;
  }
`;
const Input = styled.input`
  font-size: 15px;
  width: 200px;
`;

const ButtonEnter = styled(Button)`
  background-color: #e4e6eb;
  height: 30px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  @media (max-width: 600px) {
    margin:10px 0;
  }
`;