
const Upload = () => {
   function handleUpload(){

   }
    return(
        <div>
            <button onClick={handleUpload()}>Upload Story</button>
        </div>
    )
}
export async function getStaticProps(context) {
    try {
      const result = await sql_query(`
        INSERT INTO stories  (id, title, description, genres, cover)
        VALUES (?,?,?,?,?)
      `)
      let stories = JSON.parse(JSON.stringify(result))
      return {
        props: {stories}
      };
    } catch (e) {
      return {props: {stories:false}}
    }
    
  }