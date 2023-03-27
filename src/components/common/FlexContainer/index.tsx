import { IContainerProps } from "@/types/container";
import * as S from "./style";

const FlexContainer = ({ children }: IContainerProps) => {
  return <S.FlexContainer>{children}</S.FlexContainer>;
};

export default FlexContainer;
