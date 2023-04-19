import * as S from "./style";

const DetailInfo = ({ data }: any) => {
  return (
    <S.TabContainer>
      {data[0].properties.info.multi_select.map((info: { name: string }) => (
        <S.Content key={info.name}>{`✅ ${info.name}`}</S.Content>
      ))}
    </S.TabContainer>
  );
};

export default DetailInfo;
