import { connectToDatabase } from "../../../util/mongodb";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  const { id } = req.query;
  const { db } = await connectToDatabase();

  const movie = await db.collection("movies").findOne({ _id: ObjectId(id) });

  res.json(movie);
};
