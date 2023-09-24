import React, { useState } from "react";

const AdminUpload = () => {
  // State for form fields
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenres] = useState("");
  const [cover, setCover] = useState("");
  const [mature, setMature] = useState("");
  const [url, setUrl] = useState("");
  //const [chapters, setChapters] = useState([{ chapter_number: '', title: '', first: '', last: '', pages: [] }]);
  const [chapters, setChapters] = useState([]);
  // Function to handle adding a new chapter
  const addChapter = () => {
    setChapters([
      ...chapters,
      {
        chapter_number: 0,
        title: "",
        first: "",
        last: "",
        id,
        chapter_id: 0,
        pages: [
          {
            page_number: 0,
            page_url: "",
            page_id: 0,
            chapter_id: 0,
          },
        ],
      },
    ]);
  };

  // Function to handle adding a new page to a chapter
  const addPage = (chapterIndex) => {
    const newChapters = [...chapters];
    const chapterId = newChapters[chapterIndex].chapter_id; // Get chapter_id
    newChapters[chapterIndex].pages.push({
      page_number: 0,
      page_url: "",
      page_id: 0,
      chapter_id: chapterId, // Use chapter_id obtained above
    });
    setChapters(newChapters);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data for API submission
    const data = {
      title,
      description,
      genres,
      cover,
      url,
      mature: parseInt(mature, 10),
      id,
      chapters: chapters.map((chapter) => ({
        ...chapter,
        id: id, // Add this line to include storyId
      })),
      pages: chapters.flatMap((chapter) =>
        chapter.pages.map((page) => ({
          ...page,
          chapter_id: chapter.chapter_id, // Add chapter_id to pages
        }))
      ),
    };

    // Make an API request to upload the story data (implement this)
    try {
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Story uploaded successfully, handle the response as needed
      } else {
        // Handle API errors or validation errors
      }
    } catch (error) {
      console.error("API request failed:", error);
      // Handle network errors
    }
  };

  return (
    <div>
      <h2>Upload a Story</h2>
      <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(parseInt(e.target.value, 10))}
          required
        />
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label>Genres:</label>
        <input
          type="text"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          required
        />
        <label>Cover:</label>
        <input
          type="text"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          required
        />
        <label>Url:</label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <label>Mature:</label>
        <input
          type="radio"
          name="mature"
          value="1" // Set the value to "1" for mature
          checked={mature === "1"} // Check if mature is "1"
          onChange={(e) => setMature(e.target.value)}
          required
        />
        Yes
        <input
          type="radio"
          name="mature"
          value="0" // Set the value to "0" for not mature
          checked={mature === "0"} // Check if mature is "0"
          onChange={(e) => setMature(e.target.value)}
          required
        />
        No
        <button type="button" onClick={addChapter}>
          Add Chapter
        </button>
        {chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex}>
            <label>Chapter {chapterIndex + 1} Number:</label>
            <input
              type="number"
              value={chapter.chapter_number}
              onChange={(e) => {
                const newChapters = [...chapters];
                newChapters[chapterIndex].chapter_number = parseInt(
                  e.target.value,
                  10
                ); // Parse as integer
                setChapters(newChapters);
              }}
              required
            />

            <label>Chapter Title:</label>
            <input
              type="text"
              value={chapter.title}
              onChange={(e) => {
                const newChapters = [...chapters];
                newChapters[chapterIndex].title = e.target.value;
                setChapters(newChapters);
              }}
              required
            />

            <label>Chapter ID:</label>
            <input
              type="number"
              value={chapter.chapter_id}
              onChange={(e) => {
                const newChapters = [...chapters];
                newChapters[chapterIndex].chapter_id = parseInt(
                  e.target.value,
                  10
                ); // Parse as integer
                setChapters(newChapters);
              }}
              required
            />

            <button type="button" onClick={() => addPage(chapterIndex)}>
              Add Page to Chapter {chapterIndex + 1}
            </button>

            {chapter.pages.map((page, pageIndex) => (
              <div key={pageIndex}>
                <label>Page {pageIndex + 1} Number:</label>
                <input
                  type="number"
                  value={page.page_number}
                  onChange={(e) => {
                    const newChapters = [...chapters];
                    newChapters[chapterIndex].pages[pageIndex].page_number =
                      parseInt(e.target.value, 10); // Parse as integer
                    setChapters(newChapters);
                  }}
                  required
                />

                <label>Page {pageIndex + 1} Page ID:</label>
                <input
                  type="number"
                  value={page.page_id}
                  onChange={(e) => {
                    const newChapters = [...chapters];
                    newChapters[chapterIndex].pages[pageIndex].page_id =
                      parseInt(e.target.value, 10); // Parse as integer
                    setChapters(newChapters);
                  }}
                  required
                />

                <label>Page {pageIndex + 1} Image URL:</label>
                <input
                  type="text"
                  value={page.page_url}
                  onChange={(e) => {
                    const newChapters = [...chapters];
                    newChapters[chapterIndex].pages[pageIndex].page_url =
                      e.target.value;
                    setChapters(newChapters);
                  }}
                  required
                />
              </div>
            ))}
          </div>
        ))}
        <button type="submit">Upload Story</button>
      </form>
    </div>
  );
};

export default AdminUpload;
