import { ReactNode, useState } from 'react';
import { MenuContext } from './MenuContext';

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <MenuContext.Provider value={{ menuOpened, setMenuOpened }}>
      {children}
    </MenuContext.Provider>
  );
};
