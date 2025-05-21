import classNames from 'classnames';
import './Navigation.scss';
import { useMenuContext } from '../../context/MenuContext';

type NavigationPropsType = {
  type: string;
};

export const Navigation: React.FC<NavigationPropsType> = ({ type }) => {
  const { setMenuOpened } = useMenuContext();

  return (
    <nav className={classNames('nav', `nav--${type}`)}>
      <ul className={classNames('nav__list', `nav__list--${type}`)}>
        <li className="nav__item">
          <a
            href="#home"
            className="nav__link"
            onClick={() => setMenuOpened(false)}
          >
            home
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#about"
            className="nav__link"
            onClick={() => setMenuOpened(false)}
          >
            about
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#shop"
            className="nav__link"
            onClick={() => setMenuOpened(false)}
          >
            shop
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#blog"
            className="nav__link"
            onClick={() => setMenuOpened(false)}
          >
            blog
          </a>
        </li>
        <li className="nav__item">
          <a
            href="#contact"
            className="nav__link"
            onClick={() => setMenuOpened(false)}
          >
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
