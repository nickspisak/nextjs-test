import { prisma } from "../../../config/db";

export default async function handler(req,res) {
    switch(req.method) {
        case"GET":
            return await getShorts(req, res);
            default:
              return res.status(405).end(`Method ${req.method} Not Allowed`);
        
    }
}

const getShorts = async (req, res) => {
   try {
    const result = await prisma.shorts.findMany();
    console.log(result);
    return res.status(200).json(result);
    } catch (error) {
  console.error(error);
  return res.status(500).json({ error: 'An internal server error occurred.' });
}
}