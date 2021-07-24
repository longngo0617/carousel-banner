import React, { useState } from "react";
import styled from "styled-components";
import { Dots } from "./Dots";

interface SliderProps {
  dots?: boolean;
  arrow?: boolean;
  width: string;
  height: string;
  slides: any;
  infiniteLoop: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  dots = true,
  arrow = true,
  height,
  width,
  slides,
  infiniteLoop,
}) => {
  const [current, setCurrent] = useState(0);
  const [numOfSlides, setNumOfSlides] = useState(slides.length);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && slides.length > 1
  );
  // const [length, setLength] = useState(slides.length);

  // const handleTransitionEnd = () => {
  //   if (isRepeating) {
  //     if (current === 0) {
  //       setTransitionEnabled(false);
  //       setCurrent(length);
  //     } else if (current === length + 1) {
  //       setTransitionEnabled(false);
  //       setCurrent(1);
  //     }
  //   }
  // };

  const prevSlide = () => {
    setCurrent(current === 0 ? numOfSlides - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === numOfSlides - 1 ? 0 : current + 1);
  };

  // const crLastIndex = current === numOfSlides;

  return (
    <SliderWrap>
      <SliderContainer>
        {arrow && <ButtonLeft onClick={prevSlide} />}
        <CarouselContainer width={width} height={height}>
          <CarouselSlide
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: !transitionEnabled ? "none" : undefined,
            }}
          >
            {slides.map((banner: any, index: any) => (
              <Banner key={index} background={banner.img}>
                <TextBanner>{banner.text}</TextBanner>
              </Banner>
            ))}
          </CarouselSlide>
        </CarouselContainer>
        {arrow && <ButtonRight onClick={nextSlide} />}
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
  width: ${(props: any) => props.width && `${props.width}`};
  height: ${(props: any) => props.height && `${props.height}`};
` as any;

const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  transition: transform 0.3s;
`;

const Banner = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: url(${(props: any) => props.background && `${props.background}`});
` as any;

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
    flex-direction: column;
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
    margin: 10px 0;
  }
`;
