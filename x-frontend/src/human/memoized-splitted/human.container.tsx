import { HumanNeedsProviderMemoizedSplitted } from "context/human-needs/memoized-splitted";
import type { FC } from "react";
import { HumanComponentMemoizedSplitted } from "./human.component";

type THumanComponent = {
  [key: string]: unknown;
};

export const HumanContainerMemoizedSplitted: FC<THumanComponent> = () => {
  return (
    <HumanNeedsProviderMemoizedSplitted>
      <HumanComponentMemoizedSplitted />
    </HumanNeedsProviderMemoizedSplitted>
  );
};
