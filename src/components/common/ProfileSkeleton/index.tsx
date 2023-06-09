import React from "react";
import { SkeletonWrapper } from "./style";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileSkeleton = () => {
  return (
    <SkeletonWrapper>
      <Skeleton circle className="profile-skeleton" />
    </SkeletonWrapper>
  );
};

export default ProfileSkeleton;
