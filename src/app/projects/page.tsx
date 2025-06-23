import Link from 'next/link'

export default function ProjectsPage() {
  const experiences = [
    {
      id: 1,
      title: "SAM IT Solutions",
      role: "Software Development Intern",
      duration: "May 2023 - August 2023",
      description: "Collaborated with a team to enhance the front-end of a customer product designed for sorting and tracking package deliveries. Worked diligently to identify and resolve software defects, ensuring the product met customer specifications. Maintained clear communication and provided timely updates within the team to stay aligned with project deadlines. Actively sought to expand knowledge of front-end development techniques and deepen understanding of customer-driven software solutions.",
      technologies: ["Front-end Development", "Software Testing", "Team Collaboration", "Customer Solutions"],
      category: "Software Development",
      highlights: [
        "Enhanced front-end of customer product for package delivery tracking",
        "Identified and resolved software defects to meet customer specifications",
        "Maintained clear communication and provided timely team updates",
        "Expanded knowledge of front-end development techniques"
      ]
    },
    {
      id: 2,
      title: "Machine Learning Researcher",
      role: "AI Research Intern",
      duration: "Inspirit AI",
      description: "Worked with Inspirit AI during my shadowing experience under an experienced mentor in the field of AI and machine learning. Collaborated on a project to design and code a machine-learning model aimed at identifying and predicting desertification trends in satellite images of the Earth. The project focused on analyzing satellite imagery of Death Valley over several years to detect changes in the landscape indicative of desertification.",
      technologies: ["Machine Learning", "Computer Vision", "CNN", "Satellite Imagery", "Python"],
      category: "AI/ML Research",
      highlights: [
        "Designed and coded ML model for desertification trend prediction",
        "Collected and preprocessed years of satellite imagery data",
        "Implemented Convolutional Neural Network (CNN) architecture",
        "Applied advanced image preprocessing techniques including normalization and data augmentation"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">My Experience</h1>
            <p className="text-xl text-gray-600">Professional experience and research work</p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 mb-12">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Experience Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{experience.title}</h2>
                      <p className="text-xl opacity-90 mb-1">{experience.role}</p>
                      <p className="text-lg opacity-80">{experience.duration}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                        {experience.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience Content */}
                <div className="p-8">
                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
                    <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
                    <ul className="space-y-3">
                      {experience.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies & Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="text-center mt-12">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors mr-4"
            >
              ← Back to Home
            </Link>
            <Link 
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              About Me →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 