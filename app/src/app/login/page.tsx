"use client";

import {
  Button,
  FieldError,
  InputText,
  Template,
  useNotification,
} from "@/components";
import { useAuth } from "@/resources";
import { AccessToken, Credentials } from "@/resources/user/user.resources";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RenderIf } from "../../components/ui/RenderIf";
import { LoginFormProps, formsScheme, validationScheme } from "./formScheme";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [newUserState, setNewUserState] = useState<boolean>(false);

  const auth = useAuth();
  const notification = useNotification();
  const router = useRouter();

  const { values, handleChange, handleSubmit, errors } =
    useFormik<LoginFormProps>({
      initialValues: formsScheme,
      validationSchema: validationScheme,
      onSubmit: onSubmit,
    });

  async function onSubmit(values: LoginFormProps) {
    if (!newUserState) {
      const credentials: Credentials = {
        email: values.email,
        password: values.password,
      };
      try {
        const accessToken: AccessToken = await auth.authenticate(credentials);
        router.push("/gallery")
      } catch (error: any) {
        const message = error?.message;
        notification.notify(message, "error");
      }
    }
  }

  return (
    <Template loading={loading}>
      <div className="flex flex-col justify-center flex-1 p-12 px-6 fle min-h-full-col lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 font-bold leading-9 tracking-tight text-center text-1xl text-grey-900">
            {newUserState ? "Create New User" : "Login to Your account"}
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-2">
            <RenderIf condition={newUserState}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Name:
                </label>
              </div>
              <div className="mt-2">
                <InputText
                  style="w-full"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <FieldError error={errors.name} />
              </div>
            </RenderIf>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email:
              </label>
            </div>
            <div className="mt-2">
              <InputText
                style="w-full"
                id="email"
                value={values.email}
                onChange={handleChange}
              />
              <FieldError error={errors.email} />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password:
              </label>
            </div>

            <div className="mt-2">
              <InputText
                style="w-full"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
              />
              <FieldError error={errors.password} />
            </div>
            <RenderIf condition={newUserState}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Repeat Password:
                </label>
              </div>

              <div className="mt-2">
                <InputText
                  style="w-full"
                  type="password"
                  id="passwordMatch"
                  value={values.passwordMatch}
                  onChange={handleChange}
                />
                <FieldError error={errors.passwordMatch} />
              </div>
            </RenderIf>
            <div>
              <RenderIf condition={newUserState}>
                <Button
                  type="submit"
                  style="bg-indigo-700 hover:bg-indigo-500"
                  label="Save"
                />
                <Button
                  type="button"
                  style="bg-red-700 hover:bg-red-500 mx-2"
                  label="Cancel"
                  onClick={(event) => setNewUserState(false)}
                />
              </RenderIf>
              <RenderIf condition={!newUserState}>
                <Button
                  type="submit"
                  style="bg-indigo-700 hover:bg-indigo-500"
                  label="Sign In"
                />
                <Button
                  type="button"
                  style="bg-red-700 hover:bg-red-500 mx-2"
                  label="Sign Up"
                  onClick={(event) => setNewUserState(true)}
                />
              </RenderIf>
            </div>
          </form>
        </div>
      </div>
    </Template>
  );
}
