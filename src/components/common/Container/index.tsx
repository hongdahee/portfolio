import { IContainerProps } from "@/types/container";
import Sidebar from "../Sidebar";
import * as S from "./style";

const Container = ({ children }: IContainerProps) => {
  return (
    <S.Container>
      <Sidebar />
      {children}
    </S.Container>
  );
};

export default Container;
