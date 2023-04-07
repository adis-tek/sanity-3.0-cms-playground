import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Person } from "../../typings";

const query = groq`
    *[_type == "person"]
`;

type Data = {
  persons: Person[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const persons: Person[] = await sanityClient.fetch(query);

  return res.status(200).json({ persons });
}
