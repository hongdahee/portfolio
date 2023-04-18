import ProjectDetail from "@/components/ProjectDetail";
import Container from "@/components/common/Container";
import { Client } from "@notionhq/client";
import React from "react";

const Title = ({ results }: any) => {
  return (
    <Container>
      <ProjectDetail data={results} />
    </Container>
  );
};

const notion = new Client({
  auth: process.env.AUTH_KEY,
});

export async function getServerSideProps(context: {
  params: { title: string };
}) {
  const { results } = await notion.databases.query({
    database_id: process.env.DB_PROJECT_ID as string,
    filter: {
      property: "name",
      rich_text: {
        contains: context.params.title,
      },
    },
  });
  return {
    props: {
      results,
    },
  };
}

export default Title;
