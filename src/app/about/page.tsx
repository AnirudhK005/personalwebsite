import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <p className="text-xl text-gray-600">Get to know me better</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Profile Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Anirudh Kopparthi</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I am currently attending the College of Engineering at NC State University, pursuing a Bachelor&apos;s degree in Electrical and Computer Engineering, with a deep interest in robotics, automation, and intelligent systems. My academic journey is driven by a passion for integrating hardware design with innovative software solutions to build advanced technologies that positively impact industries and daily life.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  With a foundation in programming, machine learning, and now an expanding expertise in electrical systems and circuit design, I aim to bridge the gap between software intelligence and hardware capabilities. I am actively seeking hands-on experiences through internships, research, and collaborative projects that allow me to contribute to meaningful advancements in robotics, AI-driven systems, and automated technologies.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Electrical Engineering</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Computer Engineering</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Robotics & Automation</span>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Interests</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Programming Languages</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">C++</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Java</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Technologies</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Machine Learning</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Robotics</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Arduino</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Bachelor&apos;s in Electrical and Computer Engineering</h4>
                  <p className="text-gray-600">College of Engineering, NC State University</p>
                  <p className="text-sm text-gray-500">Current</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interests</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Robotics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Automation</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Intelligent Systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Machine Learning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              ← Back to Home
            </Link>
            <Link 
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              My Experience →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 