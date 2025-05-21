import { sizes } from '../../constants/screenSize';
import { useData } from '../../context/DataContext';
import { Button } from '../shared/Button';
import './HeroSection.scss';

export const HeroSection: React.FC = () => {
  const { main } = useData();
  const srcSet = `${main.images['375']} 375w, ${main.images['992']} 992w, ${main.images['1366']} 1366w, ${main.images['1920']} 1920w`;

  return (
    <section className="main__section section section-main" id="home">
      <div className="section__content--main">
        <div className="section__info--main">
          <div className="section__title-main">{main.header}</div>
          <div className="section__paragraph section__paragraph--main">
            {main.paragraph}
          </div>
          <Button type="rounded" fill="filled">
            {main.button_text}
          </Button>
        </div>
        <div className="section__img-content">
          <img
            src={`${main.images['992']}`}
            srcSet={srcSet}
            sizes={sizes}
            alt="Plant in pot"
            className="section__main-img"
          />
        </div>
      </div>
    </section>
  );
};
