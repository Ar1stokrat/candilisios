import '../assets/styles/Features.css'
import images from "../assets/images/images.js";
import Streight from '../assets/images/streit.png';

const featuresData = [
  {
    title: 'Deliciousness',
    text: 'Quisque posuere ligula sit amet massa accumsan id rutrum lectus suscipit. Donec in neque mauris, non pulvinar quam. Donec felis ante, placerat eu feugiat non, sagittis eu magna.',
    link: 'Shop for pure flavor heaven now',
    icon: images.Cake1
  },
  {
    title: 'Get it Fresh',
    text: 'Vivamus ac nisi eros, eget semper purus. Sed ullamcorper, augue quis feugiat tincidunt, erat felis consectetur nibh, a hendrerit eros felis eu dui.',
    link: 'Order fresh baked goods now',
    icon: images.Cake2
  },
  {
    title: 'Flavorific',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer odio nisl, vulputate vel blandit nec, congue a sem. Aenean dapibus sagittis lectus id vehicula.',
    link: 'We use the freshest of ingredients',
    icon: images.Cake3
  }
];

function FeatureItem({ title, text, link, icon }) {
  return (
    <div className="feature-box">
      <div className="ribbon-container">
        <img src={images.Streight} alt="ribbon" className="ribbon-img" />
        <span className='ribbon-text'>{title}</span>
        <img src={icon} alt={title} className="cake-icon" />
      </div>
      <div className="feature-content">
        <p className="feature-text">{text}</p>
        <a href="#" className="feature-link">{link}</a>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-ribbon-wrapper">
        <div className="features-ribbon">
          <h2 className="features-title-on-ribbon">
            Candilicious Offers the Finest Baked Treats and Candy Anywhere in the World
          </h2>
        </div>
      </div>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            text={feature.text}
            link={feature.link}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}

