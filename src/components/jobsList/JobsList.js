import { fetchJobs } from "../../features/jobs/jobsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "../job/Job";
import Loading from "../ui/Loading";

export default function JobsList() {
  const { isLoading, isError, jobs, error } = useSelector((state) => state.jobs);
  const { filterTitle, sortTitle, searchTitle } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  // fetch jobs
  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch]);

  const filterByJobTitle = (job) => {
    // console.log(filterTitle)
    switch (filterTitle) {
      case 'internship':
        return job.type === 'Internship';
      case 'fullTime':
        return job.type === 'Full Time';
      case 'remote':
        return job.type === 'Remote';
      default:
        return true;
    }
  };

  const filterByName = (job) => {
    if (job.title.toLowerCase().indexOf(searchTitle.toLowerCase()) === 0) {
      return true;
    } else if (searchTitle === '') {
      return true;
    }
    return false;
  }


  // render with condition
  let content;

  if (isLoading) content = <Loading />

  if (!isLoading && isError) {
    content = (
      <div>
        <h2>{error}</h2>
      </div>
    )
  };

  if (!isLoading && !isError && jobs?.length === 0) {
    content = (
      <div>
        <h2 style={{
          color: 'white',
        }}>No jobs available</h2>
      </div>
    )
  };

  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs.filter(filterByJobTitle).filter(filterByName).map((job) => <Job key={job.id} job={job} />)
  }

  return (
    <div className="jobs-list">
      {/* Single Job 1*/}
      {content}
      {/* Single Job 1*/}
    </div>
  )
}