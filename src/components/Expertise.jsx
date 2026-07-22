import React from 'react';
import '../styles/components.css';

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    num: "01",
    icon: (
      <svg width="60" height="60" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5918 25.8584C8.70012 29.2417 13.5339 33.5915 18.3672 38.4248C23.2005 43.2581 27.5503 48.0919 30.9336 52.2002C16.6753 53.6502 4.5918 42.5333 4.5918 28.5166V25.8584ZM10.1504 12.8086C15.467 16.9169 21.5087 22.4755 27.792 28.7588C34.0752 35.0421 39.6339 41.0838 43.7422 46.4004C41.3256 48.5753 38.6669 50.2667 35.5254 51.2334C34.8003 46.8834 30.208 40.1172 23.4414 33.3506C16.9165 26.584 9.9086 21.9921 5.55859 21.0254C6.52526 18.1254 7.97539 15.2253 10.1504 12.8086ZM21.0254 5.7998C25.6171 9.18314 31.4173 14.2586 36.9756 20.0586C42.7753 25.6167 47.8501 31.4163 51.2334 36.0078C50.2668 38.1827 49.0588 40.3578 47.8506 42.291C45.9171 37.216 40.6005 29.9662 33.834 22.958C27.0673 16.1913 19.8172 10.8747 14.7422 8.94141C16.6755 7.49145 18.8504 6.5248 21.0254 5.7998ZM28.5176 4.5918C41.5676 4.5918 51.9595 15.2254 52.2012 28.2754C50.0262 24.4088 46.4012 19.575 41.8096 14.9834C37.2179 10.3917 32.3842 6.7668 28.5176 4.5918Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Webflow Development",
    num: "02",
    icon: (
      <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.3809 7.32422C27.1698 4.22537 31.6387 4.22537 33.4316 7.32422L37.4756 14.332C37.3846 14.3845 37.3084 14.4597 37.2559 14.5508L17.832 48.2002C17.7792 48.2915 17.7518 48.3955 17.752 48.501H9.65625C6.0786 48.5008 3.83839 44.626 5.63086 41.5283L25.3809 7.32422ZM53.1807 41.5283C54.9694 44.626 52.7339 48.4977 49.1562 48.498H35.7812L46.4951 29.9473L53.1807 41.5283Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Print & Visual Design",
    num: "03",
    icon: (
      <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.1143 0C23.9684 0.000211616 25.4824 1.5058 25.4824 3.36914V43.6406C25.4822 45.4946 23.9774 47.0086 22.1143 47.0088H3.36914C1.50566 46.9996 0 45.4943 0 43.6309V3.36914C0 1.50566 1.50566 0 3.36914 0H22.1143ZM29.8984 5.97656C30.1371 5.43496 30.7709 5.18711 31.3125 5.42578L34.7451 6.94043C35.7824 7.39023 36.4434 8.40898 36.4434 9.53809V37.4629C36.4432 38.5826 35.7731 39.6016 34.7451 40.0605L31.3125 41.5752C31.184 41.6394 31.0277 41.667 30.8809 41.667C30.2842 41.667 29.8067 41.1894 29.8066 40.5928V6.40723C29.8067 6.26059 29.8343 6.11405 29.8984 5.97656ZM40.876 11.1992C41.133 10.6668 41.767 10.4285 42.3086 10.6855L45.3652 12.127C46.3657 12.5951 46.999 13.5958 46.999 14.6973V32.3037C46.9989 33.4052 46.3566 34.4059 45.3652 34.874L42.3086 36.3154C42.1618 36.3797 42.0056 36.416 41.8496 36.416C41.2621 36.416 40.7754 35.9385 40.7754 35.3418V11.6582C40.7754 11.5022 40.8117 11.346 40.876 11.1992Z" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Prototyping",
    num: "04",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.0625 15.9346L31.8721 31.8701L47.999 15.7471L47.8086 31.6846L47.6182 47.6191L31.6836 47.8096L15.7461 48L31.8721 31.8721L15.9346 32.0625L0 32.2529L16.125 16.125L32.2529 0L32.0625 15.9346Z" fill="currentColor"/>
      </svg>
    )
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="section">
      <div className="container expertise-content">
        {/* Section Top Bar */}
        <div className="top-bar">
          <div className="caps">/ Expertise</div>
          <div className="caps">N. 03</div>
        </div>

        {/* Headline */}
        <div className="expertise-headline">
          <h2 className="display-02">
            What I bring to every project <span className="soft-text">from first sketch to final product.</span>
          </h2>
        </div>

        {/* Expertise Grid */}
        <div className="expertise-grid">
          {services.map((service) => (
            <div key={service.id} className="expertise-card">
              <div className="expertise-icon-wrap">
                {service.icon}
              </div>
              <div className="expertise-card-info">
                <span className="expertise-title">{service.title}</span>
                <span className="expertise-number">/{service.num}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
