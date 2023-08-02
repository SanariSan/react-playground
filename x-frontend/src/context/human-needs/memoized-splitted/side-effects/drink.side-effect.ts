export const drinkSideEffect =
  (
    setWaterL: (value: React.SetStateAction<number>) => void,
    isMounted: boolean
  ) =>
  () => {
    if (!isMounted) return;
    console.log("Drinking as a side effect...");
    setWaterL((waterL) => waterL - 1);
  };
