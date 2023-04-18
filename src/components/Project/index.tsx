import Slide from "../common/Slide";
import * as S from "./style";

const ProjectMain = ({ data }: any) => {
  return (
    <>
      <S.HomeTitle>홈</S.HomeTitle>
      <S.Line />
      <Slide data={data} SlideTitle="전체 프로젝트 모아보기" />
      <Slide
        data={data.filter(
          (el: any) => el.properties.category.rich_text[0].plain_text === "web"
        )}
        SlideTitle="웹 프로젝트"
      />
      <Slide
        data={data.filter(
          (el: any) => el.properties.category.rich_text[0].plain_text === "app"
        )}
        SlideTitle="앱 프로젝트"
      />
    </>
  );
};

export default ProjectMain;
