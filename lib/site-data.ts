export const profile = {
  brand: "skylining",
  name: "Tien-Ning (Sky) Lee",
  shortName: "Sky Lee",
  title: "Applied ML · Full-stack AI · AI Products",
  location: "San Diego · Taipei · Tokyo",
  email: "tienninglee@gmail.com",
  linkedin: "https://www.linkedin.com/in/tien-ning-lee-96a04b252",
  github: "https://github.com/SkyLiNing823",
  instagram: "https://www.instagram.com/skyning823/",
  summary:
    "M.S. student in Electrical and Computer Engineering, Machine Learning & Data Science Track, at UC San Diego. I focus on applied machine learning, including LLM applications, recommender systems, physical AI, and robotic integration, as well as MLOps and full-stack AI products. Outside of technical work, I enjoy travel, J-pop, and kendo.",
};

export const education = [
  {
    school: "University of California, San Diego (UCSD)",
    degree: "M.S. in Electrical and Computer Engineering",
    detail: "Machine Learning & Data Science Track",
    location: "California, United States",
    period: "Sep. 2025 - Expected Jun. 2027",
  },
  {
    school: "National Yang Ming Chiao Tung University (NYCU)",
    degree: "B.S. in Information Management and Finance",
    detail: "Program of Information Management",
    location: "Hsinchu, Taiwan",
    period: "Sep. 2020 - Jun. 2024",
  },
];

export const experiences = [
  {
    role: "Physical AI Engineer Intern",
    org: "Classmethod",
    location: "Tokyo, Japan",
    period: "Jul. 2026 - Sep. 2026",
    bullets: [
      "Developed Physical AI applications for Unitree G1 and Go2 robots, spanning real-time visual inspection and robotic manipulation.",
      "Built and optimized a visual inspection pipeline using Unitree SDK2, CycloneDDS, and Grounding DINO, reducing overlay latency by 92% and improving image updates from 3-4 seconds to approximately 1 second.",
      "Developed a hybrid Isaac Lab + PPO manipulation system for Unitree G1, combining scripted motion, residual hand control, curriculum learning, and randomized simulation for bottle pick-and-lift.",
      "Achieved 97.4% integrated success in randomized simulation and transferred the learned policy to a real G1 Inspire Hand, successfully grasping and lifting a loaded PET bottle containing approximately 600 ml.",
    ],
    tags: ["Physical AI", "Robotics", "Computer Vision", "Reinforcement Learning", "Isaac Lab"],
  },
  {
    role: "BRAIN Quantitative Research Consultant",
    org: "WorldQuant",
    location: "Remote",
    period: "Apr. 2024 - Jul. 2025",
    bullets: [
      "Found and submitted trading alphas, mathematical models that seek to predict future price movements of financial instruments, with performance evaluated in real-world stock markets.",
      "Developed optimization algorithms using the WorldQuant API and stock market data to automate the mining of trading alphas.",
    ],
    tags: ["Quant Research", "Optimization", "Financial Data"],
  },
  {
    role: "Project Research Assistant | Advisor: Prof. Tsung-Nan Lin (IEEE Fellow)",
    org: "Artificial Intelligence Lab, National Taiwan University",
    location: "Taipei, Taiwan",
    period: "Jun. 2024 - Dec. 2024",
    bullets: [
      "Co-developed trustworthy AI recommendation systems with PhD students for BankTaiwan Life Insurance, focusing on minimizing default risk through anti-recommendation algorithms.",
      "Processed large-scale real-world insurance data and engineered robust features to enhance model generalization.",
      "Implemented and evaluated collaborative filtering and anomaly detection models using PyTorch, optimizing for both ranking accuracy and risk mitigation.",
      "Collaborated with stakeholders to officially deploy the model after successful enterprise testing.",
    ],
    tags: ["Recommender Systems", "PyTorch", "Risk Control"],
  },
  {
    role: "AI Research Intern",
    org: "National Institute of Information and Communications Technology (NICT)",
    location: "Tokyo, Japan",
    period: "Jul. 2023 - Sep. 2023",
    bullets: [
      "Conducted research to enhance the resilience of model-based network intrusion detection systems for IoT devices by investigating advanced adversarial attacks and robust defense strategies.",
      "Engineered and trained diverse NIDS models, including Logistic Regression, kNN, Random Forest, Autoencoder, 1D-CNN, and 2D-CNN, using scikit-learn and TensorFlow on real-world TON_IoT datasets.",
      "Developed a SHAP-guided feature selection algorithm that reduced input features by 65% while maintaining model performance and interpretability.",
      "Investigated adversarial training using SHAP-informed attacks, providing insights for NICT researchers' ongoing studies on adversarial training and defense strategies.",
    ],
    tags: ["Adversarial ML", "NIDS", "SHAP"],
  },
];

export const skills = {
  Languages: ["Mandarin Chinese", "English", "Japanese"],
  Programming: ["Python", "C++", "JavaScript", "Java", "R", "SQL"],
  "Libraries / Frameworks": ["scikit-learn", "TensorFlow", "PyTorch", "React", "FastAPI", "Tailwind CSS", "Streamlit", "BeautifulSoup"],
  "Tools / Platforms": ["FAISS", "Google Gemini API", "Alembic", "Git", "AWS", "Render", "Docker", "ROS2", "pytest"],
  Interests: ["Applied ML", "LLM Applications", "Physical AI", "Full-stack AI", "MLOps"],
};

export const homeSkillGroups = [
  {
    title: "Applied ML systems",
    items: ["LLM Apps", "Recommender Systems", "Physical AI", "Robotic Integration"],
  },
  {
    title: "Product engineering",
    items: ["Full-stack AI", "MLOps", "FastAPI", "React"],
  },
  {
    title: "Languages",
    items: ["Mandarin", "English", "Japanese"],
  },
];

export const projectPlaceholders = [
  {
    title: "Project case studies coming soon",
    description:
      "This section will later include selected work in applied ML, Polyglot Sensei, full-stack AI products, and engineering case studies.",
    tags: ["Applied ML", "Full-stack AI", "AI Products"],
  },
  {
    title: "Portfolio details in progress",
    description:
      "I am refining each project into a structured case study with problem, role, technical design, results, and lessons learned.",
    tags: ["Case Study", "Engineering", "Product"],
  },
];
