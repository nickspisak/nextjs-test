import {prisma} from "../../../config/db";

export default async function handler(req, res) {
    switch(req.method) {
        case "GET":
            return await getChapters(req, res)
    }
}

const getChapters = async (req, res) => {
    try {
        // const result  = await prisma.$queryRaw
        const {title} = req.query;
        const result = await prisma.chapters.findUnique();
        console.log(result)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error)
    }
}