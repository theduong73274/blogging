import { Button } from "components/button";
import { Field } from "components/field";
import IconEyeClose from "components/icon/IconEyeClose";
import IconEyeOpen from "components/icon/IconEyeOpen";
import { Input } from "components/input";
import { Label } from "components/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;

  .logo {
    margin: 0 auto 20px;
  }

  .heading {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
    color: ${(props) => props.theme.primary};
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({});

  const handleSignUp = (values) => {
    console.log("🚀 ~ handleSignUp ~ values", values);
  };

  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>

        <form
          action=""
          className="form"
          onSubmit={handleSubmit(handleSignUp)}
          autoComplete="off"
        >
          <Field>
            <Label htmlFor="fullName" className="label">
              FullName
            </Label>

            <Input
              name="fullName"
              type="text"
              placeholder="Enter your fullName"
              control={control}
            />
          </Field>

          <Field>
            <Label htmlFor="email" className="label">
              Email address
            </Label>

            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              control={control}
            />
          </Field>

          <Field>
            <Label htmlFor="password" className="label">
              Password
            </Label>

            <Input
              name="password"
              type={togglePassword ? "text" : "password"}
              placeholder="Enter your password"
              control={control}
            >
              {!togglePassword ? (
                <IconEyeClose
                  onClick={() => setTogglePassword(true)}
                ></IconEyeClose>
              ) : (
                <IconEyeOpen
                  onClick={() => setTogglePassword(false)}
                ></IconEyeOpen>
              )}
            </Input>
          </Field>

          <Button></Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
