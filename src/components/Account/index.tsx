import Link from "next/link";
import * as S from "./style";

const Account = ({ data }: any) => {
  return (
    <S.Container>
      <S.Text>감상할 프로필을 선택해 주세요</S.Text>
      <S.ProfileContainer>
        <Link href={"/main/project"} className="flex">
          <S.Profile color={data[0].properties.img.files[0].file.url} />
          <S.UserName>홍다희</S.UserName>
        </Link>
      </S.ProfileContainer>
    </S.Container>
  );
};

export default Account;
