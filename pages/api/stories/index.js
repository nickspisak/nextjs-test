import { prisma } from "../../../config/db";

export default async function handler(req,res) {
    switch(req.method) {
        case"GET":
            return await getStories(req, res);
        
    }
}

const getStories = async (req, res) => {
   try {
    const result = await prisma.stories.findMany();
    console.log(result);
    return res.status(200).json(result);
   } catch (error) {
    return res.status(500).json(error);
   }
}

