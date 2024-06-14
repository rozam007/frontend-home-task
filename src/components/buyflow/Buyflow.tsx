import React, { useState } from "react";
import AgeStep from "./AgeStep";
import EmailStep from "./EmailStep";
import SummaryStep from "./SummaryStep";
import NameStep from "./NameStep";

interface BuyflowProps {
  productId: ProductIds;
}

export enum ProductIds {
  devIns = "dev_ins",
  desIns = "des_ins",
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: "Developer Insurance",
  [ProductIds.desIns]: "Designer Insurance",
};

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const isDesignerInsurance =
    PRODUCT_IDS_TO_NAMES[props.productId] === "Designer Insurance"
      ? true
      : false;
  const [currentStep, setStep] = useState("email");
  const [collectedData, updateData] = useState({
    email: "",
    ...(isDesignerInsurance && {
      name: "",
    }),
    age: 0,
  });
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value });
    setStep(nextStep);
  };
  return (
    <div className="flex flex-col items-center">
      <h4 className="mb-6 text-2xl">
        Buying {PRODUCT_IDS_TO_NAMES[props.productId]}
      </h4>
      <div className="flex justify-center w-60">
        {(currentStep === "email" && (
          <EmailStep
            cb={
              isDesignerInsurance
                ? getStepCallback("name")
                : getStepCallback("age")
            }
          />
        )) ||
          (currentStep === "name" && isDesignerInsurance && (
            <NameStep cb={getStepCallback("age")} />
          )) ||
          (currentStep === "age" && (
            <AgeStep cb={getStepCallback("summary")} />
          )) ||
          (currentStep === "summary" && (
            <SummaryStep collectedData={collectedData} />
          ))}
      </div>
    </div>
  );
};

export default Buyflow;
