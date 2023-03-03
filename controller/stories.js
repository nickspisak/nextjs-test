import {executeQuery} from "../services/db";
export const getStories = async (req, res) => {
    let storyData = await executeQuery('select * from stories', [])
    res.send(storyData);
}

