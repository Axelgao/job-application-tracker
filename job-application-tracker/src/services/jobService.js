import axios from "axios";

const API_URL = "http://localhost:5119/api/applications";

export const getAllJobs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

export const addJob = async (job) => {
  try {
    const response = await axios.post(API_URL, job);
    return response.data;
  } catch (error) {
    console.error("Error adding job:", error);
    throw error;
  }
};

export const updateJob = async (job) => {
  try {
    await axios.put(`${API_URL}/${job.id}`, job);
  } catch (error) {
    console.error("Error updating job status:", error);
    throw error;
  }
};
