function AboutMe() {
  return (
    <>
      <section id="aboutme">
        <div className="relative flex pt-14 pb-14 pr-16 pl-16 md:pr-28 md:pl-28 flex-col justify-between md:flex-row w-full gap-8 bg-muted border-t-2 border-b-2">
          <div className="flex flex-col items-baseline text-left md:items-start md:w-1/2 tracking-wide">
            <h2 className="text-1xl font-extralight text-foreground">
              About
            </h2>
            <h1 className="text-4xl font-extrabold">About Me</h1>
          </div>
          <div className="flex flex-col items-baseline text-left md:items-start md:w-1/2">
            <p className="text-1xl text-foreground/80">
              I am a Full-stack Web Developer. I have grown into a developer who focuses on building efficient web architectures and dynamic platforms, utilizing Nuxt.js and Laravel as my primary stack. With a strong passion for integrating AI into software development, I bridge the gap between technical logic, clean code design, and seamless user experiences to turn ideas into functional digital solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default AboutMe;
