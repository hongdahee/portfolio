import React from "react";
import { SkeletonWrapper } from "./style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton className="skeleton-img" />
    </SkeletonWrapper>
  );
};

export default DetailSkeleton;
