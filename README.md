# HealX

**HealX** is a healthcare Governance, Risk, and Compliance (GRC) platform that provides a developer-first API for managing compliance evidence, audit workflows, risk management, and regulatory reporting.

Built with **NestJS** and powered by the **Stellar Network**, HealX combines enterprise-grade backend architecture with blockchain-based payment settlement and access verification, enabling organizations to securely share compliance data while monetizing premium API access.

The platform is designed as a modular monorepo to support scalable development across compliance services, payment infrastructure, reporting, and shared domain packages.

---

# Overview

Healthcare organizations operate under strict regulatory requirements, generating large volumes of compliance evidence, audit records, policies, incident reports, and risk assessments.

Unfortunately, these records are often scattered across multiple systems, making audits expensive, slow, and difficult to verify.

HealX provides a unified API platform for managing healthcare governance and compliance through structured services that support:

* governance and organizational management,
* regulatory compliance frameworks,
* audit planning and evidence collection,
* risk assessment and treatment,
* incident management,
* secure document storage,
* programmable API monetization using Stellar.

Rather than storing sensitive healthcare information on-chain, HealX uses Stellar as a trusted payment and authorization layer while maintaining protected data securely off-chain.

---

# Core Modules

## Authentication & Access Control

HealX begins with a secure authentication and authorization layer built for enterprise healthcare organizations.

It supports:

* organization authentication
* JWT authentication
* API key management
* role-based access control (RBAC)
* attribute-based permissions (ABAC)
* multi-tenant access isolation
* secure session management

This forms the foundation for every protected API within the platform.

---

## Organization Management

Organizations are the primary tenants within HealX.

Capabilities include:

* organization onboarding
* department management
* user invitations
* role assignment
* tenant isolation
* organization settings
* audit ownership

This ensures each healthcare organization operates within an isolated compliance environment.

---

## Governance & Compliance

HealX enables organizations to implement structured compliance programs.

The platform supports:

* compliance frameworks
* regulatory controls
* policy management
* evidence mapping
* control ownership
* compliance status tracking
* framework versioning

Designed to support standards such as HIPAA, ISO 27001, SOC 2, NIST, and custom regulatory frameworks.

---

## Risk Management

Organizations can identify, assess, and mitigate operational risks through structured workflows.

Capabilities include:

* risk registers
* risk scoring
* likelihood and impact analysis
* treatment planning
* residual risk tracking
* ownership assignment
* risk reporting

The risk module integrates directly with audits and compliance controls.

---

## Audit Management

HealX streamlines internal and external audit processes.

Supported capabilities include:

* audit planning
* evidence requests
* audit findings
* observations
* corrective actions (CAPA)
* audit reports
* historical audit records

The audit workflow creates a complete, traceable compliance history.

---

## Evidence Management

Evidence is central to regulatory compliance.

HealX provides:

* secure evidence uploads
* metadata indexing
* version history
* S3-backed storage
* integrity verification
* evidence lifecycle management

Sensitive documents remain securely stored off-chain while maintaining verifiable access records.

---

## Incident Management

Healthcare organizations can document operational and security incidents through structured workflows.

The platform supports:

* incident reporting
* severity classification
* investigation tracking
* root cause analysis
* corrective actions
* incident timelines

Incident records become part of the organization's overall compliance posture.

---

## Reporting

HealX provides automated reporting capabilities across all governance modules.

Reports include:

* compliance summaries
* audit reports
* risk dashboards
* executive reports
* evidence packages
* PDF generation
* export APIs

Reports can be generated programmatically through the public API.

---

## Stellar Payment Layer

HealX uses the Stellar Network as a programmable payment and authorization layer.

The Stellar service enables:

* API micropayments
* premium endpoint access
* transaction verification
* USDC settlement
* programmable billing
* immutable payment records

Rather than storing compliance data on-chain, Stellar is responsible for payment settlement and cryptographic verification before protected resources are served.

---

# System Architecture

HealX is built as a modular monorepo with clearly defined service boundaries.

| Layer          | Technology        |
| -------------- | ----------------- |
| API            | NestJS            |
| Database       | PostgreSQL        |
| ORM            | Prisma            |
| Queue          | BullMQ            |
| Cache          | Redis             |
| Object Storage | AWS S3            |
| Blockchain     | Stellar + Soroban |
| Documentation  | Swagger / OpenAPI |
| Shared Config  | @healx/config     |
| Shared Types   | @healx/types      |

---

# Repository Structure

```text
healx/
│
├── apps/
│   ├── api/                 # NestJS backend
│   └── stellar-service/     # Stellar payment integration
│
├── packages/
│   ├── config/              # Shared configuration
│   ├── types/               # Shared domain types
│   └── sdk/                 # Future API client SDK
│
├── contracts/
│   └── soroban/             # Smart contracts
│
└── docs/
```

---

# MVP Delivery Plan

Development follows structured infrastructure milestones:

1. Authentication & multi-tenancy
2. Organization management
3. Governance & compliance
4. Risk management
5. Audit workflows
6. Evidence management
7. Reporting engine
8. Stellar payment integration
9. Public API & SDK
10. Production hardening

Each milestone expands the platform while maintaining strict module boundaries and backwards compatibility.

---

# Getting Started

## Requirements

* Node.js 20+
* npm 10+
* PostgreSQL
* Redis

---

## Installation

```bash
npm install
```

---

## Run development environment

```bash
npm run dev
```

---

## Architecture validation

Before contributing:

```bash
npm run check:architecture
npm run check:boundaries
```

---

# Environment Setup

Create a root `.env` from the provided template before running services locally.

Each workspace may also define:

```text
apps/api/.env.example
apps/stellar-service/.env.example
```

---

# Documentation

* Architecture: `docs/architecture.md`
* API Reference: `docs/api.md`
* MVP Scope: `docs/mvp-scope.md`
* Contributor Guide: `CONTRIBUTING.md`
* Roadmap: `docs/roadmap.md`

---

## Local Development

See [docs/local-development.md](docs/local-development.md) for Docker Compose, PostgreSQL, Redis, and Prisma migration workflow instructions.

---

# Contribution Model

HealX is designed for milestone-driven infrastructure development.

To maintain consistency:

* keep changes within a single module
* use shared types for cross-service communication
* avoid duplicating business logic
* respect service boundaries (API vs Stellar vs shared packages)
* maintain backwards-compatible APIs where possible
* ensure healthcare compliance workflows remain auditable and traceable

---

# Current State

This repository provides the foundation for the HealX platform.

Current scaffolding includes:

* NestJS API baseline
* Stellar payment service
* shared configuration packages
* shared domain types
* contributor documentation
* architecture guidelines

---

# Vision

HealX aims to become the infrastructure layer for healthcare compliance, enabling healthcare providers, insurers, auditors, and regulators to exchange compliance data through secure, verifiable, and programmable APIs.

By combining enterprise-grade backend services with blockchain-powered payment settlement, HealX seeks to make healthcare governance more transparent, auditable, and developer-friendly, while providing a scalable foundation for the next generation of compliance automation.

---

## License

MIT
 platform and gives contributors clear ownership boundaries for backend, blockchain, SDK, and shared infrastructure.

