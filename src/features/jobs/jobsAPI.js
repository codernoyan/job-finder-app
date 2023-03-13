import axios from '../../utils/axios';

export const getJobs = async () => {
  const response = await axios.get('/jobs');
  return response.data;
};

export const addJob = async (jobData) => {
  const response = await axios.post('/jobs', jobData);
  return response;
};

export const updateJob = async (id, jobData) => {
  const response = await axios.patch(`/jobs/${id}`, jobData);
  return response;
};

export const deleteJob = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response;
};