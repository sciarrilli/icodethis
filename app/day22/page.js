import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen items-center bg-red-100">
        <div className="m-14 flex h-72 w-full items-center justify-center bg-[url('../public/santa.png')] bg-cover bg-center">
          <div>
            <div className="flex justify-center">
              <div className="w-[300px]">
                <p className="pb-2 text-center text-3xl font-bold text-white">
                  Subscribe to our newsletter
                </p>
              </div>
            </div>
            <div className="w-[520px] text-center">
              <p className="pb-6 text-xs text-white">
                Stay in the loop with the latest festive trends and exclusive
                offers by scubscribing to our newsletter
              </p>
            </div>
            <div className="relative flex justify-center">
              <input
                className="h-8 w-56 rounded-full py-1 pl-4 text-sm"
                type="text"
                placeholder="Enter your email"
              />
              <div className="absolute right-[152px] top-0.5">
                <button className="h-6 w-20 rounded-full bg-gray-500 text-xs text-white hover:bg-gray-600">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
