import { Question } from '../types/exam';

export const examQuestions: Question[] = [

  // ======================
  // 🌩 CLOUD CONCEPTS (16)
  // ======================
  {
    id: 1,
    topic: "Cloud Concepts",
    question: "Which statement best describes the cloud computing model?",
    options: [
      "Owning and maintaining your own data centers",
      "Renting computing resources on demand from a provider",
      "Installing applications locally on every user’s machine",
      "Using only physical servers without virtualization"
    ],
    correctAnswers: [1],
    multipleChoice: false,
    marks: 20,
    explanation: "Cloud computing lets users rent computing power and storage as needed, avoiding ownership costs."
  },
  {
    id: 2,
    topic: "Cloud Concepts",
    question: "What is elasticity in AWS?",
    options: [
      "The ability to automatically adjust resources to match demand",
      "Storing data on physical disks only",
      "Manual resource allocation",
      "A backup scheduling feature"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "Elasticity refers to automatically scaling resources up or down based on changing demand."
  },
  {
    id: 3,
    topic: "Cloud Concepts",
    question: "Which of the following are benefits of cloud computing? (Select TWO)",
    options: [
      "Trade capital expense for variable expense",
      "Manual scaling only",
      "Stop guessing about capacity",
      "Slow global reach"
    ],
    correctAnswers: [0, 2],
    multipleChoice: true,
    marks: 20,
    explanation: "Cloud computing replaces capital expenses and allows automatic scaling as needed."
  },
  {
    id: 4,
    topic: "Cloud Concepts",
    question: "What does ‘agility’ mean in cloud computing?",
    options: [
      "Deploying resources quickly to respond to business needs",
      "Reducing hardware costs only",
      "Migrating databases",
      "Purchasing long-term contracts"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "Agility refers to quickly provisioning and de-provisioning resources to innovate faster."
  },
  {
    id: 5,
    topic: "Cloud Concepts",
    question: "Which are examples of cloud deployment models? (Select THREE)",
    options: [
      "Public Cloud",
      "Private Cloud",
      "Hybrid Cloud",
      "Local Cloud"
    ],
    correctAnswers: [0, 1, 2],
    multipleChoice: true,
    marks: 20,
    explanation: "NIST defines Public, Private, and Hybrid as the main cloud deployment models."
  },
  {
    id: 6,
    topic: "Cloud Concepts",
    question: "What is the AWS Well-Architected Framework used for?",
    options: [
      "Designing secure and efficient cloud architectures",
      "Creating billing reports",
      "Managing IAM users",
      "Setting EC2 pricing"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "The Well-Architected Framework helps design secure, reliable, efficient, and cost-effective systems."
  },
  {
    id: 7,
    topic: "Cloud Concepts",
    question: "Which statement best defines scalability?",
    options: [
      "Ability to handle increasing workloads by adding resources",
      "Ability to replicate data automatically",
      "Ability to store backups",
      "Ability to encrypt data"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "Scalability means increasing resource capacity to meet growing demand."
  },
  {
    id: 8,
    topic: "Cloud Concepts",
    question: "Which term describes resources automatically adjusting to workload changes?",
    options: [
      "Elasticity",
      "Agility",
      "Durability",
      "Latency"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "Elasticity enables automatic scaling to match workload demands."
  },
  {
    id: 9,
    topic: "Cloud Concepts",
    question: "Which AWS pillar focuses on running workloads effectively and efficiently?",
    options: [
      "Operational Excellence",
      "Security",
      "Reliability",
      "Cost Optimization"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "Operational Excellence emphasizes operations, monitoring, and continuous improvement."
  },
  {
    id: 10,
    topic: "Cloud Concepts",
    question: "What is high availability in AWS?",
    options: [
      "Keeping applications running despite failures",
      "Running applications only during business hours",
      "Deploying a single EC2 instance",
      "Manual failover setup"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "High availability ensures continuous operation using multiple Availability Zones."
  },
  {
    id: 11,
    topic: "Cloud Concepts",
    question: "What type of cloud model shares infrastructure across multiple customers?",
    options: [
      "Public Cloud",
      "Private Cloud",
      "Hybrid Cloud",
      "Local Cloud"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 10,
    explanation: "Public Cloud allows shared resources managed by the provider."
  },
  {
    id: 12,
    topic: "Cloud Concepts",
    question: "Which AWS service provides global infrastructure?",
    options: [
      "AWS Regions and Availability Zones",
      "IAM",
      "Route 53",
      "S3 Glacier"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "AWS Regions and Availability Zones deliver global and redundant infrastructure."
  },
  {
    id: 13,
    topic: "Cloud Concepts",
    question: "Which characteristic describes on-demand self-service?",
    options: [
      "Provisioning resources automatically without human help",
      "Manual resource approval",
      "Physical resource ownership",
      "Customer support-based provisioning"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "Users can self-provision AWS resources instantly as needed."
  },
  {
    id: 14,
    topic: "Cloud Concepts",
    question: "Which factor should influence a cloud deployment choice? (Select TWO)",
    options: [
      "Compliance requirements",
      "Geographical latency",
      "Server color",
      "Employee names"
    ],
    correctAnswers: [0, 1],
    multipleChoice: true,
    marks: 15,
    explanation: "Security, compliance, and latency affect the right cloud deployment model."
  },
  {
    id: 15,
    topic: "Cloud Concepts",
    question: "Which advantage does cloud computing provide over traditional IT?",
    options: [
      "Reduced operational overhead",
      "Fixed costs",
      "Long procurement times",
      "Hardware ownership"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS reduces operational overhead by managing infrastructure for you."
  },
  {
    id: 16,
    topic: "Cloud Concepts",
    question: "Which term describes the AWS pricing model?",
    options: [
      "Pay-as-you-go",
      "Fixed monthly subscription",
      "Annual commitment",
      "Tiered only"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "AWS uses a pay-as-you-go model for flexible cost control."
  },

  // ==============================
  // 🔒 SECURITY AND COMPLIANCE (20)
  // ==============================
  {
    id: 17,
    topic: "Security and Compliance",
    question: "What does the AWS Shared Responsibility Model define?",
    options: [
      "Division of security duties between AWS and customers",
      "Who pays for compute resources",
      "Network latency responsibilities",
      "Legal agreements"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "AWS secures the cloud infrastructure; customers secure data and configurations."
  },
  {
    id: 18,
    topic: "Security and Compliance",
    question: "Which AWS service helps detect malicious activity?",
    options: [
      "AWS GuardDuty",
      "AWS WAF",
      "AWS CloudFormation",
      "AWS Config"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "GuardDuty monitors AWS accounts for suspicious or unauthorized activity."
  },
  {
    id: 19,
    topic: "Security and Compliance",
    question: "Which AWS service provides DDoS protection?",
    options: [
      "AWS Shield",
      "AWS WAF",
      "CloudFront",
      "IAM"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Shield protects against DDoS attacks at network and application levels."
  },
  {
    id: 20,
    topic: "Security and Compliance",
    question: "What is the purpose of IAM policies?",
    options: [
      "Define permissions for users and roles",
      "Launch EC2 instances",
      "Encrypt data in S3",
      "Set budgets"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "IAM policies specify what actions users and roles can perform."
  },
  {
    id: 21,
    topic: "Security and Compliance",
    question: "What should you do if your access keys are compromised?",
    options: [
      "Rotate and delete old keys immediately",
      "Ignore it",
      "Change AWS Region",
      "Use same keys after 24 hours"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "Always rotate and delete compromised keys to prevent misuse."
  },
  {
    id: 22,
    topic: "Security and Compliance",
    question: "Which service manages encryption keys?",
    options: [
      "AWS KMS",
      "AWS IAM",
      "AWS EC2",
      "AWS Inspector"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "KMS manages cryptographic keys for AWS resources and apps."
  },
  {
    id: 23,
    topic: "Security and Compliance",
    question: "Which service continuously monitors configuration compliance?",
    options: [
      "AWS Config",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "AWS Shield"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "AWS Config tracks resource configurations and compliance over time."
  },
  {
    id: 24,
    topic: "Security and Compliance",
    question: "What is AWS Artifact used for?",
    options: [
      "Access compliance reports and agreements",
      "Monitor billing usage",
      "Create CloudFormation stacks",
      "Detect malware"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 10,
    explanation: "Artifact gives access to AWS compliance and audit documents."
  },
  {
    id: 25,
    topic: "Security and Compliance",
    question: "What is AWS WAF used for?",
    options: [
      "Protecting web applications from common exploits",
      "Load balancing",
      "Managing DNS",
      "Hosting files"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS WAF filters HTTP traffic and prevents web-based attacks."
  },
  {
    id: 26,
    topic: "Security and Compliance",
    question: "Which principle helps minimize risk by limiting permissions?",
    options: [
      "Least Privilege",
      "Root Access",
      "Separation of Duties",
      "High Availability"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "Least Privilege ensures users only have necessary permissions."
  },
  {
    id: 27,
    topic: "Security and Compliance",
    question: "Which AWS tool records account API activity?",
    options: [
      "AWS CloudTrail",
      "AWS Config",
      "AWS Inspector",
      "AWS Trusted Advisor"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "CloudTrail logs AWS API calls for auditing and governance."
  },
  {
    id: 28,
    topic: "Security and Compliance",
    question: "Which AWS service identifies security vulnerabilities automatically?",
    options: [
      "AWS Inspector",
      "AWS Shield",
      "AWS WAF",
      "AWS Cognito"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "AWS Inspector scans workloads for vulnerabilities and best practice gaps."
  },
  {
    id: 29,
    topic: "Security and Compliance",
    question: "What should you enable for root account protection?",
    options: [
      "MFA (Multi-Factor Authentication)",
      "Default password rotation",
      "Role-based access",
      "Network ACLs"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "Always secure the root account with MFA and avoid daily use."
  },
  {
    id: 30,
    topic: "Security and Compliance",
    question: "Which service provides centralized account management?",
    options: [
      "AWS Organizations",
      "AWS Budgets",
      "AWS CloudFormation",
      "AWS S3"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "AWS Organizations manages multiple accounts with policies and billing."
  },
  {
    id: 31,
    topic: "Security and Compliance",
    question: "What is encryption in transit?",
    options: [
      "Protecting data while it’s transferred",
      "Encrypting data stored on disk",
      "Password protecting files",
      "Compressing data"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "Encryption in transit secures data moving between endpoints."
  },
  {
    id: 32,
    topic: "Security and Compliance",
    question: "Which service stores and retrieves secrets securely?",
    options: [
      "AWS Secrets Manager",
      "AWS CloudTrail",
      "AWS WAF",
      "AWS Glue"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "Secrets Manager securely stores API keys, passwords, and credentials."
  },
  {
    id: 33,
    topic: "Security and Compliance",
    question: "Which AWS service offers automated compliance checks?",
    options: [
      "AWS Audit Manager",
      "AWS Lambda",
      "AWS EC2",
      "AWS WAF"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "AWS Audit Manager automates compliance evidence collection."
  },
  {
    id: 34,
    topic: "Security and Compliance",
    question: "Which compliance certifications does AWS hold? (Select TWO)",
    options: [
      "ISO 27001",
      "SOC 2",
      "Food Safety",
      "Driver’s License"
    ],
    correctAnswers: [0, 1],
    multipleChoice: true,
    marks: 10,
    explanation: "AWS meets major standards like SOC 2 and ISO 27001."
  },
  {
    id: 35,
    topic: "Security and Compliance",
    question: "Which service detects account anomalies and unauthorized actions?",
    options: [
      "AWS GuardDuty",
      "AWS Trusted Advisor",
      "AWS Batch",
      "AWS ECS"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "GuardDuty identifies unusual activity that may indicate security issues."
  },

  // =======================================
  // ⚙️ CLOUD TECHNOLOGY AND SERVICES (22)
  // =======================================
  {
    id: 36,
    topic: "Cloud Technology and Services",
    question: "Which service provides compute capacity in AWS?",
    options: [
      "Amazon EC2",
      "Amazon S3",
      "Amazon RDS",
      "Amazon SNS"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "Amazon EC2 provides resizable compute capacity for workloads."
  },
  {
    id: 37,
    topic: "Cloud Technology and Services",
    question: "Which AWS service is best for static website hosting?",
    options: [
      "Amazon S3",
      "Amazon RDS",
      "Amazon EC2",
      "Amazon CloudWatch"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "S3 can host static websites directly at low cost."
  },
  {
    id: 38,
    topic: "Cloud Technology and Services",
    question: "Which is a fully managed NoSQL database?",
    options: [
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon Aurora",
      "Amazon S3"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "DynamoDB is a serverless NoSQL database for high performance."
  },
  {
    id: 39,
    topic: "Cloud Technology and Services",
    question: "Which service provides content delivery?",
    options: [
      "Amazon CloudFront",
      "Amazon SNS",
      "Amazon VPC",
      "Amazon EBS"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "CloudFront distributes content globally through edge locations."
  },
  {
    id: 40,
    topic: "Cloud Technology and Services",
    question: "Which AWS service provides serverless compute?",
    options: [
      "AWS Lambda",
      "AWS EC2",
      "AWS Fargate",
      "AWS CloudTrail"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "AWS Lambda runs code without managing servers."
  },
  {
    id: 41,
    topic: "Cloud Technology and Services",
    question: "Which service helps automate infrastructure deployment?",
    options: [
      "AWS CloudFormation",
      "AWS S3",
      "AWS IAM",
      "AWS ECS"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "CloudFormation enables Infrastructure as Code to manage AWS resources."
  },
  {
    id: 42,
    topic: "Cloud Technology and Services",
    question: "What is Amazon RDS used for?",
    options: [
      "Managed relational databases",
      "Data warehousing",
      "DNS routing",
      "Static file storage"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "RDS provides managed relational databases like MySQL and PostgreSQL."
  },
  {
    id: 43,
    topic: "Cloud Technology and Services",
    question: "Which service handles DNS management?",
    options: [
      "Amazon Route 53",
      "Amazon CloudFront",
      "Amazon VPC",
      "AWS IAM"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "Route 53 routes internet traffic using DNS."
  },
  {
    id: 44,
    topic: "Cloud Technology and Services",
    question: "What is the purpose of Amazon EBS?",
    options: [
      "Block storage for EC2",
      "Object storage",
      "Message queue",
      "Data warehouse"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "EBS provides persistent block storage volumes for EC2."
  },
  {
    id: 45,
    topic: "Cloud Technology and Services",
    question: "Which service provides message queuing?",
    options: [
      "Amazon SQS",
      "Amazon SNS",
      "Amazon SES",
      "Amazon RDS"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "SQS provides reliable, scalable message queuing between systems."
  },
  {
    id: 46,
    topic: "Cloud Technology and Services",
    question: "Which AWS service helps monitor applications?",
    options: [
      "Amazon CloudWatch",
      "Amazon EC2",
      "Amazon Cognito",
      "AWS Batch"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "CloudWatch monitors AWS resources, apps, and custom metrics."
  },
  {
    id: 47,
    topic: "Cloud Technology and Services",
    question: "Which is a managed data warehouse service?",
    options: [
      "Amazon Redshift",
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon S3"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "Redshift is AWS’s managed, petabyte-scale data warehouse."
  },
  {
    id: 48,
    topic: "Cloud Technology and Services",
    question: "What is AWS Auto Scaling used for?",
    options: [
      "Automatically adjusting compute capacity",
      "Monitoring IAM users",
      "Creating CloudFormation templates",
      "Cost estimation"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "Auto Scaling maintains application performance by adjusting resources."
  },
  {
    id: 49,
    topic: "Cloud Technology and Services",
    question: "Which service runs Docker containers?",
    options: [
      "Amazon ECS",
      "Amazon CloudWatch",
      "Amazon S3",
      "Amazon SNS"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "ECS orchestrates and runs containerized applications at scale."
  },
  {
    id: 50,
    topic: "Cloud Technology and Services",
    question: "Which AWS service allows running Kubernetes?",
    options: [
      "Amazon EKS",
      "Amazon ECS",
      "AWS Batch",
      "AWS Cloud9"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "EKS is AWS’s managed Kubernetes service."
  },
  {
    id: 51,
    topic: "Cloud Technology and Services",
    question: "Which AWS service helps visualize data?",
    options: [
      "Amazon QuickSight",
      "Amazon Redshift",
      "Amazon Athena",
      "AWS Glue"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "QuickSight is a BI tool for creating dashboards and insights."
  },
  {
    id: 52,
    topic: "Cloud Technology and Services",
    question: "Which AWS service is used for disaster recovery?",
    options: [
      "S3 Cross-Region Replication",
      "EC2 Auto Scaling",
      "CloudFront",
      "Lambda@Edge"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "S3 replication provides cross-region redundancy for DR."
  },
  {
    id: 53,
    topic: "Cloud Technology and Services",
    question: "Which service is used for notifications?",
    options: [
      "Amazon SNS",
      "Amazon SQS",
      "Amazon MQ",
      "Amazon SES"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "SNS sends notifications to subscribers or applications."
  },
  {
    id: 54,
    topic: "Cloud Technology and Services",
    question: "Which is a fully managed ETL service?",
    options: [
      "AWS Glue",
      "AWS Batch",
      "AWS Lambda",
      "AWS Cloud9"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Glue automates data preparation for analytics and ML."
  },
  {
    id: 55,
    topic: "Cloud Technology and Services",
    question: "Which service helps with app deployment automation?",
    options: [
      "AWS Elastic Beanstalk",
      "AWS Batch",
      "AWS CodeBuild",
      "AWS IAM"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "Elastic Beanstalk manages application deployment automatically."
  },
  {
    id: 56,
    topic: "Cloud Technology and Services",
    question: "Which service lets you query data directly in S3?",
    options: [
      "Amazon Athena",
      "Amazon Redshift",
      "Amazon Aurora",
      "Amazon SQS"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "Athena allows querying S3 data using SQL syntax."
  },
  {
    id: 57,
    topic: "Cloud Technology and Services",
    question: "Which AWS service provides version control for code?",
    options: [
      "AWS CodeCommit",
      "AWS Cloud9",
      "AWS Glue",
      "AWS SAM"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "CodeCommit is AWS’s managed Git-based code repository."
  },

  // ==============================
  // 💰 BILLING, PRICING & SUPPORT
  // ==============================
  {
    id: 58,
    topic: "Billing, Pricing and Support",
    question: "Which tool estimates AWS costs before deployment?",
    options: [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Config"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "Pricing Calculator estimates monthly AWS costs."
  },
  {
    id: 59,
    topic: "Billing, Pricing and Support",
    question: "Which tool provides cost visualization and trends?",
    options: [
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS CloudTrail"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "Cost Explorer visualizes AWS spend and usage data."
  },
  {
    id: 60,
    topic: "Billing, Pricing and Support",
    question: "Which AWS feature alerts you when you exceed your cost limits?",
    options: [
      "AWS Budgets",
      "AWS Trusted Advisor",
      "AWS Config",
      "AWS CloudFormation"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "Budgets sends alerts when costs or usage exceed thresholds."
  },
  {
    id: 61,
    topic: "Billing, Pricing and Support",
    question: "Which AWS service offers consolidated billing?",
    options: [
      "AWS Organizations",
      "AWS Budgets",
      "AWS Billing Dashboard",
      "AWS S3"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 20,
    explanation: "AWS Organizations consolidates billing across multiple accounts."
  },
  {
    id: 62,
    topic: "Billing, Pricing and Support",
    question: "Which pricing model reduces cost for long-term workloads?",
    options: [
      "Reserved Instances",
      "On-Demand Instances",
      "Spot Instances",
      "Savings Plans"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "Reserved Instances and Savings Plans provide cost benefits for long-term use."
  },
  {
    id: 63,
    topic: "Billing, Pricing and Support",
    question: "Which AWS Support Plan includes a Technical Account Manager?",
    options: [
      "Enterprise",
      "Business",
      "Developer",
      "Basic"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 25,
    explanation: "Enterprise support includes a dedicated Technical Account Manager (TAM)."
  },
  {
    id: 64,
    topic: "Billing, Pricing and Support",
    question: "Which AWS service provides recommendations for cost optimization?",
    options: [
      "AWS Trusted Advisor",
      "AWS Budgets",
      "AWS CloudTrail",
      "AWS CloudWatch"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 15,
    explanation: "Trusted Advisor offers best-practice checks including cost optimization."
  },
  {
    id: 65,
    topic: "Billing, Pricing and Support",
    question: "Which type of cost is charged when transferring data between AWS Regions?",
    options: [
      "Data Transfer Out",
      "Data Transfer In",
      "No charge",
      "Storage fee"
    ],
    correctAnswers: [0],
    multipleChoice: false,
    marks: 0,
    explanation: "AWS charges for data transfer out between regions."
  }
];
