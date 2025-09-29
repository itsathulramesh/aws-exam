import { Question } from '../types/exam';

export const examQuestions: Question[] = [
  // Cloud Concepts (24% - 16 questions)
  {
    id: 1,
    topic: "Cloud Concepts",
    question: "What are the main benefits of cloud computing?",
    options: [
      "Trade capital expense for variable expense",
      "Benefit from massive economies of scale", 
      "Stop guessing about capacity",
      "Increase speed and agility",
      "All of the above"
    ],
    correctAnswers: [4],
    multipleChoice: false,
    marks: 15,
    explanation: "Cloud computing provides all these benefits: cost optimization, scalability, agility, and eliminates capacity planning guesswork."
  },
  {
    id: 2,
    topic: "Cloud Concepts",
    question: "Which of the following are characteristics of cloud computing? (Select TWO)",
    options: [
      "On-demand self-service",
      "Limited network access",
      "Resource pooling",
      "Manual scaling only",
      "Single-tenant architecture"
    ],
    correctAnswers: [0, 2],
    multipleChoice: true,
    marks: 15,
    explanation: "On-demand self-service and resource pooling are key characteristics of cloud computing according to NIST definition."
  },
  {
    id: 3,
    topic: "Cloud Concepts",
    question: "What is the AWS Well-Architected Framework primarily designed for?",
    options: [
      "Cost optimization only",
      "Security best practices only",
      "Building and running workloads in the cloud",
      "Network configuration",
      "Database design"
    ],
    correctAnswers: [2],
    multipleChoice: false,
    marks: 12,
    explanation: "The AWS Well-Architected Framework provides guidance for building secure, high-performing, resilient, and efficient infrastructure."
  },
  {
    id: 4,
    topic: "Cloud Concepts",
    question: "Which deployment models are part of cloud computing? (Select THREE)",
    options: [
      "Public cloud",
      "Private cloud", 
      "Hybrid cloud",
      "Community cloud",
      "Personal cloud"
    ],
    correctAnswers: [0, 1, 2],
    multipleChoice: true,
    marks: 15,
    explanation: "Public, private, and hybrid are the three main cloud deployment models recognized by NIST."
  },

  // Security and Compliance (30% - 19 questions)
  {
    id: 5,
    topic: "Security and Compliance",
    question: "What is the AWS Shared Responsibility Model?",
    options: [
      "AWS is responsible for everything",
      "Customer is responsible for everything", 
      "AWS secures the infrastructure, customer secures their data and applications",
      "Both AWS and customer have no security responsibilities",
      "Only applies to EC2 instances"
    ],
    correctAnswers: [2],
    multipleChoice: false,
    marks: 18,
    explanation: "AWS manages security 'of' the cloud (infrastructure), while customers manage security 'in' the cloud (data, applications)."
  },
  {
    id: 6,
    topic: "Security and Compliance",
    question: "Which AWS services help with identity and access management? (Select TWO)",
    options: [
      "AWS IAM",
      "AWS S3",
      "AWS Cognito",
      "AWS Lambda",
      "AWS EC2"
    ],
    correctAnswers: [0, 2],
    multipleChoice: true,
    marks: 20,
    explanation: "IAM manages AWS resource access, while Cognito handles user identity for applications."
  },
  {
    id: 7,
    topic: "Security and Compliance",
    question: "What is the principle of least privilege in AWS IAM?",
    options: [
      "Give users maximum permissions",
      "Give users only the permissions they need to perform their job",
      "Give all users administrator access",
      "Remove all permissions from users",
      "Only applies to root users"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 18,
    explanation: "Least privilege means granting only the minimum permissions necessary for users to complete their tasks."
  },
  {
    id: 8,
    topic: "Security and Compliance",
    question: "Which AWS service provides DDoS protection?",
    options: [
      "AWS CloudFront",
      "AWS Shield",
      "AWS WAF",
      "AWS Inspector",
      "AWS GuardDuty"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 16,
    explanation: "AWS Shield provides DDoS protection, with Shield Standard included free and Shield Advanced offering enhanced protection."
  },

  // Cloud Technology and Services (34% - 22 questions)
  {
    id: 9,
    topic: "Cloud Technology and Services",
    question: "Which AWS service is best for hosting a static website?",
    options: [
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "Amazon Lambda",
      "Amazon EBS"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 16,
    explanation: "Amazon S3 can host static websites directly with high availability and cost-effectiveness."
  },
  {
    id: 10,
    topic: "Cloud Technology and Services", 
    question: "What are the main types of cloud computing services? (Select THREE)",
    options: [
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Software as a Service (SaaS)",
      "Database as a Service (DaaS)",
      "Network as a Service (NaaS)"
    ],
    correctAnswers: [0, 1, 2],
    multipleChoice: true,
    marks: 18,
    explanation: "IaaS, PaaS, and SaaS are the three fundamental cloud service models."
  },
  {
    id: 11,
    topic: "Cloud Technology and Services",
    question: "Which AWS service provides virtual servers in the cloud?",
    options: [
      "Amazon S3",
      "Amazon EC2", 
      "Amazon RDS",
      "Amazon Lambda",
      "Amazon CloudFront"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 14,
    explanation: "Amazon EC2 (Elastic Compute Cloud) provides resizable virtual servers in AWS cloud."
  },
  {
    id: 12,
    topic: "Cloud Technology and Services",
    question: "What is Amazon RDS primarily used for?",
    options: [
      "File storage",
      "Managed relational databases",
      "Content delivery",
      "Virtual private networks",
      "Load balancing"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 16,
    explanation: "Amazon RDS (Relational Database Service) provides managed database services for various database engines."
  },

  // Billing, Pricing and Support (12% - 8 questions)
  {
    id: 13,
    topic: "Billing, Pricing and Support",
    question: "What is the AWS Free Tier?",
    options: [
      "Free access to all AWS services forever",
      "Free access to select AWS services for 12 months",
      "Paid access to premium services only",
      "Only available for students",
      "Requires a special application process"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 10,
    explanation: "AWS Free Tier provides free access to many AWS services for 12 months for new customers, plus always-free services."
  },
  {
    id: 14,
    topic: "Billing, Pricing and Support",
    question: "Which AWS support plans are available? (Select THREE)",
    options: [
      "Basic",
      "Developer",
      "Business",
      "Enterprise",
      "Professional"
    ],
    correctAnswers: [0, 1, 2],
    multipleChoice: true,
    marks: 12,
    explanation: "AWS offers Basic (free), Developer, Business, and Enterprise support plans with varying levels of service."
  },
  {
    id: 15,
    topic: "Billing, Pricing and Support",
    question: "What is the AWS pricing model based on?",
    options: [
      "Fixed monthly fees only",
      "Pay-as-you-go pricing",
      "Annual contracts only",
      "Per-user licensing",
      "Flat rate for all services"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 8,
    explanation: "AWS follows a pay-as-you-go pricing model where you pay only for the resources you consume."
  }
];

// Add more questions to reach 65 total...
// This is a sample - in a real implementation, you'd have all 65 questions