import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";

//should read this from dotenv
const path = process.env.API_URL;
const baseUrl = "http://localhost:7000/api/v1" + "/quotes";

export async function getQuotes(params?: any) {
  try {
    const response = await axios(`${baseUrl}${params}`);
    return response.data;
  } catch (e) {
    handleError(e);
  }
}
