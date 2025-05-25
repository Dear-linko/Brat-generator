import { getTranslations } from 'next-intl/server';

const safeTranslation = (translator, key, fallback) => {
  try {
    return translator(key) || fallback;
  } catch (error) {
    console.error(`Translation error for key "${key}":`, error);
    return fallback;
  }
};

export const getMetadataLanguageText = async () => {
  const tMetadata = await getTranslations("Metadata");
  return {
    title: safeTranslation(tMetadata, "title", "Pokémon Randomizer"),
    description: safeTranslation(tMetadata, "description", "Generate random Pokémon")
  };
};

export const getNavbarLanguageText = async () => {
  const tNavbar = await getTranslations("Navbar");
  return {
    Item1: safeTranslation(tNavbar, "Item1", "How to use"),
    Item2: safeTranslation(tNavbar, "Item2", "Why choose us"),
    Item3: safeTranslation(tNavbar, "Item3", "Use Cases"),
    Item4: safeTranslation(tNavbar, "Item4", "FAQ")
  };
};

export const getFooterLanguageText = async () => {
  const tFooter = await getTranslations("Footer");
  return {
    copyright: safeTranslation(tFooter, "copyright", "© 2024 Brat Generator. All rights reserved."),
    privacy_policy: safeTranslation(tFooter, "privacy_policy", "Privacy Policy"),
    terms_of_service: safeTranslation(tFooter, "terms_of_service", "Terms of Service")
  };
};

export const getLanguagesSwitchModalText = async () => {
  const tModal = await getTranslations("LanguagesSwitchModal");
  return {
    p1: safeTranslation(tModal, "p1", "We've detected that your browser language is"),
    p2: safeTranslation(tModal, "p2", ". Would you like to switch to this language?"),
    cancel: safeTranslation(tModal, "cancel", "Cancel"),
    confirm: safeTranslation(tModal, "confirm", "Confirm")
  };
};

export const getCTALanguageText = async () => {
  const tCTA = await getTranslations("CTA");
  return {
    title: safeTranslation(tCTA, "title", "Try Brat Generator Now!"),
    description: safeTranslation(tCTA, "description", "Experience the easiest way to create custom text images. No sign-up required - start designing instantly!"),
    buttonText: safeTranslation(tCTA, "buttonText", "Get started")
  };
};

export const getCaseLanguageText = async () => {
  const tCase = await getTranslations("Case");
  return {
    title: safeTranslation(tCase, "title", "Yes or No Wheel Use Cases"),
    description: safeTranslation(tCase, "description", "Our Yes or No Wheel isn't just for simple decisions. Here's how users apply it in various scenarios:"),
  };
};

export const getHowToUseLanguageText = async () => {
  const tHowToUse = await getTranslations("HowToUse");
  return {
    title: safeTranslation(tHowToUse, "title", "How to Use Our Yes or No Wheel"),
    description: safeTranslation(tHowToUse, "description", "Our Yes or No Wheel is designed to be intuitive and easy to use. Follow these simple steps to start making decisions with ease:"),
    step_title1: safeTranslation(tHowToUse, "step_title1", "Enter Your Text"),
    step_description1: safeTranslation(tHowToUse, "step_description1", "Type the desired text in the input field."),
    step_title2: safeTranslation(tHowToUse, "step_title2", "Customize Colors"),
    step_description2: safeTranslation(tHowToUse, "step_description2", "Choose your preferred text and background colors using the color pickers."),
    step_title3: safeTranslation(tHowToUse, "step_title3", "Adjust Dimensions"),
    step_description3: safeTranslation(tHowToUse, "step_description3", "Set the width and height of your image using the sliders or input fields."),
    step_title4: safeTranslation(tHowToUse, "step_title4", "Fine-tune Appearance"),
    step_description4: safeTranslation(tHowToUse, "step_description4", "Modify the border radius and font size to perfect your design."),
    step_title5: safeTranslation(tHowToUse, "step_title5", "Preview Your Creation"),
    step_description5: safeTranslation(tHowToUse, "step_description5", "See your changes instantly in the preview pane on the right."),
    step_title6: safeTranslation(tHowToUse, "step_title6", "Download Your Image"),
    step_description6: safeTranslation(tHowToUse, "step_description6", "Once satisfied, click the \"Download Image\" button to save your creation."),
    step_title7: safeTranslation(tHowToUse, "step_title7", "Reset if Needed"),
    step_description7: safeTranslation(tHowToUse, "step_description7", "Use the \"Reset\" button to start over with default settings."),
  };
};

export const getFAQsLanguageText = async () => {
  const tFAQs = await getTranslations("FAQs");
  return {
    title: safeTranslation(tFAQs, "title", "Frequently Asked Questions about Our Brat Generator"),
    description: safeTranslation(tFAQs, "description", "Here are some common questions about our Brat Generator:"),
    question1: safeTranslation(tFAQs, "question1", "What file format are the generated images in?"),
    answer1: safeTranslation(tFAQs, "answer1", "The Brat Generator creates images in PNG format, which offers high quality and transparency support, suitable for various uses including web and print."),
    question2: safeTranslation(tFAQs, "question2", "Is there a limit to how many images I can create?"),
    answer2: safeTranslation(tFAQs, "answer2", "No, there's no limit. You can create as many images as you want, completely free of charge."),
    question3: safeTranslation(tFAQs, "question3", "Can I use the images I create for commercial purposes?"),
    answer3: safeTranslation(tFAQs, "answer3", "Yes, the images you create with Brat Generator are yours to use for any purpose, including commercial use."),
    question4: safeTranslation(tFAQs, "question4", "Do I need to create an account to use Brat Generator?"),
    answer4: safeTranslation(tFAQs, "answer4", "No, you don't need to create an account. You can start using Brat Generator immediately without any sign-up process."),
    question5: safeTranslation(tFAQs, "question5", "What's the maximum image size I can create?"),
    answer5: safeTranslation(tFAQs, "answer5", "The maximum image size is 1000x1000 pixels. This should be sufficient for most use cases, including social media posts and website graphics."),
    question6: safeTranslation(tFAQs, "question6", "Can I use custom fonts in my text images?"),
    answer6: safeTranslation(tFAQs, "answer6", "Currently, Brat Generator uses a default font. We're working on adding custom font support in future updates."),
  };
};

