import Account from "@/components/Account";
import FlexContainer from "@/components/common/FlexContainer";
import { Client } from "@notionhq/client";

export default function Home({ results }: any) {
  return (
    <FlexContainer>
      <Account data={results} />
    </FlexContainer>
  );
}

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
