import Photo from "@/components/Home/Photo";
import Social from "@/components/Social";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Eko Listiyono</span>
            </h1>
            <p className="max-w-[500px] mb-9">
              I'm a software developer with experience in API. My focus is on
              system integration, data analysis, and developing software with
              clean, scalable, and efficient code. I am passionate about
              optimizing code and simplifying workflows.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-8 xl:mb-8">
              <Social
                containerStyles="gap-6 flex"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
