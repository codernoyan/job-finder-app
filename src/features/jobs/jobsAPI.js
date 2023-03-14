import axios from '../../utils/axios';

// get all jobs from database
export const getJobs = async () => {
  const response = await axios.get('/jobs');
  return response.data;
};

// add a job to database
export const addJobToDB = async (jobData) => {
  const response = await axios.post('/jobs', jobData);
  return response;
};

// delete a job from database
export const deleteJobFromDB = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);
  return response;
};