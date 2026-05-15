// data/portfolio.ts

export const BRAND = {
  name: "Perode",
  tagline: "flow. progress. clarity.",
  logo: "/logo.jpg", 
};

export const PERSONAL_INFO = {
  fullName: "Francis Francis Mwaseba",
  title: "Data Scientist",
  location: "Dar Es Salaam, Tanzania",
  email: "mwaceberfrancis@gmail.com",
  phone: "+255793738841",
  whatsapp: "255793738841",
  github: "https://github.com/mwaceber",
  linkedin: "https://linkedin.com/in/Francis-Mwaceber", 
};

export const ABOUT_DATA = {
  focus: "I build robust, scalable AI prediction models that drive actionable insights and revenue growth for the e-commerce sector.",
  goals: "To bridge the gap between complex data and strategic business decisions, bringing flow, progress, and clarity to every organization I work with.",
  style: "Analytical, methodical, and results-driven. I believe in writing clean code and creating models that are as interpretable as they are accurate.",
  personality: "Curious problem-solver, continuous learner, and collaborative team player.",
  skills: [
    "Machine Learning", "Python", "Data Visualization", "Predictive Modeling", 
    "SQL", "TensorFlow", "E-commerce Analytics", "Statistical Analysis"
  ]
};

export type Project = {
  id: string;
  title: string;
  thumbnail: string;
  techStack: string[];
  shortDesc: string;
  report: string;
  githubLink: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "pricing-insight",
    title: "Pricing Insight Tool",
    thumbnail: "/pricingInsight.png",
    techStack: ["Python", "Pandas", "Prophet", "SciPy", "Streamlit", "Plotly"],
    shortDesc: "Retail Inventory & Pricing Optimizer",
    report: "An end-to-end AI-powered retail optimization tool focused on inventory management, demand forecasting, and dynamic pricing. It avoids stockouts and overstock while maximizing revenue. Uses historical sales data to forecast demand, calculate optimal stock levels (safety stock, reorder point, EOQ), simulate price elasticity, and generate actionable alerts (e.g., '$8k+ potential gains'). Features an interactive Streamlit dashboard with what-if simulations.",
    githubLink: "https://github.com/mwaceber/PRICING-INSIGHT-TOOL",
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation Model",
    thumbnail: "/customerSegmentation.png",
    techStack: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Streamlit"],
    shortDesc: "Sentiment Analysis & Segmentation Dashboard",
    report: "Automatically processes thousands of customer reviews: classifies sentiment, extracts key aspects (delivery, quality, price), visualizes trends/word clouds, identifies top complaints, and generates business recommendations. Combining K-Means segmentation with NLP, this turns unstructured feedback into highly actionable retention strategies.",
    githubLink: "https://github.com/mwaceber/CUSTOMER-SEGMENTATION-MODEL",
  },
  {
    id: "demand-forecasting",
    title: "Demand Forecasting Model",
    thumbnail: "/demandForecasting.png",
    techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Streamlit"],
    shortDesc: "ML pipeline for demand prediction",
    report: "A focused machine learning model for predicting product/customer demand. It includes deep data processing, exploratory data analysis (EDA), feature engineering, and a highly accurate XGBoost model. Interacted with via a Streamlit app, it serves as a strong foundation for retail and e-commerce inventory planning.",
    githubLink: "https://github.com/mwaceber/DEMAND-FORECASTING-MODEL",
  },
  {
    id: "churn-model-2-0",
    title: "Churn Model 2.0",
    thumbnail: "/churnModel.png",
    techStack: ["XGBoost", "SHAP", "Pandas", "Plotly", "Streamlit"],
    shortDesc: "ChurnGuard — Customer Churn Predictor",
    report: "A production-ready customer churn prediction and retention tool. It predicts which customers are likely to leave, explicitly explains 'why' using SHAP values, simulates 'what-if'; retention actions, provides prioritized action plans, and calculates revenue impact/ROI. The most mature model of the suite, ideal for retention strategies in e-commerce and SaaS.",
    githubLink: "https://github.com/mwaceber/CHURN-MODEL-2.0",
  }
];