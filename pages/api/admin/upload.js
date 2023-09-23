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
      const { title, description, genre, cover, url, mature, chapters } = req.body;

      if (!title || !description || !genre || !cover || !url || !mature || !chapters || chapters.length === 0) {
        return res.status(400).json({ error: 'Invalid input data' });
      }

      // Create a new story in the database
      const newStory = await prisma.stories.create({
        data: {
          title,
          description,
          genre,
          cover,
          url,
          mature
        },
      });

      // Iterate through chapters and create database records
      for (const chapter of chapters) {
        if (!chapter.title || !chapter.chapter_id || !chapter.chapterNumber || !chapter.chapterUrl || !chapter.first || !chapter.last || !chapter.summary || !chapter.pages || chapter.pages.length === 0) {
          return res.status(400).json({ error: 'Invalid chapter data' });
        }

        const newChapter = await prisma.chapters.create({
          data: {
            storyId: newStory.id,
            chapterNumber: chapter.chapterNumber,
            chapterUrl: chapter.chapterUrl,
            chapterTitle: chapter.chapterTitle,
            chapterFirst: chapter.first,
            chapterLast: chapter.last,
            chapterSummary: chapter.summary

          },
        });

        // Iterate through chapter pages and create database records
        for (const page of chapter.pages) {
          if (!page.pageNumber || !page.page_url || !page.pageId) {
            return res.status(400).json({ error: 'Invalid page data' });
          }

          await prisma.page.create({
            data: {
              chapterId: newChapter.id,
              pageId: page.pageId,
              pageNumber: page.pageNumber,
              imageUrl: page.page_url,
            },
          });
        }
      }

      return res.status(200).json({ message: 'Story uploaded successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}