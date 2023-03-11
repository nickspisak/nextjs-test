import { prisma } from "../../../config/db";

export default async function handler(req,res) {
    switch(req.method) {
        case"GET":
            return await getStories(req, res);
        case "POST":
            return await addStory(req, res);
    }
}

const getStories = async (req, res) => {
   try {
    const result = await prisma.stories.findMany();
    return res.status(200).json(result);
   } catch (error) {
    return res.status(500).json(error);
   }
}

const addStory = async(req, res) => {
    try {
        const {title, description, genres, cover, genre} = req.body;
        const data = {
            title : title,
            description: description,
            genres : genres,
            cover: cover,
            genre: genre
        }
        const result = await prisma.stories.create({
            data : data,
            select : {
                id : true
            }
        })
        return res.status(200).json(result);
    } catch(error) {
        return res.status(500).json(error)
    }
}