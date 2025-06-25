import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import kavida from '../../images/kavida.jpeg'
import journey from '../../images/Journey.jpeg'
import './ProjectDetailPage.css'

const Cybersecurity = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <div className="project-detail-container">
      <h1>Cybersecurity Product</h1>
      <h3>Business Analysis | Product Development | Digital Marketing</h3>
      <h4>Objective: Spearheaded the launch of a cybersecurity business unit, handling market research, business modeling, product packaging, and digital assets (website, social media).</h4>
      <h5>Timeline: 4 months to launch</h5>
      
      <div className="slider-container">
        <Slider 
          dots={settings.dots}
          infinite={settings.infinite}
          speed={settings.speed}
          slidesToShow={settings.slidesToShow}
          slidesToScroll={settings.slidesToScroll}
          autoplay={settings.autoplay}
          autoplaySpeed={settings.autoplaySpeed}
        >
          <div className="slide-content">
            <h3>Product Development Journet</h3>
            <img src={journey} alt="Cybersecurity" />
            <strong>Responsibilities:</strong>
            <ol>
              <li>
                <strong>Opportunity Identification</strong>
                <p>Recognized a market gap where many businesses lacked access to practical, scalable cybersecurity services.</p>
              </li>
              <li>
                <strong>Customer Needs Analysis</strong>
                <p>Gathered insights from industry interviews, mapped pain points, and analyzed competitor offerings to define core problems.</p>
              </li>
              <li>
                <strong>Concept Development</strong>
                <p>Outlined cybersecurity services designed around end-to-end experience.</p>
              </li>
              <li>
                <strong>Defined six key offerings</strong>
                <p>Analyzed service potential and defined product packaging into six focused offerings: Vulnerability Assessment, Penetration Testing, Cybersecurity Awareness Training, Hardening as a Service, Cybersecurity Product Solutions, Cybersecurity Training</p>
              </li>
              <li>
                <strong>Production Ramp-Up</strong>
                <p>Built operational processes, created SOPs, developed the team structure, and launched digital assets including website and social media.</p>
              </li>
            </ol>
            <p>Outcome: A focused, profitable cybersecurity service that meets evolving business needs and is ready to scale.</p>
          </div>
          <div className="slide-content">
            <h3>Platform Overview</h3>
            <img src={kavida} alt="Cybersecurity" />
            <strong>Responsibilities:</strong>
            <ol>
              <li>
              Led the creation of digital assets, including website structure, UI/UX direction, and initial content.
              </li>
              <li>
              Wrote and structured content for marketing channels (website, social media, and service brochures).
              </li>
              <li>
              Developed a clear and actionable go-to-market (GTM) strategy, outlining channel approaches, early-stage outreach, and promotional activities.
              </li>
              <li>
              Coordinated campaign planning and internal alignment across departments.
              </li>
            </ol> 
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Cybersecurity 
