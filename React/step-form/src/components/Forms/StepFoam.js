import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";

function StepFoam() {
  const [formValues, setFormValues] = useState({
    step: 1,
    fullName: "",
    lastName: "",
    gender: "",
    age: "",
    company: "",
    companyLocation: "",
    companyDomain: "",
    experence: "",
  });

  const nextStep = () => {
    setFormValues((prev) => {
      return { ...prev, step: prev.step + 1 };
    });
  };

  const prevStep = () => {
    setFormValues((prev) => {
      return { ...prev, step: prev.step - 1 };
    });
  };

  const handleChange = (e) => {
    setFormValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const renderForm = () => {
    const { step, firstName, lastName, email, occupation, city, bio } =
      formValues;
    const values = { firstName, lastName, email, occupation, city, bio };
    console.log(values);

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
    return <FormUserDetails />;
  };
}

export default StepFoam;
