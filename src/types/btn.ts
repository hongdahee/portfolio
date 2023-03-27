export interface IBtnProps {
  route: string;
}

export interface ICategoryProps {
  content: string;
  onClickTab: (selectedTab: string) => void;
  tab: string;
}
