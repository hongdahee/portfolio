import ProjectDetail from "@/components/ProjectDetail";
import Container from "@/components/common/Container";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Title = () => {
  // const { query } = useRouter();
  // const title = query.title;
  // const img = query.img;
  // const [stackList, setStackList] = useState();

  // useEffect(() => {
  //   if (query.stack) {
  //     setStackList(
  //       JSON.parse(query.stack as string).map((stack: any) => stack.name)
  //     );
  //   }
  // }, []);
  // console.log(stackList);

  return (
    <Container>
      <ProjectDetail />
    </Container>
  );
};

export default Title;
