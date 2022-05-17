import { webStories } from "../../../data";
export default function handler({ query: { id } }, res) {
  const filtered = webStories.filter((web) => web.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Story with the id of ${id} not found` });
  }
}
