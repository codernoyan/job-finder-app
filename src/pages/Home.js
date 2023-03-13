import Header from "../components/header/Header";
import JobsList from "../components/jobsList/JobsList";

export default function Home() {
  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <Header />
        <JobsList />
      </main>
    </div>
  )
};