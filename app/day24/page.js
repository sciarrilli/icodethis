import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen flex bg-gray-100 items-center justify-center">
        <div className="bg-white w-[750px] h-[650px] items-center flex flex-col justify-center">
          {/* text */}
          <div className="text-center">
            <div className="flex justify-center">
              <p className="text-2xl font-bold pb-6 w-[200px]">
                We're looking for co-founders
              </p>
            </div>
            <div className="w-[500px]">
              <p className="pb-6">
                Boardme is a technology startup in the user onboarding and
                digital adoption space.
              </p>
              <p className="pb-8">
                We are members of StartupLab Bergen, and we're looking for
                passionante co-founders interested in joining our journey!
              </p>
            </div>
            <p className="text-xl font-bold pb-4">Available positions</p>
          </div>
          {/* images */}
          <div className="flex pb-6">
            <div className="py-2 px-4 text-center border justify-center flex flex-col mr-4 hover:bg-cyan-50">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/santa_clous_christmas-1024.png"
                alt="santa"
                width={100}
                height={100}
              />
              <p>Business</p>
            </div>
            <div className="py-2 px-4 text-center border justify-center flex flex-col mr-4 hover:bg-cyan-50">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png"
                alt="santa"
                width={100}
                height={100}
              />
              <p>Marketing</p>
            </div>
            <div className="py-2 px-4 text-center border justify-center flex flex-col mr-4 hover:bg-cyan-50">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/sloth_lazybones_sluggard_avatar-1024.png"
                alt="santa"
                width={100}
                height={100}
              />
              <p>Front-end dev</p>
            </div>
            <div className="py-2 px-4 text-center border justify-center flex flex-col mr-4 hover:bg-cyan-50">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-1024.png"
                alt="santa"
                width={100}
                height={100}
              />
              <p>Back-end dev</p>
            </div>
          </div>
          {/* button */}
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 w-64 text-white rounded-full h-10 text-sm">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
