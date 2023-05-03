import Link from "next/link";
import * as S from "./style";
import ProfileSkeleton from "../common/ProfileSkeleton";
import { useState } from "react";
import Image from "next/image";
import { IDataProps } from "@/types/data";

const Account = ({ data }: { data: IDataProps[] }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <S.Container>
      <S.Text>감상할 프로필을 선택해 주세요</S.Text>
      <S.ProfileContainer>
        <Link href={"/main/project"} className="flex">
          <S.ImgContainer>
            <Image
              src={data[0].properties.img.files[0].file.url}
              alt="profile image"
              fill
              priority
              style={{ objectFit: "cover" }}
              onLoadingComplete={() => setIsLoading(false)}
            />
            {isLoading && <ProfileSkeleton />}
          </S.ImgContainer>
          <S.UserName>홍다희</S.UserName>
        </Link>
      </S.ProfileContainer>
    </S.Container>
  );
};

export default Account;
