"use client";

import { Button, InputText, Template } from "@/components";
import { useState } from "react";
import { RenderIf } from "../../components/ui/RenderIf";

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [newUserState, setNewUserState] = useState<boolean>(false);

  return (
    <Template loading={loading}>
      <div className="flex flex-col justify-center flex-1 p-12 px-6 fle min-h-full-col lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 font-bold leading-9 tracking-tight text-center text-1xl text-grey-900">
            {newUserState ? "Create New User" : "Login to Your account"}
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2">
            <RenderIf condition={newUserState}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Name:
                </label>
              </div>
              <div className="mt-2">
                <InputText style="w-full" id="name" />
              </div>
            </RenderIf>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email:
              </label>
            </div>
            <div className="mt-2">
              <InputText style="w-full" id="email" />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password:
              </label>
            </div>

            <div className="mt-2">
              <InputText style="w-full" type="password" id="password" />
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
                  type="passwordMatch"
                  id="passwordMatch"
                />
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
