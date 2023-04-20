import React from "react";
import * as S from "./style";
import { Menu, MenuContainer } from "../Sidebar/style";
import { MENU_NAME_LIST } from "@/constants/sidebar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter().pathname;
  return (
    <S.Container>
      {" "}
      {MENU_NAME_LIST.map((menu) => (
        <Link
          style={{ width: "100%", height: "100%" }}
          href={menu.path}
          key={menu.name}
        >
          <S.MenuContainer
            className={
              router === menu.path ||
              (menu.name === "프로젝트" && router === "/main/project/[title]")
                ? "active"
                : ""
            }
          >
            <FontAwesomeIcon
              icon={menu.icon}
              style={{
                fontSize: 19,
                color: "white",
                minWidth: 25,
              }}
            />
            <S.Menu>{menu.name}</S.Menu>
          </S.MenuContainer>
        </Link>
      ))}
    </S.Container>
  );
};

export default Header;
