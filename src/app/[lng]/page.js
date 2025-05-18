// import RouletteWheel from "@/components/function/RouletteWheel";
import Banner from "@/components/Banner";
import HowToUse from "@/components/HowToUse";
import {
  getMetadataLanguageText,getBannerLanguageText,getHowToUseLanguageText,getWhyChooseUsLanguageText,getCaseLanguageText,getCTALanguageText,getBratGeneratorLanguageText
} from "@/configs/languageText";
import { getFAQsLanguageText } from "@/configs/languageText";
import { unstable_setRequestLocale } from "next-intl/server";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQs from "@/components/FAQs";
import CTA from "@/components/CTA";
import Case from "@/components/Case";
import BratGenerator from "@/components/function/BratGenerator";
export async function generateMetadata({ params: { lng = "" } }) {
  unstable_setRequestLocale(lng);
  const MetadataLanguageText = await getMetadataLanguageText();
  const canonicalPath = lng === "en" ? "" : `/${lng}`;
  return {
    title: MetadataLanguageText.title,
    description: MetadataLanguageText.description,
    other: {
      "google-site-verification": "ca-pub-3313287752284032",
    },
    alternates: {
      canonical: `${process.env.WEB_URL}${canonicalPath}`,
      languages: {
        "x-default": "/",
        "en-US": "/",
        "zh-CN": "/zh",
        "zh-TW": "/tw",
        "ja-JP": "/ja",
        "de-DE": "/de",
        "vi-VN": "/vi",
        "nl-NL": "/nl",
        "uk-UA": "/uk",
        "pt-BR": "/pt",
      },
    },
  };
}

export default async function Home({ params: { lng = "" } }) {
  const BannerLanguageText = await getBannerLanguageText()
  const HowToUseLanguageText = await getHowToUseLanguageText()
  const WhyChooseUsLanguageText = await getWhyChooseUsLanguageText()
  // const CaseLanguageText = await getCaseLanguageText()
  const FAQsLanguageText = await getFAQsLanguageText()
  const CTALanguageText = await getCTALanguageText()
  const BratGeneratorLanguageText = await getBratGeneratorLanguageText()
  return (
    <main className="container mx-auto p-4">
      <Banner BannerLanguageText={BannerLanguageText}/>
      <BratGenerator BratGeneratorLanguageText={BratGeneratorLanguageText}/>
      {/* <RouletteWheel /> */}
      {/* <Feature/> */}
      <HowToUse HowToUseLanguageText={HowToUseLanguageText}/>
      <WhyChooseUs WhyChooseUsLanguageText={WhyChooseUsLanguageText}/>
      <FAQs FAQsLanguageText={FAQsLanguageText}/>
      {/* <Case CaseLanguageText={CaseLanguageText}/> */}
      <CTA CTALanguageText={CTALanguageText}/>
    </main>
  );
}
