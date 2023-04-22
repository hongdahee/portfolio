import { MENU_NAME_LIST } from "@/constants/sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {
  const router = useRouter().pathname;
  return (
    <S.Sidebar>
      <Link href="/main/project">
        <S.Logo>HEECHA</S.Logo>
      </Link>
      <S.MenuSection>
        <S.MenuList>
          {MENU_NAME_LIST.map((menu) => (
            <Link href={menu.path} key={menu.name}>
              <S.MenuContainer
                className={
                  router === menu.path ||
                  (menu.name === "프로젝트" &&
                    router === "/main/project/[title]")
                    ? "active"
                    : ""
                }
              >
                <FontAwesomeIcon
                  icon={menu.icon}
                  style={{
                    marginLeft: 10,
                    fontSize: 19,
                    color: "white",
                    maxWidth: 25,
                    maxHeight: 25,
                  }}
                />
                <S.Menu>{menu.name}</S.Menu>
              </S.MenuContainer>
            </Link>
          ))}
        </S.MenuList>
      </S.MenuSection>
    </S.Sidebar>
  );
};

export default Sidebar;
