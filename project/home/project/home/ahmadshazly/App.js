import React, { useState, useEffect } from "react";
import {
  Home,
  BookOpen,
  BrainCircuit,
  Settings,
  Search,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  ClipboardCheck,
  PlayCircle,
  ArrowLeft,
  Info,
  Clock,
  ShieldAlert,
  GraduationCap,
  History,
  FileText,
  User,
  ArrowRight,
  LayoutGrid,
  Stethoscope,
  Droplets,
  X,
  Link as LinkIcon,
  Image as ImageIcon,
  FlaskConical,
  Wrench,
  Microscope,
  ListChecks,
  Activity,
  Monitor,
  Users,
  ShieldCheck,
  Building2,
  BriefcaseMedical,
} from "lucide-react";

const App = () => {
  const homeSystemCards = [
    {
      title: "GIT",
      subtitle: "Gastrointestinal",
      image: "/systems/git.jpg",
    },
    {
      title: "Biliary",
      subtitle: "Biliary System",
      image: "/systems/biliary.jpg",
    },
    {
      title: "Urinary",
      subtitle: "Urinary System",
      image: "/systems/urinary.jpg",
    },
    {
      title: "HSG",
      subtitle: "Hysterosalpingography",
      image: "/systems/hsg.jpg",
    },
    {
      title: "Lacrimal",
      subtitle: "Lacrimal System",
      image: "/systems/lacrimal.jpg",
    },
    {
      title: "Salivary",
      subtitle: "Salivary Gland",
      image: "/systems/salivary.jpg",
    },
  ];
  const atlasItems = [
    {
      id: "fluoroscopy-fundamentals",
      title: "Fluoroscopy Fundamentals",
      subtitle:
        "Learn the core principles, equipment, and safety of real-time X-ray imaging.",
      image: null,
      category: "All",
      featured: true,
    },

    {
      id: "atlas-barium-swallow",
      title: "Barium Swallow",
      image: "/procedures/barium-swallow.jpg",
      category: "GIT",
    },
    {
      id: "atlas-barium-meal",
      title: "Barium Meal",
      image: "/procedures/barium-meal.jpg",
      category: "GIT",
    },
    {
      id: "atlas-follow-through",
      title: "Follow Through",
      image: "/procedures/follow-through.jpg",
      category: "GIT",
    },
    {
      id: "atlas-barium-enema",
      title: "Barium Enema",
      image: "/procedures/barium-enema.jpg",
      category: "GIT",
    },

    {
      id: "atlas-ptc",
      title: "PTC",
      image: "/procedures/ptc.jpg",
      category: "Biliary",
    },
    {
      id: "atlas-ptbd",
      title: "PTBD",
      image: "/procedures/ptbd.jpg",
      category: "Biliary",
    },
    {
      id: "atlas-ptgbd",
      title: "PTGBD",
      image: "/procedures/ptgbd.jpg",
      category: "Biliary",
    },
    {
      id: "atlas-t-tube",
      title: "T-tube Cholangiography",
      image: "/procedures/t-tube.jpg",
      category: "Biliary",
    },

    {
      id: "atlas-antegrade",
      title: "Antegrade Pyelography",
      image: "/procedures/antegrade.jpg",
      category: "Urinary",
    },
    {
      id: "atlas-retrograde",
      title: "Retrograde Urography",
      image: "/procedures/retrograde.jpg",
      category: "Urinary",
    },
    {
      id: "atlas-vcug",
      title: "VCUG",
      image: "/procedures/vcug.jpg",
      category: "Urinary",
    },
    {
      id: "atlas-ivu",
      title: "IVU",
      image: "/procedures/ivu.jpg",
      category: "Urinary",
    },

    {
      id: "atlas-hsg",
      title: "HSG",
      image: "/procedures/hsg.jpg",
      category: "Hysterosalpingography(HSG)",
    },

    {
      id: "atlas-dacryocystography",
      title: "Dacryocystography",
      image: "/procedures/dacryocystography.jpg",
      category: "Lacrimal System",
    },
    {
      id: "atlas-sialography",
      title: "Sialography",
      image: "/procedures/sialography.jpg",
      category: "Salivary Gland",
    },
  ];

  const handleHomeSystemCardClick = (card) => {
    setActiveTab("procedures");
    setProcCategory(card.title);
  };
  const [activeTab, setActiveTab] = useState("home");
  const [procCategory, setProcCategory] = useState("All");
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [showSafetyCheck, setShowSafetyCheck] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showTeamPage, setShowTeamPage] = useState(false);
  const [atlasCategory, setAtlasCategory] = useState("All");
  const [atlasSearch, setAtlasSearch] = useState("");
  const [showMasterclassPage, setShowMasterclassPage] = useState(false);
  const [expandedFluoroType, setExpandedFluoroType] = useState(null);

  const [quizView, setQuizView] = useState("dashboard");

  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const [questionCount, setQuestionCount] = useState(10);
  const [speedMode, setSpeedMode] = useState(true);
  const [zenMode, setZenMode] = useState(false);

  const [quizHistory, setQuizHistory] = useState([]);
  const [savedQuizzes, setSavedQuizzes] = useState([]);
  const [earnedBadges, setEarnedBadges] = useState([]);

  const clinicalSupervision = [
    {
      name: "Dr. Alzahraa Sayed Hassan",
      role: "Main Project Supervisor",
      title: "Lecturer Of Diagnostic Radiology",
      place: "Faculty Of Medicine — Assiut University",
      accent: "amber",
    },
    {
      name: "Dr. Soadaa Khalifa Hussein",
      role: "Clinical Facilitator",
      title: "Demonstrator Of Radiology & Medical Imaging",
      place: "Faculty Of Applied Health Sciences Technology Sphinx University",
      accent: "blue",
    },
  ];

  const contentResearchTeam = [
    "Shrouk Saad Mosa",
    "Omnia Mohamed Farghly",
    "Reham Adel Sayed",
    "Eman Hussein Mahmoud",
    "Nourhan Moemen Sabry",
    "Hadeer Ali Hassan",
    "Shahd Salem Mohamed",
    "Ahmed Mustafa Kamel",
    "Mohamed Sabry Mohamed",
    "Ahmed Badry Abdeltawab",
    "Amr Khaled Khalaf",
    "Abd Al Rahman Ashraf Hussein",
  ];
  const atlasCategories = [
    "All",
    "GIT",
    "Biliary",
    "Urinary",
    "Hysterosalpingography(HSG)",
    "Lacrimal System",
    "Salivary Gland",
  ];
  const procedureQuizMeta = [
    {
      id: "fluoroscopy-fundamentals",
      title: "Fluoroscopy Fundamentals",
      subtitle: "Procedure Practice",
      color: "from-sky-400 to-cyan-500",
      glow: "shadow-sky-500/30",
      iconBg: "bg-sky-500/15",
    },
    {
      id: "barium-swallow",
      title: "Barium Swallow",
      subtitle: "GIT Mastery",
      color: "from-amber-500 to-orange-500",
      glow: "shadow-amber-500/20",
      iconBg: "bg-amber-500/15",
    },
    {
      id: "barium-meal",
      title: "Barium Meal",
      subtitle: "GIT Mastery",
      color: "from-amber-500 to-orange-500",
      glow: "shadow-amber-500/20",
      iconBg: "bg-amber-500/15",
    },
    {
      id: "follow-through",
      title: "Follow Through",
      subtitle: "GIT Mastery",
      color: "from-amber-500 to-orange-500",
      glow: "shadow-amber-500/20",
      iconBg: "bg-amber-500/15",
    },
    {
      id: "barium-enema",
      title: "Barium Enema",
      subtitle: "GIT Mastery",
      color: "from-amber-500 to-orange-500",
      glow: "shadow-amber-500/20",
      iconBg: "bg-amber-500/15",
    },
    {
      id: "ptc",
      title: "PTC",
      subtitle: "Biliary Mastery",
      color: "from-emerald-500 to-green-500",
      glow: "shadow-emerald-500/20",
      iconBg: "bg-emerald-500/15",
    },
    {
      id: "ptbd",
      title: "PTBD",
      subtitle: "Biliary Mastery",
      color: "from-emerald-500 to-green-500",
      glow: "shadow-emerald-500/20",
      iconBg: "bg-emerald-500/15",
    },
    {
      id: "ptgbd",
      title: "PTGBD",
      subtitle: "Biliary Mastery",
      color: "from-emerald-500 to-green-500",
      glow: "shadow-emerald-500/20",
      iconBg: "bg-emerald-500/15",
    },
    {
      id: "t-tube",
      title: "T-tube Cholangiography",
      subtitle: "Biliary Mastery",
      color: "from-emerald-500 to-green-500",
      glow: "shadow-emerald-500/20",
      iconBg: "bg-emerald-500/15",
    },
    {
      id: "antegrade-pyelography",
      title: "Antegrade Pyelography",
      subtitle: "Urinary Mastery",
      color: "from-violet-500 to-fuchsia-500",
      glow: "shadow-violet-500/20",
      iconBg: "bg-violet-500/15",
    },
    {
      id: "retrograde-urography",
      title: "Retrograde Urography",
      subtitle: "Urinary Mastery",
      color: "from-violet-500 to-fuchsia-500",
      glow: "shadow-violet-500/20",
      iconBg: "bg-violet-500/15",
    },
    {
      id: "vcug",
      title: "VCUG",
      subtitle: "Urinary Mastery",
      color: "from-violet-500 to-fuchsia-500",
      glow: "shadow-violet-500/20",
      iconBg: "bg-violet-500/15",
    },
    {
      id: "ivu",
      title: "IVU",
      subtitle: "Urinary Mastery",
      color: "from-violet-500 to-fuchsia-500",
      glow: "shadow-violet-500/20",
      iconBg: "bg-violet-500/15",
    },
    {
      id: "hsg",
      title: "HSG",
      subtitle: "HSG Mastery",
      color: "from-pink-500 to-rose-500",
      glow: "shadow-pink-500/20",
      iconBg: "bg-pink-500/15",
    },
    {
      id: "lacrimal",
      title: "Dacryocystography",
      subtitle: "Lacrimal Mastery",
      color: "from-cyan-500 to-sky-500",
      glow: "shadow-cyan-500/20",
      iconBg: "bg-cyan-500/15",
    },
    {
      id: "sialography",
      title: "Sialography",
      subtitle: "Salivary Mastery",
      color: "from-lime-500 to-green-500",
      glow: "shadow-lime-500/20",
      iconBg: "bg-lime-500/15",
    },
  ];
  const quizBank = {
    "fluoroscopy-fundamentals": [
      {
        question: "What is the main advantage of fluoroscopy?",
        options: [
          "Real-time imaging",
          "No radiation exposure",
          "Only soft tissue imaging",
          "No contrast needed",
        ],
        answer: "Real-time imaging",
      },
      {
        question: "Which device intensifies the fluoroscopic image?",
        options: [
          "Image intensifier",
          "ECG monitor",
          "Ultrasound probe",
          "Grid cabinet",
        ],
        answer: "Image intensifier",
      },
      {
        question: "Why is collimation important in fluoroscopy?",
        options: [
          "It reduces unnecessary radiation",
          "It increases patient weight",
          "It replaces contrast media",
          "It stops image recording",
        ],
        answer: "It reduces unnecessary radiation",
      },
      {
        question: "The ALARA principle means:",
        options: [
          "Keep radiation as low as reasonably achievable",
          "Always use the highest exposure",
          "Avoid all contrast studies",
          "Repeat imaging routinely",
        ],
        answer: "Keep radiation as low as reasonably achievable",
      },
      {
        question: "Which operator is more exposed during fluoroscopy?",
        options: [
          "The staff standing near the X-ray source",
          "The receptionist",
          "The patient’s relative outside the room",
          "The radiology report writer",
        ],
        answer: "The staff standing near the X-ray source",
      },
      {
        question: "Lead aprons are used mainly to:",
        options: [
          "Reduce radiation exposure",
          "Improve image resolution",
          "Increase fluoroscopy speed",
          "Replace collimation",
        ],
        answer: "Reduce radiation exposure",
      },
      {
        question: "A pulsed fluoroscopy mode helps to:",
        options: [
          "Reduce radiation dose",
          "Increase contrast allergy",
          "Remove motion from all images",
          "Eliminate the need for a detector",
        ],
        answer: "Reduce radiation dose",
      },
      {
        question: "Contrast media in fluoroscopy is mainly used to:",
        options: [
          "Outline hollow organs and ducts",
          "Treat infection",
          "Stop radiation completely",
          "Increase blood pressure",
        ],
        answer: "Outline hollow organs and ducts",
      },
      {
        question: "The closer the detector to the patient, the:",
        options: [
          "Better image quality and lower magnification",
          "Higher patient motion",
          "Lower safety",
          "More need for surgery",
        ],
        answer: "Better image quality and lower magnification",
      },
      {
        question: "One basic safety rule in fluoroscopy is to:",
        options: [
          "Minimize time, maximize distance, and use shielding",
          "Stand closer to the beam",
          "Remove protective equipment",
          "Always repeat all images twice",
        ],
        answer: "Minimize time, maximize distance, and use shielding",
      },
    ],

    "barium-swallow": [
      {
        question:
          "What is the most common indication for a Barium Swallow study?",
        options: ["Dysphagia", "Renal failure", "Headache", "Bone fracture"],
        answer: "Dysphagia",
      },
      {
        question:
          "Which contrast material is most commonly used in a routine Barium Swallow?",
        options: [
          "Barium sulfate",
          "Gadolinium",
          "Normal saline",
          "Carbon dioxide only",
        ],
        answer: "Barium sulfate",
      },
      {
        question:
          "If esophageal perforation is suspected, the preferred contrast is:",
        options: [
          "Water-soluble contrast",
          "Thick barium only",
          "Air only",
          "MRI contrast",
        ],
        answer: "Water-soluble contrast",
      },
      {
        question:
          "The most important view for assessing swallowing phases and aspiration is:",
        options: [
          "Lateral view",
          "AP view",
          "Oblique foot view",
          "Tangential view",
        ],
        answer: "Lateral view",
      },
      {
        question: "One important preparation before Barium Swallow is:",
        options: [
          "Fasting for 6–8 hours",
          "Heavy meal before exam",
          "Drinking only milk",
          "Doing vigorous exercise",
        ],
        answer: "Fasting for 6–8 hours",
      },
      {
        question:
          "Which of the following should be avoided before the study to reduce secretions?",
        options: [
          "Smoking and chewing gum",
          "Reading books",
          "Walking slowly",
          "Wearing light clothes",
        ],
        answer: "Smoking and chewing gum",
      },
      {
        question: "A major possible complication of Barium Swallow is:",
        options: [
          "Aspiration",
          "Hypertension",
          "Hyperglycemia",
          "Kidney stone formation",
        ],
        answer: "Aspiration",
      },
      {
        question:
          "Frontal views in Barium Swallow are useful mainly to detect:",
        options: [
          "Asymmetric abnormalities",
          "ECG changes",
          "Bladder reflux",
          "Liver enlargement",
        ],
        answer: "Asymmetric abnormalities",
      },
      {
        question: "Videofluoroscopy is especially useful because it:",
        options: [
          "Records swallowing in real time",
          "Eliminates radiation completely",
          "Replaces all contrast media",
          "Measures blood pressure",
        ],
        answer: "Records swallowing in real time",
      },
      {
        question:
          "High-osmolar water-soluble agents such as Gastrografin should be avoided when there is:",
        options: [
          "A high risk of aspiration",
          "Normal swallowing",
          "Mild thirst only",
          "No symptoms at all",
        ],
        answer: "A high risk of aspiration",
      },
    ],

    "barium-meal": [
      {
        question: "What is the main purpose of a Barium Meal study?",
        options: [
          "Examination of the stomach and duodenum",
          "Evaluation of the brain",
          "Assessment of kidney function",
          "Measurement of blood pressure",
        ],
        answer: "Examination of the stomach and duodenum",
      },
      {
        question: "Which contrast medium is used in a Barium Meal?",
        options: ["Barium sulfate", "Gadolinium", "Saline", "Air only"],
        answer: "Barium sulfate",
      },
      {
        question: "What is the required preparation before a Barium Meal?",
        options: [
          "Fasting for 6–8 hours",
          "Eating a heavy meal",
          "Drinking large amounts of water",
          "Taking antibiotics",
        ],
        answer: "Fasting for 6–8 hours",
      },
      {
        question: "Which structure is primarily visualized in a Barium Meal?",
        options: ["Stomach", "Colon", "Bladder", "Brain"],
        answer: "Stomach",
      },
      {
        question: "Which position is commonly used to visualize the stomach?",
        options: [
          "RAO position",
          "Supine only",
          "Standing only",
          "Lateral foot position",
        ],
        answer: "RAO position",
      },
      {
        question: "What is the role of fluoroscopy in Barium Meal?",
        options: [
          "To observe real-time gastric movement",
          "To measure blood sugar",
          "To detect ECG abnormalities",
          "To replace X-ray imaging",
        ],
        answer: "To observe real-time gastric movement",
      },
      {
        question: "Which condition can be detected using Barium Meal?",
        options: [
          "Peptic ulcer",
          "Fractured bone",
          "Brain tumor",
          "Kidney stone",
        ],
        answer: "Peptic ulcer",
      },
      {
        question: "Why is double contrast technique used in Barium Meal?",
        options: [
          "To improve mucosal detail visualization",
          "To reduce radiation completely",
          "To eliminate need for contrast",
          "To increase patient movement",
        ],
        answer: "To improve mucosal detail visualization",
      },
      {
        question: "A contraindication of Barium Meal is:",
        options: [
          "Suspected gastrointestinal perforation",
          "Mild stomach pain",
          "Normal appetite",
          "Minor headache",
        ],
        answer: "Suspected gastrointestinal perforation",
      },
      {
        question: "One possible complication of Barium Meal is:",
        options: [
          "Constipation",
          "Hypertension",
          "Hyperglycemia",
          "Vision loss",
        ],
        answer: "Constipation",
      },
    ],
    "follow-through": [
      {
        question: "What is the primary purpose of a Follow Through study?",
        options: [
          "Evaluate small intestine motility and structure",
          "Examine the brain",
          "Assess kidney filtration",
          "Measure lung capacity",
        ],
        answer: "Evaluate small intestine motility and structure",
      },
      {
        question: "In Follow Through, contrast progression is monitored by:",
        options: [
          "Serial radiographs at intervals",
          "Single static image",
          "Ultrasound only",
          "MRI scanning",
        ],
        answer: "Serial radiographs at intervals",
      },
      {
        question: "The study is usually completed when contrast reaches:",
        options: ["Ileocecal junction", "Stomach only", "Esophagus", "Liver"],
        answer: "Ileocecal junction",
      },
      {
        question: "Which condition is best evaluated using Follow Through?",
        options: [
          "Crohn’s disease",
          "Brain hemorrhage",
          "Kidney stones",
          "Lung infection",
        ],
        answer: "Crohn’s disease",
      },
      {
        question: "Why is patient positioning important during Follow Through?",
        options: [
          "To separate bowel loops for better visualization",
          "To increase radiation exposure",
          "To stop contrast flow",
          "To reduce imaging time",
        ],
        answer: "To separate bowel loops for better visualization",
      },
      {
        question: "A delayed transit time in Follow Through may indicate:",
        options: [
          "Obstruction",
          "Normal finding",
          "High blood pressure",
          "Good digestion",
        ],
        answer: "Obstruction",
      },
      {
        question:
          "Which of the following improves visualization of mucosal pattern?",
        options: [
          "Proper compression",
          "Skipping contrast",
          "Short exposure time",
          "Standing far from detector",
        ],
        answer: "Proper compression",
      },
      {
        question: "The patient should be instructed to:",
        options: [
          "Remain cooperative and change positions when needed",
          "Sleep during the exam",
          "Avoid drinking contrast",
          "Move excessively",
        ],
        answer: "Remain cooperative and change positions when needed",
      },
      {
        question: "Which of the following is a contraindication?",
        options: [
          "Suspected bowel perforation",
          "Mild abdominal discomfort",
          "Normal digestion",
          "Slight nausea",
        ],
        answer: "Suspected bowel perforation",
      },
      {
        question: "One common complication of Follow Through is:",
        options: [
          "Constipation",
          "Vision loss",
          "Hearing loss",
          "Hypertension",
        ],
        answer: "Constipation",
      },
    ],
    "barium-enema": [
      {
        question: "What is the main purpose of a Barium Enema study?",
        options: [
          "Examination of the large intestine",
          "Assessment of the brain",
          "Evaluation of the kidneys",
          "Measurement of blood pressure",
        ],
        answer: "Examination of the large intestine",
      },
      {
        question: "Which contrast is primarily used in Barium Enema?",
        options: ["Barium sulfate", "Gadolinium", "Saline", "Iodine only"],
        answer: "Barium sulfate",
      },
      {
        question: "Which preparation is essential before a Barium Enema?",
        options: [
          "Bowel cleansing (laxatives and diet)",
          "Eating a heavy meal",
          "Drinking milk",
          "No preparation needed",
        ],
        answer: "Bowel cleansing (laxatives and diet)",
      },
      {
        question:
          "Which position is commonly used to distribute contrast in the colon?",
        options: [
          "Various positions including supine and prone",
          "Standing only",
          "Sitting only",
          "Lateral foot position",
        ],
        answer: "Various positions including supine and prone",
      },
      {
        question: "What is the purpose of double contrast in Barium Enema?",
        options: [
          "To enhance mucosal detail visualization",
          "To eliminate radiation",
          "To avoid contrast use",
          "To increase patient movement",
        ],
        answer: "To enhance mucosal detail visualization",
      },
      {
        question: "Which condition can be detected using Barium Enema?",
        options: [
          "Colon polyps",
          "Brain tumor",
          "Kidney stones",
          "Lung infection",
        ],
        answer: "Colon polyps",
      },
      {
        question: "A major contraindication for Barium Enema is:",
        options: [
          "Suspected bowel perforation",
          "Mild constipation",
          "Normal digestion",
          "Minor headache",
        ],
        answer: "Suspected bowel perforation",
      },
      {
        question: "Which symptom is a common indication for Barium Enema?",
        options: [
          "Rectal bleeding",
          "Headache",
          "Chest pain",
          "Blurred vision",
        ],
        answer: "Rectal bleeding",
      },
      {
        question:
          "What is the function of the rectal catheter in Barium Enema?",
        options: [
          "To introduce contrast into the colon",
          "To measure blood pressure",
          "To monitor heart rate",
          "To detect brain activity",
        ],
        answer: "To introduce contrast into the colon",
      },
      {
        question: "One possible complication of Barium Enema is:",
        options: [
          "Perforation (rare)",
          "Hearing loss",
          "Vision loss",
          "Hypertension",
        ],
        answer: "Perforation (rare)",
      },
    ],
    ptc: [
      {
        question: "What is the main purpose of PTC?",
        options: [
          "Visualization of the biliary tree",
          "Examination of the lungs",
          "Assessment of the brain",
          "Measurement of blood pressure",
        ],
        answer: "Visualization of the biliary tree",
      },
      {
        question: "PTC involves inserting a needle through:",
        options: [
          "The liver into the bile ducts",
          "The stomach into the pancreas",
          "The kidney into the ureter",
          "The lung into the bronchi",
        ],
        answer: "The liver into the bile ducts",
      },
      {
        question: "Which imaging guidance is commonly used during PTC?",
        options: [
          "Fluoroscopy or ultrasound",
          "ECG monitor",
          "Endoscopy only",
          "MRI without guidance",
        ],
        answer: "Fluoroscopy or ultrasound",
      },
      {
        question: "The main indication for PTC is:",
        options: [
          "Obstructive jaundice",
          "Headache",
          "Bone fracture",
          "Hypertension",
        ],
        answer: "Obstructive jaundice",
      },
      {
        question: "Which structure is directly visualized in PTC?",
        options: ["Bile ducts", "Esophagus", "Colon", "Bladder"],
        answer: "Bile ducts",
      },
      {
        question: "A major risk of PTC is:",
        options: ["Bleeding", "Hair loss", "Vision loss", "Hearing loss"],
        answer: "Bleeding",
      },
      {
        question: "Which complication may occur due to bile leakage?",
        options: ["Bile peritonitis", "Hypertension", "Diabetes", "Asthma"],
        answer: "Bile peritonitis",
      },
      {
        question: "Before PTC, it is important to check:",
        options: [
          "Coagulation profile",
          "Eye color",
          "Height only",
          "Hair condition",
        ],
        answer: "Coagulation profile",
      },
      {
        question: "Contrast in PTC is injected into:",
        options: ["Biliary ducts", "Blood vessels only", "Stomach", "Colon"],
        answer: "Biliary ducts",
      },
      {
        question: "PTC can also be used for:",
        options: [
          "Drainage of obstructed bile ducts",
          "Measuring heart rate",
          "Treating fractures",
          "Monitoring brain waves",
        ],
        answer: "Drainage of obstructed bile ducts",
      },
    ],
    ptbd: [
      // 🔹 Medium Questions
      {
        question: "What is the primary purpose of PTBD?",
        options: [
          "Drain bile from obstructed biliary system",
          "Examine lungs",
          "Measure heart rate",
          "Assess kidney function",
        ],
        answer: "Drain bile from obstructed biliary system",
      },
      {
        question: "PTBD is usually performed after which diagnostic procedure?",
        options: ["PTC", "MRI", "CT Brain", "Ultrasound only"],
        answer: "PTC",
      },
      {
        question: "Which condition is a common indication for PTBD?",
        options: [
          "Obstructive jaundice",
          "Headache",
          "Bone fracture",
          "Asthma",
        ],
        answer: "Obstructive jaundice",
      },
      {
        question: "Where is the drainage catheter placed in PTBD?",
        options: [
          "Inside the biliary ducts",
          "Inside the stomach",
          "Inside the colon",
          "Inside the bladder",
        ],
        answer: "Inside the biliary ducts",
      },
      {
        question: "PTBD helps in relieving:",
        options: [
          "Biliary obstruction",
          "Hypertension",
          "Diabetes",
          "Fractures",
        ],
        answer: "Biliary obstruction",
      },

      // 🔥 Hard Questions
      {
        question: "What is the major difference between PTC and PTBD?",
        options: [
          "PTC is diagnostic, PTBD is therapeutic",
          "PTC uses MRI, PTBD uses CT",
          "PTC is non-invasive, PTBD is non-invasive",
          "Both are only diagnostic",
        ],
        answer: "PTC is diagnostic, PTBD is therapeutic",
      },
      {
        question: "Which serious complication can result from PTBD?",
        options: ["Sepsis", "Hair loss", "Vision problems", "Hearing loss"],
        answer: "Sepsis",
      },
      {
        question: "External drainage in PTBD means:",
        options: [
          "Bile is drained outside the body into a bag",
          "Bile flows into stomach",
          "No bile is drained",
          "Bile is absorbed in blood",
        ],
        answer: "Bile is drained outside the body into a bag",
      },
      {
        question: "Internal drainage in PTBD refers to:",
        options: [
          "Restoring bile flow into the intestine",
          "Stopping bile production",
          "Removing bile completely",
          "Sending bile to kidneys",
        ],
        answer: "Restoring bile flow into the intestine",
      },
      {
        question: "Why is sterile technique critical during PTBD?",
        options: [
          "To prevent infection of biliary system",
          "To increase contrast flow",
          "To improve image brightness",
          "To reduce radiation dose",
        ],
        answer: "To prevent infection of biliary system",
      },
    ],
    ptgbd: [
      {
        question: "PTGBD is primarily indicated in patients with:",
        options: [
          "Acute cholecystitis unfit for surgery",
          "Normal gallbladder",
          "Kidney stones",
          "Lung infection",
        ],
        answer: "Acute cholecystitis unfit for surgery",
      },
      {
        question: "The drainage catheter in PTGBD is inserted into:",
        options: [
          "Gallbladder through liver",
          "Bile duct directly",
          "Colon",
          "Stomach",
        ],
        answer: "Gallbladder through liver",
      },
      {
        question: "Why is the transhepatic route preferred in PTGBD?",
        options: [
          "To reduce risk of bile leakage",
          "To increase pain",
          "To avoid imaging guidance",
          "To reduce contrast use",
        ],
        answer: "To reduce risk of bile leakage",
      },
      {
        question:
          "Which imaging modality is most commonly used to guide PTGBD?",
        options: ["Ultrasound", "ECG", "X-ray without guidance", "Endoscopy"],
        answer: "Ultrasound",
      },
      {
        question: "A major advantage of PTGBD over surgery is:",
        options: [
          "Minimally invasive approach",
          "Higher complication rate",
          "Longer recovery time",
          "No need for imaging",
        ],
        answer: "Minimally invasive approach",
      },
      {
        question: "Which complication is most specific to PTGBD?",
        options: [
          "Bile leakage leading to peritonitis",
          "Hair loss",
          "Vision problems",
          "Hypertension",
        ],
        answer: "Bile leakage leading to peritonitis",
      },
      {
        question:
          "Which structure must be carefully avoided during PTGBD needle insertion?",
        options: ["Major blood vessels", "Skin", "Muscles only", "Fat tissue"],
        answer: "Major blood vessels",
      },
      {
        question: "PTGBD is considered a temporary solution because:",
        options: [
          "It stabilizes the patient before definitive surgery",
          "It permanently cures all gallbladder diseases",
          "It removes the gallbladder",
          "It stops bile production",
        ],
        answer: "It stabilizes the patient before definitive surgery",
      },
      {
        question:
          "Which condition increases the risk of bleeding during PTGBD?",
        options: [
          "Coagulopathy",
          "Normal clotting",
          "Healthy liver",
          "Normal blood pressure",
        ],
        answer: "Coagulopathy",
      },
      {
        question:
          "What is the primary function of the drainage catheter in PTGBD?",
        options: [
          "To decompress the inflamed gallbladder",
          "To measure blood pressure",
          "To inject air",
          "To detect heart rate",
        ],
        answer: "To decompress the inflamed gallbladder",
      },
    ],
    "t-tube": [
      {
        question: "T-tube cholangiography is performed after which surgery?",
        options: [
          "Common bile duct exploration",
          "Appendectomy",
          "Nephrectomy",
          "Lung biopsy",
        ],
        answer: "Common bile duct exploration",
      },
      {
        question: "The main purpose of T-tube cholangiography is to:",
        options: [
          "Check bile duct patency",
          "Measure blood pressure",
          "Examine stomach",
          "Assess kidney function",
        ],
        answer: "Check bile duct patency",
      },
      {
        question: "Contrast is injected through:",
        options: ["The T-tube", "Peripheral vein", "Artery", "Rectum"],
        answer: "The T-tube",
      },
      {
        question: "Which complication is commonly checked using T-tube study?",
        options: [
          "Residual stones",
          "Brain tumor",
          "Kidney infection",
          "Fractures",
        ],
        answer: "Residual stones",
      },
      {
        question: "A normal finding in T-tube cholangiography is:",
        options: [
          "Free flow of contrast into duodenum",
          "Blocked bile ducts",
          "Leakage outside ducts",
          "No contrast movement",
        ],
        answer: "Free flow of contrast into duodenum",
      },
      {
        question:
          "Which complication may be detected in T-tube cholangiography?",
        options: ["Bile leak", "Hypertension", "Diabetes", "Hearing loss"],
        answer: "Bile leak",
      },
      {
        question: "Why is fluoroscopy used in T-tube study?",
        options: [
          "To observe contrast flow in real time",
          "To reduce radiation completely",
          "To avoid contrast use",
          "To measure heart rate",
        ],
        answer: "To observe contrast flow in real time",
      },
      {
        question: "If contrast fails to reach the duodenum, it suggests:",
        options: [
          "Obstruction",
          "Normal finding",
          "High blood pressure",
          "Good bile flow",
        ],
        answer: "Obstruction",
      },
      {
        question: "Which precaution should be taken before injecting contrast?",
        options: [
          "Ensure no infection or blockage in tube",
          "Remove the tube",
          "Increase pressure rapidly",
          "Avoid sterile technique",
        ],
        answer: "Ensure no infection or blockage in tube",
      },
      {
        question: "Why is T-tube usually left temporarily after surgery?",
        options: [
          "To allow drainage and later evaluation",
          "To permanently replace bile duct",
          "To stop bile production",
          "To increase digestion",
        ],
        answer: "To allow drainage and later evaluation",
      },
    ],
    "antegrade-pyelography": [
      {
        question: "What is the main purpose of antegrade pyelography?",
        options: [
          "Visualization of the renal pelvis and ureter",
          "Examination of the lungs",
          "Assessment of brain function",
          "Measurement of blood pressure",
        ],
        answer: "Visualization of the renal pelvis and ureter",
      },
      {
        question: "In antegrade pyelography, contrast is injected into:",
        options: [
          "Renal pelvis through the kidney",
          "Bladder directly",
          "Urethra",
          "Colon",
        ],
        answer: "Renal pelvis through the kidney",
      },
      {
        question: "Which imaging guidance is commonly used?",
        options: [
          "Ultrasound or fluoroscopy",
          "ECG",
          "Endoscopy only",
          "MRI only",
        ],
        answer: "Ultrasound or fluoroscopy",
      },
      {
        question: "Antegrade pyelography is usually indicated when:",
        options: [
          "Retrograde access is not possible",
          "Normal urination",
          "No symptoms",
          "Healthy kidneys",
        ],
        answer: "Retrograde access is not possible",
      },
      {
        question:
          "Which condition can be diagnosed using antegrade pyelography?",
        options: [
          "Ureteric obstruction",
          "Brain tumor",
          "Lung infection",
          "Bone fracture",
        ],
        answer: "Ureteric obstruction",
      },
      {
        question: "A major risk of the procedure is:",
        options: ["Bleeding", "Hair loss", "Vision loss", "Hearing loss"],
        answer: "Bleeding",
      },
      {
        question:
          "Which structure is visualized first in antegrade pyelography?",
        options: ["Renal pelvis", "Bladder", "Urethra", "Colon"],
        answer: "Renal pelvis",
      },
      {
        question: "Failure of contrast to pass down the ureter suggests:",
        options: [
          "Obstruction",
          "Normal finding",
          "Good kidney function",
          "High blood pressure",
        ],
        answer: "Obstruction",
      },
      {
        question: "Why is sterile technique important?",
        options: [
          "To prevent infection of urinary tract",
          "To improve image brightness",
          "To reduce contrast use",
          "To avoid radiation",
        ],
        answer: "To prevent infection of urinary tract",
      },
      {
        question: "Antegrade pyelography can also be used for:",
        options: [
          "Guiding nephrostomy placement",
          "Measuring blood sugar",
          "Treating lung disease",
          "Monitoring heart rate",
        ],
        answer: "Guiding nephrostomy placement",
      },
    ],
    "retrograde-urography": [
      {
        question: "What is the main purpose of retrograde urography?",
        options: [
          "Visualization of ureters and renal pelvis via bladder",
          "Examination of lungs",
          "Assessment of brain",
          "Measurement of blood pressure",
        ],
        answer: "Visualization of ureters and renal pelvis via bladder",
      },
      {
        question: "In retrograde urography, contrast is introduced through:",
        options: [
          "Urethra into bladder then ureters",
          "Kidney directly",
          "Vein",
          "Colon",
        ],
        answer: "Urethra into bladder then ureters",
      },
      {
        question: "Which instrument is commonly used?",
        options: [
          "Cystoscope",
          "Stethoscope",
          "Ultrasound probe",
          "ECG machine",
        ],
        answer: "Cystoscope",
      },
      {
        question: "Retrograde urography is usually indicated when:",
        options: [
          "Excretory urography is inconclusive",
          "Patient is healthy",
          "No urinary symptoms",
          "Normal kidney function",
        ],
        answer: "Excretory urography is inconclusive",
      },
      {
        question: "Which structure is filled first with contrast?",
        options: ["Bladder", "Kidney", "Colon", "Urethra only"],
        answer: "Bladder",
      },
      {
        question: "A major advantage of retrograde urography is:",
        options: [
          "No need for kidney function",
          "No contrast used",
          "No imaging required",
          "No equipment needed",
        ],
        answer: "No need for kidney function",
      },
      {
        question: "Which complication may occur during retrograde urography?",
        options: ["Infection", "Hair loss", "Vision loss", "Hearing loss"],
        answer: "Infection",
      },
      {
        question: "If contrast fails to ascend into ureter, it suggests:",
        options: [
          "Obstruction",
          "Normal finding",
          "Good kidney function",
          "High blood pressure",
        ],
        answer: "Obstruction",
      },
      {
        question: "Sterility is crucial in retrograde urography to:",
        options: [
          "Prevent urinary tract infection",
          "Increase contrast flow",
          "Improve image brightness",
          "Reduce radiation",
        ],
        answer: "Prevent urinary tract infection",
      },
      {
        question: "Retrograde urography is considered:",
        options: [
          "An invasive procedure",
          "Non-invasive procedure",
          "No imaging technique",
          "A surgical removal method",
        ],
        answer: "An invasive procedure",
      },
    ],
    vcug: [
      {
        question: "What is the main purpose of VCUG?",
        options: [
          "Evaluate bladder and urethra during voiding",
          "Examine lungs",
          "Assess brain activity",
          "Measure blood pressure",
        ],
        answer: "Evaluate bladder and urethra during voiding",
      },
      {
        question: "VCUG is mainly used to detect:",
        options: [
          "Vesicoureteral reflux",
          "Brain tumor",
          "Kidney stones only",
          "Lung infection",
        ],
        answer: "Vesicoureteral reflux",
      },
      {
        question: "Contrast is introduced into the bladder via:",
        options: ["Urethral catheter", "Kidney injection", "Vein", "Colon"],
        answer: "Urethral catheter",
      },
      {
        question: "The most critical phase in VCUG is:",
        options: [
          "Voiding phase",
          "Resting phase",
          "Sleep phase",
          "Standing phase",
        ],
        answer: "Voiding phase",
      },
      {
        question: "Which patients most commonly undergo VCUG?",
        options: [
          "Children with urinary tract infections",
          "Healthy adults",
          "Patients with fractures",
          "Patients with headache",
        ],
        answer: "Children with urinary tract infections",
      },
      {
        question: "What does vesicoureteral reflux mean?",
        options: [
          "Backward flow of urine from bladder to ureters",
          "Forward flow to urethra",
          "No urine movement",
          "Urine entering lungs",
        ],
        answer: "Backward flow of urine from bladder to ureters",
      },
      {
        question: "Which complication may occur during VCUG?",
        options: [
          "Urinary tract infection",
          "Hair loss",
          "Vision loss",
          "Hypertension",
        ],
        answer: "Urinary tract infection",
      },
      {
        question: "Why is fluoroscopy used in VCUG?",
        options: [
          "To observe dynamic voiding process",
          "To reduce radiation",
          "To avoid contrast",
          "To measure heart rate",
        ],
        answer: "To observe dynamic voiding process",
      },
      {
        question: "If reflux is observed, it indicates:",
        options: [
          "Abnormal urine flow",
          "Normal bladder function",
          "Good kidney filtration",
          "No pathology",
        ],
        answer: "Abnormal urine flow",
      },
      {
        question: "Which precaution is important before VCUG?",
        options: [
          "Maintain sterile catheterization",
          "Avoid imaging",
          "Increase contrast dose randomly",
          "Skip patient instructions",
        ],
        answer: "Maintain sterile catheterization",
      },
    ],
    ivu: [
      // 🟢 Easy
      {
        question:
          "Intravenous Urography (IVU) is a radiographic study in which contrast medium is injected intravenously to evaluate the anatomy and function of which system?",
        options: [
          "Urinary system (kidneys, ureters, bladder)",
          "Respiratory system",
          "Digestive system",
          "Nervous system",
        ],
        answer: "Urinary system (kidneys, ureters, bladder)",
      },
      {
        question:
          "In IVU, the contrast medium is injected into a peripheral vein and then excreted by which organ before visualizing the urinary tract?",
        options: ["Kidneys", "Liver", "Heart", "Lungs"],
        answer: "Kidneys",
      },

      // 🟡 Medium
      {
        question:
          "During an IVU examination, a series of radiographs are taken at different time intervals after contrast injection. What is the main purpose of taking delayed images?",
        options: [
          "To assess excretion and detect possible obstruction",
          "To reduce radiation exposure",
          "To avoid contrast usage",
          "To measure blood pressure",
        ],
        answer: "To assess excretion and detect possible obstruction",
      },
      {
        question:
          "Which of the following is considered an important patient preparation step before undergoing IVU to ensure optimal visualization of urinary structures?",
        options: [
          "Bowel preparation to reduce bowel gas",
          "Eating a heavy meal",
          "Drinking excessive milk",
          "Avoiding hydration",
        ],
        answer: "Bowel preparation to reduce bowel gas",
      },
      {
        question:
          "A patient undergoing IVU shows delayed visualization of one kidney compared to the other. What is the most likely explanation for this finding?",
        options: [
          "Impaired renal function or obstruction",
          "Normal anatomical variation",
          "Improved kidney function",
          "Increased hydration",
        ],
        answer: "Impaired renal function or obstruction",
      },

      // 🔴 Hard
      {
        question:
          "In IVU, contrast medium is filtered by the glomeruli and passes through the renal tubules. Which phase corresponds to the visualization of renal parenchyma immediately after contrast injection?",
        options: [
          "Nephrogram phase",
          "Pyelogram phase",
          "Voiding phase",
          "Cystogram phase",
        ],
        answer: "Nephrogram phase",
      },
      {
        question:
          "Which condition represents a major contraindication to performing IVU due to the risk associated with contrast media administration?",
        options: [
          "Severe renal failure",
          "Mild urinary infection",
          "Normal kidney function",
          "Minor abdominal pain",
        ],
        answer: "Severe renal failure",
      },
      {
        question:
          "During IVU, failure of contrast to pass from the renal pelvis into the ureter may suggest which pathological condition?",
        options: [
          "Ureteric obstruction",
          "Normal urine flow",
          "Good renal function",
          "No abnormality",
        ],
        answer: "Ureteric obstruction",
      },
      {
        question:
          "Which of the following complications may occur due to intravenous injection of iodinated contrast media during IVU?",
        options: [
          "Allergic reaction",
          "Hair loss",
          "Vision improvement",
          "Hearing enhancement",
        ],
        answer: "Allergic reaction",
      },
      {
        question:
          "IVU provides both anatomical and functional information. Which of the following best describes its functional role?",
        options: [
          "Assessing renal excretion and urinary drainage over time",
          "Measuring lung capacity",
          "Evaluating brain activity",
          "Monitoring heart rhythm",
        ],
        answer: "Assessing renal excretion and urinary drainage over time",
      },
    ],
    hsg: [
      {
        question:
          "Hysterosalpingography (HSG) is primarily performed to evaluate infertility by assessing which of the following structures?",
        options: [
          "Uterine cavity and fallopian tube patency",
          "Ovarian blood supply only",
          "Renal pelvis and ureters",
          "Colon and rectum",
        ],
        answer: "Uterine cavity and fallopian tube patency",
      },
      {
        question:
          "During HSG, contrast is introduced through the cervix into the uterine cavity. What is the expected normal finding if both fallopian tubes are patent?",
        options: [
          "Free spillage of contrast into the peritoneal cavity",
          "Contrast remains confined within uterus",
          "No contrast enters uterine cavity",
          "Contrast flows into bladder",
        ],
        answer: "Free spillage of contrast into the peritoneal cavity",
      },
      {
        question:
          "Which of the following is the most appropriate timing for performing HSG in a reproductive-age woman?",
        options: [
          "Immediately after menstruation (early proliferative phase)",
          "During ovulation",
          "During menstruation",
          "Late luteal phase",
        ],
        answer: "Immediately after menstruation (early proliferative phase)",
      },
      {
        question:
          "Failure of contrast to pass through the fallopian tubes during HSG most likely indicates:",
        options: [
          "Tubal obstruction",
          "Normal physiology",
          "Excessive uterine contraction only",
          "Improved fertility",
        ],
        answer: "Tubal obstruction",
      },
      {
        question:
          "Which type of contrast medium is most commonly used in modern HSG procedures?",
        options: [
          "Water-soluble iodinated contrast",
          "Barium sulfate",
          "Air only",
          "Gadolinium",
        ],
        answer: "Water-soluble iodinated contrast",
      },
      {
        question:
          "Why is HSG contraindicated in patients with active pelvic infection?",
        options: [
          "Risk of spreading infection into peritoneal cavity",
          "It reduces image quality",
          "It prevents contrast injection",
          "It increases radiation dose",
        ],
        answer: "Risk of spreading infection into peritoneal cavity",
      },
      {
        question:
          "A patient experiences severe pelvic pain during contrast injection in HSG. What is the most likely explanation?",
        options: [
          "Tubal blockage causing increased pressure",
          "Normal painless response",
          "Improved uterine function",
          "No clinical significance",
        ],
        answer: "Tubal blockage causing increased pressure",
      },
      {
        question:
          "Which complication is specifically associated with HSG due to contrast administration?",
        options: [
          "Allergic reaction to iodinated contrast",
          "Hair loss",
          "Hearing loss",
          "Vision improvement",
        ],
        answer: "Allergic reaction to iodinated contrast",
      },
      {
        question: "Why is fluoroscopy essential during HSG?",
        options: [
          "To observe real-time contrast flow through uterus and tubes",
          "To eliminate radiation",
          "To avoid contrast use",
          "To measure heart rate",
        ],
        answer: "To observe real-time contrast flow through uterus and tubes",
      },
      {
        question:
          "Which of the following findings in HSG may suggest uterine abnormality such as septum or adhesions?",
        options: [
          "Irregular uterine cavity outline",
          "Free spillage of contrast",
          "Smooth symmetrical cavity",
          "Normal tubal filling",
        ],
        answer: "Irregular uterine cavity outline",
      },
    ],
    lacrimal: [
      {
        question: "What is the main purpose of dacryocystography?",
        options: [
          "To evaluate the lacrimal drainage system",
          "To assess lung expansion",
          "To examine the biliary tree",
          "To evaluate the urinary bladder",
        ],
        answer: "To evaluate the lacrimal drainage system",
        explanation:
          "الإجابة الصحيحة لأن dacryocystography هدفها الأساسي تقييم مسار تصريف الدموع من الـ canaliculi والـ lacrimal sac لحد الـ nasolacrimal duct. باقي الاختيارات تخص أجهزة أخرى لا علاقة لها بالقنوات الدمعية.",
      },
      {
        question:
          "In dacryocystography, contrast medium is usually injected through:",
        options: [
          "The lacrimal punctum",
          "The external auditory canal",
          "The urethra",
          "A peripheral vein",
        ],
        answer: "The lacrimal punctum",
        explanation:
          "الإجابة الصحيحة لأن حقن الصبغة يتم من خلال الـ lacrimal punctum للوصول إلى مسار الدموع. الأذن أو الإحليل أو الوريد ليست طرقًا مستخدمة في هذا الفحص.",
      },
      {
        question:
          "Which structure is directly evaluated during dacryocystography?",
        options: [
          "Nasolacrimal duct",
          "Common bile duct",
          "Ureter",
          "Esophagus",
        ],
        answer: "Nasolacrimal duct",
        explanation:
          "الإجابة الصحيحة لأن الفحص يركز على القنوات الدمعية وخاصة الـ nasolacrimal duct لتحديد مكان الانسداد أو التضيق. باقي الاختيارات تخص أجهزة مختلفة تمامًا.",
      },
      {
        question: "The most common indication for dacryocystography is:",
        options: [
          "Epiphora due to suspected lacrimal obstruction",
          "Hematuria",
          "Dysphagia",
          "Obstructive jaundice",
        ],
        answer: "Epiphora due to suspected lacrimal obstruction",
        explanation:
          "الإجابة الصحيحة لأن زيادة الدموع أو epiphora غالبًا تدل على وجود انسداد في مسار تصريف الدموع، وهو أشهر سبب لطلب الفحص. باقي الاختيارات تخص urinary أو GIT أو biliary systems.",
      },
      {
        question:
          "If contrast fails to pass into the nasal cavity during the study, the most likely interpretation is:",
        options: [
          "Obstruction in the lacrimal drainage pathway",
          "Normal lacrimal drainage",
          "Improved tear drainage",
          "Overexposure of the image",
        ],
        answer: "Obstruction in the lacrimal drainage pathway",
        explanation:
          "الإجابة الصحيحة لأن عدم وصول الصبغة للتجويف الأنفي معناه غالبًا وجود انسداد أو severe narrowing في القنوات الدمعية. الطبيعي أن الصبغة تسير حتى الأنف.",
      },
      {
        question:
          "Which imaging method is most commonly used to obtain images during dacryocystography?",
        options: [
          "Fluoroscopy or radiographic imaging",
          "ECG tracing",
          "Electroencephalography",
          "Spirometry",
        ],
        answer: "Fluoroscopy or radiographic imaging",
        explanation:
          "الإجابة الصحيحة لأن الفحص radiographic study ويعتمد على fluoroscopy أو صور أشعة مناسبة لتتبع الصبغة. باقي الاختيارات لا تنتج صورًا للقنوات الدمعية.",
      },
      {
        question: "A major contraindication to dacryocystography is:",
        options: [
          "Active infection of the lacrimal sac or surrounding tissues",
          "Mild thirst",
          "Normal tearing",
          "History of constipation",
        ],
        answer: "Active infection of the lacrimal sac or surrounding tissues",
        explanation:
          "الإجابة الصحيحة لأن وجود infection active قد يزيد خطر انتشار العدوى أو يفاقم الحالة عند الحقن. باقي الاختيارات ليست contraindications حقيقية للفحص.",
      },
      {
        question:
          "Which complication may occur if the procedure is not performed carefully?",
        options: [
          "Trauma to the lacrimal passages",
          "Renal failure",
          "Gallbladder perforation",
          "Cardiac arrhythmia",
        ],
        answer: "Trauma to the lacrimal passages",
        explanation:
          "الإجابة الصحيحة لأن إدخال القنية أو الحقن بعنف قد يسبب إصابة أو trauma في الـ punctum أو canaliculi أو sac. باقي الاختيارات بعيدة عن طبيعة الإجراء.",
      },
      {
        question: "Why is contrast medium used in dacryocystography?",
        options: [
          "To outline the anatomy and site of blockage in the lacrimal passages",
          "To reduce radiation exposure completely",
          "To stop tear production",
          "To replace imaging guidance",
        ],
        answer:
          "To outline the anatomy and site of blockage in the lacrimal passages",
        explanation:
          "الإجابة الصحيحة لأن وظيفة الصبغة هي إظهار التشريح الداخلي ومسار السريان وتحديد موضع الانسداد أو التضيق. لا تقلل الإشعاع ولا توقف إفراز الدموع.",
      },
      {
        question: "A normal dacryocystography study is characterized by:",
        options: [
          "Smooth passage of contrast from punctum to nasal cavity without obstruction",
          "Contrast remaining only in the punctum",
          "No opacification of lacrimal passages",
          "Leakage of contrast into surrounding tissue",
        ],
        answer:
          "Smooth passage of contrast from punctum to nasal cavity without obstruction",
        explanation:
          "الإجابة الصحيحة لأن الطبيعي هو مرور الصبغة بسلاسة عبر المسار الدمعي حتى الأنف بدون leak أو block. بقاء الصبغة في البداية أو عدم امتلاء المسار أو حدوث leakage كلها abnormal findings.",
      },
    ],
    sialography: [
      {
        question: "🦷✨ What is the main purpose of sialography?",
        options: [
          "To evaluate salivary glands and ducts",
          "To examine lungs",
          "To assess brain activity",
          "To evaluate kidneys",
        ],
        answer: "To evaluate salivary glands and ducts",
        explanation:
          "لأن السيلوجرافي بيستخدم لإظهار القنوات والغدد اللعابية (parotid/submandibular) وتحديد أي انسداد أو التهاب. باقي الاختيارات تخص أجهزة أخرى.",
      },
      {
        question: "💉➡️ In sialography, contrast is injected into:",
        options: [
          "Salivary duct opening",
          "Peripheral vein",
          "Bladder",
          "Colon",
        ],
        answer: "Salivary duct opening",
        explanation:
          "الحقن يتم من خلال فتحة القناة اللعابية داخل الفم (Stensen’s/Wharton’s duct). ليس عن طريق الوريد أو أجهزة أخرى.",
      },
      {
        question: "😬💧 Which gland is most commonly examined?",
        options: [
          "Parotid gland",
          "Thyroid gland",
          "Adrenal gland",
          "Pituitary gland",
        ],
        answer: "Parotid gland",
        explanation:
          "الغدة النكافية (Parotid) هي الأكثر فحصًا لأنها الأكثر عرضة لانسدادات القنوات.",
      },
      {
        question: "🚫🧫 A major contraindication of sialography is:",
        options: [
          "Acute infection of salivary gland",
          "Mild dryness",
          "Normal saliva flow",
          "Minor headache",
        ],
        answer: "Acute infection of salivary gland",
        explanation:
          "العدوى النشطة قد تنتشر مع الحقن، لذلك يُمنع الفحص حتى تهدأ الحالة.",
      },
      {
        question: "🪨🔍 Sialography is very useful in detecting:",
        options: [
          "Salivary stones (sialolithiasis)",
          "Brain tumors",
          "Kidney failure",
          "Lung infection",
        ],
        answer: "Salivary stones (sialolithiasis)",
        explanation:
          "الحصوات اللعابية من أشهر أسباب الانسداد وتظهر بوضوح مع الصبغة داخل القنوات.",
      },
      {
        question: "📸⚡ Why is fluoroscopy used during the procedure?",
        options: [
          "To observe real-time contrast flow in ducts",
          "To eliminate radiation",
          "To avoid contrast",
          "To measure heart rate",
        ],
        answer: "To observe real-time contrast flow in ducts",
        explanation:
          "الفلوروسكوبي يخلّيك تشوف حركة الصبغة لحظيًا وتحدد مكان التضيق/الانسداد بدقة.",
      },
      {
        question: "❗🛑 If contrast stops suddenly in the duct, it suggests:",
        options: [
          "Obstruction",
          "Normal flow",
          "Improved function",
          "No pathology",
        ],
        answer: "Obstruction",
        explanation:
          "توقف الصبغة المفاجئ غالبًا يدل على انسداد (حصوة/تضيق). الطبيعي استمرار السريان.",
      },
      {
        question: "🧼🧤 Why is gentle technique important during injection?",
        options: [
          "To prevent duct rupture or trauma",
          "To increase contrast amount",
          "To reduce image brightness",
          "To stop saliva production",
        ],
        answer: "To prevent duct rupture or trauma",
        explanation:
          "الحقن بعنف ممكن يسبب تمزق/إصابة في القناة، لذلك لازم يكون ببطء ولطف.",
      },
      {
        question: "📍💧 A normal sialography finding is:",
        options: [
          "Smooth filling of ducts without leakage",
          "Contrast leakage outside ducts",
          "No duct visualization",
          "Irregular blocked ducts",
        ],
        answer: "Smooth filling of ducts without leakage",
        explanation:
          "الطبيعي امتلاء منتظم للقنوات بدون تسريب أو انقطاع في المسار.",
      },
      {
        question: "🧪⚠️ Which complication may occur rarely after sialography?",
        options: [
          "Allergic reaction to contrast",
          "Vision loss",
          "Hearing loss",
          "Hypertension",
        ],
        answer: "Allergic reaction to contrast",
        explanation:
          "بسبب استخدام صبغة (غالبًا iodinated) ممكن يحدث تحسس نادرًا.",
      },
    ],
  };

  const getCurrentQuizQuestions = () => {
    if (!selectedQuiz) return [];
    const allQuestions = quizBank[selectedQuiz.id] || [];
    return allQuestions.slice(0, questionCount);
  };

  const startQuizSetup = (quizItem) => {
    setSelectedQuiz(quizItem);
    setQuestionCount(10);
    setSpeedMode(true);
    setZenMode(false);
    setQuizView("settings");
  };

  const startQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setTimeLeft(speedMode ? 10 : 15);
    setQuizView("playing");
  };

  const handleAnswerClick = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    const questions = getCurrentQuizQuestions();
    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      handleNextQuestion();
    }, 700);
  };

  const handleNextQuestion = () => {
    const questions = getCurrentQuizQuestions();
    setSelectedAnswer(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(speedMode ? 10 : 15);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const result = {
      id: Date.now(),
      quizId: selectedQuiz.id,
      title: selectedQuiz.title,
      score,
      total: getCurrentQuizQuestions().length,
      percentage: Math.round((score / getCurrentQuizQuestions().length) * 100),
      date: new Date().toLocaleString(),
    };

    setQuizHistory((prev) => [result, ...prev]);

    if (result.percentage >= 90) {
      setEarnedBadges((prev) =>
        prev.includes(`${selectedQuiz.id}-master`)
          ? prev
          : [...prev, `${selectedQuiz.id}-master`]
      );
    }

    setQuizFinished(true);
    setQuizView("result");
  };

  const resetQuizFlow = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(15);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setQuizView("dashboard");
  };

  // 🔥 TIMER

  useEffect(() => {
    if (quizView !== "playing" || quizFinished) return;

    if (timeLeft === 0) {
      handleNextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, quizView, quizFinished, currentQuestion, speedMode]);

  // 🔥 FUNCTIONS
  const filteredAtlasItems = atlasItems.filter((item) => {
    const matchesCategory =
      atlasCategory === "All" ||
      item.category === atlasCategory ||
      item.featured;

    const matchesSearch = item.title
      .toLowerCase()
      .includes(atlasSearch.toLowerCase());

    return matchesCategory && matchesSearch && !item.featured;
  });

  const featuredAtlasItem = atlasItems.find((item) => item.featured);
  const fluoroscopyTypes = [
    {
      id: 1,
      title: "1- R/F Units with Under-Table X-ray Tube",
      image: "/procedures/rf.jpg",
      content: `
  - X-ray tube under the table and image intensifier above the patient.
  - Most common configuration used for GI, GU, and other diagnostic procedures. (2)
      `,
    },
    {
      id: 2,
      title: "2- R/F Units with Over-Table X-ray Tube",
      image: "/procedures/rff.jpg",
      content: `
  - X-ray tube above the table and image intensifier below.
  - Provides better patient access but results in higher staff radiation exposure. (2)
      `,
    },
    {
      id: 3,
      title: "3- Fixed C-arm",
      image: "/procedures/rfff.jpg",
      content: `
  - Allows rotation of the imaging chain around the patient.
  - Mainly used for cardiac, vascular, and neuro-interventional procedures. (2)
      `,
    },
    {
      id: 4,
      title: "4- Biplane Systems",
      image: "/procedures/rffff.jpg",
      content: `
  - Uses two imaging chains to obtain frontal and lateral images simultaneously.
  - Useful in cardiac and neuroangiography. (2)
      `,
    },
    {
      id: 5,
      title: "5- Tilt C-arm Systems",
      image: "/procedures/rfffff.jpg",
      content: `
  - C-arm system with a tilting patient table for general and interventional procedures. (2)
      `,
    },
    {
      id: 6,
      title: "6- Mobile C-arm Systems",
      image: "/procedures/rffffff.jpg",
      content: `
  - Portable units used mainly in operating rooms, especially in orthopedic and vascular surgeries. (2)
      `,
    },
    {
      id: 7,
      title: "7- Mini C-arm systems",
      image: "/procedures/rfffffff.jpg", // ممكن تعيد استخدام صورة
      content: `
  - Are used for imaging extremities with lower radiation exposure. (2)
      `,
    },
  ];
  const fluoroscopyComponents = [
    {
      title: "1- X-ray Generator",
      content:
        "Controls kVp and mA and supports continuous or pulsed fluoroscopy with Automatic Brightness Control (ABC). Can operate as single-phase, three-phase, constant potential, or high-frequency (2).",
    },
    {
      title: "2- X-ray Tube",
      content:
        "Produces X-rays by accelerating electrons from a heated filament to a tungsten anode inside a vacuum-sealed enclosure. Image quality is affected by focal spot size and anode angle (2).",
    },
    {
      title: "3- Collimator",
      content:
        "Shapes the X-ray beam using round and rectangular radiopaque blades. Reduces exposed tissue, scatter radiation, and glare (2).",
    },
    {
      title: "4- Filtration",
      content:
        "Removes low-energy X-rays that increase patient dose without improving image quality. Aluminium or copper filtration is used in high-dose fluoroscopy (2).",
    },
    {
      title: "5- Patient Table",
      content:
        "Must support large patients while minimizing X-ray attenuation. Commonly made of carbon fiber composites (2).",
    },
    {
      title: "6- Anti-Scatter Grids",
      content:
        "Improve image contrast by reducing scatter radiation. Fluoroscopy grids have lower ratios than radiography (2).",
    },
    {
      title: "7- Image Intensifier",
      content:
        "Converts X-rays into a bright visible image with brightness amplification. Components: Input layer → Electron lenses → Anode → Output layer (2).",
    },
    {
      title: "8- Optical Coupling",
      content:
        "Transfers light from the image intensifier to the video camera and recording devices (2).",
    },
    {
      title: "9- Effect of Aperture",
      content:
        "Small aperture → less light reaches camera → ABC increases radiation → lower image noise. Wide aperture → more light reaches camera → lower radiation dose → higher image noise (2).",
    },
    {
      title: "10- Television System",
      content:
        "Closed-circuit system for real-time viewing. Consists of a video camera and monitor. Includes traditional vacuum tube camera and CCD camera (2).",
    },
    {
      title: "11- Image Recording",
      content:
        "Includes spot film devices, film changers, photospot cameras, cine cameras, and modern digital recording systems (2).",
    },
  ];

  const masterclassReferences = [
    "1- Gingold, E. (2020). Modern fluoroscopy imaging systems. ImageWisely website.",
    "2- Pooley, R. A., McKinney, J. M., & Miller, D. A. (2001). The AAPM/RSNA physics tutorial for residents: digital fluoroscopy. Radiographics, 21(2), 521-534.",
    "3- About fluoroscopy 2024; Available from: https://www.cdc.gov/radiation-health/data-research/facts-stats/fluoroscopy.html",
  ];
  // Comprehensive Medical Data
  const proceduresData = [
    // --- GASTROINTESTINAL TRACT (GIT) ---
    {
      id: "barium-swallow",
      title: "Barium Swallow",
      subtitle: "Barium Swallow",
      fullName: "Barium Swallow",
      image: "/procedures/barium-swallow.jpg",
      category: "GIT",
      categoryFull: "Gastrointestinal Tract (GIT)",
      indications: [
        "Dysphagia (swallowing difficulty)",
        "Globus sensation",
        "Choking and coughing during swallowing",
      ],
      contraindications: [
        "Suspected perforation (use water-soluble instead)",
        "Postoperative assessment for leak (use water-soluble instead)",
        "Tracheo-esophageal fistula (use water-soluble instead)",
        "Caution with water-soluble agents in aspiration risk",
      ],
      preparation: [
        "Explanation of procedure",
        "Fasting for 6-8 hours",
        "Avoid smoking or chewing gum to decrease secretions",
        "Assess history of dysphagia, aspiration, or esophageal disease",
        "Remove metallic objects (necklaces, dentures if required)",
        "Check for pregnancy in female patients",
      ],
      instruments: ["Fluoroscopy unit", "Drinking cup", "Straw"],
      technique: [
        "Fluoroscopy with video recording (Videofluoroscopy ≈30 frames/sec)",
        "Lateral view (most important for swallowing phases and aspiration)",
        "Oblique views (visualize PES without shoulder overlap)",
        "Frontal views (detect asymmetric abnormalities)",
        "Short exposure time and high kVp used",
      ],
      contrastMedia: [
        "Barium sulfate (40–60%) in different consistencies (thin liquid, nectar thick, honey thick, paste)",
        "Water-soluble agents (Iohexol/Omnipaque) for perforation/leaks",
        "Note: Avoid high-osmolarity agents (Gastrografin) if aspiration risk is present",
      ],
      normalFindings: [
        "Normal swallowing function in all phases",
        "No airway penetration or aspiration",
        "Normal esophageal caliber and mucosal coating",
      ],
      complications: [
        "Aspiration",
        "Contrast-induced pulmonary edema (if high-osmolarity water-soluble used)",
        "Barium Impaction",
      ],
      pathologyCases: [
        { title: "Normal Barium swallow", label: "Normal Barium swallow" },
        {
          title: "Normal lateral Barium swallow",
          label: "Normal lateral Barium swallow",
        },
      ],
      references: [
        "Carbo, A. I., Brown, M., & Nakrour, N. (2021). Fluoroscopic swallowing examination: radiologic findings and analysis of their causes and pathophysiologic mechanisms. Radiographics, 41(6), 1733-1749.",
        "Levine MS, Rubesin SE. Radiologic investigation of dysphagia. AJR Am J Roentgenol. 1990;154 (6): 1157-63. doi:10.2214/ajr.154.6.2110721 - Pubmed citation",
        "Jones J, Niknejad M, Walizai T, et al. Barium swallow. Reference article, Radiopaedia.org (Accessed on 06 Mar 2026) https://doi.org/10.53347/rID-6471",
        "Kang, M. S., Chang, M. C., & Kwak, S. (2023). Usefulness of barium sulfate and iohexol as contrast agents for VFSS in visualizing components of swallowing predictable of poor outcomes. Scientific Reports, 13(1), 21556.",
        "https://share.google/vZIXeJcP9dqrxkwT5",
        "https://share.google/BIKPKaBUV1tWLlKyX",
        "https://share.google/OnUsXQ5FewvDUK9XZ",
        "https://share.google/nGkeqX5kdl4LXOlaK",
      ],
      safetyQuestions: [
        { q: "Is there a risk of bowel perforation?", critical: true },
        { q: "Is there a high risk of aspiration?", critical: false },
      ],
    },

    {
      id: "barium-meal",
      title: "Barium Meal",
      subtitle: "Barium Meal (Upper GIT)",
      fullName: "Barium Meal (Upper GIT)",
      image: "/procedures/barium-meal.jpg",
      category: "GIT",
      categoryFull: "Gastrointestinal Tract (GIT)",
      indications: [
        "Evaluation of Dyspepsia",
        "Peptic Ulcer Disease",
        "Detection of Gastric tumors",
        "Hiatal Hernia",
        "Gastroesophageal Reflux Disease (GERD)",
        "Gastric Outlet Obstruction",
        "Assessment when Endoscopy is contraindicated",
      ],
      contraindications: [
        "Suspected Gastrointestinal Perforation",
        "Severe Bowel Obstruction",
        "High Risk of Aspiration",
        "Recent Gastrointestinal Surgery",
        "Severe Inflammatory Conditions",
        "Pregnancy",
      ],
      preparation: [
        "Fasting for 6-8 hours (empty stomach/duodenum)",
        "Laxative night before may be required",
        "Change into hospital gown",
        "Remove jewelry, dentures, and metal objects",
      ],
      instruments: ["Fluoroscopy unit", "Drinking cup", "Carbex granules"],
      technique: [
        "Single or double contrast options",
        "Double contrast: Carbex granules (fizzy) used to expand stomach with gas",
        "Patient drinks semi-liquid barium sulfate or water-soluble contrast",
        "Series of X-ray images taken as contrast moves through stomach and small bowel",
        "Included views: AP, RAO, LAO, Lateral, Trendelenburg, and Erect",
        "Orocecal transit time is approximately 178 minutes in healthy subjects",
      ],
      contrastMedia: [
        "Barium sulfate (semi-liquid consistency)",
        "Iodine-based water soluble (if perforation suspected)",
        "Carbex granules (for double contrast)",
      ],
      normalFindings: [
        "Normal gastric mucosal folds",
        "Absence of filling defects or ulcers",
        "Normal gastric emptying and transit time",
      ],
      complications: [
        "Barium impaction",
        "Aspiration",
        "Contrast allergy (if iodine-based used)",
      ],
      pathologyCases: [
        { title: "Standard Barium Meal positions and views" },
        { title: "Normal Barium meal" },
      ],
      references: [
        "Conry, B. G., McLean, A. M., & Farthing, M. J. (1989). Diagnostic and therapeutic efficacy of barium meal examination: a prospective evaluation in general practice. British Medical Journal, 299(6713), 1443-1445.",
        "Long, B. W., Rollins, J. H., & Smith, B. J. (2019). Merrill’s atlas of radiographic positioning and procedures (14th ed.). St. Louis, MO: Elsevier.",
        "Mandal, Ananya. (2023, July 14). What is a Barium Meal?. News-Medical. Retrieved on March 04, 2026 https://www.news-medical.net/health/What-is-a-Barium-Meal",
        "Szarka, L. A., & Camilleri, M. (2012, March). Methods for the assessment of small-bowel and colonic transit. In Seminars in nuclear medicine (Vol. 42, No. 2, pp. 113-123). WB Saunders.",
        "Zaccarini, D. J., Lubin, D., Sanyal, S., & Abraham, J. L. (2022). Barium sulfate deposition in the gastrointestinal tract: review of the literature. Diagnostic Pathology, 17(1), 99.",
      ],
      safetyQuestions: [
        { q: "Is there a risk of GI perforation?", critical: true },
      ],
    },
    {
      id: "follow-through",
      title: "Follow Through",
      subtitle: "Small bowel follow through",
      fullName: "Small Bowel Follow Through (SBFT)",
      image: "/procedures/follow-through.jpg",
      category: "GIT",
      categoryFull: "Gastrointestinal Tract (GIT)",
      indications: [
        "Unexplained abdominal pain",
        "Chronic diarrhea or malabsorption",
        "Inflammatory bowel disease (especially Crohn’s disease)",
        "Small bowel obstruction or strictures",
        "Neoplasms",
        "Occult gastrointestinal bleeding",
        "Postoperative complications, fistulas, and abnormal small bowel motility",
      ],
      contraindications: [
        "Intestinal perforation and colonic obstruction",
        "For suspected fistula, use water-soluble contrast instead of barium",
        "Surgery treatment planning (PHHS): use Omnipaque 350 for water-soluble; Gastrografin is contraindicated",
      ],
      preparation: [
        "Review for contrast allergy",
        "Patient needs to be NPO after Midnight (at least 8 hours prior to exam, except medications)",
        "The exam should be started early in the morning (preferably no later than 10 am.)",
        "Review prior surgical history and any radiological exam results",
      ],
      contrastMedia: [
        "Barium vs water-soluble",
        "If patient is unable to swallow contrast, it can be introduced by NG tube",
      ],
      technique: [
        "Review AP supine scout image for obstruction, free air, or residual contrast",
        "If combined with UGI/esophagram, perform it first, then small bowel study; record time of first swallow",
        "Patient drinks oral contrast and is imaged prone (PA) every 30 minutes for the first 2 hours, then as directed",
        "Fluoroscopy and spot images obtained as needed to assess peristalsis and abnormalities (including oblique views)",
        "Encourage ambulation (walking) between images",
        "Evaluate the terminal ileum once contrast reaches the right colon",
      ],
      normalFindings: [
        "Normal small bowel follow through with regular mucosal pattern",
        "Normal transit time from stomach to cecum",
      ],
      pathologyCases: [
        { title: "Normal small bowel follow through" },
        { title: "Malabsorption of small bowel" },
        { title: "Crohn's disease of small bowel" },
        { title: "Congenital malrotation of small bowel" },
        { title: "Small bowel obstruction / Small bowel cancer" },
        { title: "Carcinoid tumor of small bowel" },
        { title: "Malignant tumor in small bowel" },
      ],
      references: [
        "Soult, A., Van Horn, A., Sturm, E., Sternick, M., Burgess, J., & Britt, R. (2023). Use of Small Bowel Follow Through in Management of Small Bowel Obstruction. Journal of the American College of Surgeons, 10-1097.",
        "Jaffe, T. A., Gaca, A. M., Delaney, S., Yoshizumi, T. T., Toncheva, G., Nguyen, G., & Frush, D. P. (2007). Radiation doses from small-bowel follow-through and abdominopelvic MDCT in Crohn's disease. American Journal of Roentgenology, 189(5), 1015-1022.",
        "https://share.google/xPG9BspAt1iMvMtm7",
        "https://share.google/tjCGVprtLNdfbh",
      ],
      safetyQuestions: [
        { q: "Is there a known colonic obstruction?", critical: true },
      ],
    },
    {
      id: "barium-enema",
      title: "Barium Enema",
      fullName: "Barium Enema (Large Bowel)",
      image: "/procedures/barium-enema.jpg",
      category: "GIT",
      categoryFull: "Gastrointestinal Tract (GIT)",
      indications: [
        "Change in bowel habits",
        "Ulcerative colitis",
        "Crohn's disease",
        "Obstructions or Polyps",
      ],
      contraindications: [
        "Suspected bowel perforation",
        "Toxic megacolon",
        "Acute abdominal pain",
      ],
      preparation: [
        "Laxatives 2 days prior",
        "Low residue diet",
        "Fasting for 8 hours",
      ],
      technique: [
        "Single/Double contrast",
        "Colon filled via rectal tube using gravity",
        "Patient repositioned to unfold loops",
      ],
      safetyQuestions: [
        { q: "Is there a suspicion of toxic megacolon?", critical: true },
      ],
    },

    // --- BILIARY SYSTEM ---
    {
      id: "ptc",
      title: "PTC",
      subtitle: "Percutaneous Transhepatic Cholangiography",
      fullName: "Percutaneous Transhepatic Cholangiography",
      image: "/procedures/ptc.jpg",
      category: "Biliary",
      categoryFull: "Biliary System",
      indications: [
        "Evaluation of obstructive jaundice (when ERCP is not possible or unsuccessful)",
        "Evaluation of biliary system anatomy",
        "Diagnosis of bile duct stones, strictures, or tumors",
        "Preoperative planning for biliary surgery",
      ],
      contraindications: [
        "Uncorrected coagulopathy (high risk of bleeding)",
        "Severe ascites",
        "History of severe contrast media allergy",
        "Active systemic infection or sepsis (risk of worsening bacteremia)",
      ],
      preparation: [
        "Review for contrast allergy",
        "Check coagulation profile (INR/Platelets)",
        "Patient should be NPO (nothing by mouth) for at least 6-8 hours",
        "Prophylactic antibiotics should be administered",
        "Establish intravenous (IV) access for sedation and fluids",
      ],
      technique: [
        "Performed under local anesthesia and sedation",
        "Percutaneous transhepatic approach using a thin needle (Chiba needle)",
        "Ultrasound or fluoroscopic guidance is used to locate the biliary ducts",
        "Once the needle is inside a bile duct, contrast media is injected",
        "Images are taken as the contrast outlines the biliary tree",
      ],
      pathologyCases: [
        { title: "Normal PTC" },
        { title: "PTC showing biliary stones" },
        { title: "PTC showing malignant biliary stricture" },
      ],
      references: [
        "Saad WE, Wallace MJ, Wojak JC, Kundu S, Cardella JF. Quality improvement guidelines for percutaneous transhepatic cholangiography, biliary drainage, and percutaneous cholecystostomy. JVIR 2010.",
        "Kim SH, Zangan SM. Semin Intervent Radiol. 2015.",
        "Covey AM, Brown KT. Tech Vasc Interv Radiol. 2008",
        "https://radiopaedia.org/articles/percutaneous-transhepatic-cholangiography",
      ],
      safetyQuestions: [
        { q: "Is the INR > 1.5 or Platelets < 50,000?", critical: true },
      ],
    },
    {
      id: "ptbd",
      title: "PTBD",
      subtitle: "Percutaneous Transhepatic Biliary Drainage",
      fullName: "Percutaneous Transhepatic Biliary Drainage",
      image: "/procedures/ptbd.jpg",
      category: "Biliary",
      categoryFull: "Biliary System",
      indications: [
        "Malignant biliary obstruction",
        "Benign strictures",
        "Failed ERCP",
        "Post-operative complications",
        "Gallbladder carcinoma",
        "Cholangiocarcinoma",
      ],
      contraindications: [
        "Uncorrectable coagulopathy (high bleeding risk)",
        "Severe ascites making access difficult",
        "Severe infection at puncture site",
        "Patient refusal or inability to cooperate",
      ],
      preparation: [
        "Patient should be NPO for at least 6-8 hours",
        "Check hemoglobin and platelets",
        "Prophylactic antibiotics should be administered",
        "Establish intravenous (IV) access for fluids and sedation",
        "Review for contrast media allergy",
      ],
      contrastMedia: [
        "Water-soluble iodinated contrast media",
        "Volume: 5-15 ml",
      ],
      imagingModalities: [
        "Ultrasound guidance",
        "Fluoroscopy guidance",
        "CT guidance",
      ],
      technique: [
        "Performed under local anesthesia and sedation",
        "Drainage catheter insertion through the skin directly into bile ducts of liver",
        "Effective diversion of bile flow (Bridge to definitive treatment)",
        "Access can be through either the right or left liver lobe",
        "US or Fluoroscopy guidance is used for needle placement",
      ],
      complications: [
        "Hemorrhage (intrahepatic or subcapsular)",
        "Bile leak or peritonitis",
        "Infection (cholangitis or sepsis)",
        "Catheter dislodgement or blockage",
      ],
      pathologyCases: [
        { title: "Biliary dilatation upstream of obstruction" },
        { title: "Stone impaction visible in bile ducts" },
        { title: "Tumor mass causing extrinsic or intrinsic obstruction" },
        { title: "Liver enlargement in chronic obstruction" },
      ],
      references: [
        "Saad WE, Wallace MJ, Wojak JC, Kundu S, Cardella JF. Quality improvement guidelines for percutaneous transhepatic cholangiography, biliary drainage, and percutaneous cholecystostomy. JVIR 2010.",
        "Guidelines on percutaneous biliary interventional procedures (2022). ICRI IRIA.",
        "American Society for Gastrointestinal Endoscopy (ASGE) (2023). Guideline on management of post-liver transplant biliary strictures.",
        "Kim SH, Zangan SM. Percutaneous transhepatic biliary drainage complicated by bilothorax. Seminars in Interventional Radiology 2015.",
        "Covey AM, Brown KT. Percutaneous transhepatic biliary drainage. Techniques in Vascular and Interventional Radiology 2008.",
      ],
      safetyQuestions: [
        {
          q: "Is there uncorrectable coagulopathy (INR > 1.5)?",
          critical: true,
        },
        {
          q: "Is there severe infection at the intended puncture site?",
          critical: true,
        },
      ],
    },
    {
      id: "ptgbd",
      title: "PTGBD",
      subtitle: "Percutaneous Transhepatic Gallbladder Drainage",
      fullName: "Percutaneous Transhepatic Gallbladder Drainage",
      image: "/procedures/ptgbd.jpg",
      category: "Biliary",
      categoryFull: "Biliary System",
      indications: [
        "Acute cholecystitis (Grade II/III)",
        "Acalculous cholecystitis",
        "Empyema",
      ],
      contraindications: [
        "Necrotic GB wall",
        "Free perforation",
        "Uncorrected coagulopathy",
      ],
      preparation: [
        "INR < 1.5",
        "Platelets > 50k",
        "Local anesthesia + mild sedation",
      ],
      technique: [
        "Transhepatic approach preferred",
        "Pigtail catheter (8-10 Fr)",
        "Confirm bile aspiration",
      ],
      safetyQuestions: [
        { q: "Is the gallbladder wall necrotic?", critical: true },
      ],
    },
    {
      id: "t-tube",
      title: "T-tube Cholangiography",
      subtitle: "T-tube Cholangiography",
      fullName: "T-tube Cholangiography",
      image: "/procedures/t-tube.jpg",
      category: "Biliary",
      categoryFull: "Biliary System",
      indications: [
        "Detect retained CBD stones",
        "Clarify biliary anatomy",
        "Confirm biliary patency",
      ],
      contraindications: ["Acute Cholangitis", "Bile Peritonitis", "Shock"],
      preparation: [
        "Usually 7-10 days post-surgery",
        "Assess PT/INR",
        "Fasting 4-8 hours",
      ],
      technique: [
        "Diluted contrast 1:1",
        "Slow injection under fluoroscopy",
        "Test injection 1-2 ml first",
      ],
      safetyQuestions: [
        { q: "Is there active Acute Cholangitis?", critical: true },
      ],
    },

    // --- URINARY SYSTEM ---
    {
      id: "antegrade-pyelography",
      title: "Antegrade Pyelography",
      fullName: "Antegrade Pyelography",
      image: "/procedures/antegrade.jpg",
      category: "Urinary",
      categoryFull: "Urinary System",
      indications: [
        "Urinary Tract Obstruction",
        "Failed Retrograde access",
        "Ureteric Injury assessment",
      ],
      contraindications: [
        "Uncorrected coagulopathy",
        "Severe urosepsis",
        "Pregnancy",
      ],
      preparation: [
        "Use established nephrostomy",
        "Assess coagulation (PT/INR)",
        "Initial AP scout image",
      ],
      technique: [
        "Grade Hydronephrosis (SFU 0-4)",
        "Check for leakage",
        "Coughing/Standing projections",
      ],
      safetyQuestions: [
        { q: "Is there severe uncontrolled urosepsis?", critical: true },
      ],
    },
    {
      id: "retrograde-urography",
      title: "Retrograde Urography",
      subtitle: "Retrograde Urography",
      fullName: "Retrograde Pyelography (Retrograde Urography)",
      image: "/procedures/retrograde.jpg",
      category: "Urinary",
      categoryFull: "Urinary System",
      indications: [
        "Evaluation of ureteric obstruction or hydronephrosis",
        "Assessment of ureteric strictures",
        "Evaluation of filling defects such as stones or tumors",
        "Assessment of hematuria when upper urinary tract detail is required",
        "Diagnosis of suspected ureteric injury or leak",
        "When intravenous contrast studies are inconclusive or contraindicated",
      ],
      contraindications: [
        "Active urinary tract infection",
        "Severe uncontrolled sepsis",
        "Recent significant urethral trauma unless specifically indicated by urology",
        "Known severe contrast hypersensitivity (relative contraindication)",
        "Pregnancy unless benefits clearly outweigh radiation risk",
      ],
      preparation: [
        "Explain the procedure and obtain consent",
        "Review history of allergy, anticoagulants, and pregnancy status",
        "Urinalysis / urine culture may be needed to exclude active UTI",
        "Patient is usually asked to fast if sedation or anesthesia is planned",
        "Establish IV access if sedation or anesthesia will be used",
        "Prophylactic antibiotics may be considered according to clinical indication and local protocol",
      ],
      instruments: [
        "Fluoroscopy unit",
        "Cystoscope",
        "Ureteric catheter",
        "Syringe and connecting tubing",
      ],
      contrastMedia: [
        "Water-soluble iodinated contrast media",
        "Contrast is injected retrogradely through the ureteric catheter",
      ],
      technique: [
        "Patient positioned in lithotomy position",
        "Cystoscope is introduced through the urethra into the bladder",
        "Ureteric orifice is identified and cannulated",
        "A ureteric catheter is advanced into the distal ureter or renal pelvis as required",
        "Contrast is injected slowly under fluoroscopic guidance while avoiding excessive pressure and air bubbles",
        "Spot images are obtained to outline the ureter and pelvicalyceal system",
      ],
      normalFindings: [
        "Smooth opacification of the ureter and pelvicalyceal system",
        "No filling defects, leakage, or abrupt obstruction",
        "Normal caliber and contour of the collecting system",
      ],
      complications: [
        "Urinary tract infection",
        "Hematuria",
        "Ureteric trauma or perforation",
        "Contrast reaction",
        "Pain due to overdistension of the collecting system",
      ],
      pathologyCases: [
        { title: "Ureteric stricture on retrograde study" },
        { title: "Ureteric stone causing filling defect" },
        { title: "Extravasation from ureteric injury" },
      ],
      references: [
        "Cleveland Clinic. Retrograde Pyelogram: Procedure, Risks & Recovery.",
        "Burks FN, Santucci RA. Management of iatrogenic ureteral injury. Therapeutic Advances in Urology. 2014.",
        "Radiopaedia / urology references for retrograde pyelography and upper tract evaluation.",
        "Standard fluoroscopy and endourology textbooks / departmental protocols.",
      ],
      safetyQuestions: [
        {
          q: "Does the patient have an active urinary tract infection?",
          critical: true,
        },
        { q: "Is there known severe contrast allergy?", critical: true },
      ],
    },
    {
      id: "vcug",
      title: "VCUG",
      fullName: "Voiding Cystourethrography",
      image: "/procedures/vcug.jpg",
      category: "Urinary",
      categoryFull: "Urinary System",
      indications: ["Pediatric UTI", "VUR Diagnosis", "Male urethral injuries"],
      contraindications: [
        "Active clinical UTI",
        "Labial adhesions",
        "Pregnancy",
      ],
      preparation: [
        "Child dose: (age+2)x30 mL",
        "Adult dose: 300-400 mL",
        "Gravity-fed filling",
      ],
      technique: [
        "Filling phase (supine)",
        "Oblique for UVJ",
        "Voiding phase for urethra",
      ],
      safetyQuestions: [
        { q: "Does the patient have an active UTI?", critical: true },
      ],
    },
    {
      id: "ivu",
      title: "IVU",
      fullName: "Intravenous Urography",
      image: "/procedures/ivu.jpg",
      category: "Urinary",
      categoryFull: "Urinary System",
      indications: [
        "Ureteric obstruction",
        "Papillary necrosis",
        "Anatomic variants",
      ],
      contraindications: [
        "Impaired renal function",
        "Significant abdominal mass",
        "Pregnancy",
      ],
      preparation: [
        "Fasting 5 hours",
        "Check GFR & Creatinine",
        "Empty bladder before exam",
      ],
      technique: [
        "Non-ionic contrast preferred",
        "Phases: Nephrogram (1m), Secretary (5-15m)",
        "Cystogram (45m)",
      ],
      safetyQuestions: [
        { q: "Does the patient have impaired renal function?", critical: true },
      ],
    },

    // --- HSG & LACRIMAL ---
    {
      id: "hsg",
      title: "HSG",
      fullName: "Hysterosalpingography",
      image: "/procedures/hsgs.jpg",
      category: "Hysterosalpingography(HSG)",
      categoryFull: "Hysterosalpingography (HSG)",
      indications: [
        "Infertility",
        "Tubal surgery follow-up",
        "Congenital anomalies",
        "Fibroids",
      ],
      contraindications: [
        "Pregnancy (Absolute)",
        "Active pelvic infection",
        "Vaginal bleeding",
      ],
      preparation: [
        "1st half of menstrual cycle",
        "Ibuprofen 1hr before",
        "Refrain from intercourse",
      ],
      safetyQuestions: [
        { q: "Is there a possibility of pregnancy?", critical: true },
      ],
    },
    {
      id: "lacrimal",
      title: "Dacryocystography",
      fullName: "Dacryocystography",
      image: "/procedures/dacryocystography.jpg",
      category: "Lacrimal System",
      categoryFull: "Lacrimal System",
      indications: [
        "Nasolacrimal duct obstruction",
        "Epiphora",
        "Foreign bodies",
      ],
      contraindications: [
        "Contrast hypersensitivity",
        "Active ocular infection",
        "Recent eye surgery",
      ],
      preparation: [
        "Local anesthesia to eye",
        "Punctum dilation",
        "Flexible catheter",
      ],
      technique: ["Contrast injection (2 images/sec)", "PA Projection"],
      safetyQuestions: [
        { q: "Is there an active ocular infection?", critical: true },
      ],
    },
    {
      id: "sialography",
      title: "Sialography",
      fullName: "Fluoroscopy Sialography",
      category: "Salivary Gland",
      categoryFull: "Salivary Gland",
      image: "/procedures/sialography.jpg",
      indications: ["Suppurative Sialadenitis", "Calculi", "Malignant tumors"],
      contraindications: ["Acute infection", "Pregnancy", "Iodine allergy"],
      preparation: ["Assess for radio-opaque calculi first", "Use lemon juice"],
      technique: [
        "Cannulation of Stensen's/Wharton's duct",
        "Gentle injection",
      ],
      safetyQuestions: [
        { q: "Is the salivary gland acutely inflamed?", critical: true },
      ],
    },
  ];

  const categories = [
    "All",
    "GIT",
    "Biliary",
    "Urinary",
    "Hysterosalpingography(HSG)",
    "Lacrimal System",
    "Salivary Gland",
  ];

  const filteredProcedures =
    procCategory === "All"
      ? proceduresData.filter((p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : proceduresData.filter(
          (p) =>
            p.category === procCategory &&
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  const handleProcedureClick = (proc) => {
    setSelectedProcedure(proc);
    setShowSafetyCheck(true);
  };

  return (
    <div className="flex flex-col h-screen bg-[#05080D] text-gray-100 font-sans select-none overflow-hidden">
      {activeTab === "home" && (
        <div className="relative min-h-[220px] p-6 pb-4 flex justify-between items-start overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: "url('/sphinx.jpg')" }}
          />

          <div className="relative z-10">
            <p className="text-cyan-400 text-xs font-bold uppercase tracking-[0.3em]">
              Welcome to
            </p>

            <h1 className="text-4xl sm:text-5xl font-black mt-1">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Fluoro Master
              </span>
            </h1>
          </div>
        </div>
      )}

      {/* 👤 User Button */}
      {activeTab === "home" && (
        <button
          onClick={() => {
            setSelectedProcedure(null);
            setShowSafetyCheck(false);
            setShowTeamPage(true);
          }}
          className="absolute top-6 right-7 z-50 w-10 h-10 rounded-full bg-[#0E1520] flex items-center justify-center text-gray-300"
        >
          <User size={30} />
        </button>
      )}
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto pb-24">
        {showTeamPage && (
          <div className="absolute inset-0 z-40 bg-[#05080D] overflow-y-auto">
            <div className="min-h-full bg-[radial-gradient(circle_at_top,_rgba(72,179,228,0.08),_transparent_35%),_#05080D]">
              {/* Top Bar */}
              <div className="sticky top-0 z-20 bg-[#0B1825]/95 backdrop-blur-md border-b border-gray-800 px-6 py-5 flex items-center justify-between">
                <button
                  onClick={() => setShowTeamPage(false)}
                  className="text-white hover:text-[#48B3E4] transition-colors"
                >
                  <ArrowLeft size={28} />
                </button>

                <h2 className="text-2xl font-bold text-white">Our Team</h2>

                <div className="w-8" />
              </div>

              <div className="px-6 pb-10">
                {/* Hero */}
                <div className="pt-8 pb-6 text-center">
                  <div className="mx-auto mb-5 w-32 h-32 rounded-full border border-amber-500/30 bg-[radial-gradient(circle,_rgba(251,191,36,0.16),_rgba(17,24,39,0.7))] flex items-center justify-center shadow-[0_0_60px_rgba(251,191,36,0.12)]">
                    <div className="text-center leading-tight">
                      <div className="text-amber-400 text-xl font-black tracking-widest">
                        SPHINX
                      </div>
                      <div className="text-gray-300 text-xs tracking-[0.3em]">
                        UNIVERSITY
                      </div>
                    </div>
                  </div>

                  <h3 className="text-4xl font-black text-white tracking-tight">
                    Our Team
                  </h3>
                  <p className="mt-3 text-gray-400 text-sm max-w-md mx-auto">
                    Sphinx University — Faculty Of Applied Health Sciences
                    Technology
                  </p>
                </div>

                {/* Clinical Supervision */}
                <section className="space-y-5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={24} className="text-[#48B3E4]" />
                    <h3 className="text-2xl font-bold text-white">
                      Clinical Supervision
                    </h3>
                  </div>

                  <div className="space-y-5">
                    {clinicalSupervision.map((item, index) => {
                      const isAmber = item.accent === "amber";

                      return (
                        <div
                          key={index}
                          className={`rounded-[32px] overflow-hidden border shadow-2xl ${
                            isAmber
                              ? "border-amber-500/30 bg-[linear-gradient(180deg,rgba(55,48,36,0.88),rgba(17,24,39,0.96))]"
                              : "border-sky-500/25 bg-[linear-gradient(180deg,rgba(17,37,63,0.92),rgba(15,23,42,0.98))]"
                          }`}
                        >
                          <div className="p-6 flex items-start gap-4">
                            <div
                              className={`w-20 h-20 rounded-full flex items-center justify-center border ${
                                isAmber
                                  ? "bg-amber-500/10 border-amber-500/30 text-amber-400"
                                  : "bg-sky-500/10 border-sky-500/30 text-sky-400"
                              }`}
                            >
                              {isAmber ? (
                                <GraduationCap size={34} />
                              ) : (
                                <BriefcaseMedical size={34} />
                              )}
                            </div>

                            <div className="flex-1">
                              <h4 className="text-2xl font-extrabold text-white leading-snug">
                                {item.name}
                              </h4>

                              <div
                                className={`mt-3 inline-flex items-center px-4 py-2 rounded-full border text-sm font-black ${
                                  isAmber
                                    ? "bg-amber-500/10 border-amber-500/25 text-amber-400"
                                    : "bg-sky-500/10 border-sky-500/25 text-sky-400"
                                }`}
                              >
                                {item.role}
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-white/5 px-6 py-5 bg-black/10 space-y-4">
                            <div className="flex items-start gap-3 text-gray-300">
                              <BriefcaseMedical
                                size={20}
                                className={
                                  isAmber
                                    ? "text-amber-400 mt-1 shrink-0"
                                    : "text-sky-400 mt-1 shrink-0"
                                }
                              />
                              <p className="text-lg leading-relaxed">
                                {item.title}
                              </p>
                            </div>

                            <div className="flex items-start gap-3 text-gray-400">
                              <Building2
                                size={20}
                                className={
                                  isAmber
                                    ? "text-amber-400 mt-1 shrink-0"
                                    : "text-sky-400 mt-1 shrink-0"
                                }
                              />
                              <p className="text-lg leading-relaxed">
                                {item.place}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Content & Research Team */}
                <section className="mt-10 space-y-5">
                  <div className="flex items-center gap-3">
                    <Users size={24} className="text-[#48B3E4]" />
                    <h3 className="text-2xl font-bold text-white">
                      Content & Research Team
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contentResearchTeam.map((member, index) => (
                      <div
                        key={index}
                        className="rounded-[28px] border border-gray-800 bg-[#070D15] px-5 py-5 flex items-center gap-4 hover:border-[#48B3E4]/30 transition-all"
                      >
                        <div className="w-14 h-14 rounded-full bg-[#08131E] flex items-center justify-center text-[#48B3E4] shrink-0">
                          <User size={22} />
                        </div>

                        <p className="text-white text-xl font-semibold leading-snug">
                          {member}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Footer Card */}
                <section className="mt-10">
                  <div className="rounded-[34px] border border-amber-500/25 bg-[linear-gradient(135deg,rgba(120,53,15,0.45),rgba(31,41,55,0.95))] p-6 shadow-2xl">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                      <div className="w-24 h-24 rounded-[24px] bg-black/15 border border-amber-500/20 flex items-center justify-center">
                        <div className="text-center leading-tight">
                          <div className="text-amber-400 text-lg font-black">
                            SPHINX
                          </div>
                          <div className="text-gray-300 text-[10px] tracking-[0.25em]">
                            UNIVERSITY
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h4 className="text-3xl font-black text-amber-400">
                          Sphinx University
                        </h4>
                        <p className="mt-2 text-gray-300 text-lg leading-relaxed">
                          Faculty Of Applied Health Sciences Technology
                          <br />
                          Department of Radiological Sciences
                        </p>

                        <div className="mt-4 inline-flex items-center px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-base font-bold">
                          Graduation Project • 2026
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* 🔥 Developer Credit Card */}
                <section className="mt-8">
                  <div
                    className="relative rounded-[34px] overflow-hidden border border-cyan-500/20 
    bg-[linear-gradient(135deg,rgba(8,15,25,0.95),rgba(10,25,45,0.95))] 
    p-6 shadow-[0_0_40px_rgba(56,189,248,0.15)]"
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_40%)] pointer-events-none" />

                    <div className="flex items-center gap-5 relative z-10">
                      {/* 🔥 صورة المهندس */}
                      <div className="relative">
                        <div
                          className="w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400 
          shadow-[0_0_25px_rgba(56,189,248,0.6)]"
                        >
                          <img
                            src="/procedures/developer.jpg"
                            alt="Ahmad Elshazly"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Glow Ring */}
                        <div className="absolute inset-0 rounded-full blur-xl bg-cyan-400/30 scale-110 -z-10" />
                      </div>

                      {/* 🔥 النص */}
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 uppercase tracking-widest">
                          Developed By
                        </p>

                        <h3 className="text-2xl font-black text-cyan-400 mt-1">
                          Eng. Ahmad ElShazly
                        </h3>

                        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                          Software Engineer & AI Developer 🚀 Creator of FluoroX
                          Application
                        </p>
                        {/* 🔗 Contact Section */}
                        <div className="flex flex-wrap items-center gap-3 mt-4">
                          {/* Phone */}
                          <a
                            href="tel:+201092280019"
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0E1520] border border-gray-800 text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                          >
                            <span>📞</span>
                            <div className="flex flex-col leading-tight">
                              <span className="text-[11px] text-gray-500">
                                Call
                              </span>
                              <span className="text-white text-xs">
                                +20 109 228 0019
                              </span>
                            </div>
                          </a>

                          {/* WhatsApp */}
                          <a
                            href="https://wa.me/201505167066"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0E1520] border border-gray-800 text-sm text-gray-300 hover:border-green-400 hover:text-green-400 transition"
                          >
                            <span>💬</span>
                            <div className="flex flex-col leading-tight">
                              <span className="text-[11px] text-gray-500">
                                WhatsApp
                              </span>
                              <span className="text-white text-xs">
                                +20 150 516 7066
                              </span>
                            </div>
                          </a>

                          {/* TikTok */}
                          <a
                            href="https://www.tiktok.com/@engahmadshazly"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0E1520] border border-gray-800 text-sm text-gray-300 hover:border-pink-400 hover:text-pink-400 transition"
                          >
                            <span>🎵</span>
                            <div className="flex flex-col leading-tight">
                              <span className="text-[11px] text-gray-500">
                                TikTok
                              </span>
                              <span className="text-white text-xs">
                                @engahmadshazly
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
        {showMasterclassPage && (
          <div className="absolute inset-0 z-40 bg-[#05080D] overflow-y-auto">
            <div className="min-h-full bg-[#05080D] pb-28">
              <div className="sticky top-0 z-20 bg-[#0B1825]/95 backdrop-blur-md border-b border-gray-800 px-6 py-5 flex items-center gap-4">
                <button
                  onClick={() => setShowMasterclassPage(false)}
                  className="text-white hover:text-[#48B3E4] transition-colors"
                >
                  <ArrowLeft size={28} />
                </button>
                <h2 className="text-2xl font-bold text-white">
                  Fluoroscopy Masterclass
                </h2>
              </div>

              <div className="px-6 py-6 space-y-8">
                <div className="flex justify-center">
                  <img
                    src="/procedures/fluoros.jpg"
                    alt="Fluoroscopy Machine"
                    className="w-full max-w-[320px] opacity-80"
                  />
                </div>

                <div>
                  <h1 className="text-5xl font-black leading-tight text-white">
                    Fluoroscopy
                    <br />
                    Masterclass
                  </h1>
                </div>

                <section className="space-y-4">
                  <h2 className="text-[#48B3E4] text-3xl font-black">
                    What is Fluoroscopy?
                  </h2>
                  <div className="bg-[#111A2B] rounded-[28px] border border-blue-900/20 p-6">
                    <div className="flex gap-4 items-start">
                      <Info
                        className="text-[#48B3E4] mt-1 shrink-0"
                        size={28}
                      />
                      <p className="text-xl leading-relaxed text-gray-100">
                        Fluoroscopy is a medical imaging procedure that uses
                        X-rays to show internal organs and tissues working in
                        real time. (1)
                      </p>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-[#48B3E4] text-3xl font-black">
                    How does it Work?
                  </h2>
                  <div className="bg-[#111A2B] rounded-[28px] border border-blue-900/20 p-6">
                    <div className="flex gap-4 items-start">
                      <Settings
                        className="text-[#48B3E4] mt-1 shrink-0"
                        size={28}
                      />
                      <ul className="list-disc pl-5 text-lg leading-relaxed text-gray-100 space-y-3">
                        <li>
                          Uses a continuous or pulsed X-ray beam that passes
                          through the patient to an image detector.
                        </li>
                        <li>
                          Different tissues absorb X-rays in varying amounts
                          depending on their density.
                        </li>
                        <li>
                          The detector converts the transmitted radiation into
                          real-time images displayed on a monitor.
                        </li>
                        <li>
                          Modern systems use image intensifiers or digital
                          flat-panel detectors to enhance image quality while
                          minimizing radiation dose. (3)
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-[#48B3E4] text-3xl font-black">
                    Types of Fluoroscopy Systems
                  </h2>

                  {fluoroscopyTypes.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#111A2B] rounded-[24px] border border-blue-900/20 overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedFluoroType(
                            expandedFluoroType === item.id ? null : item.id
                          )
                        }
                        className="w-full flex items-center justify-between px-5 py-5 text-left"
                      >
                        <span className="text-2xl font-medium pr-4">
                          {item.title}
                        </span>
                        <ChevronRight
                          size={24}
                          className={`transition-transform ${
                            expandedFluoroType === item.id
                              ? "rotate-90 text-[#48B3E4]"
                              : "text-white"
                          }`}
                        />
                      </button>

                      {expandedFluoroType === item.id && (
                        <div className="px-5 pb-5 space-y-4">
                          <p className="text-lg leading-9 text-gray-400 whitespace-pre-line">
                            {item.content}
                          </p>

                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[260px] object-cover rounded-2xl border border-white/10"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </section>

                <section className="space-y-4">
                  <h2 className="text-[#48B3E4] text-3xl font-black">
                    Components of Fluoroscopy Machine
                  </h2>
                  <div className="space-y-4">
                    {fluoroscopyComponents.map((item, index) => (
                      <div
                        key={index}
                        className="bg-[#0E1624] rounded-[24px] border border-blue-900/20 p-6"
                      >
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-lg leading-8 text-gray-400">
                          {item.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-[#48B3E4] text-3xl font-black">
                    Benefits and Risks
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#0F2B1C] rounded-[24px] border border-green-500/30 p-6">
                      <h3 className="text-2xl font-bold text-green-400 mb-4">
                        Benefits
                      </h3>
                      <ul className="list-disc pl-5 text-lg leading-8 text-gray-100 space-y-2">
                        <li>
                          Provides real-time imaging for accurate guidance of
                          diagnostic and interventional procedures.
                        </li>
                        <li>
                          Improves success of procedures such as catheter
                          placement and stent insertion. (3)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#2A1014] rounded-[24px] border border-red-500/30 p-6">
                      <h3 className="text-2xl font-bold text-red-400 mb-4">
                        Risks
                      </h3>
                      <ul className="list-disc pl-5 text-lg leading-8 text-gray-100 space-y-2">
                        <li>
                          Exposure to ionizing radiation, especially with
                          prolonged or repeated use.
                        </li>
                        <li>
                          Small risk of allergic reaction or kidney impairment
                          when contrast media are used. (3)
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-[#48B3E4] text-3xl font-black">
                    References
                  </h2>
                  <div className="space-y-4">
                    {masterclassReferences.map((ref, index) => (
                      <div
                        key={index}
                        className="text-gray-400 text-lg leading-8"
                      >
                        • {ref}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}
        {activeTab === "home" && !showMasterclassPage && (
          <div className="px-6 space-y-8 animate-in fade-in duration-500">
            <div className="relative w-full h-[220px] rounded-2xl overflow-hidden">
              {/* صورة الجامعة */}
              <img
                src="/procedures/sphinx.jpg"
                alt="University"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6">
                <p className="text-gray-300 text-sm tracking-widest">
                  WELCOME TO
                </p>

                <h1 className="text-3xl font-bold text-white">FluoroMaster</h1>
              </div>
            </div>
            {/* Practical Tools */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">Practical Tools</h2>

              <div className="grid grid-cols-2 gap-4">
                {/* Smart Safety */}
                <button
                  onClick={() => {
                    setShowSafetyCheck(true);
                    setSafetyView("list");
                  }}
                  className="bg-[#121C35] rounded-[28px] p-6 min-h-[180px] border border-white/10 flex flex-col items-start justify-between"
                >
                  <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
                    <ShieldAlert size={40} className="text-red-500" />
                  </div>

                  <h3 className="text-white text-xl font-bold leading-tight">
                    Smart Safety Check
                  </h3>
                </button>

                {/* Safety History */}
                <button
                  onClick={() => {
                    setShowSafetyCheck(true);
                    setSafetyView("history");
                  }}
                  className="bg-[#121C35] rounded-[28px] p-6 min-h-[180px] border border-white/10 flex flex-col items-start justify-between"
                >
                  <div className="w-20 h-20 rounded-full bg-sky-500/10 flex items-center justify-center">
                    <History size={40} className="text-sky-400" />
                  </div>

                  <h3 className="text-white text-xl font-bold leading-tight">
                    Safety History
                  </h3>
                </button>
              </div>
            </div>
            {/* Masterclass Card */}
            <div className="relative bg-[#0D1520] rounded-[32px] p-6 border border-blue-900/10 overflow-hidden shadow-2xl">
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-bold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full uppercase tracking-widest border border-blue-500/10 font-bold">
                  Master_Class
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    About FluoroMaster
                  </h2>
                  <p className="text-gray-400 text-sm mt-1 max-w-[220px]">
                    Learn the machine, physics, and safety principles.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowTeamPage(false);
                    setShowMasterclassPage(true);
                  }}
                  className="w-10 h-10 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Settings size={150} className="text-blue-400 rotate-12" />
              </div>
            </div>

            {/* Daily Challenge Card */}
            <div className="bg-[#48B3E4] rounded-[32px] p-6 flex items-center justify-between shadow-xl">
              <div className="space-y-3">
                <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded text-white uppercase font-bold">
                  Daily Challenge
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Test your skills with
                  <br />3 quick questions!
                </h3>
                <button className="flex items-center gap-2 text-white font-bold text-sm bg-white/10 px-3 py-1.5 rounded-xl">
                  <PlayCircle
                    size={18}
                    fill="white"
                    className="text-[#48B3E4]"
                  />{" "}
                  Start Challenge
                </button>
              </div>
              <div className="w-20 h-20 rounded-full border-4 border-white/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#48B3E4]">
                  <GraduationCap size={32} />
                </div>
              </div>
            </div>

            {/* Radiology Systems Slider */}
            <section>
              <div className="flex justify-between items-end mb-4">
                <h3 className="text-xl font-bold text-white">
                  Radiology Systems
                </h3>
                <span className="text-sm text-blue-400">Slide to explore</span>
              </div>

              <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                {homeSystemCards.map((card, i) => (
                  <div
                    key={i}
                    onClick={() => handleHomeSystemCardClick(card)}
                    className="min-w-[260px] h-[300px] rounded-[28px] overflow-hidden relative cursor-pointer"
                  >
                    {/* الصورة */}
                    <img
                      src={card.image}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    {/* النص */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-2xl font-bold text-white">
                        {card.title}
                      </h4>

                      <p className="text-blue-400 text-sm mt-1">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
        {activeTab === "quiz" && (
          <div
            className={`${
              zenMode ? "px-4 py-4" : "px-6 py-6"
            } text-white pb-28`}
          >
            {quizView === "dashboard" && (
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl font-black tracking-tight">
                    Quiz Dashboard
                  </h1>
                  <p className="text-gray-400 mt-2 text-sm">
                    Challenge yourself and master all fluoroscopy procedures ✨
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setQuizView("history")}
                    className="rounded-[28px] border border-sky-500/20 bg-[#07121C] p-5 text-left shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/15 flex items-center justify-center text-sky-400 mb-4">
                      <History size={24} />
                    </div>
                    <p className="text-2xl font-bold">History</p>
                  </button>

                  <button
                    onClick={() => setQuizView("badges")}
                    className="rounded-[28px] border border-amber-500/20 bg-[#161108] p-5 text-left shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center text-amber-400 mb-4">
                      <ShieldCheck size={24} />
                    </div>
                    <p className="text-2xl font-bold">Badges</p>
                  </button>

                  <button
                    onClick={() => setQuizView("saved")}
                    className="rounded-[28px] border border-violet-500/20 bg-[#0B0B1B] p-5 text-left shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-violet-500/15 flex items-center justify-center text-violet-400 mb-4">
                      <ClipboardCheck size={24} />
                    </div>
                    <p className="text-2xl font-bold">Saved</p>
                  </button>
                </div>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Global Challenge</h2>

                  <button
                    onClick={() =>
                      startQuizSetup({
                        id: "fluoroscopy-fundamentals",
                        title: "Full App Quiz",
                        subtitle: "10 Random Questions",
                        color: "from-sky-400 to-cyan-500",
                      })
                    }
                    className="w-full rounded-[36px] p-6 bg-gradient-to-r from-sky-400 to-cyan-500 text-white shadow-[0_0_40px_rgba(56,189,248,0.35)] flex items-center justify-between"
                  >
                    <div className="text-left">
                      <h3 className="text-3xl font-black">Full App Quiz</h3>
                      <p className="text-white/80 mt-2 text-lg">
                        10 Random Questions
                      </p>
                    </div>
                    <div className="w-24 h-24 rounded-full bg-white/15 flex items-center justify-center">
                      <PlayCircle
                        size={42}
                        fill="white"
                        className="text-white"
                      />
                    </div>
                  </button>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">System Mastery</h2>

                  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {procedureQuizMeta.slice(0, 6).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => startQuizSetup(item)}
                        className="min-w-[220px] rounded-[32px] p-6 bg-[#10151D] border border-white/5 text-left shadow-xl"
                      >
                        <div
                          className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6`}
                        >
                          <LayoutGrid size={26} />
                        </div>
                        <h3 className="text-3xl font-black leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-3">
                          {item.subtitle}
                        </p>
                      </button>
                    ))}
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-bold">Procedure Practice</h2>

                  <div className="space-y-4">
                    {procedureQuizMeta.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => startQuizSetup(item)}
                        className="w-full rounded-[28px] border border-gray-800 bg-[#0B0F16] px-5 py-5 flex items-center gap-4 shadow-lg hover:border-sky-500/25 transition-all"
                      >
                        <div
                          className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center text-sky-400 shrink-0`}
                        >
                          <ClipboardCheck size={24} />
                        </div>

                        <div className="flex-1 text-left">
                          <h3 className="text-2xl font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.subtitle}
                          </p>
                        </div>

                        <ChevronRight size={24} className="text-gray-600" />
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {quizView === "settings" && selectedQuiz && (
              <div className="space-y-8">
                <button
                  onClick={() => setQuizView("dashboard")}
                  className="text-white"
                >
                  <ArrowLeft size={34} />
                </button>

                <div>
                  <h1 className="text-4xl font-black">Quiz Settings</h1>
                  <p className="text-sky-400 text-lg mt-2">
                    {selectedQuiz.title}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-gray-400 text-lg tracking-wide">
                    Number of Questions
                  </p>
                  <div className="rounded-[32px] bg-[#0D1118] border border-gray-800 p-6">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-3xl font-semibold">Questions</span>
                      <span className="px-5 py-3 rounded-2xl bg-sky-500/15 text-sky-400 text-3xl font-black">
                        {questionCount}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="3"
                      max="10"
                      value={questionCount}
                      onChange={(e) => setQuestionCount(Number(e.target.value))}
                      className="w-full accent-sky-400"
                    />

                    <div className="flex justify-between text-gray-500 mt-3">
                      <span>3</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-400 text-lg tracking-wide">
                    Quiz Mode
                  </p>

                  <div className="rounded-[30px] border border-gray-800 bg-[#0D1118] p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-amber-500/15 flex items-center justify-center text-amber-400">
                        <Activity size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Speed Mode</h3>
                        <p className="text-gray-500">10 seconds per question</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSpeedMode(!speedMode)}
                      className={`w-16 h-9 rounded-full transition ${
                        speedMode ? "bg-sky-400" : "bg-gray-700"
                      } relative`}
                    >
                      <span
                        className={`absolute top-1 w-7 h-7 rounded-full bg-white transition ${
                          speedMode ? "right-1" : "left-1"
                        }`}
                      />
                    </button>
                  </div>

                  <div className="rounded-[30px] border border-gray-800 bg-[#0D1118] p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-violet-500/15 flex items-center justify-center text-violet-400">
                        <BrainCircuit size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Zen Mode</h3>
                        <p className="text-gray-500">Minimal UI, full focus</p>
                      </div>
                    </div>

                    <button
                      onClick={() => setZenMode(!zenMode)}
                      className={`w-16 h-9 rounded-full transition ${
                        zenMode ? "bg-sky-400" : "bg-gray-700"
                      } relative`}
                    >
                      <span
                        className={`absolute top-1 w-7 h-7 rounded-full bg-white transition ${
                          zenMode ? "right-1" : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <button
                  onClick={startQuiz}
                  className="w-full py-5 rounded-[28px] bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-2xl font-black shadow-[0_0_35px_rgba(56,189,248,0.35)]"
                >
                  Start Quiz
                </button>
              </div>
            )}

            {quizView === "playing" && selectedQuiz && (
              <div
                className={`${
                  zenMode ? "max-w-2xl mx-auto pt-6" : "space-y-6"
                }`}
              >
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setQuizView("settings")}
                    className="text-white"
                  >
                    <ArrowLeft size={28} />
                  </button>

                  <div className="px-4 py-2 rounded-full bg-red-500/20 text-red-400 font-bold">
                    ⏳ {timeLeft}s
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-black">{selectedQuiz.title}</h2>
                  <p className="text-gray-400 mt-2">
                    Question {currentQuestion + 1} /{" "}
                    {getCurrentQuizQuestions().length}
                  </p>
                </div>

                <div className="w-full h-2 rounded-full bg-[#111827] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 to-cyan-500 transition-all"
                    style={{
                      width: `${
                        ((currentQuestion + 1) /
                          getCurrentQuizQuestions().length) *
                        100
                      }%`,
                    }}
                  />
                </div>

                <div className="rounded-[32px] bg-[#0B1018] border border-gray-800 p-6 shadow-xl">
                  <h3 className="text-2xl font-bold leading-relaxed">
                    {getCurrentQuizQuestions()[currentQuestion]?.question}
                  </h3>
                </div>

                <div className="space-y-4">
                  {getCurrentQuizQuestions()[currentQuestion]?.options.map(
                    (opt, i) => {
                      const correctAnswer =
                        getCurrentQuizQuestions()[currentQuestion]?.answer;

                      return (
                        <button
                          key={i}
                          onClick={() => handleAnswerClick(opt)}
                          className={`w-full p-5 rounded-[24px] text-left text-lg font-semibold transition-all border
                ${
                  selectedAnswer
                    ? opt === correctAnswer
                      ? "bg-green-500/20 border-green-500 text-green-300"
                      : opt === selectedAnswer
                      ? "bg-red-500/20 border-red-500 text-red-300"
                      : "bg-[#111827] border-gray-800 text-gray-400"
                    : "bg-[#111827] border-gray-800 hover:border-sky-400 hover:bg-sky-500/10"
                }`}
                        >
                          {opt}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            )}

            {quizView === "result" && selectedQuiz && (
              <div className="text-center space-y-6 pt-10">
                <div className="w-28 h-28 mx-auto rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <GraduationCap size={46} />
                </div>

                <div>
                  <h2 className="text-4xl font-black">Your Score 🎉</h2>
                  <p className="text-gray-400 mt-3">{selectedQuiz.title}</p>
                </div>

                <div className="rounded-[32px] bg-[#0E1520] border border-gray-800 p-8 max-w-md mx-auto">
                  <p className="text-6xl font-black text-sky-400">
                    {score}/{getCurrentQuizQuestions().length}
                  </p>
                  <p className="text-xl text-gray-400 mt-3">
                    {Math.round(
                      (score / getCurrentQuizQuestions().length) * 100
                    )}
                    %
                  </p>
                </div>

                <div className="flex flex-col gap-4 max-w-md mx-auto">
                  <button
                    onClick={() => setQuizView("settings")}
                    className="w-full py-4 rounded-[24px] bg-[#111827] border border-gray-800 text-white text-lg font-bold"
                  >
                    Retry Quiz
                  </button>

                  <button
                    onClick={resetQuizFlow}
                    className="w-full py-4 rounded-[24px] bg-gradient-to-r from-sky-400 to-cyan-500 text-white text-lg font-black"
                  >
                    Back To Dashboard
                  </button>
                </div>
              </div>
            )}

            {quizView === "history" && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button onClick={() => setQuizView("dashboard")}>
                    <ArrowLeft size={28} />
                  </button>
                  <h2 className="text-3xl font-black">History</h2>
                </div>

                <div className="space-y-4">
                  {quizHistory.length === 0 ? (
                    <div className="rounded-[28px] bg-[#0D1118] border border-gray-800 p-6 text-gray-400">
                      No quiz attempts yet.
                    </div>
                  ) : (
                    quizHistory.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-[28px] bg-[#0D1118] border border-gray-800 p-5"
                      >
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-gray-400 mt-2">
                          {item.score}/{item.total} • {item.percentage}% •{" "}
                          {item.date}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {quizView === "badges" && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button onClick={() => setQuizView("dashboard")}>
                    <ArrowLeft size={28} />
                  </button>
                  <h2 className="text-3xl font-black">Badges</h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {earnedBadges.length === 0 ? (
                    <div className="col-span-2 rounded-[28px] bg-[#0D1118] border border-gray-800 p-6 text-gray-400">
                      No badges earned yet.
                    </div>
                  ) : (
                    earnedBadges.map((badge) => (
                      <div
                        key={badge}
                        className="rounded-[28px] bg-[#161108] border border-amber-500/20 p-6 text-center"
                      >
                        <ShieldCheck
                          size={36}
                          className="mx-auto text-amber-400 mb-3"
                        />
                        <p className="font-bold text-lg">{badge}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {quizView === "saved" && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button onClick={() => setQuizView("dashboard")}>
                    <ArrowLeft size={28} />
                  </button>
                  <h2 className="text-3xl font-black">Saved</h2>
                </div>

                <div className="space-y-4">
                  {savedQuizzes.length === 0 ? (
                    <div className="rounded-[28px] bg-[#0D1118] border border-gray-800 p-6 text-gray-400">
                      No saved quizzes yet.
                    </div>
                  ) : (
                    savedQuizzes.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-[28px] bg-[#0D1118] border border-gray-800 p-5"
                      >
                        <h3 className="text-xl font-bold">{item.title}</h3>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {activeTab === "refs" && (
          <div className="p-6 space-y-6 animate-in fade-in duration-300">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tight">
                Scientific Atlas
              </h2>
            </div>

            {/* Search */}
            <div className="relative">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                size={24}
              />
              <input
                type="text"
                placeholder="Search citations..."
                value={atlasSearch}
                onChange={(e) => setAtlasSearch(e.target.value)}
                className="w-full bg-[#161B22] border border-gray-800 rounded-[28px] py-6 pl-16 pr-5 text-xl text-white outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {atlasCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setAtlasCategory(cat)}
                  className={`px-8 py-4 rounded-[24px] text-lg font-bold whitespace-nowrap border transition-all ${
                    atlasCategory === cat
                      ? "bg-[#56C7FF] text-white border-[#56C7FF]"
                      : "bg-[#161B22] text-gray-400 border-gray-800"
                  }`}
                >
                  {cat === "Hysterosalpingography(HSG)" ? "HSG" : cat}
                </button>
              ))}
            </div>

            {/* Featured card */}
            {featuredAtlasItem &&
              atlasCategory === "All" &&
              atlasSearch.trim() === "" && (
                <div className="rounded-[34px] overflow-hidden border border-cyan-900/40 bg-[linear-gradient(135deg,#0A1730,#07111F)] shadow-2xl">
                  <div className="p-8 flex items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-cyan-500/10 flex items-center justify-center text-[#56C7FF] shrink-0">
                      <FlaskConical size={42} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-[#56C7FF]">
                        {featuredAtlasItem.title}
                      </h3>
                      <p className="mt-3 text-gray-300 text-xl leading-relaxed max-w-3xl">
                        {featuredAtlasItem.subtitle}
                      </p>
                    </div>

                    <ChevronRight
                      size={30}
                      className="text-gray-500 shrink-0"
                    />
                  </div>
                </div>
              )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-24">
              {filteredAtlasItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[30px] overflow-hidden border border-gray-800 bg-[#0C1423] shadow-xl"
                >
                  <div className="aspect-[1/1] overflow-hidden bg-[#0A1120]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="px-5 py-4 border-t border-white/5">
                    <h4 className="text-2xl font-bold text-white leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- PROCEDURES TAB --- */}
        {activeTab === "procedures" && !selectedProcedure && (
          <div className="p-0 animate-in fade-in slide-in-from-bottom-4">
            <div className="p-6 pb-2 text-center">
              <h2 className="text-2xl font-bold uppercase tracking-widest">
                {procCategory === "All"
                  ? "All Procedures"
                  : `${procCategory} Procedures`}
              </h2>

              <div className="relative mt-6">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search procedures..."
                  className="w-full bg-[#161B22] border border-gray-800 rounded-2xl py-4 pl-12 pr-4 focus:ring-1 focus:ring-blue-500 outline-none text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="px-6 flex gap-3 overflow-x-auto scrollbar-hide my-4 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProcCategory(cat)}
                  className={`px-6 py-2.5 rounded-2xl text-[11px] font-bold whitespace-nowrap transition-all border ${
                    procCategory === cat
                      ? "bg-[#48B3E4] border-[#48B3E4] text-white shadow-lg shadow-[#48B3E4]/20"
                      : "bg-[#161B22] border-gray-800 text-gray-500"
                  }`}
                >
                  {cat === "GIT"
                    ? "GIT"
                    : cat === "Biliary"
                    ? "Biliary"
                    : cat === "Urinary"
                    ? "Urinary"
                    : cat === "Hysterosalpingography(HSG)"
                    ? "HSG"
                    : cat}
                </button>
              ))}
            </div>

            <div className="px-6 space-y-4 pb-10">
              {filteredProcedures.map((proc) => (
                <div
                  key={proc.id}
                  onClick={() => handleProcedureClick(proc)}
                  className="bg-[#111827] border border-gray-800/60 p-4 rounded-[32px] flex items-center gap-5 hover:border-blue-500/30 transition-all active:scale-[0.98] shadow-xl"
                >
                  <div className="w-24 h-24 rounded-[24px] bg-[#0B1320] border border-gray-800 shrink-0 overflow-hidden relative">
                    <img
                      src={proc.image || "/procedures/default.jpg"}
                      alt={proc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-lg text-gray-100">
                      {proc.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5 truncate">
                      {proc.fullName}
                    </p>
                    <div className="mt-3 inline-flex items-center px-4 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <span className="text-blue-400 text-[9px] font-black uppercase tracking-widest">
                        {proc.categoryFull}
                      </span>
                    </div>
                  </div>
                  <ChevronRight size={22} className="text-gray-600 mr-2" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- PROCEDURE DETAIL VIEW --- */}
        {selectedProcedure && !showSafetyCheck && (
          <div className="animate-in fade-in slide-in-from-right duration-300">
            <div className="p-6 bg-[#05080D] border-b border-gray-800 flex items-center gap-4 sticky top-0 z-20 backdrop-blur-md bg-opacity-95">
              <button
                onClick={() => setSelectedProcedure(null)}
                className="p-2 -ml-2 rounded-xl hover:bg-gray-800 text-gray-400"
              >
                <ArrowLeft size={24} />
              </button>
              <div className="flex-1">
                <h2 className="font-bold text-xl leading-tight">
                  {selectedProcedure.title}
                </h2>
                <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mt-0.5">
                  {selectedProcedure.subtitle || selectedProcedure.fullName}
                </p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Illustration Placeholder */}
              <div className="w-full aspect-square bg-[#111827] rounded-[40px] border border-gray-800 flex items-center justify-center overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                <ImageIcon size={100} className="text-gray-800 opacity-50" />
                <p className="absolute bottom-6 text-xs text-gray-500 font-bold uppercase tracking-widest">
                  Procedural Illustration
                </p>
              </div>

              <button className="w-full py-5 bg-[#0D1520] border border-blue-900/30 rounded-3xl flex items-center justify-between px-6 shadow-xl active:scale-[0.98] group transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <BrainCircuit size={24} />
                  </div>
                  <div className="text-left">
                    <h4 className="text-base font-bold text-white leading-none">
                      Test Your Knowledge
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-2">
                      Take a quick quiz on {selectedProcedure.title}
                    </p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-blue-500" />
              </button>

              {[
                {
                  id: "indications",
                  title: "Indications",
                  icon: Info,
                  color: "text-blue-400",
                  bg: "bg-[#111827]",
                  data: selectedProcedure.indications,
                },
                {
                  id: "contraindications",
                  title: "Contraindications",
                  icon: AlertTriangle,
                  color: "text-blue-400",
                  bg: "bg-[#111827]",
                  data: selectedProcedure.contraindications,
                },
                {
                  id: "preparation",
                  title: "Preparation",
                  icon: ListChecks,
                  color: "text-blue-400",
                  bg: "bg-[#111827]",
                  data: selectedProcedure.preparation,
                },
                {
                  id: "contrast",
                  title: "Contrast Media",
                  icon: Droplets,
                  color: "text-blue-400",
                  bg: "bg-[#111827]",
                  data:
                    selectedProcedure.contrastMedia ||
                    (selectedProcedure.contrast
                      ? [selectedProcedure.contrast]
                      : null),
                },
                {
                  id: "modalities",
                  title: "Imaging Modalities",
                  icon: Monitor,
                  color: "text-blue-400",
                  bg: "bg-[#111827]",
                  data: selectedProcedure.imagingModalities,
                },
                {
                  id: "technique",
                  title: "Technique",
                  icon: Microscope,
                  color: "text-blue-400",
                  bg: "bg-[#111827]",
                  data: selectedProcedure.technique,
                },
                {
                  id: "normal",
                  title: "Normal Findings",
                  icon: CheckCircle2,
                  color: "text-blue-400",
                  bg: "bg-[#111827]",
                  data: selectedProcedure.normalFindings,
                },
                {
                  id: "complications",
                  title: "Complications",
                  icon: AlertTriangle,
                  color: "text-blue-400",
                  bg: "bg-[#111827]",
                  data: selectedProcedure.complications,
                },
              ].map(
                (sec, idx) =>
                  sec.data && (
                    <section
                      key={idx}
                      className={`${sec.bg} rounded-[32px] border border-gray-800/60 overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-2`}
                    >
                      <div
                        className={`p-5 border-b border-gray-800/60 flex items-center gap-4 ${sec.color}`}
                      >
                        <sec.icon size={22} strokeWidth={2.5} />
                        <h4 className="text-base font-bold text-white tracking-wide">
                          {sec.title}
                        </h4>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-4">
                          {sec.data.map((item, i) => (
                            <li
                              key={i}
                              className="text-sm text-gray-300 flex items-start gap-4 leading-relaxed font-medium"
                            >
                              <div
                                className={`mt-2 w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0`}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  )
              )}

              {selectedProcedure.pathologyCases && (
                <section className="space-y-6 pt-6">
                  <h3 className="text-xl font-bold px-1">Pathology Cases</h3>
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide no-scrollbar -mx-1 px-1">
                    {selectedProcedure.pathologyCases.map((pc, i) => (
                      <div
                        key={i}
                        className="min-w-[200px] aspect-[4/5] bg-[#111827] rounded-[32px] border border-gray-800 overflow-hidden relative shadow-xl"
                      >
                        <div className="w-full h-full flex items-center justify-center bg-black/40">
                          <ImageIcon size={40} className="text-gray-800" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                          <p className="text-[10px] font-bold text-white tracking-wide">
                            {pc.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {selectedProcedure.references && (
                <section className="pt-10 space-y-6">
                  <div className="h-[1px] w-full bg-gray-800" />
                  <h4 className="text-xl font-bold px-1">
                    References & Sources
                  </h4>
                  <ul className="space-y-4 px-1">
                    {selectedProcedure.references.map((ref, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-400 leading-relaxed font-medium flex gap-3"
                      >
                        <div className="mt-2 w-1 h-1 rounded-full bg-gray-700 shrink-0" />
                        {ref.startsWith("http") ? (
                          <a
                            href={ref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline break-all text-xs"
                          >
                            {ref}
                          </a>
                        ) : (
                          <span>{ref}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        )}
      </div>
      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-22 bg-[#05080D]/95 backdrop-blur-md border-t border-gray-800 flex items-center justify-around z-30 px-6">
        {[
          { id: "home", icon: Home, label: "Home" },
          { id: "procedures", icon: BookOpen, label: "Procedures" },
          { id: "ai", icon: BrainCircuit, label: "AI Advisor" },
          { id: "quiz", icon: GraduationCap, label: "Quiz" },
          { id: "refs", icon: FileText, label: "Refs" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setSelectedProcedure(null);
            }}
            className={`flex flex-col items-center gap-1.5 transition-all py-3 rounded-2xl ${
              activeTab === tab.id
                ? "text-[#48B3E4] scale-110"
                : "text-gray-500"
            }`}
          >
            <tab.icon
              size={24}
              strokeWidth={tab.id === activeTab ? 2.5 : 2}
              fill={tab.id === activeTab ? "currentColor" : "none"}
              fillOpacity={0.1}
            />
            <span className="text-[9px] font-black uppercase tracking-tight">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      {/* Safety Modal */}
      {showSafetyCheck && selectedProcedure && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-[#111827] border border-gray-800 rounded-[40px] w-full max-sm overflow-hidden shadow-2xl animate-in zoom-in-95">
            <div className="p-8 border-b border-gray-800 flex justify-between items-center bg-[#161B22]/50">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <ShieldAlert size={24} className="text-[#48B3E4]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-none">
                    Safety Review
                  </h3>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2 font-bold">
                    {selectedProcedure.title}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowSafetyCheck(false)}
                className="text-gray-600 p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 space-y-8 max-h-[45vh] overflow-y-auto scrollbar-hide">
              {selectedProcedure.safetyQuestions?.map((sq, i) => (
                <div
                  key={i}
                  className="space-y-5 border-b border-gray-800 pb-6 last:border-0 last:pb-0"
                >
                  <p className="text-base font-bold text-gray-200 leading-snug italic">
                    {i + 1}. {sq.q}
                  </p>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowSafetyCheck(false)}
                      className="flex-1 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setShowSafetyCheck(false)}
                      className="flex-1 py-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all"
                    >
                      No
                    </button>
                  </div>
                </div>
              )) || (
                <p className="text-center text-gray-500">
                  No safety review required.
                </p>
              )}
            </div>

            <div className="p-6 border-t border-gray-800 bg-[#161B22]/50">
              <button
                onClick={() => setShowSafetyCheck(false)}
                className="w-full py-5 bg-[#48B3E4] rounded-[24px] text-sm font-black text-white shadow-xl shadow-[#48B3E4]/20 active:scale-95 transition-all"
              >
                Proceed to Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
