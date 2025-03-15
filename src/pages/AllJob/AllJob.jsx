import { useState } from "react";
import useJobs from "../../hooks/useJobs";
import HotJobCard from "../Home/HotJobCard";
import { BiSearch } from "react-icons/bi";

const AllJob = () => {
  const [sort, setSort] = useState(false);
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [search, setSearch] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

  if (loading) {
    return <h2>Job Is Loading...</h2>;
  }

  return (
    <div>
      <h1 className="py-5 text-4xl font-bold text-center">All Jobs</h1>

      <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center gap-5 rounded-md mb-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral ${sort && "btn-success"}`}
        >
          {sort ? "Sorted By Salary" : "Sort By Salary"}
        </button>
        <BiSearch></BiSearch>
        <input
          onKeyUp={(e) => setSearch(e.target.value)}
          type="text"
          className="input w-full max-w-2xl"
          placeholder="Search Jobs by Location"
        />

        <div className="space-y-2">
          <input
            onKeyUp={(e) => setMinSalary(e.target.value)}
            type="text"
            className="input w-full max-w-xs"
            placeholder="Min salary"
          />
          <input
            onKeyUp={(e) => setMaxSalary(e.target.value)}
            type="text"
            className="input w-full max-w-xs"
            placeholder="Max salary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJob;
