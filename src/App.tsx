import ProjectCard from "./components/ProjectCard.component";
import { ReactComponent as MenuIcon } from "./icons/icon-menu.svg";

function App() {
  const data = {
    leadSection: {
      name: "Sujyot Raut",
      role: ["Full Stack Developer"],
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vero inventore provident! Enim autem voluptatem exercitationem dolores excepturi odit sunt dicta eius? Voluptates quas sapiente ex, harum tenetur mollitia quam.`,
    },
    aboutSection: {
      title: "About",
      profile: "",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quisquam odit ullam odio minus accusamus, quasi rem eveniet maxime praesentium nam ratione eligendi consequatur optio doloremque. Quos necessitatibus doloremque quod?`,
    },
    projectsSection: {
      title: "Projects",
      projects: [
        {
          title: "",
          image: "",
          content: "",
          demo: "",
          github: "",
        },
      ],
    },
  };

  return (
    <div className="text-white">
      {/* Navbar */}
      <div className="flex items-center h-12 bg-purple-400">
        <span className="ml-4">LOGO</span>
        <span className="ml-auto mr-4 flex justify-center items-center cursor-pointer">
          <MenuIcon width={24} height={24} viewBox="0 0 48 48" />
        </span>
      </div>

      {/* Lead Section */}
      <div id="#lead-section" className="mx-4 h-[calc(100vh-48px)] flex flex-col justify-center">
        <div className="max-w-6xl">
          <div>Hi, i am</div>
          <div className="font-bold text-5xl text-red-400">{data.leadSection.name}</div>
          <div className="mt-2 font-medium text-3xl">{data.leadSection.role[0]}</div>
          <div className="mt-2 max-w-3xl">{data.leadSection.content}</div>
          <button className="mt-3 px-2 py-1 capitalize bg-red-600">RESUME</button>
        </div>
      </div>

      {/* About Section */}
      <div id="#about-section" className="mx-4 h-[100vh] flex flex-col justify-center items-center text-center">
        <div className="text-2xl font-bold">{data.aboutSection.title}</div>
        <div className="mt-8 bg-white w-40 h-40 rounded-[50%]"></div>
        <div className="mt-6">{data.aboutSection.content}</div>
      </div>

      {/* Projects Section */}
      <div id="#projects-section" className="mx-4 h-[100vh] flex flex-col justify-center items-center text-center">
        <div className="text-2xl font-bold">{data.projectsSection.title}</div>
        <div className="mt-8 w-full">
          <ProjectCard title="title" content="content" demo="demo" github="github" />
        </div>
      </div>
    </div>
  );
}

export default App;
