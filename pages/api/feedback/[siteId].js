import { db } from '@/lib/firebase-admin';
import { getAllFeedback } from '@/lib/db-admin';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const siteId = req.query.siteId;
    const { feedback, error } = await getAllFeedback(siteId);
    res.status(200).json({ feedback });
  } catch (error) {
    res.status(500).json({ error });
  }
};
