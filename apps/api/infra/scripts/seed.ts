import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const items = [
    { key: "disclaimer", version: "disclaimer_v1.2_2026-04-03", contentHash: "hash_disclaimer_v1_2" },
    { key: "privacy", version: "privacy_v1.1_2026-04-03", contentHash: "hash_privacy_v1_1" },
    { key: "refund", version: "refund_v1.0_2026-04-03", contentHash: "hash_refund_v1_0" },
    { key: "cookie", version: "cookie_v1.0_2026-04-03", contentHash: "hash_cookie_v1_0" },
  ] as const;

  for (const it of items) {
    await prisma.consentVersion.upsert({
      where: { key_version: { key: it.key, version: it.version } },
      update: { contentHash: it.contentHash },
      create: { key: it.key, version: it.version, contentHash: it.contentHash },
    });
  }

  const all = await prisma.consentVersion.findMany({ orderBy: { key: "asc" } });
  console.log("=== consent_versions seeded ===");
  console.table(all.map((x) => ({ key: x.key, version: x.version, id: x.id, contentHash: x.contentHash ?? "" })));
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
