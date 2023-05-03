import React from "react";
import * as S from "./style";
import { IDataProps } from "@/types/data";

const StackMain = ({ data }: { data: IDataProps[] }) => {
  return (
    <>
      <S.Grid>
        {data.map((stack) => (
          <S.Container
            key={stack.properties.skill.title[0].plain_text}
            href={`#${stack.properties.skill.title[0].plain_text}`}
          >
            <S.Logo
              color={
                stack.properties.logo.files[0].file?.url ||
                stack.properties.logo.files[0].external?.url
              }
            />
            <S.Name>{stack.properties.skill.title[0].plain_text}</S.Name>
          </S.Container>
        ))}
      </S.Grid>
      <S.Flex>
        {data.map((stack) => (
          <S.DescContainer key={stack.properties.skill.title[0].plain_text}>
            <S.LargeName id={stack.properties.skill.title[0].plain_text}>
              {stack.properties.skill.title[0].plain_text}
            </S.LargeName>
            <S.Description>
              {stack.properties.desc.rich_text[0].plain_text}
            </S.Description>
          </S.DescContainer>
        ))}
      </S.Flex>
    </>
  );
};

export default StackMain;
