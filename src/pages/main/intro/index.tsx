import IntroMain from "@/components/Intro";
import Container from "@/components/common/Container";
import { Client } from "@notionhq/client";

const Intro = ({ results }: any) => {
  return (
    <Container>
      <IntroMain data={results} />
    </Container>
  );
};

const notion = new Client({
  auth: process.env.AUTH_KEY,
});

export async function getServerSideProps() {
  const { results } = await notion.databases.query({
    database_id: process.env.DB_INTRO_ID as string,
  });
  return {
    props: {
      results,
    },
  };
}

export default Intro;
