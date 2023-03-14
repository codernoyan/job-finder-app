import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Form from "../components/form/Form";
import Loading from "../components/ui/Loading";
import { fetchJob } from "../features/job/jobSlice";

export default function EditJob() {
  const { isLoading, isError, job, error } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const { jobId: id } = useParams();

  useEffect(() => {
    dispatch(fetchJob(id))
  }, [dispatch, id]);

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

  if (!isLoading && !isError && Object.keys(job).length > 0) {
    content = <Form editJobData={job} />
  }
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>
        <div className="max-w-3xl mx-auto">
          {content}
        </div>
      </main>
    </div>
  )
}