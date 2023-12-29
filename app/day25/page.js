import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-purple-800 p-12">
        <div className="h-full w-full max-w-5xl rounded-xl bg-white">
          {/* button and text */}
          <div className="flex justify-center pb-10 pt-16">
            <div className="flex flex-col justify-center">
              <div className="flex justify-center pb-2">
                <button className="rounded-xl bg-purple-800 px-2 py-1 text-xs text-white">
                  ART
                </button>
              </div>
              <div className="flex justify-center pb-5">
                <p className="text-3xl font-bold">Inspirational stories</p>
              </div>
              <div className="flex w-[500px] justify-center">
                <p className="text-center text-sm text-purple-700">
                  Explore Inspirational and motivational stories by creatives
                  with decades of experience in the field
                </p>
              </div>
            </div>
          </div>
          {/* image */}
          <div className="mx-24 flex h-[350px] flex-row justify-center pb-8">
            <div className="relative basis-2/3 overflow-hidden pr-4">
              <img
                className="h-full w-full rounded-xl object-cover"
                src="https://cdn.mos.cms.futurecdn.net/8KyCYsto2PoN2r23PxDG27.jpg"
              />
              <div className="absolute inset-x-0 bottom-6 w-full py-2.5 pl-8 pr-24 text-left text-2xl leading-6 text-white">
                How to stop wasting time and start exploring the opportunities
                around you
              </div>
            </div>
            <div className="basis-1/3 rounded-lg shadow-lg">
              <img
                className="h-32 w-full rounded-t-xl object-cover"
                src="https://www.acouplecooks.com/wp-content/uploads/2020/09/Latte-Art-067s.jpg"
              />
              <div className="p-4">
                <p className="pb-2 text-xl font-bold">
                  The lazy man's guide to art
                </p>
                <p className="text-xs">
                  Behind a complicated legacy: he is one of the most recognized
                  and influential artists of the last century and a National
                  Medal of Arts
                </p>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="flex justify-center">
            <button className="h-12 w-56 rounded-md bg-purple-800 text-sm text-white">
              Read more on the blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
