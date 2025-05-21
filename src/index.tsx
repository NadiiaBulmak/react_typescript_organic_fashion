import { createRoot } from 'react-dom/client';
import { App } from './App';
import { DataProvider } from './context/DataProvider';
import { MenuProvider } from './context/MenuProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <DataProvider>
    <MenuProvider>
      <App />
    </MenuProvider>
  </DataProvider>,
);
