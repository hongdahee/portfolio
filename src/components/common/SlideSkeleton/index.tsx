import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonWrapper } from "./style";
import "react-loading-skeleton/dist/skeleton.css";

const SlideSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton className="skeleton_slide" />
    </SkeletonWrapper>
  );
};

export default SlideSkeleton;
