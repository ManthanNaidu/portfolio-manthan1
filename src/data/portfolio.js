// ─────────────────────────────────────────────────────────────────
// Central data file — edit this to update the entire portfolio
// ─────────────────────────────────────────────────────────────────

export const personal = {
  name: 'Manthan M Y',
  tagline: 'Java Developer & AI/ML Engineer',
  bio: "I'm a Computer Science graduate with hands-on experience building scalable full-stack applications with Java and end-to-end machine learning pipelines. I love turning complex problems into clean, impactful software.",
  email: 'manthanmymanthan@gmail.com',
  github: 'https://github.com/ManthanNaidu',
  linkedin: 'https://www.linkedin.com/in/manthan-m-y-935a262ba/',
  location: 'Bengaluru, Karnataka, India',
  available: true,
  resumeJava: '/resume-java.pdf',
  resumeML: '/resume-ml.pdf',
  // ── Place your photo at public/profile.jpg, then set this to '/profile.jpg' ──
  photo: null, // e.g. '/profile.jpg'
};

export const education = [
  {
    degree: 'Bachelor of Engineering — Computer Science & Engineering',
    institution: 'Visvesvaraya Technological University (VTU)',
    duration: '2021 – 2025',
    cgpa: '8.91 / 10',
    location: 'Karnataka, India',
  },
  {
    degree: 'Pre-University (Science)',
    institution: 'St. Johns Composite PU College',
    duration: '2019 – 2021',
    cgpa: '81%',
    location: 'Karnataka, India',
  },
  {
    degree: 'SSLC (10th Standard)',
    institution: 'Daffodils English High School',
    duration: '2018 – 2019',
    cgpa: '89.44%',
    location: 'Karnataka, India',
  },
];

export const experience = [
  {
    role: 'Java Full Stack Developer Intern',
    company: 'Global Next Consulting',
    duration: 'Jan 2025 – Apr 2025',
    location: 'Remote',
    type: 'Full Stack',
    points: [
      'Developed RESTful APIs using Java for a client HR management system, reducing processing time by 40%.',
      'Built responsive UI with JavaScript and integrated with backend via Axios, improving UX for 500+ users.',
      'Collaborated with senior developers on database design using MySQL, implementing optimized queries and indexing.',
      'Participated in Agile sprints, code reviews, and daily standups with a cross-functional team.',
    ],
  },
  {
    role: 'AI/ML Engineering Intern',
    company: 'Dhee Coding Lab',
    duration: 'Jun 2024 – Sep 2024',
    location: 'Bengaluru, India',
    type: 'AI/ML',
    points: [
      'Built and deployed ML models for customer segmentation using K-Means and DBSCAN achieving 87% silhouette score.',
      'Implemented NLP pipeline for text classification using Python, NLTK, and Scikit-learn.',
      'Created data visualization dashboards using Matplotlib and Seaborn for presenting model insights to stakeholders.',
      'Preprocessed and cleaned 50K+ records from real-world datasets to improve model accuracy by 18%.',
    ],
  },
];

