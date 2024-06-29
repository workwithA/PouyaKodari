import background from "../../assets/PouyaKodari.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden h-screen bg-gray-300">
      <img src={background} alt="Pouya Kodari" className="min-w-[175%]" />

      {/* texts */}
      <div className="w-full h-full bg-black absolute bg-opacity-40 flex flex-col items-center justify-center">
        <p className="font-roboto text-white text-center text-4xl font-extralight tracking-widest">
          Hello I&apos;m
          <br />{" "}
          <span className="font-semibold text-5xl tracking-wide">
            Pouya
            <br /> Kodari
          </span>
        </p>
        <p className="font-roboto text-md mt-8 text-white font-extralight opacity-90 uppercase tracking-[.25em]">And This Is My Resume</p>
      </div>
    </div>
  );
};

export default Header;
