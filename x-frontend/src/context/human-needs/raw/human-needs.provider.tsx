import { ReactNode, useState } from "react";
import { HumanNeedsContextRaw } from "./human-needs.context";

export const HumanNeedsProviderRaw = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [pastaKg, setPastaKg] = useState(5);
  const [saladKg, setSaladKg] = useState(5);
  const [waterL, setWaterL] = useState(5);

  // const drink = () => {
  //   console.log("Drinking as a side effect...");
  //   setWaterL((waterL) => waterL - 1);
  // };

  // useEffect(() => {
  //   drink();
  // }, [drink]);

  const eat = (foodType: "salad" | "pasta") => {
    switch (foodType) {
      case "salad": {
        console.log("eating 1kg of salad");
        setSaladKg((saladKg) => saladKg - 1);
        break;
      }
      case "pasta": {
        console.log("eating 1kg of pasta");
        setPastaKg((pastaKg) => pastaKg - 1);
        break;
      }
      default: {
        // ...
      }
    }

    console.log("Don't forget to drink!");
  };

  return (
    <HumanNeedsContextRaw.Provider
      value={{
        waterL,
        pastaKg,
        saladKg,
        eat,
      }}
    >
      {children}
    </HumanNeedsContextRaw.Provider>
  );
};
