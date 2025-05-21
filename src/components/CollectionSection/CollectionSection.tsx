import classNames from 'classnames';
import { useData } from '../../context/DataContext';
import './CollectionSection.scss';
import { sizes } from '../../constants/screenSize';

export const CollectionSection: React.FC = () => {
  const { newCollection } = useData();

  return (
    <section className="main__section section section__collection" id="blog">
      <div className="section__title-small">{newCollection.header}</div>

      <div className="section__content-collection">
        <div className="section__imgs section__imgs--rounded">
          {newCollection.images.slice(0, 4).map((imageSet, index) => {
            const [img375, img992, img1366, img1920] = imageSet;

            const srcSet = `
              ${img375} 375w,
              ${img992} 992w,
              ${img1366} 1366w,
              ${img1920} 1920w
            `;

            return (
              <img
                key={imageSet[index]}
                src={img375}
                srcSet={srcSet}
                sizes={sizes}
                alt={`Shop category ${index + 1}`}
                className={classNames('section__img--rounded', {
                  'section__img--small': index === 0 || index === 2,
                })}
              />
            );
          })}
        </div>
      </div>
      <div className="section__paragraph section__paragraph--collection">
        {newCollection.paragraph}
      </div>
    </section>
  );
};
