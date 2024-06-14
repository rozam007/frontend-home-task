import React, { useState } from "react";

interface NameStepProps {
  cb: (field: string, value: string) => void;
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);

  const clickNext = () => {
    if (!firstName) {
      setIsFirstNameEmpty(true);
    } else {
      setIsFirstNameEmpty(false);
    }

    if (!lastName) {
      setIsLastNameEmpty(true);
    } else {
      setIsLastNameEmpty(false);
    }

    if (firstName && lastName) {
      props.cb("name", `${firstName} ${lastName}`);
    }
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>First Name:</label>
        <div className="flex flex-col items-end w-full">
          <input
            type="string"
            onChange={({ target: { value } }) => {
              setFirstName(value);
            }}
            value={firstName}
            className={`input input-bordered ${
              isFirstNameEmpty ? "" : "input-primary"
            } w-full max-w-xs ${
              isFirstNameEmpty ? "border-red-500 border-2" : "" // Add red border if isEmpty is true
            }`}
          ></input>
          {isFirstNameEmpty && (
            <p className="text-red-600">
              <i>* required First Name</i>
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <label>Last Name:</label>
        <div className="flex flex-col items-end w-full">
          <input
            type="string"
            onChange={({ target: { value } }) => {
              setLastName(value);
            }}
            value={lastName}
            className={`input input-bordered ${
              isLastNameEmpty ? "" : "input-primary"
            } w-full max-w-xs ${
              isLastNameEmpty ? "border-red-500 border-2" : "" // Add red border if isEmpty is true
            }`}
          ></input>
          {isLastNameEmpty && (
            <p className="text-red-600">
              <i>* required Last Name</i>
            </p>
          )}
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => clickNext()}>
        Next
      </button>
    </div>
  );
};

export default NameStep;
