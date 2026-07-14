# HealX

> **Medical GRC & Audit API**
> A blockchain-enabled compliance platform for healthcare organizations, built with **NestJS** and powered by the **Stellar Network**.

HealX is a developer-first API that helps hospitals, clinics, laboratories, insurers, and healthcare auditors manage governance, risk, and compliance (GRC) operations through a secure, verifiable, and monetized API.

Rather than storing sensitive healthcare data on-chain, HealX combines traditional cloud infrastructure with blockchain-based payment settlement and access verification. Compliance evidence, audit logs, reports, and documents remain securely stored off-chain, while Stellar provides transparent payments, immutable proof of access, and programmable authorization.

---

## Why HealX?

Healthcare organizations generate thousands of compliance artifacts every year:

* Incident reports
* Risk assessments
* Internal audits
* Policy acknowledgements
* Equipment maintenance logs
* Staff certifications
* Regulatory evidence
* Corrective action plans (CAPA)

Sharing these records with external auditors is often slow, manual, and difficult to verify.

HealX solves this by providing a secure API where:

* Organizations upload and organize compliance evidence.
* Auditors pay for access using Stellar.
* Smart contracts verify payment and authorization.
* The API delivers the requested evidence instantly.
* Every access request is cryptographically verifiable.

---

# Core Features

### Governance

* Organization management
* Multi-tenant architecture
* User & role management
* Department management
* Policy lifecycle management
* Document versioning

---

### Risk Management

* Risk register
* Risk scoring
* Risk treatment plans
* Risk ownership
* Risk dashboards
* Residual risk tracking

---

### Compliance

* Framework management
* HIPAA mapping
* ISO 27001 mapping
* SOC 2 mapping
* NIST mapping
* Custom regulatory frameworks

---

### Audit Management

* Audit planning
* Audit execution
* Evidence requests
* Evidence submissions
* Findings
* Observations
* Corrective actions
* Audit reports

---

### Incident Management

* Security incidents
* Clinical incidents
* Data breaches
* Root cause analysis
* CAPA workflow

---

### Evidence Management

* Secure evidence uploads
* S3 object storage
* File integrity verification
* Metadata indexing
* Version history

---

### Reporting

* Compliance dashboards
* Risk dashboards
* Audit dashboards
* PDF report generation
* Export APIs

---

### Payments

Built on Stellar.

Every premium endpoint can require payment before execution.

Examples:

* Generate Compliance Report
* Access Audit Evidence
* Download Regulatory Package
* Request Historical Logs
* Third-party Audit Access

Payments settle almost instantly with minimal fees.

---

# How It Works

```text
Healthcare Organization
          │
          │ Upload Evidence
          ▼
      HealX API
          │
          ├───────────────► S3 Storage
          │
          │
Auditor Requests Evidence
          │
          ▼
 Stellar Smart Contract
          │
 Verify Payment
          │
          ▼
      NestJS Guard
          │
 Verify Transaction
          │
          ▼
   Return Requested Data
```

---

# Architecture

```
apps/
│
├── api/
│   ├── auth
│   ├── organizations
│   ├── users
│   ├── policies
│   ├── risks
│   ├── compliance
│   ├── audits
│   ├── evidence
│   ├── incidents
│   ├── payments
│   ├── reports
│   └── common
│
├── contracts/
│   └── soroban
│
├── shared/
│
└── docs/
```

---

# Technology Stack

## Backend

* NestJS
* TypeScript
* PostgreSQL
* Prisma ORM
* Redis
* BullMQ
* AWS S3
* JWT Authentication
* Swagger / OpenAPI

---

## Blockchain

* Stellar Network
* Soroban Smart Contracts
* USDC Payments
* Wallet Authentication
* Transaction Verification

---

## Infrastructure

* Docker
* GitHub Actions
* AWS
* CloudFront
* ECS / EC2
* Terraform (planned)

---

# API Flow

Example:

```
POST /reports/compliance

↓

NestJS Payment Guard

↓

Verify Stellar Transaction

↓

Payment Valid?

↓

Yes

↓

Generate PDF

↓

Store in S3

↓

Return Download URL
```

---

# Monetization

HealX is designed as a commercial API platform.

Pricing models include:

### Pay Per Request

Clients pay a fixed amount of USDC to access premium endpoints.

Examples:

| Endpoint                  | Example Fee |
| ------------------------- | ----------- |
| Generate Audit Report     | 0.50 USDC   |
| Download Evidence Package | 0.25 USDC   |
| Compliance Score          | 0.10 USDC   |
| Historical Audit Logs     | 0.20 USDC   |

---

### Subscription Plans

* Starter
* Professional
* Enterprise

Subscriptions unlock higher request quotas while certain premium operations still require micro-payments.

---

### Enterprise Licensing

Healthcare organizations can deploy private instances with:

* Dedicated infrastructure
* Custom compliance frameworks
* SLA support
* White-label branding

---

# Security

Security is a first-class concern.

* JWT Authentication
* Role-Based Access Control (RBAC)
* Attribute-Based Access Control (ABAC)
* Audit logging
* Immutable access records
* File integrity hashing
* Encryption at rest
* Encryption in transit
* Rate limiting
* API key support
* Multi-tenancy isolation

---

# Blockchain Philosophy

HealX does **not** store protected health information (PHI) on-chain.

Instead, Stellar is used for:

* Payment settlement
* Access verification
* Immutable proof of access
* Smart contract authorization

Sensitive data remains securely stored off-chain to support privacy regulations such as HIPAA while still benefiting from blockchain-based trust and transparency.

---

# Roadmap

### Phase 1

* Authentication
* Organizations
* RBAC
* Evidence Upload
* Audit Module
* Payments
* Swagger Documentation

### Phase 2

* Risk Register
* Compliance Frameworks
* Policy Management
* Reporting Engine
* PDF Generation

### Phase 3

* Soroban Smart Contracts
* Automated Payment Verification
* Multi-Tenant Billing
* API Marketplace

### Phase 4

* AI Compliance Assistant
* Automated Risk Detection
* Regulatory Change Monitoring
* Predictive Compliance Analytics

---

# Vision

HealX aims to become the infrastructure layer for healthcare compliance—providing secure APIs, programmable payments, and verifiable audit trails that enable organizations to demonstrate trust, automate governance workflows, and simplify regulatory reporting at scale. By combining modern cloud architecture with the Stellar Network, HealX delivers a developer-friendly platform where compliance becomes faster, more transparent, and economically efficient for providers, auditors, insurers, and regulatory partners.
