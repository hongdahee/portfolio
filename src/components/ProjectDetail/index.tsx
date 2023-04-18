import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useRouter } from "next/router";
import { ProjectTag } from "../common/Slide/style";
import { LINK, TAB_LIST } from "@/constants/projectDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Screenshot from "../common/Screenshot";
import DetailInfo from "../common/DetailInfo";

const ProjectDetail = ({ data }: any) => {
  const { query } = useRouter();
  const title = query.title;
  const img = query.img || data[0].properties.img.files[0].file.url;
  const [stackList, setStackList] = useState([]);
  const [tabState, setTabState] = useState("스크린샷");
  console.log(data);

  useEffect(() => {
    if (query.stack) {
      setStackList(
        JSON.parse(query.stack as string).map((stack: any) => stack.name)
      );
    }
  }, []);

  const activeTab = (selectedTab: string) => {
    setTabState(selectedTab);
  };

  return (
    <>
      <S.MainContainer>
        <S.Img color={img} />
        <S.InfoContainer>
          <S.Title>{title}</S.Title>
          {stackList.map((stack: string) => (
            <ProjectTag>{stack}</ProjectTag>
          ))}
          <S.InfoText>
            {data[0].properties.intro.rich_text[0].plain_text}
          </S.InfoText>
        </S.InfoContainer>
      </S.MainContainer>
      <S.LinkContainer>
        {LINK.map((link: any, idx: number) => (
          <>
            {data[0].properties.link.multi_select[idx].name !== "null" &&
              data[0].properties.link.multi_select[idx].name !==
                "unavailable" && (
                <Link href={data[0].properties.link.multi_select[idx].name}>
                  <S.LinkFlex>
                    {link.icon ? (
                      <FontAwesomeIcon
                        icon={link.icon}
                        style={{ minWidth: 5, marginRight: 8 }}
                      />
                    ) : (
                      <Image
                        src="/github-mark-white.png"
                        alt="github logo"
                        width={20}
                        height={20}
                        style={{ marginRight: 8 }}
                      />
                    )}
                    <S.LinkBtn>{link.link}</S.LinkBtn>
                  </S.LinkFlex>
                </Link>
              )}
          </>
        ))}
      </S.LinkContainer>
      <S.ContentContainer>
        <S.TabContainer>
          {TAB_LIST.map(({ name }: { name: string }) => (
            <S.Tab
              onClick={() => activeTab(name)}
              className={name === tabState ? "active" : ""}
            >
              {name}
            </S.Tab>
          ))}
        </S.TabContainer>
        {TAB_LIST.map(
          (tab: any) =>
            tabState == tab.name &&
            (tabState === "스크린샷" ? (
              <Screenshot data={data} />
            ) : (
              <DetailInfo data={data} />
            ))
        )}
      </S.ContentContainer>
    </>
  );
};

export default ProjectDetail;
