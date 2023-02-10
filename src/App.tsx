import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './components/Button.component';
import InputField from './components/InputField.component';
import ProjectCard from './components/ProjectCard.component';

function App() {
  const data = {
    leadSection: {
      name: 'Sujyot Raut',
      role: ['Full Stack Developer'],
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro vero inventore provident! Enim autem voluptatem exercitationem dolores excepturi odit sunt dicta eius? Voluptates quas sapiente ex, harum tenetur mollitia quam.`,
    },
    aboutSection: {
      title: 'About',
      profile: '',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit quisquam odit ullam odio minus accusamus, quasi rem eveniet maxime praesentium nam ratione eligendi consequatur optio doloremque. Quos necessitatibus doloremque quod?`,
    },
    projectsSection: {
      title: 'Projects',
      projects: [
        {
          id: '123',
          title: 'Oauth 2.0 Sever Implementation uisng NodeJS',
          image: '',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per',
          demo: '',
          github: '',
        },
      ],
    },
    contactSection: {
      title: 'Contact',
    },
  };

  return (
    <div className='text-white'>
      {/* Navbar */}
      <div className='flex items-center h-12 bg-purple-400'>
        <span className='ml-4'>LOGO</span>
        <span className='ml-auto mr-4 flex justify-center items-center cursor-pointer'>
          {/* <MenuIcon width={24} height={24} viewBox='0 0 48 48' /> */}
          <FontAwesomeIcon icon={faBars} style={{ width: 24, height: 24 }} viewBox='0 0 448 512' />
        </span>
      </div>

      {/* Lead Section */}
      <div id='#lead-section' className='mx-4 h-[calc(100vh-48px)] flex flex-col justify-center'>
        <div className='max-w-6xl'>
          <div>Hi, i am</div>
          <div className='font-bold text-5xl text-red-400'>{data.leadSection.name}</div>
          <div className='mt-2 font-medium text-3xl'>{data.leadSection.role[0]}</div>
          <div className='mt-2 max-w-3xl'>{data.leadSection.content}</div>
          <button className='mt-3 px-2 py-1 capitalize bg-red-600'>RESUME</button>
        </div>
      </div>

      {/* About Section */}
      <div id='#about-section' className='mx-4 h-screen flex flex-col justify-center items-center text-center'>
        <div className='mb-8 text-2xl font-bold'>{data.aboutSection.title}</div>
        <div className='bg-white w-40 h-40 rounded-[50%]'></div>
        <div className='mt-6'>{data.aboutSection.content}</div>
      </div>

      {/* Projects Section */}
      <div id='#projects-section' className='mx-4 h-screen flex flex-col justify-center items-center text-center'>
        <div className='mb-8 text-2xl font-bold'>{data.projectsSection.title}</div>
        <div className='w-full flex justify-center'>
          {data.projectsSection.projects.map(({ id, title, content, image, demo, github }) => (
            <ProjectCard key={id} title={title} content={content} thumbnail={image} demo={demo} github={github} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id='#contact-section' className='mx-4 h-screen'>
        <div className='h-full flex flex-col justify-center items-center text-center'>
          <div className='mb-8 text-2xl font-bold'>{data.contactSection.title}</div>
          <div className='flex flex-col gap-4 text-black'>
            <InputField name='name' label='Name' />
            <InputField name='email' label='Email' />
            <InputField name='message' label='Message...' type='textarea' />
            <div className='flex gap-2'>
              <Button title='Reset' />
              <Button title='Submit' />
            </div>
          </div>
        </div>
        <hr />
        <footer className='flex flex-col gap-2 p-4 justify-self-center items-center'>
          <div className='flex gap-2 justify-center items-center'>
            <FontAwesomeIcon icon={faFacebook} style={{ width: 24, height: 24 }} viewBox='0 0 512 512' />
            <FontAwesomeIcon icon={faTwitter} style={{ width: 24, height: 24 }} viewBox='0 0 512 512' />
            <FontAwesomeIcon icon={faInstagram} style={{ width: 24, height: 24 }} viewBox='0 0 448 512' />
          </div>
          <div>@Copyright 2023</div>
          <div>Privacy Policy & Terms</div>
        </footer>
      </div>
    </div>
  );
}

export default App;
