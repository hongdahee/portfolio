import Image from "next/image";
import Link from "next/link";
import * as S from "./style";

const Account = () => {
  return (
    <S.Container>
      <S.Text>감상할 프로필을 선택해 주세요</S.Text>
      <S.ProfileContainer>
        <Link href={"/main/project"} className="flex">
          <S.Profile>
            <Image
              src="/arang.jpeg"
              alt="profile image"
              width={200}
              height={200}
            />
          </S.Profile>
          <S.UserName>홍다희</S.UserName>
        </Link>
      </S.ProfileContainer>
    </S.Container>
  );
};

export default Account;
