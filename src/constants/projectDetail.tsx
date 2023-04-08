import DetailInfo from "@/components/common/DetailInfo";
import Screenshot from "@/components/common/Screenshot";
import { faLink, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const LINK = [
  { link: "깃허브" },
  { link: "배포링크", icon: faLink },
  { link: "회고", icon: faPenToSquare },
];
export const TAB_LIST = [
  { name: "스크린샷", page: <Screenshot /> },
  { name: "상세 정보", page: <DetailInfo /> },
];
