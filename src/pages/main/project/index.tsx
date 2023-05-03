import ProjectMain from "@/components/Project";
import Container from "@/components/common/Container";
import { IDataProps } from "@/types/data";
import { Client } from "@notionhq/client";

const Project = ({ results }: { results: IDataProps[] }) => {
  return (
    <Container>
      <ProjectMain data={results} />
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
