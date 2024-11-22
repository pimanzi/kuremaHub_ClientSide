import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";
import { useTranslation } from "react-i18next";

interface PasswordUpdate {
  password: string;
  confirmPassword: string;
}
function UpdatePassword() {
  const { t } = useTranslation();
  const { updatingUser, isUpdatingUser } = useUpdateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<PasswordUpdate>();

  function onSubmit(data: PasswordUpdate) {
    updatingUser({
      password: data.password,
    });
  }

  const passwordField = watch("password");
  return (
    <form
      className="bgTablet:py-7 bgTablet:px-10 bgTablet:w-[980px] w-full space-y-7 rounded-2xl bg-[var(--color-grey-0)] px-7 py-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-xl font-bold">{t("passwordTitleForm")}</h3>

      <div className="flex flex-col gap-1">
        <Label htmlFor="password" className="text-sm font-bold">
          {t("newPasswordInput")}
        </Label>
        <Input
          id="password"
          type="password"
          {...register("password", {
            required: t("newPasswordInputAlert"),
          })}
        />
        {errors.password && (
          <span className="text-xs text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="confirnPassword" className="text-sm font-bold">
          {t("confirmPasswordInput")}
        </Label>
        <Input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword", {
            validate: (value) => value === passwordField || t("passwordMatch"),
          })}
        />
        {errors.confirmPassword && (
          <span className="text-xs text-red-500">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
      <div>
        <Button
          disabled={isUpdatingUser}
          className="w-full rounded-full bg-[var(--border-color-hover)] px-2 py-6 text-sm text-white transition-all duration-300 hover:scale-x-105 hover:scale-y-105 hover:bg-[var(--border-color-hover)]"
        >
          {t("saveChangesButton")}
        </Button>
      </div>
    </form>
  );
}

export default UpdatePassword;
