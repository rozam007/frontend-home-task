import React, { useState } from "react";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);

  const [isEmpty, setIsEmpty] = useState(false);
  const [isNegativeAge, setIsNegativeAge] = useState(false);

  const clickNext = () => {
    if (!age) {
      setIsNegativeAge(false);
      setIsEmpty(true);
    } else if (age < 0) {
      setIsEmpty(false);
      setIsNegativeAge(true);
    } else {
      props.cb("age", age);
    }
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>Age:</label>
        <div className="flex flex-col items-end w-full">
          <input
            onChange={({ target: { value } }) => {
              setAge(Number(value));
            }}
            value={age}
            type="number"
            className={`input input-bordered ${
              isEmpty || isNegativeAge ? "" : "input-primary"
            } w-full max-w-xs ${
              isEmpty || isNegativeAge ? "border-red-500 border-2" : "" // Add red border if isEmpty is true
            }`}
          />
          {isEmpty && (
            <p className="text-red-600">
              <i> * required age </i>
            </p>
          )}
          {isNegativeAge && (
            <p className="text-red-600">
              <i> Age can't be negative!! </i>
            </p>
          )}
        </div>
      </div>

      <button className="btn btn-primary" onClick={() => clickNext()}>
        Buy Now
      </button>
    </div>
  );
};

export default AgeStep;
