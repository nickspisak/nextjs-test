import prisma from '../../../config/db'; // Import your Prisma client here

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getStories(req, res);

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getStories = async (req, res) => {
  try {
    const result = await prisma.stories.findMany();
    console.log(result);
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An internal server error occurred.' });
  }
};

