import React from "react";

interface IAddProductInputProps {
  fieldValueChangeHandler: React.Dispatch<
    React.SetStateAction<any>
  >;
  fieldValue: string | number;
  label: string;
}

export const AddProductInput = ({
  fieldValue,
  fieldValueChangeHandler,
  label,
}: IAddProductInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    fieldValueChangeHandler(event.target.value);
  };

  return (
    <div>
      <label>{label}: </label>
      <input
        onChange={(event) => handleInputChange(event)}
        value={fieldValue}
      />
    </div>
  );
};
