import uniqid from 'uniqid'
import { tools } from '../../portfolio'
import './Tools.css'

const Tools = () => {
  if (!tools.length) return null

  return (
    <section className='section_tools' id='tools'>
      <h2 className='section__title'>Tools</h2>
      <ul className='tools__list'>
        {tools.map((tool) => (
          <li key={uniqid()} className='tools__list-item btn btn--plain'>
            {tool}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Tools
