import ProjectMain from "@/components/\bProject";
import Container from "@/components/common/Container";
import { Client } from "@notionhq/client";

const Project = ({ results }: any) => {
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
