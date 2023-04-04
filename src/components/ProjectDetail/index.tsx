import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";

const ProjectDetail = () => {
  const { query } = useRouter();
  const title = query.title;
  const img = query.img || "";
  const [stackList, setStackList] = useState();

  useEffect(() => {
    if (query.stack) {
      setStackList(
        JSON.parse(query.stack as string).map((stack: any) => stack.name)
      );
    }
  }, []);

  return (
    <S.MainContainer>
      <S.Img color={query.img as string} />
      <S.Title>{title}</S.Title>
    </S.MainContainer>
  );
};

export default ProjectDetail;
