import * as S from "./style";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Slide = ({ SlideTitle, data }: any) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 3000
  );
  const offset = 2;

  const adjustIndex = (state: string) => {
    if (leaving) return;
    toggleLeaving();
    const totalProject = data?.length;
    const maxIndex = Math.ceil(totalProject / offset) - 1;
    if (state === "next") {
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    } else {
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const rowVariants = {
    hidden: { x: windowWidth - 310 },
    visible: { x: 0 },
    exit: { x: -windowWidth + 310 },
  };

  return (
    <>
      <S.Title>{SlideTitle}</S.Title>
      <S.Slider>
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
                    key={el.properties.name.title[0]?.plain_text}
                    href={{
                      pathname: `/main/project/${el.properties.name.title[0]?.plain_text}`,
                      query: {
                        title: el.properties.name.title[0]?.plain_text,
                        img: el.properties.img.files[0].file.url,
                        stack: JSON.stringify(el.properties.stack.multi_select),
                      },
                    }}
                    as={`/main/project/${el.properties.name.title[0]?.plain_text}`}
                  >
                    <S.Project color={el.properties.img.files[0].file.url}>
                      <S.ProjectDetail>
                        <S.ProjectTitle>
                          {el.properties.name.title[0]?.plain_text}
                        </S.ProjectTitle>
                        <S.TagContainer>
                          {el.properties.stack.multi_select
                            .slice(0, 3)
                            .map((el: any) => (
                              <S.ProjectTag key={el.name}>
                                {el.name}
                              </S.ProjectTag>
                            ))}
                        </S.TagContainer>
                      </S.ProjectDetail>
                    </S.Project>
                  </Link>
                ))}

            <>
              <S.SliderBtn onClick={() => adjustIndex("next")}>
                {">"}
              </S.SliderBtn>
              <S.SliderBtn onClick={() => adjustIndex("prev")} className="left">
                {"<"}
              </S.SliderBtn>
            </>
          </S.Row>
        </AnimatePresence>
      </S.Slider>
    </>
  );
};

export default Slide;
