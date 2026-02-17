import React from "react";

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: "60px" }}>
      <h2 style={{ 
        fontSize: "28px", 
        borderBottom: "2px solid #111",
        paddingBottom: "8px",
        marginBottom: "20px"
      }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
      maxWidth: "1000px",
      margin: "auto",
      padding: "40px",
      lineHeight: "1.7"
    }}>

      <header style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Sai Swapna Gollapudi
        </h1>
        <p style={{ fontSize: "18px", color: "#555" }}>
          Senior Data Scientist | Large Language Models | NLP | ML Systems
        </p>
        <p>
          📧 saiswapnagollapudi@gmail.com <br />
          🔗 <a href="https://www.linkedin.com/in/sai-swapna-gollapudi-316a83a2/" target="_blank">LinkedIn</a>
        </p>
      </header>

      <Section title="About">
        <p>
          I am a Senior Data Scientist at Amazon specializing in Large Language Models,
          ML system design, and scalable AI architectures. My work spans personalized
          learning systems, fraud detection, LLM evaluation pipelines, semantic search,
          and rule-heavy classification frameworks at production scale.
        </p>
      </Section>

      <Section title="Work Experience">

        <h3>Amazon — Data Scientist (2022–Present)</h3>
        <ul>
          <li>Designed ML architecture for personalized learning platform processing 3M+ documents.</li>
          <li>Built LLM-driven skill extraction pipeline with prompt engineering.</li>
          <li>Implemented embedding normalization (BERT, RoBERTa) with K-Means & HDBSCAN.</li>
          <li>Led abuse detection ML architecture using anomaly detection & consensus modeling.</li>
          <li>Built large-scale LLM evaluation system processing 50K+ daily chatbot interactions.</li>
          <li>Replaced BM25 with learning-to-rank search engine improving NDCG significantly.</li>
        </ul>

        <h3>Capital One — Senior Data Scientist (2021–2022)</h3>
        <ul>
          <li>Built identity theft detection models (CNN, LSTM, XGBoost).</li>
          <li>Developed end-to-end ML pipelines & Tableau dashboards.</li>
        </ul>

        <h3>TCS — Data Analyst (2016–2019)</h3>
        <ul>
          <li>Built predictive classification models for retail returns & risk scoring.</li>
          <li>Implemented SMOTE & imbalance handling techniques.</li>
        </ul>

      </Section>

      <Section title="Research & LLM Work">
        <ul>
          <li>LLM-driven feature extraction under policy constraints (zero-shot / few-shot).</li>
          <li>Rule-heavy multi-condition classification experiments.</li>
          <li>LLM evaluation benchmarking vs AWS Bedrock Guardrails.</li>
          <li>Temporal validation for evolving fraud detection models.</li>
        </ul>
      </Section>

      <Section title="Technical Skills">

        <p><strong>Languages:</strong> Python, R, SQL, Spark, JavaScript, React</p>

        <p><strong>Platforms:</strong> AWS (SageMaker, Bedrock, S3, SQS, Lambda),
        GCP, Hugging Face, OpenAI API</p>

        <p><strong>ML Expertise:</strong> Transformers, GPT, BERT, Clustering,
        Autoencoders, Isolation Forest, Deep Learning, Prompt Engineering</p>

      </Section>

      <Section title="Education">
        <p><strong>M.S. Data Science</strong> — Indiana University (2019–2021)</p>
        <p><strong>B.Tech Mechanical Engineering</strong> — JNTU Hyderabad (2016)</p>
      </Section>

      <footer style={{ 
        marginTop: "80px", 
        textAlign: "center", 
        color: "#777" 
      }}>
        © {new Date().getFullYear()} Sai Swapna Gollapudi
      </footer>

    </div>
  );
}

export default App;
