import { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '../../../config/db'; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Authenticate the admin user (implement your authentication logic)
      const isAdminAuthenticated = true; // Replace with your authentication logic

      if (!isAdminAuthenticated) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      // Validate and process the incoming data
      const { title, description, genres, cover, url, mature, id, chapters, pages } = req.body;
      console.log('Request body:', req.body);
      console.log('Chapters:', chapters);
      console.log('Pages:', pages);
  

      if (!title || !description || !genres || !cover || !url || !mature || !id || !chapters || !pages || chapters.length === 0) {

        return res.status(400).json({ error: 'Invalid input data' });
      }

      // Create a new story in the database
      const newStory = await prisma.stories.create({
        data: {
          title,
          description,
          genres,
          cover,
          url,
          mature: mature === "true",
          id,
          chapters: {
            create: chapters.map((chapter) => ({
              chapter_number: chapter.chapter_number,
              title: chapter.title,
              first: chapter.first,
              last: chapter.last,
              chapter_id: chapter.chapter_id,
              pages: {
                create: chapter.pages.map((page) => ({
                  page_number: page.page_number,
                  page_url: page.page_url,
                  page_id: page.page_id,
                  chapter_id: page.chapter_id, 
                })),
              },
            })),
          },
        },
      });
      console.log('Newly created story:', newStory);
      // Iterate through chapters and create database records
      for (const chapter of chapters) {
        if (!chapter.title || !chapter.chapter_id || !chapter.chapter_number || !chapter.first || !chapter.last || !chapter.summary || !chapter.pages || chapter.pages.length === 0) {
          return res.status(400).json({ error: 'Invalid chapter data' });
        }

        const newChapter = await prisma.chapters.create({
          data: {
            id: id,
            chapter_id: chapter.chapter_id,
            chapter_number: chapter.chapter_number,
            title: chapter.title,
            first: chapter.first,
            last: chapter.last,
            summary: chapter.summary

          },
        });

        // Iterate through chapter pages and create database records
        for (const page of chapter.pages) {
          if (!page.page_number || !page.page_url || !page.page_id) {
            return res.status(400).json({ error: 'Invalid page data' });
          }

          await prisma.page.create({
            data: {
              chapter_id: newChapter.chapter_id,
              page_id: page.page_id,
              page_number: page.page_number,
              page_url: page.page_url,
            },
          });
        }
      }
      return res.status(200).json({ message: 'Story uploaded successfully', story: newStory });    
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}