import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Welcome to my portfolio</p>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Sai Swapna
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Data Scientist & ML Engineer building intelligent systems and scalable ML architectures. 
            Currently at <span className="font-semibold text-gray-900 dark:text-white">Amazon</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/about" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow font-semibold">
              Learn About Me
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-semibold">
              Get In Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-blue-600">8+</div>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <p className="text-gray-600 dark:text-gray-400">ML Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600">20+</div>
              <p className="text-gray-600 dark:text-gray-400">Public Articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Core Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Technical skills and technologies I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-4"></div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Languages & Frameworks</h3>
              <p className="text-gray-600 dark:text-gray-400 space-y-2">
                Python • SQL • Java • R<br/>
                PyTorch • TensorFlow • Keras<br/>
                React • NodeJS • JavaScript
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 mb-4"></div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Machine Learning & AI</h3>
              <p className="text-gray-600 dark:text-gray-400 space-y-2">
                LLMs & Prompt Engineering<br/>
                NLP & Computer Vision<br/>
                Anomaly Detection & Recommendation
              </p>
            </div>

            <div className="p-8 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 mb-4"></div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Cloud & Tools</h3>
              <p className="text-gray-600 dark:text-gray-400 space-y-2">
                AWS (SageMaker, S3, Lambda)<br/>
                Google Cloud • Databricks<br/>
                Tableau • MLflow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Highlights from recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 p-8 hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Personalized Learning Platform</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Built ML architecture processing 3M+ training documents with skill-based recommendations at scale</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">ML</span>
                  <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full">Python</span>
                  <span className="px-3 py-1 text-sm bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 rounded-full">AWS</span>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 p-8 hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Intelligent Abuse Detection</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Multi-layer ML system using unsupervised anomaly detection and LLMs. Work presented at AMLC 2025</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full">LLM</span>
                  <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">Anomaly</span>
                  <span className="px-3 py-1 text-sm bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-400 rounded-full">NLP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/about" className="inline-block px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Latest Articles</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Insights on ML, AI, and Data Science</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <article className="p-8 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:shadow-lg transition-all group cursor-pointer">
              <div className="mb-4">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">ML Architecture</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Building Scalable ML Systems</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Insights on designing machine learning architectures that scale to millions of data points.</p>
              <Link href="/blog" className="text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                Read More →
              </Link>
            </article>

            <article className="p-8 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 hover:shadow-lg transition-all group cursor-pointer">
              <div className="mb-4">
                <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">LLM Engineering</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">LLM Applications in Production</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Practical approaches to deploying large language models and building LLM-powered pipelines.</p>
              <Link href="/blog" className="text-purple-600 dark:text-purple-400 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
                Read More →
              </Link>
            </article>
          </div>

          <div className="text-center">
            <Link href="/blog" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow font-semibold">
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
