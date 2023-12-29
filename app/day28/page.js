export default function page() {
  return (
    <div className="relative h-screen bg-[#173b50]">
      <div className="absolute left-72 top-32 w-full max-w-sm rounded-lg border border-gray-200 bg-white p-2 shadow sm:p-6 md:p-8 dark:border-gray-700 dark:bg-gray-800">
        <form className="mx-6 my-6 space-y-6" action="#">
          <h5 className="text-xl font-bold text-gray-600">Collint Font</h5>
          <p className="text-xs text-gray-600">
            Created by:{" "}
            <a href="#" className="font-medium underline">
              Etta Lamb
            </a>
          </p>
          <div className="border p-4">
            <p className="pb-4 text-sm font-semibold text-gray-600">
              License type
            </p>
            <div className="flex justify-between">
              <div className="mb-4 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 accent-[#173e4f] checked:bg-[#173e4f] checked:hover:bg-[#173e4f] focus:ring-2 focus:ring-[#173e4f] checked:focus:bg-[#173e4f] checked:active:bg-[#173e4f]"
                />

                <label className="ms-2 text-sm text-gray-600 dark:text-gray-300">
                  Desktop
                </label>
              </div>
              <p className="text-sm font-medium">$12</p>
            </div>

            <div className="flex justify-between">
              <div className="mb-4 flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 accent-[#173e4f] checked:bg-[#173e4f] checked:hover:bg-[#173e4f] focus:ring-2 focus:ring-[#173e4f] checked:focus:bg-[#173e4f] checked:active:bg-[#173e4f]"
                />
                <label className="ms-2 text-sm text-gray-600 dark:text-gray-300">
                  E-pub
                </label>
              </div>
              <p className="text-sm font-medium">$24</p>
            </div>

            <div className="flex justify-between">
              <div className="mb-4 flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 accent-[#173e4f] checked:bg-[#173e4f] checked:hover:bg-[#173e4f] focus:ring-2 focus:ring-[#173e4f] checked:focus:bg-[#173e4f] checked:active:bg-[#173e4f]"
                />
                <label className="ms-2 text-sm text-gray-600 dark:text-gray-300">
                  App
                </label>
              </div>
              <p className="text-sm font-medium">$110</p>
            </div>
            <div className="flex justify-between">
              <div className="mb-5 flex items-center">
                <input
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 accent-[#173e4f] checked:bg-[#173e4f] checked:hover:bg-[#173e4f] focus:ring-2 focus:ring-[#173e4f] checked:focus:bg-[#173e4f] checked:active:bg-[#173e4f]"
                />
                <label className="ms-2 text-sm text-gray-600 dark:text-gray-300">
                  Webfront
                </label>
              </div>
              <p className="text-xs font-light text-gray-400">Starting at $8</p>
            </div>
            <a href="#" className="text-xs font-light underline">
              Learn more about licenses
            </a>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#d1a37d] px-5 py-2.5 text-center text-sm font-medium text-white shadow-xl hover:bg-[#937860] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to your cart
          </button>
          <button
            type="submit"
            className="w-full rounded-lg border bg-white px-5 py-2.5 text-center text-sm font-medium text-[#c5937d] hover:bg-[#937860] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to your cart
          </button>
        </form>
      </div>
      <div className="absolute left-[615px] top-12 w-full max-w-[305px] rounded-lg border border-gray-200 bg-white p-4 shadow-2xl sm:p-6 md:p-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="py-4">
          <div className="flex flex-col items-center justify-center">
            <img
              className="rounded-full pb-3"
              width={65}
              height={65}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="avatar"
            />
            <p className="pb-0.5 text-sm font-bold text-gray-600">Etta Lamb</p>
            <p className="py-6 pb-4 text-center text-xs text-gray-500">
              For custom orders please contact us as hello@wildhouse.com
            </p>
          </div>

          <div className="flex justify-center">
            <button className="mr-4 w-24 rounded-xl border bg-white px-5 py-2.5 text-center text-sm font-medium text-[#c5937d] hover:bg-[#937860] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Follow
            </button>
            <button className="w-24 rounded-xl bg-[#d1a37d] px-5 py-2.5 text-center text-sm font-medium text-white shadow-xl hover:bg-[#937860] focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Message
            </button>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 w-full max-w-md rounded-lg border border-gray-200 bg-white p-2 shadow-2xl sm:p-6 md:p-8 dark:border-gray-700 dark:bg-gray-800">
        <div className="">
          <div className="flex justify-center">
            <button
              type="button"
              className="mr-4 inline-flex items-center rounded-xl border bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-400 hover:bg-[#937860] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 pr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
              Share
            </button>

            <button className="mr-4 inline-flex items-center rounded-xl border bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-400 hover:bg-[#937860] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 pr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Likes
            </button>
            <button className="inline-flex items-center rounded-xl border bg-white px-5 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-[#937860] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 pr-2 text-gray-700"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                  clipRule="evenodd"
                />
              </svg>
              Bookmarked
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
