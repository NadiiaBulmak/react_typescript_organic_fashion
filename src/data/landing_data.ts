import { LandingDataType } from '../types/LandingDataType';
const base = import.meta.env.BASE_URL;

const LandingData: LandingDataType = {
  main: {
    header: 'ORGANIC FASHION',
    paragraph:
      // eslint-disable-next-line max-len
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: {
      '375': [`${base}images/375/main.png`],
      '992': [`${base}images/992/main.png`],
      '1366': [`${base}images/1366/main.png`],
      '1920': [`${base}images/1920/main.png`],
    },
    button_text: 'SHOP NOW',
  },
  shopByCategories: {
    header: 'SHOP BY CATEGORIES',
    images: [
      [
        `${base}images/375/shop_by_categories_1.png`,
        `${base}images/992/shop_by_categories_1.png`,
        `${base}images/1366/shop_by_categories_1.png`,
        `${base}images/1920/shop_by_categories_1.png`,
      ],
      [
        `${base}images/375/shop_by_categories_2.png`,
        `${base}images/992/shop_by_categories_2.png`,
        `${base}images/1366/shop_by_categories_2.png`,
        `${base}images/1920/shop_by_categories_2.png`,
      ],
      [
        `${base}images/375/shop_by_categories_3.png`,
        `${base}images/992/shop_by_categories_3.png`,
        `${base}images/1366/shop_by_categories_3.png`,
        `${base}images/1920/shop_by_categories_3.png`,
      ],
      [
        `${base}images/375/shop_by_categories_4.png`,
        `${base}images/992/shop_by_categories_4.png`,
        `${base}images/1366/shop_by_categories_4.png`,
        `${base}images/1920/shop_by_categories_4.png`,
      ],
      [
        `${base}images/375/shop_by_categories_5.png`,
        `${base}images/992/shop_by_categories_5.png`,
        `${base}images/1366/shop_by_categories_5.png`,
        `${base}images/1920/shop_by_categories_5.png`,
      ],
    ],
  },
  newCollection: {
    header: 'NEW COLLECTION',
    paragraph:
      // eslint-disable-next-line max-len
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    images: [
      [
        `${base}images/375/new_collection_1.png`,
        `${base}images/992/new_collection_1.png`,
        `${base}images/1366/new_collection_1.png`,
        `${base}images/1920/new_collection_1.png`,
      ],
      [
        `${base}images/375/new_collection_2.png`,
        `${base}images/992/new_collection_2.png`,
        `${base}images/1366/new_collection_2.png`,
        `${base}images/1920/new_collection_2.png`,
      ],
      [
        `${base}images/375/new_collection_3.png`,
        `${base}images/992/new_collection_3.png`,
        `${base}images/1366/new_collection_3.png`,
        `${base}images/1920/new_collection_3.png`,
      ],
    ],
  },
  aboutUs: {
    header: 'ABOUT US',
    paragraph:
      // eslint-disable-next-line max-len
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    paragraph_2:
      // eslint-disable-next-line max-len
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: {
      '375': [`${base}images/375/about_us.png`],
      '992': [`${base}images/992/about_us.png`],
      '1366': [`${base}/images/1366/about_us.png`],
      '1920': [`${base}/images/1920/about_us.png`],
    },
  },
  followUs: {
    header: 'FOLLOW US',
    form_inputs: ['name', 'email address', 'message'],
    images: {
      '375': [`${base}images/375/follow_us.png`],
      '992': [`${base}images/992/follow_us.png`],
      '1366': [`${base}images/1366/follow_us.png`],
      '1920': [`${base}images/1920/follow_us.png`],
    },
  },
};

export default LandingData;
