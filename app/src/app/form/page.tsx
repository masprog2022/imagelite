import { InputText, Template } from "@/components";

export default function FormPage() {
  return (
    <Template>
      <section className="flex flex-col items-center justify-center my-5">
        <h5 className="mt-3 mb-10 text-3xl font-extrabold tracking-tight text-gray-900">
          New Image
        </h5>
        <form action="">
          <div className="grid-cols-1">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Name: *
            </label>
            <InputText placeholder="type the image's name" />
          </div>
          <div className="grid-cols-1 mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Tags: *
            </label>
            <InputText placeholder="type the tags comma separated" />
          </div>
          <div className="grid-cols-1 mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-700">
              Image: *
            </label>
            <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg-gray-900/25">
              <div className="text-center">
                <svg
                  className="w-12 h-12 mx-auto text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="flex mt-4 text-sm leading-6 text-gray-600">
                  <label className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer">
                    <span>Click to upload</span>
                    <input type="file" className="sr-only" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </Template>
  );
}
