import React from 'react';

export const BRAND = {
  name: "Perode",
  tagline: "flow. progress. clarity.",
  logo: "/logo.jpg", 
};

export const PERSONAL_INFO = {
  fullName: "Francis Mwaseba",
  title: "Data Scientist",
  location: "Dar Es Salaam, Tanzania",
  email: "mwaceberfrancis@gmail.com",
  phone: "+255793738841",
  whatsapp: "255793738841",
  github: "https://github.com/mwaceber",
  linkedin: "https://linkedin.com/in/Francis-Mwaceber", 
};

export const ABOUT_DATA = {
  focus: " We build custom prediction models that identify which customers are about to leave and which are ready to buy again,how to price your products and what your business will archieve in the future so you can act before the revenue vanishes. No big-tech complexity",
  goals: "To bridge the gap between complex data and strategic business decisions, bringing flow, progress, and clarity to every organization I work with.",
  why: " I believe that from the data available in the e-commerce business, I  can help you scale just like what Amazon does to always be at the top",
  story:"I kept watching brilliant e-commerce founders work 80 hours a week, only to waste their ad budget on guesswork. I built this to arm them with the same predictive power Fortune 500 companies hoard.",
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
  report: React.ReactNode; 
  githubLink: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "pricing-insight",
    title: "Pricing Insight Tool",
    thumbnail: "/pricingInsight.png",
    techStack: ["Python", "Pandas", "Prophet", "SciPy", "Streamlit", "Plotly"],
    shortDesc: "Retail Inventory & Pricing Optimizer",
    report: (
      <div className="space-y-4">
        <p><strong className="text-navy">The Client’s state before Us:</strong><br />A mid-sized consumer electronics DTC brand with 300+ SKUs was bleeding cash on dead stock and simultaneously losing sales from stockouts on their top 20 products. Their pricing strategy was “cost-plus” — they had zero dynamic adjustment. Margins were shrinking and the operations team was burned out from firefighting.</p>
        <p><strong className="text-navy">The Diagnosis:</strong><br />Their inventory forecasting was based on simple averages, ignoring seasonal demand spikes, cannibalization from new product launches, and competitor pricing moves. We found that 40% of their warehouse value was tied up in products with a &quot;slow mover&quot; classification that would take 9+ months to sell through, while their bestsellers went out of stock within 72 hours of a competitor running a promotion.</p>
        <p><strong className="text-navy">The Intervention:</strong><br />We deployed the Inventory Optimization and Dynamic Pricing Insight Tool, which ingested their two years of sales data, competitor price feeds, and seasonal trends. The model generated a weekly replenishment order list, flagged SKUs for markdown or bundling, and suggested price adjustments within a 15% band to maximize margin while staying competitive on key items.</p>
        <div><strong className="text-navy">The Hard Numbers:</strong>
          <ul className="list-none pl-0 space-y-2 mt-2">
            <li className="flex gap-2"><span>•</span> Reduced lost revenue from stockouts by $340,000 in the first 12 months.</li>
            <li className="flex gap-2"><span>•</span> Decreased excess inventory holding costs by 22% ($85,000 freed up working capital).</li>
            <li className="flex gap-2"><span>•</span> Increased gross margin on top 50 SKUs by 4.2 percentage points through micro price adjustments that customers didn&apos;t perceive.</li>
          </ul>
        </div>
      </div>
    ),
    githubLink: "https://github.com/mwaceber/PRICING-INSIGHT-TOOL",
  },
  {
    id: "customer-segmentation",
    title: "Customer Sentiment Analysis",
    thumbnail: "/customerSegmentation.png",
    techStack: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "Streamlit"],
    shortDesc: "Sentiment Analysis & Segmentation Dashboard",
    report: (
      <div className="space-y-4">
        <p><strong className="text-navy">The Client’s State Before Us:</strong><br />A fast-growing home fitness equipment brand had 4,500+ product reviews across their site and Amazon, plus hundreds of monthly support tickets. Their product team felt blind. They were spending 10 hours a week manually reading reviews, and still couldn&apos;t detect emerging product defects or systematically understand why their flagship treadmill had a 3.9-star rating instead of a 4.5.</p>
        <p><strong className="text-navy">The Diagnosis:</strong><br />We ran the Sentiment Analysis model across all unstructured text. The model uncovered that the negative reviews were not about durability, as the team assumed, but clustered around a specific assembly instruction step (Step 4 in the manual) and a consistent complaint about the console&apos;s Bluetooth pairing with iPhones. This was a UX and documentation problem, not a hardware flaw. Further, customer feedback emails contained a rising theme of &quot;wish it had a tablet holder&quot; that the support team never aggregated as a product request.</p>
        <p><strong className="text-navy">The Intervention:</strong><br />We deployed an NLP pipeline that automatically scraped, categorized, and scored all reviews and support tickets by intent and emotion. A weekly digest was sent to product and marketing: a &quot;Top 3 Emerging Complaints&quot; list, a &quot;Feature Request Trend Tracker,&quot; and a &quot;Competitor Sentiment Comparison&quot; that tracked sentiment in rival product reviews.</p>
        <div><strong className="text-navy">The Hard Numbers:</strong>
          <ul className="list-none pl-0 space-y-2 mt-2">
            <li className="flex gap-2"><span>•</span> Identified the assembly-step issue, leading to a manual rewrite and an online video guide that, within 60 days, raised the product&apos;s average rating from 3.9 to 4.4 stars.</li>
            <li className="flex gap-2"><span>•</span> The tablet holder feature request was prioritized into the next product cycle; the updated model&apos;s launch received 32% more positive first-week reviews than the prior version.</li>
            <li className="flex gap-2"><span>•</span> Customer support ticket volume related to Bluetooth pairing dropped by 47% after a targeted in-app troubleshooting screen was created based on the exact language customers used in their complaints.</li>
          </ul>
        </div>
      </div>
    ),
    githubLink: "https://github.com/mwaceber/CUSTOMER-SEGMENTATION-MODEL",
  },
  {
    id: "demand-forecasting",
    title: "Demand Forecasting Model",
    thumbnail: "/demandForecasting.png",
    techStack: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Streamlit"],
    shortDesc: "ML pipeline for demand prediction",
    report: (
      <div className="space-y-4">
        <p>A focused machine learning model for predicting product/customer demand. It includes deep data processing, exploratory data analysis (EDA), feature engineering, and a highly accurate XGBoost model. Interacted with via a Streamlit app, it serves as a strong foundation for retail and e-commerce inventory planning.</p>
      </div>
    ),
    githubLink: "https://github.com/mwaceber/DEMAND-FORECASTING-MODEL",
  },
  {
    id: "churn-model-2-0",
    title: "Customer Churn Model",
    thumbnail: "/churnModel.png",
    techStack: ["XGBoost", "SHAP", "Pandas", "Plotly", "Streamlit"],
    shortDesc: "ChurnGuard — Customer Churn Predictor",
    report: (
      <div className="space-y-4">
        <p><strong className="text-navy">The Client’s State Before Us:</strong><br />A $5M annual revenue fashion accessories store had a “loyalty program” but no real churn intervention. 65% of customers never made a second purchase. They sent blanket 10%-off emails to the entire inactive list every month, burning margin without understanding who was worth saving and who was already gone.</p>
        <p><strong className="text-navy">The Diagnosis:</strong><br />Their definition of churn was simply “no purchase in 6 months,” which was a lagging indicator of death. Our model analyzed purchase cadence, browsing behavior, support interactions, and email engagement. It predicted churn 60 days in advance with 88% precision. We discovered that customers who contacted support about shipping and then didn&apos;t browse again within 7 days had a 73% probability of churning permanently. 80% of their reactivation budget was being spent on customers predicted to churn with zero probability of returning — ghosts.</p>
        <p><strong className="text-navy">The Intervention:</strong><br />We deployed the Customer Churn Prediction and Retention Analyzer, outputting a daily &quot;Churn Risk List&quot; segmented into High, Medium, and Low risk, directly integrated into their email tool (Klaviyo). We designed a three-tier intervention: High-risk got a personal outreach plus a &quot;we miss you&quot; gift (not a discount), Medium-risk got an early-access product drop, and Low-risk were suppressed to avoid damaging them with unnecessary offers.</p>
        <div><strong className="text-navy">The Hard Numbers:</strong>
          <ul className="list-none pl-0 space-y-2 mt-2">
            <li className="flex gap-2"><span>•</span> Within 120 days, recovered $210,000 in revenue from customers previously considered “lost” and on the brink of permanent churn.</li>
            <li className="flex gap-2"><span>•</span> Second-purchase rate among high-risk group jumped from 4% to 19% using the targeted intervention.</li>
            <li className="flex gap-2"><span>•</span> Saved $6,200/month in wasted discount margin by cutting the generic blast emails to customers the model identified as unreachable.</li>
          </ul>
        </div>
      </div>
    ),
    githubLink: "https://github.com/mwaceber/CHURN-MODEL-2.0",
  }
];