import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import marketImg from '../../images/market_analys.jpeg'
import blue from '../../images/blueprint.jpeg'
import beyondImg from '../../images/edu_overview.png'
import './ProjectDetailPage.css'

const AiForRecruitment = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  return (
    <div className="project-detail-container">
      <h1>AI for Recruitment</h1>
      <h3>Business Analyst | Product Strategist</h3>
      <h4>Objective: Built an AI-driven assessment platform to streamline corporate hiring, automating candidate integrity, engagement, and skill evaluations.</h4>
      
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
            <h3>Market Analysis</h3>
            <img src={marketImg} alt="AI for Recruitment Demo" />
            <strong className='responds1'>Responsibilities:</strong>
            <ul>
              <li>Conducted end-to-end market and competitor analysis</li>
              <li>Segmented potential users based on size, behavior, and tech readiness</li>
              <li>Benchmarked existing offerings, pricing, and delivery models</li>
              <li>Designed the monetization strategy including pricing tiers, pay-per-use model, and enterprise options</li>
              <li>Estimated target penetration rate (5%) and projected potential revenue</li>
              <li>Delivered insights that shaped product positioning and sales narrative</li>
            </ul>
          </div>
          <div className="slide-content">
            <h3>Blueprint Technology</h3>
            <img src={blue} alt="AI for Recruitment Demo" />
            <strong>Responsibilities:</strong>
            <ul>
              <li>Mapped out technology blueprint from MVP to long-term evolution</li>
              <li>Defined user flow between corporate recruiters and talent pool</li>
              <li>Aligned platform goals with infrastructure feasibility</li>
              <li>Coordinated logic handover with engineering & product teams</li>
              <li>Ensured each phase was tied to measurable business outcomes</li>
            </ul>
          </div>
          <div className="slide-content">
            <h3>Platform Overview</h3>
            <img src={beyondImg} alt="AI for Recruitment Demo" />
            <strong>Responsibilities:</strong>
            <ul>
              <li>Identified pain points and aligned with product-based solutions</li>
              <li>Conducted market segmentation and valuation analysis</li>
              <li>Created business model across two product phases</li>
              <li>Generated revenue projections and financial feasibility</li>
              <li>Evaluated system blueprint and implementation timeline</li>
              <li>Developed go-to-market strategy</li>
              <li>Built interactive mockups to demonstrate platform features</li>
            </ul>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default AiForRecruitment 
