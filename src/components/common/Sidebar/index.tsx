import { menuNameList } from "@/constants/sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./style";

const Sidebar = () => {
  const router = useRouter().pathname;
  return (
    <S.Sidebar>
      <Link href="/main/project">
        <S.Logo>HEECHA</S.Logo>
      </Link>
      <S.MenuSection>
        <S.MenuList>
          {menuNameList.map((menu) => (
            <Link href={menu.path} key={menu.name}>
              <S.Menu className={router === menu.path ? "active" : ""}>
                {menu.name}
              </S.Menu>
            </Link>
          ))}
        </S.MenuList>
      </S.MenuSection>
    </S.Sidebar>
  );
};

export default Sidebar;
