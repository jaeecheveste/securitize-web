import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

//should read this from dotenv
const path = process.env.API_URL;
const baseUrl = "localhost:4000" + "/quotes";

export async function getQuotes() {
  try {
    return await axios(baseUrl);
  } catch (e) {
    handleError(e);
  }
}
