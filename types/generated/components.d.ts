import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_about_us_about_uses';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    color: Schema.Attribute.String;
    image1920x1080: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_about_us_benefits';
  info: {
    displayName: 'benefits';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface AboutUsChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_about_us_choose_uses';
  info: {
    description: '';
    displayName: 'Choose Us';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    benefits: Schema.Attribute.Component<'about-us.benefits', true>;
    color: Schema.Attribute.String;
    contactInfo: Schema.Attribute.Component<'about-us.contact-info', false>;
    heading: Schema.Attribute.String;
    mainImage: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_about_us_contact_infos';
  info: {
    description: '';
    displayName: 'Contact Info';
  };
  attributes: {
    designation: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsDigitalExpert extends Struct.ComponentSchema {
  collectionName: 'components_about_us_digital_experts';
  info: {
    description: '';
    displayName: 'Digital Expert';
  };
  attributes: {
    h2: Schema.Attribute.String;
    subTag: Schema.Attribute.String;
    teamMembers: Schema.Attribute.Component<'elements.expert-team-card', true>;
    viewAllMembers: Schema.Attribute.Component<'elements.email-link', false>;
  };
}

export interface AboutUsSection extends Struct.ComponentSchema {
  collectionName: 'components_about_us_sections';
  info: {
    description: '';
    displayName: 'Milestones';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_about_us_testimonials';
  info: {
    description: '';
    displayName: 'testimonials';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    boldHeading: Schema.Attribute.String;
    card: Schema.Attribute.Component<'about-us.testimonials-card', true>;
    heading: Schema.Attribute.String;
    highlighted: Schema.Attribute.String;
    sideImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutUsTestimonialsCard extends Struct.ComponentSchema {
  collectionName: 'components_about_us_testimonials_cards';
  info: {
    description: '';
    displayName: 'Testimonials Card';
  };
  attributes: {
    clientImage: Schema.Attribute.Media<'images'>;
    comments: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    quoteImage: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String;
  };
}

export interface AboutUsWorkingProcess extends Struct.ComponentSchema {
  collectionName: 'components_about_us_working_processes';
  info: {
    description: '';
    displayName: 'Working Process';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    color: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    milestones: Schema.Attribute.Component<'about-us.section', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlogDetailsBlogDetails extends Struct.ComponentSchema {
  collectionName: 'components_blog_details_blog_details';
  info: {
    description: '';
    displayName: 'Blog Details';
  };
  attributes: {
    commentSection: Schema.Attribute.Component<
      'blog-details.comment-section',
      true
    >;
    hero: Schema.Attribute.Component<'about-us.about-us', false>;
    post: Schema.Attribute.Component<'blog-standard.post', false>;
  };
}

export interface BlogDetailsButton extends Struct.ComponentSchema {
  collectionName: 'components_blog_details_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    x: Schema.Attribute.String;
  };
}

export interface BlogDetailsCommentSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_details_comment_sections';
  info: {
    displayName: 'Comment Section';
  };
  attributes: {
    dateTime: Schema.Attribute.DateTime;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    p: Schema.Attribute.Text;
  };
}

export interface BlogGridBlogGrid extends Struct.ComponentSchema {
  collectionName: 'components_blog_grid_blog_grids';
  info: {
    description: '';
    displayName: 'Blog Grid';
  };
  attributes: {
    Card: Schema.Attribute.Component<'blog-grid.card', true>;
    hero: Schema.Attribute.Component<'about-us.about-us', false>;
    pagination: Schema.Attribute.Component<'blog-grid.pagination', false>;
  };
}

export interface BlogGridCard extends Struct.ComponentSchema {
  collectionName: 'components_blog_grid_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    businessType: Schema.Attribute.String;
    cardBottom: Schema.Attribute.Component<'blog-grid.card-bottom', false>;
    date: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlogGridCardBottom extends Struct.ComponentSchema {
  collectionName: 'components_blog_grid_card_bottoms';
  info: {
    description: '';
    displayName: 'Card Bottom';
  };
  attributes: {
    clientImage: Schema.Attribute.Media<'images'>;
    designation: Schema.Attribute.String;
    href: Schema.Attribute.String;
    iconColor: Schema.Attribute.String;
    linkIcon: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface BlogGridPagination extends Struct.ComponentSchema {
  collectionName: 'components_blog_grid_paginations';
  info: {
    displayName: 'Pagination';
  };
  attributes: {
    arrowIcon: Schema.Attribute.Media<'images'>;
    highlighted: Schema.Attribute.Boolean;
    numbers: Schema.Attribute.Integer;
  };
}

export interface BlogStandardAuthor extends Struct.ComponentSchema {
  collectionName: 'components_blog_standard_authors';
  info: {
    displayName: 'author';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface BlogStandardButton extends Struct.ComponentSchema {
  collectionName: 'components_blog_standard_buttons';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    color: Schema.Attribute.String;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface BlogStandardPost extends Struct.ComponentSchema {
  collectionName: 'components_blog_standard_posts';
  info: {
    description: '';
    displayName: 'post';
  };
  attributes: {
    author: Schema.Attribute.Component<'blog-standard.author', false>;
    button: Schema.Attribute.Component<'blog-standard.button', false>;
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images', true>;
    p: Schema.Attribute.Text;
    thumbnail: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlogAuthor extends Struct.ComponentSchema {
  collectionName: 'components_blog_authors';
  info: {
    description: '';
    displayName: 'Author';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images'>;
    designation: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface BlogCategories extends Struct.ComponentSchema {
  collectionName: 'components_blog_categories';
  info: {
    description: '';
    displayName: 'categories';
  };
  attributes: {
    count: Schema.Attribute.Integer;
    name: Schema.Attribute.Enumeration<['Digital', 'SEO', 'Marketing']>;
  };
}

export interface BlogComments extends Struct.ComponentSchema {
  collectionName: 'components_blog_comments';
  info: {
    displayName: 'comments';
  };
  attributes: {
    dateTime: Schema.Attribute.DateTime;
    email: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    message: Schema.Attribute.RichText;
    name: Schema.Attribute.String;
  };
}

export interface BlogTags extends Struct.ComponentSchema {
  collectionName: 'components_blog_tags';
  info: {
    description: '';
    displayName: 'tags';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<
      [
        'Marketing',
        'Agency',
        'Influencer',
        'Advertising',
        'Development',
        'Branding',
      ]
    >;
  };
}

export interface ContactInfoContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_contact_infos';
  info: {
    description: '';
    displayName: 'Contact Info';
  };
  attributes: {
    email: Schema.Attribute.Email;
    location: Schema.Attribute.Text;
    phoneNumber: Schema.Attribute.String;
  };
}

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
    description: '';
    displayName: 'client';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image70x70: Schema.Attribute.Media<'images'>;
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
    image60x60: Schema.Attribute.Media<'images'>;
    percentage: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsEmailLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_email_links';
  info: {
    description: '';
    displayName: 'emailLink';
  };
  attributes: {
    height: Schema.Attribute.String;
    href: Schema.Attribute.String;
    image17x17: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    width: Schema.Attribute.String;
  };
}

export interface ElementsExpertTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_expert_team_cards';
  info: {
    description: '';
    displayName: 'Expert Team Card';
  };
  attributes: {
    description: Schema.Attribute.RichText;
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
    paragraph: Schema.Attribute.Text;
    quoteImage40x40: Schema.Attribute.Media<'images'>;
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

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['LINK', 'PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    description: '';
    displayName: 'logoLink';
  };
  attributes: {
    logo187x38: Schema.Attribute.Media<'images', true>;
  };
}

export interface ElementsParent extends Struct.ComponentSchema {
  collectionName: 'components_elements_parents';
  info: {
    description: '';
    displayName: 'parent';
  };
  attributes: {
    highlighted: Schema.Attribute.String;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ElementsPhoneLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_phone_links';
  info: {
    description: '';
    displayName: 'phoneLink';
  };
  attributes: {
    href: Schema.Attribute.String;
    image18x18: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    clientImages50x50: Schema.Attribute.Media<'images', true>;
    count: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface GenerationWealthContact extends Struct.ComponentSchema {
  collectionName: 'components_generation_wealth_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    phoneNumbers: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GenerationWealthGenerationWealth
  extends Struct.ComponentSchema {
  collectionName: 'components_generation_wealth_generation_wealths';
  info: {
    description: '';
    displayName: 'Generation Wealth';
  };
  attributes: {
    contact: Schema.Attribute.Component<'generation-wealth.contact', false>;
    hero: Schema.Attribute.Component<'about-us.about-us', false>;
    mainImage: Schema.Attribute.Media<'images'>;
    mainSection: Schema.Attribute.Component<
      'generation-wealth.main-section',
      false
    >;
    navigatePages: Schema.Attribute.Component<
      'generation-wealth.navigation',
      true
    >;
    sideSection: Schema.Attribute.Component<
      'generation-wealth.side-section',
      false
    >;
  };
}

export interface GenerationWealthMainSection extends Struct.ComponentSchema {
  collectionName: 'components_generation_wealth_main_sections';
  info: {
    displayName: 'Main Section';
  };
  attributes: {
    h2: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images', true>;
    p: Schema.Attribute.Text;
  };
}

export interface GenerationWealthNavigation extends Struct.ComponentSchema {
  collectionName: 'components_generation_wealth_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
  };
}

export interface GenerationWealthSideSection extends Struct.ComponentSchema {
  collectionName: 'components_generation_wealth_side_sections';
  info: {
    displayName: 'Side Section';
  };
  attributes: {
    color: Schema.Attribute.String;
    description: Schema.Attribute.String;
    mainHeading: Schema.Attribute.String;
    socialIcons: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface KeywordButton extends Struct.ComponentSchema {
  collectionName: 'components_keyword_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    style: Schema.Attribute.String;
    text: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Book Appointment Now'>;
  };
}

export interface KeywordContact extends Struct.ComponentSchema {
  collectionName: 'components_keyword_contacts';
  info: {
    description: '';
    displayName: 'contact';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    phoneNumbers: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface KeywordKeywordResearch extends Struct.ComponentSchema {
  collectionName: 'components_keyword_keyword_researches';
  info: {
    description: '';
    displayName: 'Keyword Research';
  };
  attributes: {
    hero: Schema.Attribute.Component<'about-us.about-us', false>;
    mainSection: Schema.Attribute.Component<'keyword.main-section', true>;
    mainSectionImage: Schema.Attribute.Media<'images'>;
  };
}

export interface KeywordMainSection extends Struct.ComponentSchema {
  collectionName: 'components_keyword_main_sections';
  info: {
    description: '';
    displayName: 'MainSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'keyword.button', false>;
    contact: Schema.Attribute.Component<'keyword.contact', false>;
    h2: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images'>;
    openingHours: Schema.Attribute.Component<'keyword.opening-hours', false>;
    p: Schema.Attribute.Text;
    serviceTypes: Schema.Attribute.Component<'keyword.service-types', true>;
  };
}

export interface KeywordOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_keyword_opening_hours';
  info: {
    displayName: 'Opening Hours';
  };
  attributes: {
    days: Schema.Attribute.String;
    hours: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface KeywordServiceTypes extends Struct.ComponentSchema {
  collectionName: 'components_keyword_service_types';
  info: {
    displayName: 'Service Types';
  };
  attributes: {
    highlighted: Schema.Attribute.Boolean;
    href: Schema.Attribute.String;
    serviceName: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_about_uses';
  info: {
    description: '';
    displayName: 'about-us';
  };
  attributes: {
    campaigns: Schema.Attribute.String;
    campaignsText: Schema.Attribute.String;
    leftImage553x534: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text;
    prefix: Schema.Attribute.String;
    primaryHighlighted: Schema.Attribute.String;
    secondaryHighlighted: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    title: Schema.Attribute.String;
    traffic: Schema.Attribute.String;
    trafficText: Schema.Attribute.String;
  };
}

export interface LandingPageBlog extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    tags: Schema.Attribute.Text;
    thumbnailImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageCaseStudies extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_case_studies';
  info: {
    description: '';
    displayName: 'Case Studies';
  };
  attributes: {
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageDigitalAgency extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_digital_agencies';
  info: {
    description: '';
    displayName: 'Digital Agency';
  };
  attributes: {
    detail: Schema.Attribute.Component<'elements.detail', true>;
    highlighted: Schema.Attribute.String;
    image553x534: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LandingPageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_hero_sections';
  info: {
    description: '';
    displayName: 'hero-section';
  };
  attributes: {
    image1920x1000: Schema.Attribute.Media<'images'>;
    paragraph: Schema.Attribute.Text;
    primaryHeading: Schema.Attribute.String;
    secondaryHeading: Schema.Attribute.String;
    socialLinks: Schema.Attribute.Component<'elements.email-link', true>;
  };
}

export interface LandingPageOurExpertTeam extends Struct.ComponentSchema {
  collectionName: 'components_landing_page_our_expert_teams';
  info: {
    description: '';
    displayName: 'Our Expert Team';
  };
  attributes: {
    clientImages80x80: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    count: Schema.Attribute.String;
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

export interface MainLayoutColorScheme extends Struct.ComponentSchema {
  collectionName: 'components_main_layout_color_schemes';
  info: {
    description: '';
    displayName: 'Color Scheme';
  };
  attributes: {
    colorList: Schema.Attribute.Component<'main-layout.colors', true>;
    variantName: Schema.Attribute.String;
  };
}

export interface MainLayoutColors extends Struct.ComponentSchema {
  collectionName: 'components_main_layout_colors';
  info: {
    displayName: 'Colors';
  };
  attributes: {
    color: Schema.Attribute.String;
    colorName: Schema.Attribute.String;
  };
}

export interface MainLayoutFontFamily extends Struct.ComponentSchema {
  collectionName: 'components_main_layout_font_families';
  info: {
    displayName: 'Font Family';
  };
  attributes: {
    fontFamily: Schema.Attribute.String;
    fontSubType: Schema.Attribute.String;
    fontType: Schema.Attribute.String;
  };
}

export interface MainLayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_main_layout_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images', true>;
    color: Schema.Attribute.String;
    description: Schema.Attribute.String;
    footerBottomLeftText: Schema.Attribute.String;
    logo160x24: Schema.Attribute.Media<'images', true>;
    logoText: Schema.Attribute.String;
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

export interface PortfolioPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_portfolios';
  info: {
    displayName: 'Portfolio';
  };
  attributes: {
    hero: Schema.Attribute.Component<'about-us.about-us', false>;
    projects: Schema.Attribute.Component<'portfolio.projects', true>;
  };
}

export interface PortfolioProjectInformation extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_project_informations';
  info: {
    description: '';
    displayName: 'project information';
  };
  attributes: {
    budget: Schema.Attribute.Decimal;
    category: Schema.Attribute.Enumeration<
      [
        'Building Constractions',
        'Social Media Marketing',
        'Email Marketing',
        'Electrotherapy',
        'Affiliate Marketing',
      ]
    >;
    clientName: Schema.Attribute.String;
    endDate: Schema.Attribute.Date;
    startDate: Schema.Attribute.Date;
    title: Schema.Attribute.String;
  };
}

export interface PortfolioProjects extends Struct.ComponentSchema {
  collectionName: 'components_portfolio_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    color: Schema.Attribute.String;
    field: Schema.Attribute.String;
    href: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ServicesClosedDays extends Struct.ComponentSchema {
  collectionName: 'components_services_closed_days';
  info: {
    displayName: 'Closed Days';
  };
  attributes: {
    day: Schema.Attribute.Enumeration<
      [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]
    >;
  };
}

export interface ServicesContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_services_contact_details';
  info: {
    description: '';
    displayName: 'Contact Details';
  };
  attributes: {
    icon70x70: Schema.Attribute.Media<'images'>;
    phoneNumbers: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ServicesOpeningHours extends Struct.ComponentSchema {
  collectionName: 'components_services_opening_hours';
  info: {
    description: '';
    displayName: 'Opening Hours';
  };
  attributes: {
    closeDay: Schema.Attribute.String;
    endDay: Schema.Attribute.String;
    endTime: Schema.Attribute.Time;
    startDay: Schema.Attribute.String;
    startTime: Schema.Attribute.Time;
  };
}

export interface ServicesQuestions extends Struct.ComponentSchema {
  collectionName: 'components_services_questions';
  info: {
    description: '';
    displayName: 'questions';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ServicesServiceList extends Struct.ComponentSchema {
  collectionName: 'components_services_service_lists';
  info: {
    displayName: 'service list';
  };
  attributes: {
    title: Schema.Attribute.Enumeration<
      [
        'SEO Link Building Optimization',
        'Web Development',
        'Digital Strategy',
        'Brand Design Identity',
        'Email Marketing',
        'Video Production',
      ]
    >;
  };
}

export interface ServicesTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_services_testimonials';
  info: {
    displayName: 'testimonials';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    clientImage: Schema.Attribute.Media<'images'>;
    designation: Schema.Attribute.String;
    h2: Schema.Attribute.String;
    name: Schema.Attribute.String;
    p: Schema.Attribute.String;
    sideImage: Schema.Attribute.Media<'images'>;
    starImage: Schema.Attribute.Media<'images'>;
    subTag: Schema.Attribute.String;
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

export interface TeamSkills extends Struct.ComponentSchema {
  collectionName: 'components_team_skills';
  info: {
    displayName: 'skills';
  };
  attributes: {
    name: Schema.Attribute.String;
    percentage: Schema.Attribute.Decimal;
  };
}

export interface TeamSocials extends Struct.ComponentSchema {
  collectionName: 'components_team_socials';
  info: {
    displayName: 'socials';
  };
  attributes: {
    height: Schema.Attribute.Decimal;
    hoverIcon: Schema.Attribute.Media<'images'>;
    icon: Schema.Attribute.Media<'images'>;
    isExternal: Schema.Attribute.Boolean;
    link: Schema.Attribute.String;
    width: Schema.Attribute.Decimal;
  };
}

export interface TeamTeam extends Struct.ComponentSchema {
  collectionName: 'components_team_teams';
  info: {
    description: '';
    displayName: 'Team';
  };
  attributes: {
    hero: Schema.Attribute.Component<'about-us.about-us', false>;
    teamCard: Schema.Attribute.Component<'team.team-card', true>;
    teamMemberDetail: Schema.Attribute.Component<
      'elements.expert-team-card',
      false
    >;
  };
}

export interface TeamTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_team_team_cards';
  info: {
    displayName: 'Team Card';
  };
  attributes: {
    designation: Schema.Attribute.String;
    href: Schema.Attribute.String;
    memberImage: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    socialIcons: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.about-us': AboutUsAboutUs;
      'about-us.benefits': AboutUsBenefits;
      'about-us.choose-us': AboutUsChooseUs;
      'about-us.contact-info': AboutUsContactInfo;
      'about-us.digital-expert': AboutUsDigitalExpert;
      'about-us.section': AboutUsSection;
      'about-us.testimonials': AboutUsTestimonials;
      'about-us.testimonials-card': AboutUsTestimonialsCard;
      'about-us.working-process': AboutUsWorkingProcess;
      'blog-details.blog-details': BlogDetailsBlogDetails;
      'blog-details.button': BlogDetailsButton;
      'blog-details.comment-section': BlogDetailsCommentSection;
      'blog-grid.blog-grid': BlogGridBlogGrid;
      'blog-grid.card': BlogGridCard;
      'blog-grid.card-bottom': BlogGridCardBottom;
      'blog-grid.pagination': BlogGridPagination;
      'blog-standard.author': BlogStandardAuthor;
      'blog-standard.button': BlogStandardButton;
      'blog-standard.post': BlogStandardPost;
      'blog.author': BlogAuthor;
      'blog.categories': BlogCategories;
      'blog.comments': BlogComments;
      'blog.tags': BlogTags;
      'contact-info.contact-info': ContactInfoContactInfo;
      'elements.cards': ElementsCards;
      'elements.client': ElementsClient;
      'elements.detail': ElementsDetail;
      'elements.email-link': ElementsEmailLink;
      'elements.expert-team-card': ElementsExpertTeamCard;
      'elements.expert-testimonials': ElementsExpertTestimonials;
      'elements.image-slider': ElementsImageSlider;
      'elements.link': ElementsLink;
      'elements.logo-link': ElementsLogoLink;
      'elements.parent': ElementsParent;
      'elements.phone-link': ElementsPhoneLink;
      'elements.testimonials': ElementsTestimonials;
      'generation-wealth.contact': GenerationWealthContact;
      'generation-wealth.generation-wealth': GenerationWealthGenerationWealth;
      'generation-wealth.main-section': GenerationWealthMainSection;
      'generation-wealth.navigation': GenerationWealthNavigation;
      'generation-wealth.side-section': GenerationWealthSideSection;
      'keyword.button': KeywordButton;
      'keyword.contact': KeywordContact;
      'keyword.keyword-research': KeywordKeywordResearch;
      'keyword.main-section': KeywordMainSection;
      'keyword.opening-hours': KeywordOpeningHours;
      'keyword.service-types': KeywordServiceTypes;
      'landing-page.about-us': LandingPageAboutUs;
      'landing-page.blog': LandingPageBlog;
      'landing-page.case-studies': LandingPageCaseStudies;
      'landing-page.digital-agency': LandingPageDigitalAgency;
      'landing-page.hero-section': LandingPageHeroSection;
      'landing-page.our-expert-team': LandingPageOurExpertTeam;
      'landing-page.services': LandingPageServices;
      'landing-page.special-offer': LandingPageSpecialOffer;
      'layout.cta': LayoutCta;
      'layout.nav-items': LayoutNavItems;
      'layout.topnav': LayoutTopnav;
      'main-layout.color-scheme': MainLayoutColorScheme;
      'main-layout.colors': MainLayoutColors;
      'main-layout.font-family': MainLayoutFontFamily;
      'main-layout.footer': MainLayoutFooter;
      'main-layout.main-top-nav': MainLayoutMainTopNav;
      'portfolio.portfolio': PortfolioPortfolio;
      'portfolio.project-information': PortfolioProjectInformation;
      'portfolio.projects': PortfolioProjects;
      'services.closed-days': ServicesClosedDays;
      'services.contact-details': ServicesContactDetails;
      'services.opening-hours': ServicesOpeningHours;
      'services.questions': ServicesQuestions;
      'services.service-list': ServicesServiceList;
      'services.testimonials': ServicesTestimonials;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'team.skills': TeamSkills;
      'team.socials': TeamSocials;
      'team.team': TeamTeam;
      'team.team-card': TeamTeamCard;
    }
  }
}
