import { ReactComponent as MenuIcon } from "./icons/icon-menu.svg";

function App() {
  return (
    <div className="text-white">
      <div className="flex items-center h-12 w-full bg-purple-400">
        <span className="ml-4">LOGO</span>
        <span className="ml-auto mr-4 flex justify-center items-center cursor-pointer">
          <MenuIcon width={24} height={24} viewBox="0 0 48 48" />
        </span>
      </div>
      <div id="into-section" className="mx-4 my-[64px]">
        <div className="mt-16 max-w-6xl">
          <span className="block">Hi, i am</span>
          <span className="block font-bold text-5xl text-red-400">Sujyot Raut</span>
          <span className="block mt-2 font-medium text-3xl">Full Stack Developer</span>
          <span className="block mt-2 max-w-3xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vero inventore provident! Enim autem
            voluptatem exercitationem dolores excepturi odit sunt dicta eius? Voluptates quas sapiente ex, harum tenetur
            mollitia quam.
          </span>
          <button className="mt-3 px-2 py-1 capitalize bg-red-600">RESUME</button>
        </div>
      </div>
      <div id="about-me-section" className="mx-4">
        <div className="text-2xl">About Me</div>
      </div>
    </div>
  );
}

export default App;
