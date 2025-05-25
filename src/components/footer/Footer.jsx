export default function Footer({FooterLanguageText,lng}) {
    const lngPath = lng === "en" ? "" : `/${lng}`;  
    const privacyPolicyLink = `${lngPath}/privacy-policy`;
    const termsOfServiceLink = `${lngPath}/terms-of-service`;
    return (<footer className="bg-white dark:bg-gray-900 ">
            <div className="mx-auto max-w-7xl overflow-hidden p-6 sm:py-4 lg:px-8">
                <div className="flex justify-center space-x-4">
                    <a href={privacyPolicyLink} className="text-gray-500 text-sm">
                        {FooterLanguageText.privacy_policy}
                    </a>
                    <a href={termsOfServiceLink} className="text-gray-500 text-sm">
                        {FooterLanguageText.terms_of_service}
                    </a>
                </div>
                <p className="text-center text-xs leading-5 text-gray-500">
                    {FooterLanguageText.copyright}
                </p>
            </div>
        </footer>)
}