export const getBannerLanguageText = async () => {
  const tBanner = await getTranslations("Banner");
  return {
    title: safeTranslation(tBanner, "title", "Make Decisions Instantly with Our Yes or No Wheel"),
    description: safeTranslation(tBanner, "description", "Struggling with choices? Our interactive Yes or No Wheel helps you make quick, unbiased decisions. Perfect for personal dilemmas, career challenges, or just for fun! Our tool combines randomness with customization to provide a unique decision-making experience."),
  };
};


export const getWhyChooseUsLanguageText = async () => {
  const tWhyChooseUs = await getTranslations("WhyChooseUs");
  return {
    title: safeTranslation(tWhyChooseUs, "title", "Why Choose Our Brat Generator?"),
    description: safeTranslation(tWhyChooseUs, "description", "Our Brat Generator offers a range of features that make it easy and fun to create custom images resembling the album cover of Brat by Charli XCX."),
    feature_name1: safeTranslation(tWhyChooseUs, "feature_name1", "Easy to Use"),
    feature_description1: safeTranslation(tWhyChooseUs, "feature_description1", "Our intuitive interface makes creating custom text images a breeze, even for beginners. You can start designing immediately without any learning curve."),
    feature_name2: safeTranslation(tWhyChooseUs, "feature_name2", "Highly Customizable"),
    feature_description2: safeTranslation(tWhyChooseUs, "feature_description2", "Adjust text, colors, size, and more to create the perfect image for your needs. With a wide range of customization options, you can bring your vision to life exactly as you imagine it."),
    feature_name3: safeTranslation(tWhyChooseUs, "feature_name3", "Instant Preview"),
    feature_description3: safeTranslation(tWhyChooseUs, "feature_description3", "See your changes in real-time, allowing for quick and easy adjustments. This feature helps you fine-tune your design efficiently without the need for multiple exports."),
    feature_name4: safeTranslation(tWhyChooseUs, "feature_name4", "Download in Seconds"),
    feature_description4: safeTranslation(tWhyChooseUs, "feature_description4", "Generate and download your custom image with just one click. Our fast processing ensures you can get your created image immediately, saving you valuable time."),
    feature_name5: safeTranslation(tWhyChooseUs, "feature_name5", "No Account Required"),
    feature_description5: safeTranslation(tWhyChooseUs, "feature_description5", "Start creating immediately without the need for sign-ups or logins. This hassle-free approach allows you to jump right into the creative process without any barriers."),
    feature_name6: safeTranslation(tWhyChooseUs, "feature_name6", "Free to Use"),
    feature_description6: safeTranslation(tWhyChooseUs, "feature_description6", "Create as many images as you want, completely free of charge. Our tool is accessible to everyone, allowing unlimited creativity without financial constraints."),
  };
};
export const getBratGeneratorLanguageText = async () => {
  const tBratGenerator = await getTranslations("BratGenerator");
  return {
    enter_text: safeTranslation(tBratGenerator, "enter_text", "Enter Text"),
    text_color: safeTranslation(tBratGenerator, "text_color", "Text Color"),
    background_color: safeTranslation(tBratGenerator, "background_color", "Background Color"),
    width: safeTranslation(tBratGenerator, "width", "Width"),
    height: safeTranslation(tBratGenerator, "height", "Height"),
    border_radius: safeTranslation(tBratGenerator, "border_radius", "Border Radius"),
    font_size: safeTranslation(tBratGenerator, "font_size", "Font Size"),
    reset: safeTranslation(tBratGenerator, "reset", "Reset"),
    download_image: safeTranslation(tBratGenerator, "download_image", "Download"),
    default_text: safeTranslation(tBratGenerator, "default_text", "brat"),
    blur_effect:safeTranslation(tBratGenerator,"blur_effect","Blur Effect")
  };
};

export const getPrivacyPolicyLanguageText = async () => {
  const tPrivacyPolicy = await getTranslations("PrivacyPolicy");
  return {
    title: safeTranslation(tPrivacyPolicy, "title", "Privacy Policy - Brat Generator"),
    description: safeTranslation(tPrivacyPolicy, "description", "Privacy Policy for Brat Generator - Learn how we protect your privacy while using our image generation tool."),
    content: safeTranslation(tPrivacyPolicy, "content", ""),
  };
};

export const getTermsOfServiceLanguageText = async () => {
  const tTermsOfService = await getTranslations("TermsOfService");
  return {
    title: safeTranslation(tTermsOfService, "title", "Terms of Service - Brat Generator"),
    description: safeTranslation(tTermsOfService, "description", "Terms of Service for Brat Generator - Read our terms and conditions for using our image generation tool."),
    content: safeTranslation(tTermsOfService, "content", ""),
  };
};