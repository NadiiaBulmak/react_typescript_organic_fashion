import { createContext, useContext } from 'react';

type MenuContextType = {
  menuOpened: boolean;
  setMenuOpened: (value: boolean) => void;
};

export const MenuContext = createContext<MenuContextType>({
  menuOpened: false,
  setMenuOpened: () => {},
});

export const useMenuContext = () => useContext(MenuContext);
