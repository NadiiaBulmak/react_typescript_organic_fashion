import LandingData from '../data/landing_data';
import { DataContext } from './DataContext';

type DataProviderProps = {
  children: React.ReactNode;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  return (
    <DataContext.Provider value={LandingData}>{children}</DataContext.Provider>
  );
};
