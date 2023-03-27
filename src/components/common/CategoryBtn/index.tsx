import { ICategoryProps } from "@/types/btn";
import * as S from "./style";

const CategoryBtn = ({ content, onClickTab, tab }: ICategoryProps) => {
  return (
    <S.CategoryBtn
      onClick={() => onClickTab(content)}
      className={tab === content ? "active" : ""}
    >
      {content}
    </S.CategoryBtn>
  );
};

export default CategoryBtn;
