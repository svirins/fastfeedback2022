/* eslint-disable import/no-anonymous-default-export */

import { getAllFeedback } from '@/lib/db-admin';

export default async (req, res) => {
  const siteId = req.query.siteId;
  const feedback = await getAllFeedback(siteId);

  res.status(200).json({ feedback });
};
