import Image from "next/image";

export default function Home() {
  return (
    <main>

      {/* Section 1 */}
      <section className="relative min-h-screen">
        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-row gap-10 justify-center items-center">
            <p className="text-[20px] font-normal">gabriel</p>
            <p className="text-[170px] font-bold">bintang</p>
            <p className="text-[20px] font-normal">rahmadani</p>
          </div>
        </div>

        {/* Random image position */}
        <div className="bg-[url('/9.jpeg')] bg-center bg-cover aspect-square w-1/8 absolute top-1/6 left-1/50"></div>
        <div className="bg-[url('/14.jpeg')] bg-center bg-cover aspect-video w-1/6 absolute top-1/6 right-1/10"></div>
        <div className="bg-[url('/6.jpeg')] bg-center bg-cover aspect-video w-1/5 absolute top-8/12 left-1/10"></div>
        <div className="bg-[url('/12.jpeg')] bg-center bg-cover aspect-square w-1/8 absolute top-7/12 right-1/50"></div>

        {/* Bottom content */}
        <div className="absolute inset-0 flex items-end justify-center pb-8">
          <div className="flex flex-row justify-between w-full px-15 items-end">
            <div className="flex flex-row gap-5">
              <div className="scale-200 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 20l6-6m-6 6l-6-6m6 6V9.5M12 4v2.5" />
                </svg>
              </div>

              <p className="text-[20px] font-normal">Scroll to Explore</p>
            </div>
            <p className="text-[20px] font-normal text-wrap max-w-1/6 text-center">Looking At The World Through <span className="font-bold italic">The Lens</span></p>
            <a className="text-[20px] font-normal">Feature Project</a>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative min-h-screen">

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 top-2/5 z-10">
          {/* Text content */}
          <div className="flex flex-col gap-3 justify-center items-center max-w-96 text-center">
            <p className="font-medium text-[20px]">Personal About</p>
            <p className="font-normal font-geist text-wrap text-base/7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>

          {/* Image content */}
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="w-72 h-80 bg-[url('/16.jpeg')] bg-cover bg-center"></div>
            <div className="w-72 h-80 bg-[url('/9.jpeg')] bg-cover bg-center"></div>
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute -bottom-15 left-10">
          <p className="font-medium text-[300px] opacity-50">VENZZY</p>
        </div>
      </section>
      
    </main>
  );
}
