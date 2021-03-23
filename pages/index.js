import Link from 'next/link'
import Layout from '../components/Layout'
import { skills, experiences, projects } from '../profile'

console.log(skills)

const Index = () => (
  <Layout>
    {/* Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/ryan-ray-profile2.jpeg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Rayn Ray</h1>
              <h3>FullStack Developer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur distinctio inventore optio ipsum explicabo? Velit, eligendi eos. Molestias inventore facere tenetur sed iusto rem assumenda dolorum ipsa atque praesentium.</p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Seccond section */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div className="progress-bar" role="progress" style={{ width: `${percentage}%` }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>

            <ul>
              {experiences.map(({ title, description, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
            <Link href="/experiences">
              <a className="btn btn-linght ">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>

            {projects.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${image}`} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#!">Know more</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light">More Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Index
