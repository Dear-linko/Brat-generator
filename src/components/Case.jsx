const useCases = {
    "title": "Yes or No Wheel Use Cases",
    "description": "Our Yes or No Wheel isn't just for simple decisions. Here's how users apply it in various scenarios:",
    "categories": [
      {
        "title": "Personal Decisions",
        "description": "From daily choices to life-changing decisions, our wheel can help you navigate personal dilemmas:",
        "examples": [
          "Should I go out tonight? (Yes or No)",
          "Do I need a new phone? (Yes or No)",
          "Should I take that vacation? (Yes or No)",
          "Is it time to start a new hobby? (Yes or No)"
        ]
      },
      {
        "title": "Work Decisions",
        "description": "Use our wheel to break through indecision in your professional life:",
        "examples": [
          "Should we pursue this project? (Yes or No)",
          "Do we need to hire more staff? (Yes or No)",
          "Is it time for a career change? (Yes or No)",
          "Should we invest in new technology? (Yes or No)"
        ]
      },
      {
        "title": "Fun and Games",
        "description": "Add an element of chance to your social activities and games:",
        "examples": [
          "Truth or Dare: Answer the question? (Yes or No)",
          "Randomize game choices (Yes = Option A, No = Option B)",
          "Make spontaneous plans (Yes = Go out, No = Stay in)",
          "Choose a movie genre (Yes = Action, No = Comedy)"
        ]
      }
    ]
  }
  
  export default function Case() {
    return (
      <div id="case" className="dark:bg-gray-900 pt-16 sm:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-6xl lg:mx-0">
            <h2 className="text-3xl mx-auto text-center font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">{useCases.title}</h2>
            <p className="mt-2 text-lg leading-8 text-center text-gray-600 dark:text-gray-300">
            {useCases.description}
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {useCases.categories.map((category) => (
              <article key={category.title} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    {category.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{category.description}</p>
                  <ul className="mt-5 list-disc list-inside text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {category.examples.map((example) => (
                        <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
