import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import beyondImg from '../../images/beyond.png'
import mindmapImg from '../../images/mindmap.png'
import './ProjectDetailPage.css'

const AiForRecruitment = () => {
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
      <h1>AI for Recruitment</h1>
      <h3>Business Analyst | Product Strategist</h3>
      <h4>Objective: Automate end-to-end recruitment journey</h4>
      
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
            <h3>Platform Overview</h3>
            <img src={beyondImg} alt="AI for Recruitment Demo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
              <li>Identified pain points and aligned with product-based solutions</li>
              <li>Conducted market segmentation and valuation analysis</li>
              <li>Created business model across two product phases</li>
              <li>Generated revenue projections and financial feasibility</li>
              <li>Evaluated system blueprint and implementation timeline</li>
              <li>Developed go-to-market strategy</li>
              <li>Built interactive mockups to demonstrate platform features</li>
            </ul>
            <p className="project-detail-note">*Gambar di atas adalah ilustrasi tampilan platform dan mindmap fitur utama.</p>
          </div>
          <div className="slide-content">
            <h3>Feature Mindmap</h3>
            <img src={mindmapImg} alt="AI for Recruitment Mindmap" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <ul>
              <li>Identified pain points and aligned with product-based solutions</li>
              <li>Conducted market segmentation and valuation analysis</li>
              <li>Created business model across two product phases</li>
              <li>Generated revenue projections and financial feasibility</li>
              <li>Evaluated system blueprint and implementation timeline</li>
              <li>Developed go-to-market strategy</li>
              <li>Built interactive mockups to demonstrate platform features</li>
            </ul>
            <p className="project-detail-note">*Gambar di atas adalah ilustrasi tampilan platform dan mindmap fitur utama.</p>
          </div>
          <div className="slide-content">
            <h3>Market Analysis</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="slide-content">
            <h3>Implementation Timeline</h3>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default AiForRecruitment 
