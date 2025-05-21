import { sizes } from '../../constants/screenSize';
import { useData } from '../../context/DataContext';
import { Button } from '../shared/Button';
import './AboutSection.scss';

export const AboutSection: React.FC = () => {
  const { aboutUs } = useData();
  const srcSet = `${aboutUs.images['375']} 375w, ${aboutUs.images['992']} 992w, ${aboutUs.images['1366']} 1366w, ${aboutUs.images['1920']} 1920w`;

  return (
    <>
      <section className="main__section section section__about-us" id="about">
        <div className="section__container-about-us">
          <img
            src={`${aboutUs.images['992']}`}
            srcSet={srcSet}
            sizes={sizes}
            alt="Plant in pot"
            className="section__img-about-us"
          />
          <div className="section__info">
            <div className="section__title-bold">{aboutUs.header}</div>
            <div className="section__paragraph section__paragraph-first">
              {aboutUs.paragraph}
            </div>
            <img
              src={`${aboutUs.images['992']}`}
              srcSet={srcSet}
              sizes={sizes}
              alt="Plant in pot"
              className="section__img-about-us-mob"
            />
            <div className="section__paragraph section__paragraph-second">
              {aboutUs.paragraph_2}
            </div>
            <Button type="with-light-radius-bordered" fill="bordered">
              LEARN MORE
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
