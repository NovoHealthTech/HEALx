# Local Development

## Requirements

- Node.js 20+
- npm 10+
- Docker with Compose support

## Infrastructure

Start PostgreSQL and Redis:

```sh
npm run dev:infra
```

Check that both services are reachable:

```sh
npm run infra:ready
```

The local defaults are:

- PostgreSQL: `postgresql://healx:healx@localhost:5432/healx?schema=public`
- Redis: `redis://localhost:6379`

## Database Workflow

Copy the example environment file before running Prisma commands:

```sh
cp .env.example .env
```

Generate the Prisma client:

```sh
npm run db:generate
```

Create and apply a local migration:

```sh
npm run db:migrate
```

Open Prisma Studio:

```sh
npm run db:studio
```

Migrations should be committed with the schema change that created them.
