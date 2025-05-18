import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Providers } from "@/app/[lng]/providers";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PlausibleAnalyticsScript from "@/components/PlausibleAnalyticsScript";
import GoogleAdsenseScript from "@/components/GoogleAdsenseScript";
import config from "@/libs/config";
import {
  getNavbarLanguageText,getLanguagesSwitchModalText,getFooterLanguageText
} from "@/configs/languageText";
import ClarityAnalytics from "@/components/ClarityAnalytics";

export const metadata = {
  metadataBase: new URL(process.env.WEB_URL || "https://example.com"),
  title: {
    template: `%s | ${config.appName}`,
    default: config.appName,
  },
};

export default async function RootLayout({ children, params: { lng = "en" } }) {
  const NavbarLanguageText = await getNavbarLanguageText()
  const FooterLanguageText = await getFooterLanguageText()
  const LanguagesSwitchModalText = await getLanguagesSwitchModalText()
  return (
    <html lang={lng}>
      <body className="min-h-screen flex flex-col dark:bg-gray-900">
        <Providers>
          <Navbar lng={lng} NavbarLanguageText = {NavbarLanguageText} LanguagesSwitchModalText = {LanguagesSwitchModalText}/>
          <main className="flex-grow">{children}</main>
          <Footer FooterLanguageText = {FooterLanguageText}/>
          <ClarityAnalytics/>
          <PlausibleAnalyticsScript />
          <GoogleAnalytics />
          <GoogleAdsenseScript />
        </Providers>
      </body>
    </html>
  );
}