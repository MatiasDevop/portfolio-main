export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span>Software developer</span>
            <h1 className="h1">
              Hello I'm <br /> <span>Luke Coleman</span>
            </h1>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
