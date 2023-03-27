import { tabNameList } from "@/constants/category";
import { useState } from "react";
import CategoryBtn from "../common/CategoryBtn";
import Slide from "../common/Slide";
import * as S from "./style";

const ProjectMain = () => {
  const [tab, setTab] = useState("전체");
  const onClickTab = (selectedTab: string) => {
    setTab(selectedTab);
  };

  return (
    <>
      <S.BtnContainer>
        {tabNameList.map((el) => (
          <CategoryBtn content={el.name} onClickTab={onClickTab} tab={tab} />
        ))}
      </S.BtnContainer>
      <Slide SlideTitle="웹 프로젝트 모아보기" />
      <Slide SlideTitle="Next js 프로젝트 모아보기" />
    </>
  );
};

export default ProjectMain;
