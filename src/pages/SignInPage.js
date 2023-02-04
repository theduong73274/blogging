import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Field } from "components/field";
import IconEyeClose from "components/icon/IconEyeClose";
import IconEyeOpen from "components/icon/IconEyeOpen";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import { auth } from "firebase-app/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import AuthenticationPage from "./AuthenticationPage";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters")
    .required("Please enter your password"),
});

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message, {
        pauseOnHover: false,
        delay: 100,
      });
    }
  }, [errors]);

  // Check LogIn
  useEffect(() => {
    document.title = "Login Page";
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <AuthenticationPage>
      <form
        action=""
        className="form"
        onSubmit={handleSubmit(handleSignIn)}
        autoComplete="off"
      >
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

        <div className="have-account">
          You have not had an account?{" "}
          <NavLink to={"/sign-up"}>Register an account</NavLink>
        </div>

        <Button
          type="submit"
          style={{ width: "100%", maxWidth: 300, margin: "0 auto" }}
          disabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
