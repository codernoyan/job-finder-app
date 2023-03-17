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

  const filterByJobType = (job) => {
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

  // filter by job title
  const filterByTitle = (job) => {
    if (job.title.toLowerCase().indexOf(searchTitle.toLowerCase()) !== -1) {
      return true;
    } else if (searchTitle === '') {
      return true;
    }
    return false;
  };

  // sort jobs by salary range
  const sortBySalaryRange = (a, b) => {
    switch (sortTitle) {
      case 'low_to_high':
        return Number(a.salary) - Number(b.salary);
      case 'high_to_low':
        return Number(b.salary) - Number(a.salary);
      case '':
        return true;
      default:
        return true;
    }
  }
  // lets decide what will render
  let content;

  if (isLoading) content = <Loading />

  if (!isLoading && isError) {
    content = (
      <div>
        <h2 style={{
          color: 'white',
        }}>{error}</h2>
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
    content = jobs.filter(filterByJobType).filter(filterByTitle).sort(sortBySalaryRange).map((job) => <Job key={job.id} job={job} />)
  }

  return (
    <div className="jobs-list">
      {/* Single Job 1*/}
      {content}
      {/* Single Job 1*/}
    </div>
  )
}