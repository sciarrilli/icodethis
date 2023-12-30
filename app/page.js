import Image from "next/image";

export default function Home() {
  const challenges = [
    { id: 1, image: "/card-top.jpg" },
    { id: 2, image: "/card-top.jpg" },
    { id: 3, image: "/card-top.jpg" },
    { id: 4, image: "/card-top.jpg" },
    { id: 5, image: "/card-top.jpg" },
    { id: 6, image: "/card-top.jpg" },
    { id: 7, image: "/card-top.jpg" },
    { id: 8, image: "/card-top.jpg" },
    { id: 9, image: "/card-top.jpg" },
    { id: 10, image: "/card-top.jpg" },
    { id: 11, image: "/card-top.jpg" },
    { id: 12, image: "/card-top.jpg" },
    { id: 13, image: "/card-top.jpg" },
    { id: 14, image: "/card-top.jpg" },
    { id: 15, image: "/card-top.jpg" },
    { id: 16, image: "/card-top.jpg" },
    { id: 17, image: "/card-top.jpg" },
    { id: 18, image: "/card-top.jpg" },
    { id: 19, image: "/card-top.jpg" },
    { id: 20, image: "/card-top.jpg" },
    { id: 21, image: "/card-top.jpg" },
    { id: 22, image: "/day22.png" },
    { id: 23, image: "/day23.png" },
    { id: 24, image: "/day24.png" },
    { id: 25, image: "/day25.png" },
    { id: 26, image: "/day26.png" },
    { id: 27, image: "/day27.png" },
    { id: 28, image: "/day28.png" },
    { id: 29, image: "/card-top.jpg" },
    { id: 30, image: "/card-top.jpg" },
    { id: 31, image: "/card-top.jpg" },
  ];
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-10 text-center">
        <p className="text-4xl font-bold">
          iCodeThis <span className="text-lg">by: </span>
          <span className="mt-2 text-lg">
            <a className="text-blue-600" href="https://twitter.com/sciarrilli">
              Nick Sciarrilli
            </a>
          </span>
        </p>

        <section className="body-font text-gray-800">
          <div className="container mx-auto px-1 py-10 lg:px-1">
            <div className="flex justify-start">
              <p className="pb-2 text-2xl font-semibold">December 2024</p>
            </div>
            <div className="grid grid-cols-7">
              <div className="col-start-5"></div>
              {challenges.map((challenge) => {
                return (
                  //  <a href={"day" + challenge.toString()}>
                  // Challenge #{challenge}
                  <a
                    key="{challenge.id}"
                    href={"day" + challenge.id.toString()}
                  >
                    <div className="mb-4 mr-4 max-w-xs overflow-hidden rounded shadow-lg">
                      <Image
                        width={600}
                        height={200}
                        className="w-full"
                        src={challenge.image}
                        alt="i code mas!"
                      />
                      <div className="px-4 py-2">
                        <div className="mb-1 text-xl font-bold">
                          Day {challenge.id}
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
