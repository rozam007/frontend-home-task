import React, { useState } from "react";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const clickNext = () => {
    if (email) {
      props.cb("email", email);
    } else {
      setIsEmpty(true);
    }
  };
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>Email:</label>
        <div className="flex flex-col items-end w-full">
          <input
            type="email"
            onChange={({ target: { value } }) => {
              setEmail(value);
            }}
            value={email}
            className={`input input-bordered ${
              isEmpty ? "" : "input-primary"
            } w-full max-w-xs ${
              isEmpty ? "border-red-500 border-2" : "" // Add red border if isEmpty is true
            }`}
          ></input>
          {isEmpty && (
            <p className="text-red-600">
              <i> * required email </i>
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

export default EmailStep;
