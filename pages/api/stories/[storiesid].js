import {prisma} from "../../../config/db";

export default async function handler(req, res) {
    switch(req.method) {
        case "GET":
            return await getStory(req, res)
    }
}

const getStory = async (req, res) => {
    try {
        const {storiesId} = req.query;
        const result = await prisma.stories.findFirst({
            where : {
                id : {
                    equals : parseInt(storiesId)
                }
            }
        })
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json(error)
    }
}