import { sorData, searchData } from "../../features/filters/filtersSlice";
import { useState } from "react"
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(sorData(e.target.value));
  };

  const handleSearch = (e) => {
    // e.preventDefault();
    if (e.key === 'Enter') {
      console.log(search);
      dispatch(searchData(search));
    };
  }

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500" />
          <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" value={search} onKeyUp={handleSearch} />
        </div>
        <select onChange={handleSort} id="lws-sort" name="sort" autoComplete="sort" className="flex-1">
          <option value="">Default</option>
          <option value="low_to_high">Salary (Low to High)</option>
          <option value="high_to_low">Salary (High to Low)</option>
        </select>
      </div>
    </div>
  )
};