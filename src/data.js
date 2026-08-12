export const metrics = [
  { value: '5+', label: 'years building' },
  { value: '10+', label: 'production applications' },
  { value: '7+', label: 'countries served' },
  { value: '99.9%', label: 'cluster uptime' },
]

export const stackGroups = [
  { title: 'OpenShift / Kubernetes', subtitle: 'RHCSA — OpenShift · Certified June 2026', items: ['Bare-Metal Install', 'Day-2 Ops', 'RBAC', 'Operators', 'oc CLI', 'BuildConfigs', 'ImageStreams', 'HPA', 'SCC', 'Helm Charts'] },
  { title: 'DevOps / CI-CD', subtitle: 'Automated delivery and observability', items: ['Docker', 'Kubernetes', 'Jenkins', 'Azure DevOps', 'GitHub Actions', 'SonarQube', 'Prometheus', 'Grafana'] },
  { title: 'Cloud — AWS', subtitle: 'Cloud infrastructure and services', items: ['EC2', 'S3', 'DynamoDB', 'Lambda', 'Route 53', 'RDS', 'SQS'] },
  { title: 'Backend', subtitle: 'Services, APIs and enterprise systems', items: ['Node.js', 'Spring Boot', 'Spring MVC', 'RESTful APIs', 'Microservices', 'Hibernate', 'Java / J2EE'] },
  { title: 'Frontend', subtitle: 'Modern responsive interfaces', items: ['ReactJS', 'ViteJS', 'Angular', 'HTML5', 'CSS3', 'TypeScript', 'JavaScript (ES6+)'] },
  { title: 'Mobile', subtitle: 'Cross-platform application delivery', items: ['Flutter (Dart)', 'React Native', 'Metro CLI', 'Expo CLI'] },
  { title: 'Languages', subtitle: 'Programming foundations', items: ['Java', 'JavaScript / TypeScript', 'Python', 'Dart', 'C', 'C++'] },
  { title: 'Databases', subtitle: 'Relational and non-relational data', items: ['MySQL', 'Oracle SQL', 'MongoDB', 'Firebase Firestore', 'DynamoDB', 'PL/SQL'] },
  { title: 'Testing', subtitle: 'Quality and automation', items: ['Playwright', 'Cucumber (BDD)', 'Selenium', 'JUnit'] },
  { title: 'Build / VCS', subtitle: 'Build and source-control workflows', items: ['Maven', 'Gradle', 'Git', 'GitHub', 'GitFlow'] },
  { title: 'Project Tools', subtitle: 'Delivery and collaboration', items: ['JIRA', 'ServiceNow', 'Agile / Scrum', 'Kanban'] },
]

export const projects = [
  { name: 'Fuel Management SaaS', region: 'Canada', summary: 'Fuel inventory, dispensing and reporting platform with Dockerised services deployed across AWS and OpenShift.', tech: ['ReactJS', 'Node.js', 'DynamoDB', 'AWS', 'OpenShift'], signal: 'Cloud + platform' },
  { name: 'PNP Grocery Platform', region: 'Sri Lanka', summary: 'Web and mobile grocery platform with catalog, cart and live order tracking on an OpenShift-hosted backend.', tech: ['React Native', 'Node.js', 'Firebase', 'OpenShift'], signal: 'Mobile + full stack' },
  { name: 'Logistics App', region: 'Malaysia', summary: 'Truck and fleet operations covering dispatching, trip management and reporting with Helm-based delivery.', tech: ['Kubernetes', 'OpenShift', 'Helm', 'CI/CD'], signal: 'Enterprise delivery' },
  { name: 'WHO Tamil — AIIMS', region: 'India', summary: 'Clinical healthcare platform with RBAC-controlled deployment and role-based access for clinical staff.', tech: ['RBAC', 'OpenShift', 'Web', 'Healthcare'], signal: 'Secure platform' },
]
