import {sql_query} from "../../services/db"

const handler = async (_, res) => {
    try {
        const results = await sql_query(`
            SELECT * FROM stories
        `)
        return res.json(results)
    } catch (error) {
        res.status(500).json({ message: e.message})
    }
}
export default handler;
