import { sizes } from '../../constants/screenSize';
import { useData } from '../../context/DataContext';
import './CategoriesSection.scss';

export const CategoriesSection: React.FC = () => {
  const { shopByCategories } = useData();

  return (
    <section className="main__section section section__categories" id="shop">
      <div className="section__title-small">{shopByCategories.header}</div>

      <div className="section__content-category">
        <div className="section__imgs-container">
          <div className="section__imgs--not-rounded">
            {shopByCategories.images.slice(0, 4).map((imageSet, index) => {
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
                  className="section__img"
                />
              );
            })}
          </div>
        </div>

        <img
          src={shopByCategories.images[4][0]}
          srcSet={`
            ${shopByCategories.images[4][0]} 375w,
            ${shopByCategories.images[4][1]} 992w,
            ${shopByCategories.images[4][2]} 1366w,
            ${shopByCategories.images[4][3]} 1920w
          `}
          sizes={sizes}
          alt={`Shop category 5`}
          className="section__img--large"
        />
      </div>
    </section>
  );
};
