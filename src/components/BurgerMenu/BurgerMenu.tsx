import './BurgerMenu.scss';
import { Navigation } from '../Navigation';

export const BurgerMenu: React.FC = () => {
  return (
    <div className="burger-menu">
      <Navigation type="mobile" />
    </div>
  );
};
