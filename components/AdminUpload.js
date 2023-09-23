import React, { useState } from 'react';

const AdminUpload = () => {
  // State for form fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [cover, setCover] = useState('');
  const [mature, setMature] = useState('');
  const [url, setUrl] = useState('');
  const [chapters, setChapters] = useState([{ chapterNumber: '', chapterUrl: '', chapterTitle: '', pages: [] }]);

  // Function to handle adding a new chapter
  const addChapter = () => {
    setChapters([...chapters, { chapterNumber: '', chapterUrl: '', pages: [] }]);
  };

  // Function to handle adding a new page to a chapter
  const addPage = (chapterIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].pages.push({ pageNumber: '', imageUrl: '' });
    setChapters(newChapters);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data for API submission
    const data = {
        title,
        description,
        genre,
        cover,
        url,
        mature
    };

    // Make an API request to upload the story data (implement this)
    try {
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Story uploaded successfully, handle the response as needed
      } else {
        // Handle API errors or validation errors
      }
    } catch (error) {
      console.error('API request failed:', error);
      // Handle network errors
    }
  };

  return (
    <div>
      <h2>Upload a Story</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Genre:</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />

        <label>Cover:</label>
        <input type="text" value={cover} onChange={(e) => setCover(e.target.value)} required />

        <label>Url:</label>
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />

        <label>Mature:</label>
        <input type="radio" value={mature} onChange={(e) => setMature(e.target.value)} required />

        <button type="button" onClick={addChapter}>
          Add Chapter
        </button>

        {chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex}>
            <label>Chapter {chapterIndex + 1} Number:</label>
            <input
              type="text"
              value={chapter.chapterNumber}
              onChange={(e) => {
                const newChapters = [...chapters];
                newChapters[chapterIndex].chapterNumber = e.target.value;
                setChapters(newChapters);
              }}
              required
            />
            
            <label>Chapter Title:</label>
            <input type="text" value={chapter.chapterTitle}               
            onChange={(e) => {
                const newChapters = [...chapters];
                newChapters[chapterIndex].chapterTitle = e.target.value;
                setChapters(newChapters);
              }} required />

            <label>Chapter {chapterIndex + 1} URL:</label>
            <input
              type="text"
              value={chapter.chapterUrl}
              onChange={(e) => {
                const newChapters = [...chapters];
                newChapters[chapterIndex].chapterUrl = e.target.value;
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
                  type="text"
                  value={page.pageNumber}
                  onChange={(e) => {
                    const newChapters = [...chapters];
                    newChapters[chapterIndex].pages[pageIndex].pageNumber = e.target.value;
                    setChapters(newChapters);
                  }}
                  required
                />

                <label>Page {pageIndex + 1} Image URL:</label>
                <input
                  type="text"
                  value={page.imageUrl}
                  onChange={(e) => {
                    const newChapters = [...chapters];
                    newChapters[chapterIndex].pages[pageIndex].imageUrl = e.target.value;
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