import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-200">
      <div className="grid shrink-0 grid-cols-3 rounded-3xl bg-gray-100">
        <div className="min-h-72 min-w-80 shrink-0 rounded-tl-3xl bg-orange-400 pl-16 pt-24">
          <div className="inline-flex items-center pl-2">
            <svg
              class="h-4 w-4 text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <p className=" p-2 text-lg font-semibold text-gray-100">Search</p>
          </div>
          <p className="mr-8 p-2 text-xs text-gray-100 hover:bg-orange-500">
            SEO/Google Ads
          </p>
          <p className="mr-8 p-2 text-xs text-gray-100 hover:bg-orange-500">
            YouTube Ads
          </p>
          <p className="mr-8 p-2 text-xs text-gray-100 hover:bg-orange-500">
            Google Shopping
          </p>
        </div>
        <div className="min-h-72 min-w-80 bg-red-400 pl-8 pt-24">
          <div className="inline-flex items-center pl-2">
            <svg
              class="h-4 w-4 text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z"
              />
            </svg>
            <p className=" p-2 text-lg font-semibold text-gray-100 ">CRO</p>
          </div>
          <p className="mr-8 p-2 text-xs text-gray-100 hover:bg-red-500">
            Analysis
          </p>
          <p className="mr-8 p-2 text-xs text-gray-100 hover:bg-red-500">
            Multi variant testing
          </p>
          <p className="mr-8 p-2 text-xs text-gray-100 hover:bg-red-500">
            Landing pages
          </p>
        </div>
        <div className="min-h-72 min-w-80 rounded-tr-3xl bg-yellow-500 pl-8 pt-24">
          <div className="inline-flex items-center pl-2">
            <svg
              class="h-4 w-4 text-gray-100"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.5 6.5h.01m4.49 0h.01m4.49 0h.01M18 1H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
              />
            </svg>
            <p className=" p-2 text-lg font-semibold text-gray-100">
              Social Media
            </p>
          </div>
          <p className="mr-8 p-2 text-xs text-gray-100 hover:bg-yellow-600">
            Facebook
          </p>
          <p className="mr-8 p-2 text-xs text-gray-100 hover:bg-yellow-600">
            LinkedIn
          </p>
          <p className="mr-8 p-2 text-xs text-gray-100 hover:bg-yellow-600">
            Instagram
          </p>
        </div>
        <div className="min-h-72 min-w-80 rounded-bl-3xl bg-yellow-300 pl-16 pt-10">
          <div className="inline-flex items-center pl-2">
            <svg
              class="h-4 w-4 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <p className=" p-2 text-lg font-semibold text-gray-600 ">
              Other services
            </p>
          </div>
          <p className="mr-8 p-2 text-xs text-gray-600 hover:bg-yellow-400">
            Markting
          </p>
          <p className="mr-8 p-2 text-xs text-gray-600 hover:bg-yellow-400">
            Digital tools
          </p>
          <p className="mr-8 p-2 text-xs text-gray-600 hover:bg-yellow-400">
            Banner advertising
          </p>
        </div>
        <div className="col-span-2 rounded-br-3xl bg-slate-600 pl-8 pt-10">
          <div className="w-80">
            <p className="mr-8 p-2 text-lg font-semibold text-white ">
              Do you want to increase your sales and reach your goals?
            </p>
            <p className="mr-8 p-2 pb-4 text-xs text-white ">
              Schedule a free, no-obligation conversation with one of our
              experts to quickly improve the results of your business.
            </p>
            <button className="bg-white p-2 px-3 text-sm text-gray-600 hover:bg-gray-300">
              Book a conversation
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-green-500 h-screen">
    //   <div className="bg-gray-100 grid grid-cols-3 text-center text-white">
    //     <div className="bg-orange-300 min-h-72">1</div>
    //     <div className="bg-red-400 min-h-72">2</div>
    //     <div className="bg-yellow-500 min-h-72">3</div>
    //     <div className="bg-yellow-300 min-h-72">4</div>
    //     <div className="bg-slate-600 col-span-2 min-h-72">5</div>
    //   </div>
    // </div>
  );
}
