import { sizes } from '../../constants/screenSize';
import { useData } from '../../context/DataContext';
import { Form } from '../Form';
import './FollowUsSection.scss';

export const FollowUsSection: React.FC = () => {
  const { followUs } = useData();
  const srcSet = `${followUs.images['375']} 375w, ${followUs.images['992']} 992w, ${followUs.images['1366']} 1366w, ${followUs.images['1920']} 1920w`;

  return (
    <>
      <section
        className="main__section section section__follow-us"
        id="contact"
      >
        <img
          src={`${followUs.images['992']}`}
          srcSet={srcSet}
          sizes={sizes}
          alt="Happy woman with plant"
          className="section__img-follow-us"
        />
        <div className="section__form-info">
          <div className="section__title-bold">{followUs.header}</div>
          <Form />
        </div>
      </section>
    </>
  );
};
