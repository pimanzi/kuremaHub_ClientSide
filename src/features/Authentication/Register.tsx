import { useState } from "react";
import { useForm } from "react-hook-form";
import "../../Styles/Register.css";
import { useTranslation } from "react-i18next";

// Define the interface for form data for Login
interface ILoginFormInput {
  loginEmail: string;
  passwordEmail: string;
}

// Define the interface for form data for Signup
interface ISignUpFormInput {
  firstName: string;
  lastName: string;
  signupEmail: string;
  signupPassword: string;
  confirmPassword: string;
}

export default function Register() {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleLoginClick = () => setIsLogin(true);
  const handleSignupClick = () => setIsLogin(false);

  // react-hook-form setup for Login
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
  } = useForm<ILoginFormInput>();

  // react-hook-form setup for Signup
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    formState: { errors: signupErrors },
    watch: watchSignup,
  } = useForm<ISignUpFormInput>();

  const passwordSignup = watchSignup("signupPassword");

  function onSubmitLogin(data: ILoginFormInput) {
    console.log("Login Data", data);
  }

  function onSubmitSignUp(data: ISignUpFormInput) {
    console.log("Signup Data", data);
  }

  return (
    <div className="wrapper">
      {/* Title Text */}
      <div className="title-text">
        {isLogin ? (
          <div className="w-full">
            <p className="title text-center font-playfair font-extrabold">
              {t("loginTitle")}
            </p>
            <p className="text-normal text-[#504f4f]">{t("loginMessage")}</p>
          </div>
        ) : (
          <div className="w-full">
            <p className="title text-center font-playfair font-extrabold">
              {t("signupTitle")}
            </p>
            <p className="text-normal text-[#504f4f]">{t("signupMessage")}</p>
          </div>
        )}
      </div>

      {/* Slide Controls */}
      <div className="slide-controls">
        <input
          type="radio"
          name="slider"
          id="login"
          checked={isLogin}
          onChange={handleLoginClick}
        />
        <input
          type="radio"
          name="slider"
          id="signup"
          checked={!isLogin}
          onChange={handleSignupClick}
        />
        <label htmlFor="login" className="slide login">
          {t("loginTitle")}
        </label>
        <label htmlFor="signup" className="slide signup">
          {t("signupTitle")}
        </label>
        <div className="slider-tab"></div>
      </div>

      {/* Form Container */}
      <div className="form-container">
        <div className="form-inner">
          {isLogin ? (
            <form onSubmit={handleSubmitLogin(onSubmitLogin)} className="login">
              <div className="field">
                <input
                  type="email"
                  placeholder={t("emailInput")}
                  {...registerLogin("loginEmail", {
                    required: t("emailInputAlert"),
                  })}
                  className={loginErrors.loginEmail ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {loginErrors.loginEmail && loginErrors.loginEmail.message}
                </span>
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder={t("passwordInput")}
                  {...registerLogin("passwordEmail", {
                    required: t("passwordInputAlert"),
                  })}
                  className={loginErrors.passwordEmail ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {loginErrors.passwordEmail &&
                    loginErrors.passwordEmail.message}
                </span>
              </div>
              <div className="font-bold text-[#ffcb05] hover:underline">
                <a href="#">{t("forgotPassword")}</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value={t("loginTitle")} />
              </div>
              <div className="signup-link">
                {t("notMember")}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLogin(false);
                  }}
                >
                  {t("signupCall")}
                </a>
              </div>
            </form>
          ) : (
            <form
              onSubmit={handleSubmitSignup(onSubmitSignUp)}
              className="signup"
            >
              <div className="flex gap-2">
                <div className="field">
                  <input
                    type="text"
                    placeholder={t("firstNameInput")}
                    {...registerSignup("firstName", {
                      required: t("firstNameInputAlert"),
                    })}
                    className={signupErrors.firstName ? "error" : ""}
                  />
                  <span className="text-sm text-red-400">
                    {signupErrors.firstName && signupErrors.firstName.message}
                  </span>
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder={t("lastNameInput")}
                    {...registerSignup("lastName", {
                      required: t("lastNameInputAlert"),
                    })}
                    className={signupErrors.lastName ? "error" : ""}
                  />
                  <span className="text-sm text-red-400">
                    {signupErrors.lastName && signupErrors.lastName.message}
                  </span>
                </div>
              </div>

              <div className="field">
                <input
                  type="email"
                  placeholder={t("emailInput")}
                  {...registerSignup("signupEmail", {
                    required: t("emailInputAlert"),
                  })}
                  className={signupErrors.signupEmail ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {signupErrors.signupEmail && signupErrors.signupEmail.message}
                </span>
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder={t("passwordInput")}
                  {...registerSignup("signupPassword", {
                    required: t("passwordInputAlert"),
                  })}
                  className={signupErrors.signupPassword ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {signupErrors.signupPassword &&
                    signupErrors.signupPassword.message}
                </span>
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder={t("confirmPasswordInput")}
                  {...registerSignup("confirmPassword", {
                    required: t("confirmPasswordInputAlert"),
                    validate: (value) => {
                      if (value !== passwordSignup) {
                        return t("passwordsMatchAlert"); // Return error message if passwords don't match
                      }
                      return true; // Return true if passwords match
                    },
                  })}
                  className={signupErrors.confirmPassword ? "error" : ""}
                />
                <span className="text-sm text-red-400">
                  {signupErrors.confirmPassword &&
                    signupErrors.confirmPassword.message}
                </span>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value={t("signupTitle")} />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
