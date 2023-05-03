import * as S from "./style";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SlideSkeleton from "../SlideSkeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { IDataProps } from "@/types/data";

const Slide = ({
  SlideTitle,
  data,
}: {
  SlideTitle: string;
  data: IDataProps[];
}) => {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 3000
  );
  const [isLoading, setIsLoading] = useState(true);
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
              data.slice(offset * index, offset * index + offset).map((el) => (
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
                  style={{ height: "100%" }}
                >
                  <S.Project>
                    {isLoading && <SlideSkeleton />}
                    <Image
                      className="img"
                      src={el.properties.img.files[0].file.url}
                      alt="Project thumbnail"
                      fill
                      priority
                      style={{ objectFit: "cover" }}
                      onLoadingComplete={() => setIsLoading(false)}
                    />
                    <S.ProjectDetail>
                      <S.ProjectTitle>
                        {el.properties.name.title[0]?.plain_text}
                      </S.ProjectTitle>
                      <S.TagContainer>
                        {el.properties.stack.multi_select
                          .slice(0, 3)
                          .map((el) => (
                            <S.ProjectTag key={el.name}>{el.name}</S.ProjectTag>
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
