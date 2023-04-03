import * as S from "./style";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Slide = ({ SlideTitle, data }: any) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 3000
  );
  const offset = 2;

  const adjustIndex = (state: string) => {
    if (leaving) return;
    toggleLeaving();
    const totalProject = data?.length;
    const maxIndex = Math.ceil(totalProject / offset) - 1;
    if (state === "next")
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    else setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const rowVariants = {
    hidden: { x: windowWidth - 310 },
    visible: { x: 0 },
    exit: { x: -windowWidth + 310 },
  };

  const hoverSlider = () => setOnHover((prev) => !prev);

  return (
    <>
      <S.Title>{SlideTitle}</S.Title>
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
            {data &&
              data
                .slice(offset * index, offset * index + offset)
                .map((el: any) => (
                  <Link
                    href={`/main/project/${el.properties.name.title[0]?.plain_text}`}
                  >
                    <S.Project
                      color={el.properties.img.files[0].file.url}
                      key={el.properties.name.title[0]?.plain_text}
                    >
                      <S.ProjectDetail>
                        <S.ProjectTitle>
                          {el.properties.name.title[0]?.plain_text}
                        </S.ProjectTitle>
                        {el.properties.stack.multi_select.map((el: any) => (
                          <S.ProjectTag>{el.name}</S.ProjectTag>
                        ))}
                      </S.ProjectDetail>
                    </S.Project>
                  </Link>
                ))}
            {onHover && (
              <>
                <S.SliderBtn
                  onMouseOver={() => setOnHover(false)}
                  onClick={() => adjustIndex("next")}
                >
                  {">"}
                </S.SliderBtn>
                <S.SliderBtn
                  onClick={() => adjustIndex("prev")}
                  className="left"
                  onMouseOver={() => setOnHover(false)}
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
