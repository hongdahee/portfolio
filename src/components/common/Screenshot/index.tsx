import React from "react";
import * as S from "./style";

const Screenshot = () => {
  return (
    <S.TabContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el) => (
        <S.ScreenshotContainer>
          <S.ImgContainer />
          <S.ImgName>{el}</S.ImgName>
        </S.ScreenshotContainer>
      ))}
    </S.TabContainer>
  );
};

export default Screenshot;
