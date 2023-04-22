import React from "react";
import { SkeletonWrapper } from "./style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IntroSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton circle className="skeleton_intro" />
    </SkeletonWrapper>
  );
};

export default IntroSkeleton;
