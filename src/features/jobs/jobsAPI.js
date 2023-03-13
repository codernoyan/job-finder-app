import axios from '../../utils/axios';

export const getJobs = async () => {
  const response = await axios.get('/jobs');
  return response.data;
};

export const addJobToDB = async (jobData) => {
  const response = await axios.post('/jobs', jobData);
  return response;
};

export const updateJobToDB = async (id, jobData) => {
  const response = await axios.patch(`/jobs/${id}`, jobData);
  return response;
};

export const deleteJobFromDB = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response;
};