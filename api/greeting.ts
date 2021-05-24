import { VercelRequest, VercelResponse } from "@vercel/node";
import greeting from "../src/greeting";

export default (request: VercelRequest, response: VercelResponse) => {
  const { name = "Guest" } = request.query;
  response.status(200).send(greeting(name as string));
};
