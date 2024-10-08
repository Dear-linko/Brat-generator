const faqs = {
    "title": "Frequently Asked Questions about Our Yes or No Wheel",
    "questions": [
      {
        "question": "Is the Yes or No Wheel really random?",
        "answer": "Yes, our wheel uses a sophisticated random number generator to ensure unbiased Yes or No outcomes for each spin. This ensures that each decision is truly random and not influenced by any external factors."
      },
      {
        "question": "Can I use the Yes or No Wheel for important decisions?",
        "answer": "While our Yes or No Wheel can be a helpful tool, we recommend using it as a supplement to careful consideration for important decisions, not as the sole decision-maker. It's best used to break through indecision or to add an element of chance to your decision-making process."
      },
      {
        "question": "Is there a limit to how many times I can use the Yes or No Wheel?",
        "answer": "No, you can use our Yes or No Wheel as many times as you like. It's completely free and available 24/7. We encourage you to use it whenever you need help making a decision, big or small."
      },
      {
        "question": "Is my decision history private?",
        "answer": "Yes, your decision history is stored locally on your device and is not shared with us or any third parties. You have the option to clear your history at any time for complete privacy."
      }
    ]
}

export default function FAQs({ FAQsLanguageText }) {
  const faqs = [
    {
      question: FAQsLanguageText.question1,
      answer: FAQsLanguageText.answer1,
    },
    {
      question: FAQsLanguageText.question2,
      answer: FAQsLanguageText.answer2,
    },
    {
      question: FAQsLanguageText.question3,
      answer: FAQsLanguageText.answer3,
    },
    {
      question: FAQsLanguageText.question4,
      answer: FAQsLanguageText.answer4,
    },
    {
      question: FAQsLanguageText.question5,
      answer: FAQsLanguageText.answer5,
    },
    {
      question: FAQsLanguageText.question6,
      answer: FAQsLanguageText.answer6,
    },
  ]
  return (
    <div id="faqs" className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-4xl transition-colors duration-300">
          {FAQsLanguageText.title}
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-600 dark:text-gray-300 transition-colors duration-300">
            {FAQsLanguageText.description}
          </p>
        </div>
        <div className="mt-20">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="flex flex-col">
                <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                  {faq.question}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}