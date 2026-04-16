import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  let step = "STEP_INIT";
  try {
    step = "STEP_READ_USER";
    const userIdHeader = req.headers["x-user-id"];
    const userId = !userIdHeader || Array.isArray(userIdHeader) ? "mock-user-id" : userIdHeader;

    step = "STEP_CREATE_ORDER";
    const created = await prisma.order.create({
      data: {
        userId: String(userId),
        packageCode: "bazi_basic",
        status: "submitted",
        amountCurrency: "USD",
        amountTotal: 99,
      },
      select: { id: true, status: true },
    });

    step = "STEP_RETURN_RESPONSE";
    return res.status(200).json({
      ok: true,
      data: {
        order_id: created.id,
        order_status: created.status,
        report_status: "draft",
      },
    });
  } catch (e: any) {
    return res.status(500).json({ ok: false, error: "CREATE_ORDER_RUNTIME_FAILED", step, message: String(e?.message ?? e) });
  }
}
