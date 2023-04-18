import ProjectMain from "@/components/Project";
import Container from "@/components/common/Container";
import { Client } from "@notionhq/client";
import { useState } from "react";

const Project = ({ results }: any) => {
  const [tab, setTab] = useState("전체");
  const onClickTab = (selectedTab: string) => {
    setTab(selectedTab);
  };

  return (
    <Container>
      <ProjectMain data={results} onClickTab={onClickTab} tab={tab} />
    </Container>
  );
};

const notion = new Client({
  auth: process.env.AUTH_KEY,
});

export async function getServerSideProps() {
  const { results } = await notion.databases.query({
    database_id: process.env.DB_PROJECT_ID as string,
  });
  return {
    props: {
      results,
    },
  };
}

export default Project;
