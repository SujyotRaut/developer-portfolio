import { ReactComponent as GithubIcon } from '../icons/github-mark.svg';
import { ReactComponent as DemoIcon } from '../icons/open_in_new.svg';
import LinkButton from './LinkButton.component';

interface PropTypes {
  thumbnail?: string;
  title: string;
  content: string;
  demo: string;
  github: string;
}

const DEFAULT_THUMBNAIL = 'img/placeholder-project-card.png';

function ProjectCard({ thumbnail, title, content, demo, github }: PropTypes) {
  return (
    <div className='p-2 max-w-sm bg-white text-black flex flex-col gap-4 text-left'>
      <img className='h-40' src={thumbnail || DEFAULT_THUMBNAIL} alt='project-showcase' />
      <div className='text-2xl font-bold text-ellipsis line-clamp-2'>{title}</div>
      <div className='line-clamp-5 sm:line-clamp-6'>{content}</div>
      <div className='flex gap-2 text-center'>
        <LinkButton title='Demo' href={demo} leadingIcon={<DemoIcon width={24} height={24} viewBox='0 0 48 48' />} />
        <LinkButton
          title='Github'
          href={github}
          leadingIcon={<GithubIcon width={24} height={24} viewBox='0 0 98 96' />}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
