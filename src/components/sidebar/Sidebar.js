import { filterData } from "../../features/filters/filtersSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyJob } from "../../features/job/jobSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFilter = (e, type) => {
    e.preventDefault();
    dispatch(filterData(type));
  };

  const handleFilterAll = (e, type) => {
    e.preventDefault();
    dispatch(filterData(type));
    navigate('/');
  };

  const handleNavigateToAddJob = () => {
    dispatch(emptyJob());
    navigate('/add-new-job');
  }

  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" onClick={(e) => handleFilterAll(e, '')} className="main-menu menu-active" id="lws-alljobs-menu">
              <i className="fa-solid fa-briefcase" />
              <span> All Available Jobs</span>
            </Link>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <a onClick={(e) => handleFilter(e, 'internship')} className="sub-menu" href="/jobs/internship" id="lws-internship-menu">
                  <i className="fa-solid fa-stop !text-[#FF5757]" />
                  Internship
                </a>
              </li>
              <li>
                <a onClick={(e) => handleFilter(e, 'fullTime')} className="sub-menu" href="/jobs/fulltime" id="lws-fulltime-menu">
                  <i className="fa-solid fa-stop !text-[#FF8A00]" />
                  Full Time
                </a>
              </li>
              <li>
                <a onClick={(e) => handleFilter(e, 'remote')} className="sub-menu" href="/jobs/remote" id="lws-remote-menu">
                  <i className="fa-solid fa-stop !text-[#56E5C4]" />
                  Remote
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/add-new-job" onClick={handleNavigateToAddJob} className="main-menu" id="lws-addJob-menu">
              <i className="fa-solid fa-file-circle-plus" />
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};