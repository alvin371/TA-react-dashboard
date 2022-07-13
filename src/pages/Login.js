import { Button, Input, Label } from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ImageDark from "../assets/img/login-office-dark.jpeg";
import ImageLight from "../assets/img/login-office.jpeg";
import { ENDPOINTS } from "../constants";
import { useAxios } from "../utils";
import { ButtonSpinner } from "../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = { username: email, password: password };

    setIsLoading(true);
    useAxios
      .post(ENDPOINTS.LOGIN, data)
      .then((response) => {
        localStorage.setItem("id", JSON.stringify(response.data.data.id));
        localStorage.setItem("token", JSON.stringify(response.data.data.token));
        localStorage.setItem("role", JSON.stringify(response.data.data.user.role));
        localStorage.setItem("email", email);
        setIsLoading(false);
        navigate("/app", { replace: true });
        document.location.reload();
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response.status === 400) {
          toast(error.response.data.message, { type: "error" });
        }
      });
  };

  useEffect(() => {
    if (
      localStorage.getItem("email") !== null &&
      localStorage.getItem("password") !== null
    ) {
      setEmail(localStorage.getItem("email"));
      setIsCheck(true);
    }
  }, []);

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <form onSubmit={handleSubmit}>
                <Label>
                  <span>Email</span>
                  <Input
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="mt-1"
                    type="text"
                    placeholder="john@doe.com"
                  />
                </Label>

                <Label className="my-4">
                  <span>Password</span>
                  <Input
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1"
                    type="password"
                    placeholder="***************"
                    auto-complete="off"
                  />
                </Label>
                <Label check>
                  <Input
                    type="checkbox"
                    checked={isCheck}
                    onChange={(e) => setIsCheck(e.target.checked)}
                  />
                  <span className="ml-2">Remember me</span>
                </Label>
                <Button
                  disabled={isLoading}
                  type="submit"
                  className="mt-4"
                  block
                >
                  {isLoading && <ButtonSpinner />} Log in
                </Button>
              </form>
              <hr className="my-8" />

              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  to="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;