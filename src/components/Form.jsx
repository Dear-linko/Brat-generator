"use client"
import React, {useState} from 'react';
import WordSection from "@/components/form/WordSection";
import AccountsSection from "@/components/form/AccountsSection";
import LanguageSection from "@/components/form/LanguageSection";
import FiltersSection from "@/components/form/FiltersSection";
import EngagementSection from "@/components/form/EngagementSection";
import DateSection from "@/components/form/DateSection";


export default function Form({FormLanguageText, lng}) {
    const WordSectionLanguageText = FormLanguageText.wordSection;
    const AccountsSectionLanguageText = FormLanguageText.accountsSection;
    const LanguageSectionLanguageText = FormLanguageText.languageSection;
    const FiltersSectionLanguageText = FormLanguageText.filtersSection;
    const EngagementSectionLanguageText = FormLanguageText.engagementSection;
    const DateSectionLanguageText = FormLanguageText.dateSection;
    const ButtonsSectionLanguageText = FormLanguageText.buttons;

    const [keywords, setKeywords] = useState('');
    const [phrase, setPhrase] = useState('');
    const [anyWords, setAnyWords] = useState('');
    const [noneWords, setNoneWords] = useState('');
    const [hashtags, setHashtags] = useState('');
    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [mentioningAccounts, setMentioningAccounts] = useState('');
    const [language, setLanguage] = useState('');
    const [filterReplies, setFilterReplies] = useState('');
    const [filterLinks, setFilterLinks] = useState('');
    const [minReplies, setMinReplies] = useState('');
    const [minLikes, setMinLikes] = useState('');
    const [minRetweets, setMinRetweets] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);



    const handleSubmit = (event) => {
        event.preventDefault();

        let query = '';

        if (keywords) {
            query += `${encodeURIComponent(keywords)} `;
        }
        if (phrase) {
            query += `"${encodeURIComponent(phrase)}" `;
        }
        if (anyWords) {
            query += `${anyWords.split(' ').map(word => encodeURIComponent(word)).join(' OR ')} `;
        }
        if (noneWords) {
            query += `${noneWords.split(' ').map(word => `-${encodeURIComponent(word)}`).join(' ')} `;
        }
        if (hashtags) {
            query += `${hashtags.split(' ').map(tag => `#${encodeURIComponent(tag)}`).join(' ')} `;
        }
        if (fromAccount) {
            query += `from:${encodeURIComponent(fromAccount)} `;
        }
        if (toAccount) {
            query += `to:${encodeURIComponent(toAccount)} `;
        }
        if (mentioningAccounts) {
            query += `${mentioningAccounts.split(' ').map(acc => `@${encodeURIComponent(acc)}`).join(' ')} `;
        }
        if (language) {
            query += `lang:${encodeURIComponent(language)} `;
        }
        if (filterReplies) {
            query += `${encodeURIComponent(filterReplies)} `;
        }
        if (filterLinks) {
            query += `${encodeURIComponent(filterLinks)} `;
        }
        if (minReplies) {
            query += `min_replies:${encodeURIComponent(minReplies)} `;
        }
        if (minLikes) {
            query += `min_faves:${encodeURIComponent(minLikes)} `;
        }
        if (minRetweets) {
            query += `min_retweets:${encodeURIComponent(minRetweets)} `;
        }
        if (startDate) {
            query += `since:${encodeURIComponent(startDate.toISOString().split('T')[0])} `;
        }
        if (endDate) {
            query += `until:${encodeURIComponent(endDate.toISOString().split('T')[0])} `;
        }

        const url = `https://twitter.com/search?q=${query.trim()}`;

        window.open(url, '_blank');
    };

    return (<div className="space-y-10 divide-y divide-gray-900/10">
            <div className="py-12 px-4 lg:px-24">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white dark:bg-[#232323] shadow-sm sm:rounded-xl md:col-span-2"
                >
                    <WordSection WordSectionLanguageText={WordSectionLanguageText} keywords={keywords}
                                 setKeywords={setKeywords} phrase={phrase} setPhrase={setPhrase} anyWords={anyWords}
                                 setAnyWords={setAnyWords} noneWords={noneWords} setNoneWords={setNoneWords}
                                 hashtags={hashtags} setHashtags={setHashtags}/>

                    <AccountsSection AccountsSectionLanguageText={AccountsSectionLanguageText} fromAccount={fromAccount}
                                     setFromAccount={setFromAccount} toAccount={toAccount} setToAccount={setToAccount}
                                     mentioningAccounts={mentioningAccounts}
                                     setMentioningAccounts={setMentioningAccounts}/>


                    <LanguageSection LanguageSectionLanguageText={LanguageSectionLanguageText} language={language}
                                     setLanguage={setLanguage}/>

                    <FiltersSection FiltersSectionLanguageText={FiltersSectionLanguageText}
                                    filterReplies={filterReplies} setFilterReplies={setFilterReplies}
                                    filterLinks={filterLinks} setFilterLinks={setFilterLinks}/>

                    <EngagementSection EngagementSectionLanguageText={EngagementSectionLanguageText}
                                       minReplies={minReplies} setMinReplies={setMinReplies} minLikes={minLikes}
                                       setMinLikes={setMinLikes} minRetweets={minRetweets}
                                       setMinRetweets={setMinRetweets}/>


                    <DateSection DateSectionLanguageText={DateSectionLanguageText} startDate={startDate} setStartDate={setStartDate} endDate={endDate}
                                 setEndDate={setEndDate} lng={lng}/>


                    <div className="px-4 py-6 sm:px-8 flex justify-end">
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {ButtonsSectionLanguageText.search}
                        </button>
                    </div>
                </form>
            </div>
        </div>);
}
