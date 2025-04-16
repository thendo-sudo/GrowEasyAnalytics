import { Link } from 'react-router-dom';
import { ChartBarIcon, MagnifyingGlassIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 text-gray-900">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md shadow-md z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-extrabold text-gray-800">Grow Easy Analytics</h1>
          </div>
          <div className="flex items-center">
            <a href="mailto:info@groweasyanalytics.com" className="text-sm text-blue-600 hover:underline">
              info@groweasyanalytics.com
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-5xl font-extrabold sm:text-6xl animate-fade-in">
          Optimize Your Tech Stack
        </h2>
        <p className="mt-4 text-xl max-w-2xl mx-auto opacity-90">
          Discover inefficiencies, address challenges, and unlock tailored solutions to drive your business forward.
        </p>
        <Link
          to="/form"
          className="mt-6 inline-block bg-white text-blue-600 rounded-md py-3 px-6 hover:bg-blue-100 transition duration-300 text-lg font-medium shadow-md"
        >
          Get Started
        </Link>
      </section>

      {/* Steps Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Simple Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
              <ChartBarIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Submit Your Tech Stack
              </h4>
              <p className="text-gray-600">
                Share your current tech stack and specific challenges, like slow performance or scalability issues.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
              <MagnifyingGlassIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                We Analyze Inefficiencies
              </h4>
              <p className="text-gray-600">
                Our team identifies gaps and bottlenecks in your setup to pinpoint opportunities for improvement.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
              <LightBulbIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Receive Custom Solutions
              </h4>
              <p className="text-gray-600">
                Get a tailored, actionable plan to optimize your tech stack and boost efficiency.
              </p>
            </div>
          </div>
          {/* Submit Button */}
          <div className="mt-12 text-center">
            <Link
              to="/form"
              className="inline-block bg-blue-600 text-white rounded-md py-4 px-8 hover:bg-blue-700 transition duration-300 text-xl font-semibold shadow-lg"
            >
              Submit Your Tech Stack
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2025 Grow Easy Analytics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}