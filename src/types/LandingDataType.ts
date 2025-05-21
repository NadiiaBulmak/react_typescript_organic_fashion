type Breakpoints = '375' | '992' | '1366' | '1920';

type ImageSet = {
  [key in Breakpoints]: string[];
};

type ResponsiveImages = ImageSet;

type MultipleResponsiveImages = string[][];

type MainSection = {
  header: string;
  paragraph: string;
  images: ResponsiveImages;
  button_text: string;
};

type ShopByCategoriesSection = {
  header: string;
  images: MultipleResponsiveImages;
};

type NewCollectionSection = {
  header: string;
  paragraph: string;
  images: MultipleResponsiveImages;
};

type AboutUsSection = {
  header: string;
  paragraph: string;
  paragraph_2: string;
  images: ResponsiveImages;
};

type FollowUsSection = {
  header: string;
  form_inputs: string[];
  images: ResponsiveImages;
};

export type LandingDataType = {
  main: MainSection;
  shopByCategories: ShopByCategoriesSection;
  newCollection: NewCollectionSection;
  aboutUs: AboutUsSection;
  followUs: FollowUsSection;
};
