export const metadata = {
  title: 'About - Sai Swapna Gollapudi',
  description: 'Data Scientist & ML Engineer with expertise in machine learning, LLMs, and scalable AI systems.',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
      
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p className="text-lg leading-relaxed">
          I'm a Data Scientist and ML Engineer with 8+ years of experience building intelligent systems and scalable ML architectures. 
          Currently at Amazon, I specialize in developing personalized learning platforms, abuse detection systems, and LLM-driven solutions.
          I'm passionate about solving complex business problems through data-driven approaches and cutting-edge machine learning techniques.
        </p>
        
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Data Scientist</h3>
              <p className="text-gray-600 dark:text-gray-400">Amazon • March 2022 - Present</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• <strong>Learn</strong> - Built ML architecture for personalized learning platform processing 3M+ training documents with skill-based recommendations</li>
                <li>• <strong>Abuse Detection</strong> - Developed multi-layer ML system using anomaly detection and LLMs; work presented at Amazon ML Conference 2025</li>
                <li>• <strong>Effortless Resolution</strong> - Created effort estimation framework analyzing 2M+ monthly contacts using NLP and behavioral signals</li>
                <li>• <strong>LLM Evaluation</strong> - Productionized evaluation pipeline processing 50K+ queries daily; reduced processing time by 98%</li>
                <li>• <strong>Search Engine Development</strong> - Led development of learning-to-rank search engine replacing outdated BM25 model</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Senior Data Scientist</h3>
              <p className="text-gray-600 dark:text-gray-400">Capital One • May 2021 - March 2022</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Built ML models for identity theft detection using CNN, Random Forest, XGBoost, and LSTM</li>
                <li>• Developed end-to-end data pipelines with feature engineering and statistical analysis</li>
                <li>• Created Tableau dashboards for model performance monitoring and feature evaluation</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Data Analyst</h3>
              <p className="text-gray-600 dark:text-gray-400">Tata Consultancy Services • July 2016 - July 2019</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• Built classification models for retail firms to identify damaged orders using logistic regression, decision trees, and random forests</li>
                <li>• Implemented SMOTE and resampling techniques to handle imbalanced data</li>
                <li>• Developed financial analysis dashboards for business decision-making</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">Master of Science in Data Science</h3>
              <p className="text-gray-600 dark:text-gray-400">Indiana University, Bloomington, IN</p>
              <p className="mt-2">Aug 2019 - May 2021</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold">B.Tech in Mechanical Engineering</h3>
              <p className="text-gray-600 dark:text-gray-400">JNTU, Hyderabad, India</p>
              <p className="mt-2">Graduated May 2016</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Machine Learning & AI</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Large Language Models (LLMs) & Prompt Engineering</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Deep Learning & Neural Networks</li>
                <li>Anomaly Detection & Classification</li>
                <li>Recommendation Systems</li>
                <li>Feature Engineering</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Data & Engineering</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>End-to-end ML Pipelines</li>
                <li>AWS (SageMaker, S3, Lambda, Glue)</li>
                <li>Big Data Processing (Spark, Hadoop)</li>
                <li>SQL & Database Design</li>
                <li>A/B Testing & Experimentation</li>
                <li>Data Visualization (Tableau, QuickSight)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
