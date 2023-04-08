import ProjectDetail from "@/components/ProjectDetail";
import Container from "@/components/common/Container";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Title = () => {
  return (
    <Container>
      <ProjectDetail />
    </Container>
  );
};

export default Title;
