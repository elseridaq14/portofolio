import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Import gambar jika ada, atau gunakan placeholder
import './ProjectDetailPage.css'
import podang from '../../images/digital.jpeg'

const Digitalization = () => {
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
      <h1>C-Commerce for Agribusiness</h1>
      <h3>Business Analyst | Product Strategist</h3>
      <h4>Objective: Empower farmers through digital market access. Conducted market analysis, designed digital solutions using WhatsApp Business API and C-Commerce, developed user journey, and cost-benefit analysis.</h4>
      {/* <h4>Timeline: 4 month to launch</h4> */}
      
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
            <h3>Platform Overview - Phase 1 (Early Adopter Stage)</h3>
            <p>Objective: Enable direct ordering via WhatsApp to validate demand and streamline farmer‑to‑consumer sales.</p>
            <img src={podang} alt="Digitalization for Agribusiness Demo" />
            <strong className='responds2'>Responsibilities</strong>
            <ul>
              <li>Conducted market analysis and designed digital solutions using WhatsApp Business API and C-Commerce.</li>
              <li>Developed user journey, performed cost-benefit analysis, and created an operational blueprint.</li>
              <li>Proposed a centralized model for transactions and stakeholder engagement strategies.</li>
            </ul>
          </div>
          <div className="slide-content">
            <h3>Platform Overview Phase 2 (Integration)</h3>
            <img src={podang} alt="Digitalization for Agribusiness Demo" />
            <p>Migrated to WhatsApp Business API and layered in a C‑Commerce engine. Orders, payments, and customer interactions moved to a unified backend. This fully digital workflow centralized inventory, automated order routing, and standardized customer engagement—providing clear operational control and richer data insights.</p>
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default Digitalization 