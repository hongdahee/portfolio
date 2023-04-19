import React from "react";
import * as S from "./style";

const Screenshot = ({ data }: any) => {
  return (
    <S.TabContainer>
      {data[0].properties.screenshot.files.map((el: any, idx: number) => (
        <S.ScreenshotContainer key={idx}>
          <S.ImgContainer
            color={el.file?.url || el?.external.url}
            whileHover={{
              scale: 1.2,
              transitionDuration: "0.25s",
            }}
          />
          <S.ImgName>
            {data[0].properties.screenshotInfo.multi_select[idx]?.name}
          </S.ImgName>
        </S.ScreenshotContainer>
      ))}
    </S.TabContainer>
  );
};

export default Screenshot;
