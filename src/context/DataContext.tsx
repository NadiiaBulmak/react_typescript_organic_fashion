import { useContext, createContext } from 'react';
import landingData from '../data/landing_data';
import { LandingDataType } from '../types/LandingDataType';

export const DataContext = createContext<LandingDataType>(landingData);

export const useData = () => {
  return useContext(DataContext);
};
