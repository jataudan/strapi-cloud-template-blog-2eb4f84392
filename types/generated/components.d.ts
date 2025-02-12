import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCards extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsClient extends Struct.ComponentSchema {
  collectionName: 'components_elements_clients';
  info: {
    displayName: 'client';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    name: Schema.Attribute.String;
  };
}

export interface ElementsDetail extends Struct.ComponentSchema {
  collectionName: 'components_elements_details';
  info: {
    description: '';
    displayName: 'Detail';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    percentage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsEmailLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_email_links';
  info: {
    displayName: 'emailLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsExpertTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_expert_team_cards';
  info: {
    displayName: 'Expert Team Card';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'elements.email-link', true>;
  };
}

export interface ElementsExpertTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_elements_expert_testimonials';
  info: {
    description: '';
    displayName: 'Expert Testimonials';
  };
  attributes: {
    client: Schema.Attribute.Component<'elements.client', false>;
    clientImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    count: Schema.Attribute.String;
    p: Schema.Attribute.Text;
    quotes: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsImageSlider extends Struct.ComponentSchema {
  collectionName: 'components_elements_image_sliders';
  info: {
    displayName: 'Image Slider';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    outer: Schema.Attribute.Component<'elements.email-link', false>;
    p: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    description: '';
    displayName: 'logoLink';
  };
  attributes: {};
}

export interface ElementsParent extends Struct.ComponentSchema {
  collectionName: 'components_elements_parents';
  info: {
    displayName: 'parent';
  };
  attributes: {
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    started: Schema.Attribute.Component<'elements.email-link', false>;
    subTitle: Schema.Attribute.String;
  };
}

export interface ElementsPhoneLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_phone_links';
  info: {
    displayName: 'phoneLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    clientImages: Schema.Attribute.Media<'images', true>;
    count: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface LandingPageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_about_uses';
  info: {
    description: '';
    displayName: 'about-us';
  };
  attributes: {
    aboutButton: Schema.Attribute.Component<'elements.email-link', false>;
    campaigns: Schema.Attribute.String;
    campaignsText: Schema.Attribute.String;
    h2: Schema.Attribute.String;
    leftImage: Schema.Attribute.Media<'images', true>;
    p: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    traffic: Schema.Attribute.String;
    trafficText: Schema.Attribute.String;
  };
}

export interface LandingPageCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_case_studies';
  info: {
    displayName: 'Case Studies';
  };
  attributes: {
    h3: Schema.Attribute.String;
    slider: Schema.Attribute.Component<'elements.image-slider', true>;
    subTitle: Schema.Attribute.String;
  };
}

export interface LandingPageDigitalAgency extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_digital_agencies';
  info: {
    displayName: 'Digital Agency';
  };
  attributes: {
    detail: Schema.Attribute.Component<'elements.detail', true>;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    p: Schema.Attribute.Text;
    started: Schema.Attribute.Component<'elements.email-link', false>;
    subTitle: Schema.Attribute.String;
  };
}

export interface LandingPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    displayName: 'hero-section';
  };
  attributes: {
    h1: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    p: Schema.Attribute.Text;
    socialLinks: Schema.Attribute.Component<'elements.email-link', false>;
  };
}

export interface LandingPageOurExpertTeam extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_our_expert_teams';
  info: {
    description: '';
    displayName: 'Our Expert Team';
  };
  attributes: {
    expert: Schema.Attribute.Component<'elements.expert-team-card', true>;
    h2: Schema.Attribute.String;
    subTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<
      'elements.expert-testimonials',
      true
    >;
  };
}

export interface LandingPageServices extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_services';
  info: {
    description: '';
    displayName: 'Services';
  };
  attributes: {
    Cards: Schema.Attribute.Component<'elements.cards', true>;
    testimonials: Schema.Attribute.Component<'elements.testimonials', false>;
  };
}

export interface LandingPageSpecialOffer extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_special_offers';
  info: {
    displayName: 'Special Offer';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    parent: Schema.Attribute.Component<'elements.parent', false>;
  };
}

export interface LayoutCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'cta';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutNavItems extends Struct.ComponentSchema {
  collectionName: 'components_layout_nav_items';
  info: {
    displayName: 'navItems';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface LayoutTopnav extends Struct.ComponentSchema {
  collectionName: 'components_layout_topnavs';
  info: {
    description: '';
    displayName: 'topnav';
  };
  attributes: {
    emailLink: Schema.Attribute.Component<'elements.email-link', false>;
    phoneLink: Schema.Attribute.Component<'elements.phone-link', false>;
    socialLinks: Schema.Attribute.Component<'elements.phone-link', true>;
  };
}

export interface MainLayoutMainTopNav extends Struct.ComponentSchema {
  collectionName: 'components_main_layout_main_top_navs';
  info: {
    displayName: 'mainTopNav';
  };
  attributes: {
    cta: Schema.Attribute.Component<'layout.cta', false>;
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
    navItems: Schema.Attribute.Component<'layout.nav-items', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.cards': ElementsCards;
      'elements.client': ElementsClient;
      'elements.detail': ElementsDetail;
      'elements.email-link': ElementsEmailLink;
      'elements.expert-team-card': ElementsExpertTeamCard;
      'elements.expert-testimonials': ElementsExpertTestimonials;
      'elements.image-slider': ElementsImageSlider;
      'elements.logo-link': ElementsLogoLink;
      'elements.parent': ElementsParent;
      'elements.phone-link': ElementsPhoneLink;
      'elements.testimonials': ElementsTestimonials;
      'landing-page.about-us': LandingPageAboutUs;
      'landing-page.case-studies': LandingPageCaseStudies;
      'landing-page.digital-agency': LandingPageDigitalAgency;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.our-expert-team': LandingPageOurExpertTeam;
      'landing-page.services': LandingPageServices;
      'landing-page.special-offer': LandingPageSpecialOffer;
      'layout.cta': LayoutCta;
      'layout.nav-items': LayoutNavItems;
      'layout.topnav': LayoutTopnav;
      'main-layout.main-top-nav': MainLayoutMainTopNav;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
