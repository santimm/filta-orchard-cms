import type { Schema, Struct } from '@strapi/strapi';

export interface HomeArticlesCards extends Struct.ComponentSchema {
  collectionName: 'components_home_articles_cards';
  info: {
    displayName: 'articles cards';
    icon: 'dashboard';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeCards extends Struct.ComponentSchema {
  collectionName: 'components_home_cards';
  info: {
    displayName: 'cards';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link_text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeIntroGallery extends Struct.ComponentSchema {
  collectionName: 'components_home_intro_galleries';
  info: {
    displayName: 'intro gallery';
    icon: 'dashboard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    gallery: Schema.Attribute.Media<'images' | 'files', true>;
    highlight: Schema.Attribute.String;
    highlight_description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.articles-cards': HomeArticlesCards;
      'home.cards': HomeCards;
      'home.intro-gallery': HomeIntroGallery;
    }
  }
}
