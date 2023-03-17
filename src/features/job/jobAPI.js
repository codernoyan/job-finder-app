import axios from '../../utils/axios';

// get a specific job from database
export const getJob = async (id) => {
  const response = await axios.get(`/jobs/${id}`);
  return response.data;
};
