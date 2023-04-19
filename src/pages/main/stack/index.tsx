import StackMain from "@/components/Stack";
import Container from "@/components/common/Container";
import { Client } from "@notionhq/client";

const Stack = ({ results }: any) => {
  return (
    <Container>
      <StackMain data={results} />
    </Container>
  );
};

const notion = new Client({
  auth: process.env.AUTH_KEY,
});

export async function getServerSideProps() {
  const { results } = await notion.databases.query({
    database_id: process.env.DB_STACK_ID as string,
  });
  return {
    props: {
      results,
    },
  };
}

export default Stack;
