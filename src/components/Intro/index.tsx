import React, { useState } from "react";
import * as S from "./style";
import Image from "next/image";
import Link from "next/link";
import IntroSkeleton from "../common/IntroSkeleton";

const IntroMain = ({ data }: any) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <S.Container>
      <S.IntroContainer>
        <S.ImgContainer>
          <Image
            src={data[0].properties.img.files[0].file.url}
            alt="Introduce Image"
            fill
            priority
            style={{ objectFit: "cover" }}
            onLoadingComplete={() => setIsLoading(false)}
          />
          {isLoading && <IntroSkeleton />}
        </S.ImgContainer>
        <S.Content>
          <h1>새로운 것을 배우는 걸 좋아하는 개발자 홍다희입니다. </h1>
          {data[0].properties.intro.rich_text[0].plain_text}
        </S.Content>
      </S.IntroContainer>
      <S.ContactContainer>
        <S.ContactTitle>Github: </S.ContactTitle>
        <Link href={data[0].properties.contact.multi_select[0].name}>
          <Image
            src="/github-mark-white.png"
            alt="github logo"
            width={25}
            height={25}
            style={{ marginRight: 8 }}
          />
        </Link>
        <S.ContactTitle>Email: </S.ContactTitle>
        <S.Contact>{data[0].properties.contact.multi_select[1].name}</S.Contact>
      </S.ContactContainer>
    </S.Container>
  );
};

export default IntroMain;
