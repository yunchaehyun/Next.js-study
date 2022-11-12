import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import { Overlay, Global, Header, CloseBtn, ImgWrapper, Indicator, SlickWrapper } from "./styles";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <>
      <Overlay>
        <Global />
        <Header>
          <h1>상세 이미지</h1>
          <CloseBtn onClick={onClose}>X</CloseBtn>
        </Header>
        <SlickWrapper>
          <div>
            {/* react slick */}
            <Slick
              initialSlide={0}
              afterChange={(slide) => setCurrentSlide(slide)}
              infinite
              arrows={false}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {images.map((y) => (
                <ImgWrapper key={y.src}>
                  <img src={y.src} alt={y.src}></img>
                </ImgWrapper>
              ))}
            </Slick>
            <Indicator>
              <div>
                {currentSlide + 1} {' '}/{images.length}
              </div>
            </Indicator>
          </div>
        </SlickWrapper>
      </Overlay>
    </>
  );
};

export default ImagesZoom;

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};
