import axios from '../../utils/axios';

export const getJobs = async () => {
  const response = await axios.get('/blogs');
  return response.data;
};