export const projects = [
  {
    title: 'ATS Resume Optimizer',
    description:
      'A production-grade web app that analyzes resumes against job descriptions, gives ATS match scores, identifies missing keywords, and generates complete tailored resumes from JDs — all client-side, no backend.',
    tech: ['Vite', 'Tailwind CSS', 'jsPDF', 'NLP Algorithms', 'JavaScript'],
    type: 'Full Stack',
    live: 'https://ats-optimizer1.vercel.app',
    github: 'https://github.com/ManthanNaidu/ats-optimizer1',
    featured: true,
  },
  {
    title: 'Payroll Management System',
    description:
      'An enterprise payroll system with role-based access control, automated salary calculation, tax deductions, and PDF payslip generation. Built with Java MVC and MySQL.',
    tech: ['Java', 'MySQL', 'Thymeleaf', 'REST API', 'HTML/CSS'],
    type: 'Full Stack',
    live: null,
    github: 'https://github.com/ManthanNaidu',
    featured: true,
  },
  {
    title: 'Disaster Prediction System',
    description:
      'ML model that predicts likelihood of natural disasters (floods, droughts) using historical climate data. Uses Random Forest and XGBoost with an interactive Streamlit dashboard.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Streamlit'],
    type: 'AI/ML',
    live: null,
    github: 'https://github.com/ManthanNaidu',
    featured: true,
  },
  {
    title: 'Customer Segmentation Engine',
    description:
      'Unsupervised ML pipeline for e-commerce customer segmentation using K-Means and DBSCAN clustering. Includes RFM analysis, PCA for dimensionality reduction, and visualization dashboard.',
    tech: ['Python', 'Scikit-learn', 'K-Means', 'PCA', 'Matplotlib', 'Seaborn'],
    type: 'AI/ML',
    live: null,
    github: 'https://github.com/ManthanNaidu',
    featured: true,
  },
  {
    title: 'Student Management Portal',
    description:
      'Full-stack web portal for managing student records, attendance, grades, and notifications. Includes RESTful API backend with Java and real-time search functionality.',
    tech: ['Java', 'MySQL', 'REST API', 'HTML/CSS', 'JavaScript'],
    type: 'Full Stack',
    live: null,
    github: 'https://github.com/ManthanNaidu',
    featured: false,
  },
  {
    title: 'Sentiment Analysis Dashboard',
    description:
      'Real-time sentiment analysis tool for social media data using NLP. Classifies tweets and reviews as positive, negative, or neutral with confidence scores and live trend graphs.',
    tech: ['Python', 'NLTK', 'TextBlob', 'Pandas', 'Streamlit', 'Plotly'],
    type: 'AI/ML',
    live: null,
    github: 'https://github.com/ManthanNaidu',
    featured: false,
  },
  {
    title: 'Inventory Management System',
    description:
      'A Java-based inventory tracking system for small businesses with barcode scanning support, stock alerts, purchase order management, and sales reporting dashboard.',
    tech: ['Java', 'MySQL', 'JDBC', 'Swing UI', 'REST API'],
    type: 'Full Stack',
    live: null,
    github: 'https://github.com/ManthanNaidu',
    featured: false,
  },
];

export const skills = {
  'Languages': [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'SQL', level: 82 },
    { name: 'HTML/CSS', level: 88 },
  ],
  'Full Stack': [
    { name: 'REST APIs', level: 90 },
    { name: 'MySQL', level: 85 },
    { name: 'MongoDB', level: 70 },
    { name: 'JDBC', level: 80 },
    { name: 'Thymeleaf', level: 75 },
    { name: 'Servlet/JSP', level: 72 },
  ],
  'AI / ML': [
    { name: 'Scikit-learn', level: 85 },
    { name: 'TensorFlow', level: 72 },
    { name: 'Pandas', level: 88 },
    { name: 'NumPy', level: 86 },
    { name: 'NLP', level: 75 },
    { name: 'Streamlit', level: 78 },
  ],
  'Tools & DevOps': [
    { name: 'Git & GitHub', level: 88 },
    { name: 'Docker', level: 65 },
    { name: 'Postman', level: 85 },
    { name: 'VS Code', level: 92 },
    { name: 'IntelliJ IDEA', level: 88 },
    { name: 'Jupyter', level: 85 },
  ],
};

export const certifications = [
  {
    name: 'Google AI Essentials',
    issuer: 'Google',
    year: '2024',
    color: 'blue',
  },
  {
    name: 'NVIDIA — Fundamentals of Deep Learning',
    issuer: 'NVIDIA',
    year: '2024',
    color: 'green',
  },
  {
    name: 'Microsoft Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    year: '2024',
    color: 'indigo',
  },
  {
    name: 'Java Full Stack Development',
    issuer: 'Udemy',
    year: '2023',
    color: 'orange',
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera (Stanford)',
    year: '2024',
    color: 'purple',
  },
];

export const stats = [
  { value: '8.91', label: 'CGPA / 10', suffix: '' },
  { value: '7',    label: 'Projects Built', suffix: '+' },
  { value: '2',    label: 'Internships', suffix: '' },
  { value: '5',    label: 'Certifications', suffix: '+' },
];
