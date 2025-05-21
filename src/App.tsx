import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { useEffect } from 'react';
import { BurgerMenu } from './components/BurgerMenu';
import { CategoriesSection } from './components/CategoriesSection';
import { AboutSection } from './components/AboutSection';
import { FollowUsSection } from './components/FollowUsSection';
// eslint-disable-next-line max-len
import { CollectionSection } from './components/CollectionSection/CollectionSection';
import { useMenuContext } from './context/MenuContext';

export const App = () => {
  const menuContext = useMenuContext();
  const menuOpened = menuContext?.menuOpened ?? false;

  useEffect(() => {
    if (menuOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpened]);

  return (
    <>
      <Header />
      {menuOpened && <BurgerMenu />}
      <main className="main overflow-hidden">
        <HeroSection />
        <CategoriesSection />
        <CollectionSection />
        <AboutSection />
        <FollowUsSection />
      </main>
    </>
  );
};
