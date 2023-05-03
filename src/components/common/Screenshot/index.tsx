import React from "react";
import * as S from "./style";
import { IDataProps, IScreenshot } from "@/types/data";

const Screenshot = ({ data }: { data: IDataProps[] }) => {
  return (
    <S.TabContainer>
      {data[0].properties.screenshot.files.map((el, idx) => (
        <S.ScreenshotContainer key={idx}>
          <S.ImgContainer
            color={el.file?.url || el.external?.url}
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
