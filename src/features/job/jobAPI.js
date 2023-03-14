import axios from '../../utils/axios';

export const getJob = async (id) => {
  const response = await axios.get(`/jobs/${id}`);
  return response.data;
};

export const updateJobToDB = async (id, jobData) => {
  const response = await axios.patch(`/jobs/${id}`, jobData);
  return response;
};