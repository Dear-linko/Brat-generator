import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Customizable Yes/No Options"',
    description:
      'Tailor the Yes or No Wheel to your specific needs. Our unique feature allows you to adjust the probability of Yes and No outcomes by changing the number of segments for each option. This flexibility ensures that the tool adapts to various decision-making scenarios.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Comprehensive Decision History Tracking',
    description:
      'Never lose track of your decisions again. Our tool keeps a detailed record of all your Yes or No choices, allowing you to review past decisions and identify patterns in your decision-making process over time.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Advanced Data Analytics',
    description:
      'Gain insights into your decision-making patterns with our sophisticated analytics tools. Visualize your choices over time and understand your decision-making tendencies.',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Key Features of Our Yes or No Wheel
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon aria-hidden="true" className="h-5 w-5 flex-none text-indigo-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
