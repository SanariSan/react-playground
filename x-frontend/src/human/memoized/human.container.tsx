import { HumanNeedsProviderMemoized } from "context/human-needs/memoized";
import type { FC } from "react";
import { HumanComponentMemoized } from "./human.component";

type THumanComponent = {
  [key: string]: unknown;
};

export const HumanContainerMemoized: FC<THumanComponent> = () => {
  return (
    <HumanNeedsProviderMemoized>
      <HumanComponentMemoized />
    </HumanNeedsProviderMemoized>
  );
};
