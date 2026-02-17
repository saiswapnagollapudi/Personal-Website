import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-16 md:mb-24">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-4xl md:text-5xl">👨‍💻</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sai Swapna Gollapudi
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
            Data Scientist & ML Engineer with expertise in building scalable machine learning systems and LLM-driven solutions. 
            Currently at Amazon, focused on personalized learning and intelligent abuse detection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Learn About Me
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition font-semibold">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Languages & Frameworks</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Python, SQL, R, Java</li>
              <li>PyTorch, TensorFlow, Keras</li>
              <li>Hugging Face, OpenAI API</li>
              <li>React, NodeJS, JavaScript</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">ML & AI</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>LLMs & Prompt Engineering</li>
              <li>NLP & Computer Vision</li>
              <li>Anomaly Detection</li>
              <li>Recommendation Systems</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Cloud & Tools</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>AWS (SageMaker, S3, Lambda)</li>
              <li>Google Cloud Platform</li>
              <li>Databricks, MLflow</li>
              <li>Tableau, SQL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <article className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Building Scalable ML Systems</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Insights on designing machine learning architectures that scale to millions of data points.</p>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              Read More →
            </Link>
          </article>
          <article className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">LLM Applications in Production</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Practical approaches to deploying large language models and building LLM-powered pipelines.</p>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
              Read More →
            </Link>
          </article>
        </div>
        <div className="text-center">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline text-lg">
            View All Articles →
          </Link>
        </div>
      </section>
    </div>
  )
}
