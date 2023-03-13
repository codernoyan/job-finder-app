import { fetchJobs } from "../../features/jobs/jobsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Job from "../job/Job";
import Loading from "../ui/Loading";

export default function JobsList() {
  const { isLoading, isError, jobs, error } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  // fetch jobs
  useEffect(() => {
    dispatch(fetchJobs())
  }, [dispatch]);

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
    content = jobs?.map((job) => <Job key={job.id} job={job} />)
  }

  return (
    <div className="jobs-list">
      {/* Single Job 1*/}
      {content}
      {/* Single Job 1*/}
    </div>
  )
}