"use client";

import { Button, InputText, Template } from "@/components";
import { RenderIf } from "@/components/ui/RenderIf";
import { useImageService } from "@/resources/image/image.service";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";

interface FormProps {
  name: string;
  tags: string;
  file: any;
}

const formsScheme: FormProps = { name: "", tags: "", file: "" };

export default function FormPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>();
  const service = useImageService();

  const formmik = useFormik<FormProps>({
    initialValues: formsScheme,
    //onSubmit: (dados: FormProps) => {console.log(dados);}
    onSubmit: handleSubmit,
  });

  async function handleSubmit(data: FormProps) {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", data.file);
    formData.append("name", data.name);
    formData.append("tags", data.tags);

    await service.save(formData);

    formmik.resetForm();
    setImagePreview("");
    setLoading(false);
  }

  function onFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const file = event.target.files[0];
      formmik.setFieldValue("file", file);
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
    }
  }

  return (
    <Template loading={loading}>
      <section className="flex flex-col items-center justify-center my-5">
        <h5 className="mt-3 mb-10 text-3xl font-extrabold tracking-tight text-gray-900">
          New Image
        </h5>
        <form onSubmit={formmik.handleSubmit}>
          <div className="grid-cols-1">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Name: *
            </label>
            <InputText
              id="name"
              onChange={formmik.handleChange}
              value={formmik.values.name}
              placeholder="type the image's name"
            />
          </div>
          <div className="grid-cols-1 mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Tags: *
            </label>
            <InputText
              id="tags"
              onChange={formmik.handleChange}
              value={formmik.values.tags}
              placeholder="type the tags comma separated"
            />
          </div>
          <div className="grid-cols-1 mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Image: *
            </label>
            <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg-gray-900/25">
              <div className="text-center">
                <RenderIf condition={!imagePreview}>
                  <svg
                    className="w-12 h-12 mx-auto text-gray-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </RenderIf>
                <div className="flex mt-4 text-sm leading-6 text-gray-600">
                  <label className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer">
                    <RenderIf condition={!imagePreview}>
                      <span>Click to upload</span>
                    </RenderIf>

                    <RenderIf condition={!!imagePreview}>
                      <img
                        src={imagePreview}
                        width={250}
                        className="rounded-md"
                      />
                    </RenderIf>

                    <input
                      onChange={onFileUpload}
                      type="file"
                      className="sr-only"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end mt-5 gap-x-4">
            <Button
              style="bg-blue-500 hover:bg-blue-300"
              label="Save"
              type="submit"
            />
            <Link href="/gallery">
              <Button
                style="bg-red-500 hover:bg-red-300"
                label="Cancel"
                type="button"
              />
            </Link>
          </div>
        </form>
      </section>
    </Template>
  );
}
