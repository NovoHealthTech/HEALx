# HealX

**HealX** is a healthcare Governance, Risk, and Compliance (GRC) platform that provides a developer-first API for managing compliance evidence, audit workflows, risk management, regulatory reporting, and premium API access.

Built with **NestJS** and powered by the **Stellar Network**, HealX combines enterprise-grade backend architecture with blockchain-based payment settlement and access verification. Healthcare data stays off-chain; Stellar is used for payment settlement, authorization proofs, and immutable payment records.

This repository has intentionally been reset to a clean slate. The next build should start as a modular monorepo with clear service boundaries, strong tenant isolation, and production-grade developer experience from the first sprint.

## Product Scope

HealX supports healthcare organizations that need a structured API platform for:

- organization and department management
- authentication, authorization, RBAC, ABAC, and API keys
- regulatory frameworks, controls, policies, and evidence mapping
- risk registers, scoring, treatment plans, and residual risk tracking
- audit planning, evidence requests, findings, CAPA, and audit reports
- secure evidence storage, metadata indexing, versioning, and integrity checks
- incident reporting, investigation, root cause analysis, and corrective actions
- automated reporting, exports, executive summaries, and evidence packages
- Stellar-based API monetization, USDC settlement, and premium endpoint access

## Target Architecture

| Layer | Technology |
| --- | --- |
| API | NestJS |
| Database | PostgreSQL |
| ORM | Prisma |
| Queue | BullMQ |
| Cache | Redis |
| Object Storage | AWS S3-compatible storage |
| Blockchain | Stellar + Soroban |
| Documentation | Swagger / OpenAPI |
| Shared Config | `@healx/config` |
| Shared Types | `@healx/types` |
| SDK | `@healx/sdk` |

## Planned Repository Structure

```text
healx/
├── apps/
│   ├── api/                 # Main NestJS API
│   └── stellar-service/     # Stellar payment and verification worker
├── packages/
│   ├── config/              # Shared typed configuration
│   ├── database/            # Prisma schema, migrations, seeders
│   ├── types/               # Shared domain types
│   └── sdk/                 # Future public API client SDK
├── contracts/
│   └── soroban/             # Future Soroban contracts
├── docs/                    # Architecture, API, security, compliance notes
└── tools/                   # Scripts, generators, local automation
```

## Delivery Strategy

The project should first reach a satisfactory foundation before feature velocity increases. The early contribution roadmap therefore prioritizes architecture, local development, quality gates, and data boundaries before expanding into compliance workflows and Stellar monetization.

Each issue should include:

- clear problem statement
- implementation notes
- acceptance criteria
- test expectations
- documentation impact

## Contribution Roadmap

### Sprint 1: Foundation Reset and Monorepo Baseline

1. Scaffold npm workspace monorepo with `apps`, `packages`, `contracts`, `docs`, and `tools`.
2. Create `apps/api` as a fresh NestJS application with strict TypeScript enabled.
3. Create `apps/stellar-service` as a NestJS worker/service shell.
4. Add root `package.json` with workspace scripts for build, lint, test, format, and typecheck.
5. Add shared `tsconfig` presets for applications and packages.
6. Add ESLint flat config for TypeScript and NestJS conventions.
7. Add Prettier config and formatting scripts.
8. Add `.gitignore` for Node, build artifacts, environment files, coverage, and local tooling.
9. Add `.editorconfig` for consistent contributor formatting.
10. Add `.nvmrc` or `.node-version` targeting Node.js 20+.
11. Add `packages/config` with typed environment configuration helpers.
12. Add root environment example file with required local variables.
13. Add Docker Compose for PostgreSQL and Redis.
14. Add local healthcheck script for database and cache readiness.
15. Add `packages/database` with Prisma initialized.
16. Define initial Prisma datasource and generator settings.
17. Add migration workflow documentation for local development.
18. Add API bootstrap with global validation pipe.
19. Add API bootstrap with global exception filter.
20. Add request logging middleware with request IDs.
21. Add basic `/health` endpoint for the API.
22. Add basic `/health` endpoint for the Stellar service.
23. Add Jest unit test setup for apps and packages.
24. Add e2e test setup for `apps/api`.
25. Add CI workflow for install, lint, typecheck, test, and build.

### Sprint 2: Identity, Tenancy, and Access Control

