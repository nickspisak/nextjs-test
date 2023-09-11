import {prisma} from "../../../config/db";

export default async function handler(req, res) {
    switch(req.method) {
        case "GET":
            return await getShortStory(req, res);
            default:
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

const getShortStory = async (req, res) => {
    try {
        const {title} = req.query;
        const result = await prisma.short_stories.findUnique();
        console.log(result)
        return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An internal server error occurred.' });
    }
  };