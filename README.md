# proj_vx_wuq_0001_repo

Monorepo scaffold for Local Mock Runbook v1.0.

## Apps
- apps/api: Next.js API routes + Prisma
- apps/web: Next.js frontend (minimal pages)

## Setup (local)
1) Install deps: `pnpm install`
2) Set env: create `.env`/`.env.local` per app (see apps/api/.env.example)
3) DB: `pnpm --filter api exec prisma migrate dev --name init`
4) Seed: `pnpm --filter api exec ts-node infra/scripts/seed.ts`
5) Start: `pnpm --filter api dev` and `pnpm --filter web dev`
