import { useMenuContext } from '../../context/MenuContext';
import { Navigation } from '../Navigation';
import './Header.scss';
import classNames from 'classnames';

export const Header: React.FC = ({}) => {
  const { menuOpened, setMenuOpened } = useMenuContext();

  return (
    <header className="header">
      <div className="header__left brand__title">ALTANSCHOOL WEB COURSES</div>
      <div className="header__right">
        <Navigation type="tablet-desctop" />
        <div
          className={classNames('header__menu', {
            'header__menu--opened': menuOpened,
          })}
          onClick={() => setMenuOpened(!menuOpened)}
        ></div>
      </div>
    </header>
  );
};
