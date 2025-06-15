import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// Import gambar jika ada, atau gunakan placeholder
import placeholderImg from '../../images/profile.png' // Contoh placeholder, ganti dengan gambar relevan
import './ProjectDetailPage.css'

const DigitalizationForAgribusiness = () => {
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
      <h1>Digitalization for Agribusiness</h1>
      <h3>Business Analyst | Product Strategist</h3>
      <h4>Objective: Empower farmers through digital market access</h4>
      
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
            <h3>Project Overview</h3>
            <img src={placeholderImg} alt="Digitalization for Agribusiness Demo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="slide-content">
            <h3>Digital Solutions</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Slider>
      </div>

      <ul>
        <li>Conducted market analysis and designed digital solutions using WhatsApp Business API and C-Commerce.</li>
        <li>Developed user journey, performed cost-benefit analysis, and created an operational blueprint.</li>
        <li>Proposed a centralized model for transactions and stakeholder engagement strategies.</li>
      </ul>
      <p className="project-detail-note">*Detail lebih lanjut akan ditambahkan di sini.</p>
    </div>
  )
}

export default DigitalizationForAgribusiness 