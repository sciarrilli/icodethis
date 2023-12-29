import Image from "next/image";
import "./local.css";

export default function Home() {
  return (
    <div className="flex bg-gray-200 p-16">
      <div>
        <div className="pb-12 pl-32 pt-10">
          <div className="max-h-48 max-w-xl rounded-2xl border border-gray-200 bg-white px-3 pb-3 pt-3 shadow">
            <div className="flex">
              <a href="#">
                <img
                  className="max-h-[220px] rounded-2xl pr-2"
                  src="https://images.unsplash.com/photo-1629695328627-22cb7c873a6a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=512&h=512"
                  alt=""
                />
              </a>

              <div className="">
                <div className="flex justify-end">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 256 256"
                    fill="#000000"
                    id="Flat"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M192,28H96A12.01343,12.01343,0,0,0,84,40V60H64A12.01343,12.01343,0,0,0,52,72V224a4.00021,4.00021,0,0,0,6.3252,3.25488L111.99268,188.916l53.68261,38.33886A3.99976,3.99976,0,0,0,172,224V176.91748l25.67529,18.3374A3.99976,3.99976,0,0,0,204,192V40A12.01343,12.01343,0,0,0,192,28ZM164,216.22754l-49.68262-35.48242a3.99976,3.99976,0,0,0-4.6499,0L60,216.22656V72a4.00427,4.00427,0,0,1,4-4h96a4.00427,4.00427,0,0,1,4,4Zm32-32-24-17.14038V72a12.01343,12.01343,0,0,0-12-12H92V40a4.00427,4.00427,0,0,1,4-4h96a4.00427,4.00427,0,0,1,4,4Z" />
                  </svg>
                </div>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 pr-16 text-lg font-bold tracking-tight text-gray-900">
                      Hypnotherapy for motivation getting the drive back
                    </h5>
                  </a>

                  <div className="">
                    <p className="mb-3 text-xs font-normal text-gray-700">
                      by{" "}
                      <a href="#" className="font-display max-w-sm text-xs">
                        <span className="link link-underline link-underline-black text-sky-600">
                          Kyle Patterson
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <div className="mb-4 mr-12 max-w-sm rounded-2xl border border-gray-200 bg-white px-3 pt-3 shadow">
              <a href="#">
                <img
                  className="rounded-t-2xl"
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    Fire up your motivation
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-gray-700 ">
                  When striving towards a goal, you must focus on what you want
                  to obtain and avoid the impulse to go back to what you know
                  and to what is comfortable
                </p>
                <p className="mb-3 text-xs font-normal text-gray-700">
                  by{" "}
                  <a href="#" className="font-display max-w-sm text-xs ">
                    <span className="link link-underline link-underline-black text-sky-600">
                      Kyle Patterson
                    </span>
                  </a>
                </p>
                <a
                  href="#"
                  className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
                >
                  Read article
                  <svg
                    className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="max-w-2xl rounded-2xl border border-gray-200 bg-white px-6 pt-6 shadow">
              <div className="flex">
                <a href="#">
                  <img className="rounded-l-2xl pr-2" src="image1.png" alt="" />
                </a>
                <a href="#">
                  <img className="px-1" src="image2.png" alt="" />
                </a>
                <a href="#">
                  <img className="rounded-r-2xl pl-2" src="image3.png" alt="" />
                </a>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Put wings on your dreams
                  </h5>
                </a>
                <p className="mb-3 pr-32 text-sm font-normal text-gray-700">
                  When striving towards a goal, you must focus on what you want
                  to obtain and avoid the impulse to go back to what you know
                  and to what is comfortable
                </p>
                <div className="">
                  <p className="mb-3 text-xs font-normal text-gray-700">
                    by{" "}
                    <a href="#" className="font-display max-w-sm text-xs">
                      <span className="link link-underline link-underline-black text-sky-600">
                        Kyle Patterson
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