26. Model users, organizations, memberships, roles, permissions, and API keys in Prisma.
27. Create initial database migration for identity and tenancy tables.
28. Add seed data for local organization, admin user, and baseline roles.
29. Implement password hashing service using a stable adapter interface.
30. Implement user registration within an organization onboarding flow.
31. Implement login endpoint with JWT access tokens.
32. Implement refresh token persistence and rotation.
33. Add logout endpoint that revokes refresh tokens.
34. Add current user profile endpoint.
35. Add organization context resolver from authenticated requests.
36. Add tenant isolation guard for organization-scoped resources.
37. Implement RBAC permission catalog.
38. Implement role assignment APIs.
39. Implement role removal APIs.
40. Implement ABAC policy evaluation interface.
41. Add membership invitation model and endpoints.
42. Add invitation acceptance flow.
43. Add organization settings model and endpoints.
44. Implement department model and CRUD endpoints.
45. Implement API key creation endpoint.
46. Implement API key hashing and verification.
47. Implement API key revocation endpoint.
48. Add authentication Swagger documentation.
49. Add auth and tenancy e2e tests.
50. Add security notes for token, API key, and tenant isolation behavior.

### Sprint 3: Governance, Compliance, and Risk Core

51. Model compliance frameworks, framework versions, controls, policies, and evidence mappings.
52. Create migrations for governance and compliance tables.
53. Add framework CRUD endpoints.
54. Add framework versioning endpoints.
55. Add control CRUD endpoints.
56. Add control ownership assignment endpoints.
57. Add policy CRUD endpoints.
58. Add policy status and approval workflow fields.
59. Add evidence mapping endpoints for controls and policies.
60. Add compliance status calculation service.
61. Add compliance summary endpoint per organization.
62. Add import seed for HIPAA starter framework placeholders.
63. Add import seed for ISO 27001 starter framework placeholders.
64. Add custom framework creation workflow tests.
65. Model risk registers, risks, scoring scales, treatments, and residual risk.
66. Create migrations for risk management tables.
67. Add risk register CRUD endpoints.
68. Add risk item CRUD endpoints.
69. Add likelihood and impact scoring service.
70. Add inherent risk calculation.
71. Add treatment plan endpoints.
72. Add residual risk calculation.
73. Link risks to controls and policies.
74. Add governance and risk Swagger documentation.
75. Add governance, compliance, and risk e2e tests.

### Sprint 4: Audits, Evidence, Incidents, and Reporting

76. Model audits, audit scopes, evidence requests, findings, observations, and CAPA.
77. Create migrations for audit workflow tables.
78. Add audit plan CRUD endpoints.
79. Add audit scope management endpoints.
80. Add evidence request endpoints.
81. Add finding and observation endpoints.
82. Add CAPA creation and tracking endpoints.
83. Add audit status transition rules.
84. Add audit report data aggregation service.
85. Model evidence files, metadata, versions, checksums, and lifecycle states.
86. Add S3-compatible storage adapter interface.
87. Add local development storage adapter.
88. Add secure evidence upload endpoint.
89. Add evidence metadata indexing endpoint.
90. Add evidence version history endpoint.
91. Add evidence integrity verification using checksums.
92. Link evidence to controls, policies, risks, and audits.
93. Model incidents, severity, timelines, investigation notes, and corrective actions.
94. Add incident CRUD endpoints.
95. Add incident timeline endpoint.
96. Add root cause analysis fields and endpoints.
97. Add reporting module shell.
98. Add compliance summary report endpoint.
99. Add audit report export endpoint.
100. Add PDF report generation proof of concept.

### Sprint 5: Stellar, Public API, SDK, and Production Hardening

101. Define Stellar payment domain model for wallets, payments, invoices, and access grants.
102. Create migrations for payment and entitlement tables.
103. Add Stellar configuration package with network, issuer, and asset settings.
104. Implement Stellar account lookup service.
105. Implement transaction verification service.
106. Implement USDC payment verification flow.
107. Implement premium endpoint access grant after verified payment.
108. Add payment webhook ingestion endpoint.
109. Add idempotency handling for payment verification.
110. Add immutable payment record storage.
111. Add Soroban contract folder scaffold.
112. Add Soroban contract design document.
113. Add premium API guard that checks API key, entitlement, and payment state.
114. Add public API rate limiting.
115. Add usage metering for API keys.
116. Add billing usage summary endpoint.
117. Add OpenAPI generation script.
118. Add `packages/sdk` scaffold generated from OpenAPI.
119. Add SDK authentication helper.
120. Add SDK examples for compliance, evidence, and payments.
121. Add production Dockerfile for API.
122. Add production Dockerfile for Stellar service.
123. Add deployment environment documentation.
124. Add observability baseline with metrics, logs, and tracing plan.
125. Add production readiness checklist covering security, privacy, backups, migrations, and incident response.

## Definition of Satisfactory Baseline

HealX reaches a satisfactory initial level when:

- the monorepo builds from a clean install
- local PostgreSQL and Redis run through Docker Compose
- Prisma migrations are reproducible
- authentication, tenancy, and RBAC have e2e coverage
- API boundaries are documented through OpenAPI
- CI blocks broken lint, typecheck, tests, and builds
- Stellar integration has a verified testnet payment proof of concept
- no sensitive healthcare data is placed on-chain

