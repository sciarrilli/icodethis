export default function Home() {
  return (
    <body className="flex h-screen items-center justify-center bg-gray-500 p-6 align-middle">
      <div className="flex items-center bg-gray-100">
        <img
          className="m-4 ml-8 h-12 w-12 rounded-full"
          src="https://media.discordapp.net/attachments/1105856473302581438/1189544472523067412/sciarrilli_cartoon_cookies_one_with_a_bite_out_of_it_yellow_bac_327790b8-fc2b-4af3-9833-0b118559e867.png?ex=659e8c9e&is=658c179e&hm=0c20a59a9737f8677434cd308d0b01a05ad902a48eb14f4576e58c76c14e90eb&=&format=webp&quality=lossless&width=1228&height=1228"
        />
        <p className="mr-12 text-xs">
          By continuing to this site, you consent to our use of cookies. For
          more information, please read out Privacy.
        </p>
        <button className="m-2 rounded-full bg-white p-2 px-3 text-xs hover:bg-slate-300">
          Learn more
        </button>
        <button className="mr-8 rounded-full bg-cyan-700 p-2 px-3 text-xs text-white hover:bg-cyan-900">
          Okay
        </button>
      </div>
    </body>
  );
}
