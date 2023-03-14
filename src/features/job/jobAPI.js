import axios from '../../utils/axios';

// get a specific job from database
export const getJob = async (id) => {
  const response = await axios.get(`/jobs/${id}`);
  return response.data;
};

// update a specific job to database
export const updateJobToDB = async (id, jobData) => {
  const response = await axios.patch(`/jobs/${id}`, jobData);
  return response;
};