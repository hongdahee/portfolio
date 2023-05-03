import { IDataProps } from "@/types/data";
import Slide from "../common/Slide";
import * as S from "./style";

const SlideList = [
  {
    title: "전체 프로젝트 모아보기",
  },
  {
    title: "웹 프로젝트",
    filter: "web",
  },
  {
    title: "앱 프로젝트",
    filter: "app",
  },
];

const ProjectMain = ({ data }: { data: IDataProps[] }) => {
  return (
    <>
      <S.HomeTitle>홈</S.HomeTitle>
      <S.Line />
      {SlideList.map((slide) => (
        <Slide
          key={slide.title}
          data={
            slide.filter
              ? data.filter(
                  (el: IDataProps) =>
                    el.properties.category.rich_text[0].plain_text ===
                    slide.filter
                )
              : data
          }
          SlideTitle={slide.title}
        />
      ))}
    </>
  );
};

export default ProjectMain;
