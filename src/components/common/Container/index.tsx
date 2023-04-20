import { IContainerProps } from "@/types/container";
import Sidebar from "../Sidebar";
import * as S from "./style";
import Header from "../Header";

const Container = ({ children }: IContainerProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <S.Container>{children}</S.Container>
    </>
  );
};

export default Container;
