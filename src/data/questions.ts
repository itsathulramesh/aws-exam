import { Question } from '../types/exam';

export const examQuestions: Question[] = [
  // Cloud Concepts (24% - 16 questions, 3 unscored)
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
    marks: 20,
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
    marks: 20,
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
    marks: 0,
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
    marks: 20,
    explanation: "Public, private, and hybrid are the three main cloud deployment models recognized by NIST."
  },
  {
    id: 5,
    topic: "Cloud Concepts",
    question: "What is elasticity in cloud computing?",
    options: [
      "The ability to stretch physical servers",
      "The ability to scale resources up or down automatically based on demand",
      "The ability to backup data automatically", 
      "The ability to encrypt data",
      "The ability to replicate data"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Elasticity refers to the automatic scaling of resources to match current demand levels."
  },
  {
    id: 6,
    topic: "Cloud Concepts",
    question: "Which are the six pillars of the AWS Well-Architected Framework? (Select TWO)",
    options: [
      "Operational Excellence",
      "Data Protection",
      "Reliability", 
      "Network Security",
      "Resource Management"
    ],
    correctAnswers: [0, 2], 
    multipleChoice: true,
    marks: 20,
    explanation: "The six pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability."
  },
  {
    id: 7,
    topic: "Cloud Concepts",
    question: "What is the main advantage of using cloud computing over traditional on-premises infrastructure?",
    options: [
      "Higher upfront costs",
      "Less scalability",
      "Reduced operational overhead",
      "Mandatory long-term contracts", 
      "Limited geographic reach"
    ],
    correctAnswers: [2],
    multipleChoice: false,
    marks: 20,
    explanation: "Cloud computing reduces operational overhead by eliminating the need to manage physical infrastructure."
  },
  {
    id: 8,
    topic: "Cloud Concepts",
    question: "What does 'agility' mean in cloud computing context?",
    options: [
      "Physical flexibility of servers",
      "Speed of data transfer",
      "Ability to quickly provision and de-provision resources",
      "Network latency optimization",
      "Database query speed"
    ],
    correctAnswers: [2],
    multipleChoice: false,
    marks: 0,
    explanation: "Agility in cloud computing refers to the ability to rapidly deploy, modify, and scale resources as needed."
  },
  {
    id: 9,
    topic: "Cloud Concepts", 
    question: "Which factors should be considered when choosing a cloud deployment model? (Select TWO)",
    options: [
      "Security requirements",
      "Color of servers",
      "Compliance needs",
      "Office location",
      "Employee count"
    ],
    correctAnswers: [0, 2],
    multipleChoice: true,
    marks: 20,
    explanation: "Security requirements and compliance needs are critical factors in choosing between public, private, or hybrid cloud."
  },
  {
    id: 10,
    topic: "Cloud Concepts",
    question: "What is the primary benefit of economies of scale in cloud computing?",
    options: [
      "Increased physical size of data centers",
      "Lower costs due to shared infrastructure across many customers",
      "Faster internet connections",
      "More employees",
      "Larger servers"
    ],
    correctAnswers: [1], 
    multipleChoice: false,
    marks: 20,
    explanation: "Economies of scale allow cloud providers to reduce costs by sharing infrastructure costs across millions of customers."
  },
  {
    id: 11,
    topic: "Cloud Concepts",
    question: "What is meant by 'high availability' in cloud computing?",
    options: [
      "Servers are physically tall",
      "Systems remain operational even when components fail",
      "Services are expensive",
      "Data is stored at high altitudes", 
      "Servers run at high speed"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "High availability ensures systems continue operating even when individual components experience failures."
  },
  {
    id: 12,
    topic: "Cloud Concepts",
    question: "Which statement best describes cloud computing scalability?",
    options: [
      "The ability to weigh cloud resources",
      "The ability to increase or decrease resources based on demand",
      "The ability to physically move servers",
      "The ability to change server colors",
      "The ability to rename resources"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Scalability allows resources to be adjusted up or down to match workload demands efficiently."
  },
  {
    id: 13,
    topic: "Cloud Concepts",
    question: "What is a key characteristic of on-demand self-service in cloud computing?",
    options: [
      "Requires calling customer support for each request",
      "Users can provision resources automatically without human interaction",
      "Only available during business hours",
      "Requires physical presence at data center",
      "Limited to specific user roles only"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "On-demand self-service allows users to provision computing resources automatically as needed without human intervention."
  },
  {
    id: 14,
    topic: "Cloud Concepts",
    question: "Which are benefits of using cloud computing? (Select TWO)",
    options: [
      "Go global in minutes",
      "Increase infrastructure maintenance",
      "Stop spending money on running and maintaining data centers",
      "Decrease security",
      "Reduce deployment speed"
    ],
    correctAnswers: [0, 2],
    multipleChoice: true,
    marks: 20,
    explanation: "Cloud computing enables rapid global deployment and eliminates the need for physical data center maintenance."
  },
  {
    id: 15,
    topic: "Cloud Concepts",
    question: "What does 'fault tolerance' mean in cloud computing?",
    options: [
      "Tolerance for user mistakes",
      "System's ability to continue operating despite component failures",
      "Acceptance of high costs",
      "Patience with slow performance",
      "Tolerance for security breaches"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Fault tolerance ensures systems continue functioning even when individual components fail or experience issues."
  },
  {
    id: 16,
    topic: "Cloud Concepts",
    question: "What is the primary advantage of resource pooling in cloud computing?",
    options: [
      "Swimming pools for employees",
      "Shared computing resources serve multiple customers efficiently",
      "Physical storage of equipment",
      "Collection of user data",
      "Gathering of network cables"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Resource pooling allows cloud providers to efficiently serve multiple customers using shared computing resources."
  },

  // Security and Compliance (30% - 19 questions, 5 unscored)
  {
    id: 17,
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
    marks: 20,
    explanation: "AWS manages security 'of' the cloud (infrastructure), while customers manage security 'in' the cloud (data, applications)."
  },
  {
    id: 18,
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
    id: 19,
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
    marks: 20,
    explanation: "Least privilege means granting only the minimum permissions necessary for users to complete their tasks."
  },
  {
    id: 20,
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
    marks: 20,
    explanation: "AWS Shield provides DDoS protection, with Shield Standard included free and Shield Advanced offering enhanced protection."
  },
  {
    id: 21,
    topic: "Security and Compliance",
    question: "What is AWS CloudTrail primarily used for?",
    options: [
      "Load balancing",
      "API logging and monitoring",
      "Content delivery",
      "Database management",
      "File storage"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "CloudTrail records API calls made on your account and provides audit trails for compliance and security analysis."
  },
  {
    id: 22,
    topic: "Security and Compliance",
    question: "Which AWS service helps detect threats and protect AWS accounts? (Select TWO)",
    options: [
      "AWS GuardDuty",
      "AWS EC2",
      "AWS Inspector",
      "AWS S3", 
      "AWS Lambda"
    ],
    correctAnswers: [0, 2],
    multipleChoice: true,
    marks: 20,
    explanation: "GuardDuty provides threat detection, while Inspector assesses applications for security vulnerabilities."
  },
  {
    id: 23,
    topic: "Security and Compliance",
    question: "What is AWS KMS used for?",
    options: [
      "Key management and encryption",
      "Network monitoring",
      "Load balancing",
      "Database queries",
      "File compression"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Key Management Service (KMS) creates and manages encryption keys for AWS services and applications."
  },
  {
    id: 24,
    topic: "Security and Compliance",
    question: "What is the AWS root account?",
    options: [
      "A regular user account",
      "The initial account created when you sign up for AWS",
      "A backup account",
      "A temporary account",
      "A service account only"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "The root account is the initial account with complete access to all AWS services and resources in the account."
  },
  {
    id: 25,
    topic: "Security and Compliance",
    question: "Which security best practices should be followed for the AWS root account? (Select TWO)",
    options: [
      "Use it for daily operations",
      "Enable multi-factor authentication (MFA)",
      "Share credentials with team members",
      "Create strong, unique password",
      "Disable it completely"
    ],
    correctAnswers: [1, 3],
    multipleChoice: true,
    marks: 0,
    explanation: "Root account should have MFA enabled and a strong password, but should not be used for daily operations."
  },
  {
    id: 26,
    topic: "Security and Compliance",
    question: "What is AWS WAF designed to protect against?",
    options: [
      "DDoS attacks only",
      "Web application attacks",
      "Email spam",
      "Database corruption",
      "Network latency"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS WAF (Web Application Firewall) protects web applications from common web exploits and attacks."
  },
  {
    id: 27,
    topic: "Security and Compliance",
    question: "What is the purpose of AWS Config?",
    options: [
      "Configure network settings",
      "Track resource configurations and compliance",
      "Set up user accounts",
      "Manage billing",
      "Monitor application performance"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Config tracks resource configurations and evaluates them against compliance rules and best practices."
  },
  {
    id: 28,
    topic: "Security and Compliance",
    question: "Which is a key benefit of AWS Identity and Access Management (IAM)?",
    options: [
      "Automatic scaling",
      "Fine-grained access control",
      "Data backup",
      "Load balancing",
      "Content delivery"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "IAM provides fine-grained access control, allowing precise permissions management for users and resources."
  },
  {
    id: 29,
    topic: "Security and Compliance",
    question: "What should you do if you suspect your AWS credentials have been compromised?",
    options: [
      "Wait and monitor",
      "Change passwords and rotate access keys immediately",
      "Delete the account",
      "Contact local authorities",
      "Ignore if no damage is visible"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "Immediately change passwords and rotate access keys to prevent unauthorized access to your AWS resources."
  },
  {
    id: 30,
    topic: "Security and Compliance",
    question: "Which AWS service provides security assessment of applications?",
    options: [
      "AWS Shield",
      "AWS Inspector",
      "AWS CloudFront", 
      "AWS Lambda",
      "AWS RDS"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Inspector automatically assesses applications for security vulnerabilities and compliance issues."
  },
  {
    id: 31,
    topic: "Security and Compliance",
    question: "What is the purpose of AWS Secrets Manager?",
    options: [
      "Hide AWS services",
      "Store and manage sensitive information like passwords and API keys",
      "Encrypt hard drives",
      "Manage user accounts",
      "Monitor network traffic"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Secrets Manager securely stores, manages, and retrieves sensitive information like database passwords and API keys."
  },
  {
    id: 32,
    topic: "Security and Compliance",
    question: "Which compliance certifications does AWS maintain? (Select TWO)",
    options: [
      "SOC 1/2/3",
      "ISO 27001",
      "Fast Food Safety",
      "Driver's License",
      "Real Estate License"
    ],
    correctAnswers: [0, 1],
    multipleChoice: true,
    marks: 0,
    explanation: "AWS maintains numerous compliance certifications including SOC reports and ISO 27001 for security management."
  },
  {
    id: 33,
    topic: "Security and Compliance",
    question: "What is AWS Artifact?",
    options: [
      "A deployment tool",
      "A repository for AWS compliance reports and agreements",
      "A code versioning system",
      "A monitoring service",
      "A backup solution"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Artifact provides on-demand access to AWS compliance reports and security documentation."
  },
  {
    id: 34,
    topic: "Security and Compliance",
    question: "What is the primary purpose of AWS Organizations?",
    options: [
      "Organize files and folders",
      "Centrally manage multiple AWS accounts",
      "Schedule events",
      "Manage email lists",
      "Organize development teams"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Organizations allows central management of multiple AWS accounts with consolidated billing and policy management."
  },
  {
    id: 35,
    topic: "Security and Compliance", 
    question: "Which is an example of data encryption in transit?",
    options: [
      "Encrypting data stored on hard drives",
      "Using HTTPS to send data over the internet",
      "Encrypting database backups",
      "Password protecting files",
      "Compressing data files"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "Encryption in transit protects data while it moves between locations, such as using HTTPS for web traffic."
  },

  // Cloud Technology and Services (34% - 22 questions, 5 unscored)
  {
    id: 36,
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
    marks: 20,
    explanation: "Amazon S3 can host static websites directly with high availability and cost-effectiveness."
  },
  {
    id: 37,
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
    marks: 20,
    explanation: "IaaS, PaaS, and SaaS are the three fundamental cloud service models."
  },
  {
    id: 38,
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
    marks: 20,
    explanation: "Amazon EC2 (Elastic Compute Cloud) provides resizable virtual servers in AWS cloud."
  },
  {
    id: 39,
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
    marks: 20,
    explanation: "Amazon RDS (Relational Database Service) provides managed database services for various database engines."
  },
  {
    id: 40,
    topic: "Cloud Technology and Services",
    question: "What is AWS Lambda?",
    options: [
      "A database service",
      "A serverless compute service",
      "A storage service",
      "A networking service",
      "A monitoring service"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Lambda is a serverless compute service that runs code without provisioning or managing servers."
  },
  {
    id: 41,
    topic: "Cloud Technology and Services",
    question: "Which AWS services provide content delivery? (Select TWO)",
    options: [
      "Amazon CloudFront",
      "Amazon S3",
      "Amazon EC2",
      "Amazon RDS",
      "Global Accelerator"
    ],
    correctAnswers: [0, 4],
    multipleChoice: true,
    marks: 0,
    explanation: "CloudFront is a CDN service, and Global Accelerator improves application performance through AWS global network."
  },
  {
    id: 42,
    topic: "Cloud Technology and Services",
    question: "What is Amazon VPC?",
    options: [
      "Virtual Private Cloud - isolated network environment",
      "Very Powerful Computer",
      "Video Processing Center", 
      "Virtual Payment Card",
      "Voice Processing Center"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "Amazon VPC provides a logically isolated section of AWS cloud where you can launch resources in a defined virtual network."
  },
  {
    id: 43,
    topic: "Cloud Technology and Services",
    question: "Which AWS service is used for DNS management?",
    options: [
      "Amazon CloudFront",
      "Amazon Route 53",
      "Amazon VPC",
      "Amazon S3",
      "Amazon EC2"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Amazon Route 53 is a scalable DNS web service that routes traffic to AWS resources and external endpoints."
  },
  {
    id: 44,
    topic: "Cloud Technology and Services",
    question: "What is the primary purpose of Amazon EBS?",
    options: [
      "Email backup service",
      "Block storage for EC2 instances",
      "Content delivery network",
      "Database management",
      "User authentication"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Amazon EBS (Elastic Block Store) provides persistent block storage volumes for EC2 instances."
  },
  {
    id: 45,
    topic: "Cloud Technology and Services",
    question: "Which AWS services can be used for application load balancing? (Select TWO)",
    options: [
      "Application Load Balancer",
      "Network Load Balancer",
      "Amazon S3",
      "Amazon RDS",
      "Amazon Lambda"
    ],
    correctAnswers: [0, 1],
    multipleChoice: true,
    marks: 20,
    explanation: "Application Load Balancer and Network Load Balancer distribute incoming traffic across multiple targets."
  },
  {
    id: 46,
    topic: "Cloud Technology and Services",
    question: "What is Amazon CloudWatch used for?",
    options: [
      "Watching movies",
      "Monitoring AWS resources and applications",
      "Web development",
      "File storage",
      "Email services"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "CloudWatch provides monitoring and observability for AWS resources, applications, and services."
  },
  {
    id: 47,
    topic: "Cloud Technology and Services",
    question: "Which is a key feature of Amazon S3?",
    options: [
      "Virtual servers",
      "Object storage with 99.999999999% durability",
      "Relational databases",
      "Load balancing", 
      "DNS routing"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Amazon S3 provides highly durable object storage with 99.999999999% (11 9's) durability design."
  },
  {
    id: 48,
    topic: "Cloud Technology and Services",
    question: "What is AWS Auto Scaling?",
    options: [
      "Automatic price scaling",
      "Automatic resource scaling based on demand",
      "Automatic user scaling",
      "Automatic time scaling",
      "Automatic location scaling"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Auto Scaling automatically adjusts the number of EC2 instances based on demand to maintain performance and optimize costs."
  },
  {
    id: 49,
    topic: "Cloud Technology and Services",
    question: "Which AWS service provides managed NoSQL database?",
    options: [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon S3", 
      "Amazon EC2",
      "Amazon VPC"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast performance with seamless scalability."
  },
  {
    id: 50,
    topic: "Cloud Technology and Services",
    question: "What is the purpose of AWS Elastic Beanstalk?",
    options: [
      "Database management",
      "Easy application deployment and management",
      "File storage",
      "Network security",
      "User authentication"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "Elastic Beanstalk simplifies application deployment by automatically handling capacity provisioning, load balancing, and health monitoring."
  },
  {
    id: 51,
    topic: "Cloud Technology and Services",
    question: "Which AWS services provide data warehousing capabilities? (Select TWO)",
    options: [
      "Amazon Redshift",
      "Amazon S3",
      "Amazon QuickSight",
      "Amazon EC2", 
      "Amazon RDS"
    ],
    correctAnswers: [0, 2],
    multipleChoice: true,
    marks: 20,
    explanation: "Redshift provides data warehousing, while QuickSight offers business intelligence and data visualization."
  },
  {
    id: 52,
    topic: "Cloud Technology and Services",
    question: "What is Amazon SNS used for?",
    options: [
      "Social networking",
      "Simple notification service for messaging", 
      "Server naming service",
      "Storage naming service",
      "Security notification system"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Amazon SNS (Simple Notification Service) enables sending notifications to distributed systems and mobile devices."
  },
  {
    id: 53,
    topic: "Cloud Technology and Services",
    question: "Which is a benefit of using Amazon CloudFormation?",
    options: [
      "Manual resource provisioning",
      "Infrastructure as Code deployment",
      "Social media management",
      "Weather forecasting",
      "Image editing"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "CloudFormation enables Infrastructure as Code, allowing you to define and provision AWS resources using templates."
  },
  {
    id: 54,
    topic: "Cloud Technology and Services",
    question: "What is the primary use case for Amazon SQS?",
    options: [
      "Structured Query Language processing",
      "Simple Queue Service for message queuing",
      "Server Quality Service", 
      "Storage Quality Service",
      "Security Query Service"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "Amazon SQS (Simple Queue Service) provides reliable, scalable message queuing for distributed applications."
  },
  {
    id: 55,
    topic: "Cloud Technology and Services",
    question: "Which AWS service helps with disaster recovery?",
    options: [
      "Amazon S3 Cross-Region Replication",
      "Amazon EC2 only",
      "Amazon VPC only",
      "Amazon IAM only",
      "Amazon Route 53 only"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "S3 Cross-Region Replication automatically replicates data across regions for disaster recovery and compliance."
  },
  {
    id: 56,
    topic: "Cloud Technology and Services",
    question: "What does serverless computing mean in AWS context?",
    options: [
      "No servers are used",
      "Servers are managed by AWS, not the customer",
      "Only virtual servers",
      "Servers without operating systems",
      "Servers that don't serve requests"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "Serverless means AWS manages the server infrastructure, allowing developers to focus on code without managing servers."
  },
  {
    id: 57,
    topic: "Cloud Technology and Services",
    question: "Which service would you use to run containers on AWS?",
    options: [
      "Amazon ECS",
      "Amazon S3",
      "Amazon RDS",
      "Amazon Route 53",
      "Amazon VPC"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "Amazon ECS (Elastic Container Service) is a fully managed container orchestration service for running Docker containers."
  },

  // Billing, Pricing and Support (12% - 8 questions, 2 unscored)
  {
    id: 58,
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
    marks: 20,
    explanation: "AWS Free Tier provides free access to many AWS services for 12 months for new customers, plus always-free services."
  },
  {
    id: 59,
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
    marks: 20,
    explanation: "AWS offers Basic (free), Developer, Business, and Enterprise support plans with varying levels of service."
  },
  {
    id: 60,
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
    marks: 20,
    explanation: "AWS follows a pay-as-you-go pricing model where you pay only for the resources you consume."
  },
  {
    id: 61,
    topic: "Billing, Pricing and Support",
    question: "Which tool helps estimate AWS costs before deployment?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator", 
      "AWS Billing Dashboard",
      "AWS CloudFormation",
      "AWS Config"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "AWS Pricing Calculator helps estimate costs for AWS services before you start using them."
  },
  {
    id: 62,
    topic: "Billing, Pricing and Support",
    question: "What is AWS Cost Explorer used for?",
    options: [
      "Exploring new AWS services",
      "Analyzing and visualizing AWS costs and usage",
      "Finding AWS documentation",
      "Managing user permissions",
      "Monitoring application performance"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Cost Explorer provides detailed analysis and visualization of AWS costs and usage patterns over time."
  },
  {
    id: 63,
    topic: "Billing, Pricing and Support",
    question: "Which factors affect AWS pricing? (Select TWO)",
    options: [
      "Region where services are deployed",
      "Time of day services are used",
      "Amount of resources consumed", 
      "User's job title",
      "Company size"
    ],
    correctAnswers: [0, 2],
    multipleChoice: true,
    marks: 20,
    explanation: "AWS pricing varies by region and is based on actual resource consumption like compute time, storage used, and data transfer."
  },
  {
    id: 64,
    topic: "Billing, Pricing and Support",
    question: "What is the purpose of AWS Budgets?",
    options: [
      "Plan AWS service features",
      "Set cost and usage alerts",
      "Budget employee salaries",
      "Plan application architecture", 
      "Schedule AWS resources"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 0,
    explanation: "AWS Budgets allows you to set custom cost and usage budgets and receive alerts when thresholds are exceeded."
  },
  {
    id: 65,
    topic: "Billing, Pricing and Support",
    question: "Which AWS service provides consolidated billing for multiple accounts?",
    options: [
      "AWS Cost Explorer",
      "AWS Organizations",
      "AWS Budgets",
      "AWS CloudFormation",
      "AWS Config"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Organizations provides consolidated billing, allowing you to manage billing across multiple AWS accounts from a single master account."
  }
];
