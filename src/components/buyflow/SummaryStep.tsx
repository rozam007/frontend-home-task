import React from "react";
import Link from "next/link";

interface SummaryStepProps {
  collectedData: {
    email: string;
    name?: string;
    age: number;
  };
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  const href = props.collectedData.name
    ? "/purchased=des_ins"
    : "/purchased=dev_ins";
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <div>Email: {props.collectedData.email}</div>
        <div>Name: {props.collectedData.name}</div>
        <div>Age: {props.collectedData.age}</div>
      </div>
      <Link className="btn btn-primary" href={href}>
        Purchase
      </Link>
    </div>
  );
};

export default SummaryStep;
