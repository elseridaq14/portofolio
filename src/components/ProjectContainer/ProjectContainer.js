import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import { Link } from 'react-router-dom'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const isInternalLink = (url) => url.startsWith('/') || url.startsWith('#')

  return (
    <div className='project'>
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        isInternalLink(project.livePreview) ? (
          <Link
            to={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </Link>
        ) : (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LaunchIcon />
          </a>
        )
      )}
    </div>
  )
}

export default ProjectContainer
