import { stories } from "../../../data";
export default function handler({ query: { id } }, res) {
  const filtered = stories.filter((story) => story.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Story with the id of ${id} not found` });
  }
}
