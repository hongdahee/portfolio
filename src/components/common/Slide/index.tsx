import * as S from "./style";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const Slide = () => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const offset = 2;

  const adjustIndex = (state: string) => {
    if (leaving) return;
    toggleLeaving();
    const totalProject = 6;
    const maxIndex = Math.ceil(totalProject / offset) - 1;
    if (state === "next")
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    else setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const rowVariants = {
    hidden: { x: window.innerWidth - 310 },
    visible: { x: 0 },
    exit: { x: -window.innerWidth + 310 },
  };

  const hoverSlider = () => setOnHover((prev) => !prev);

  return (
    <>
      <S.Title>웹 프로젝트 모아보기</S.Title>
      <S.Slider onMouseOver={hoverSlider} onMouseOut={hoverSlider}>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <S.Row
            variants={rowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 1 }}
            key={index}
          >
            {[1, 2, 3, 4, 5, 6]
              .slice(offset * index, offset * index + offset)
              .map((el) => (
                <S.Project key={el}>{el}</S.Project>
              ))}
            {onHover && (
              <>
                <S.SliderBtn onClick={() => adjustIndex("next")}>
                  {">"}
                </S.SliderBtn>
                <S.SliderBtn
                  onClick={() => adjustIndex("prev")}
                  className="left"
                >
                  {"<"}
                </S.SliderBtn>
              </>
            )}
          </S.Row>
        </AnimatePresence>
      </S.Slider>
    </>
  );
};

export default Slide;
