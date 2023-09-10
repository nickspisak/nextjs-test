import { prisma } from "../../../config/db";

export default async function handler(req,res) {
    switch(req.method) {
        case"GET":
            return await getShorts(req, res);
        
    }
}

const getShorts = async (req, res) => {
   try {
    const result = await prisma.shorts.findMany();
    console.log(result);
    return res.status(200).json(result);
   } catch (error) {
    return res.status(500).json(error);
   }
}
