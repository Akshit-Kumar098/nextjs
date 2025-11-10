
const Page = async ({ params }) => {
  const resolvedParams = await params; 
  const { id } = resolvedParams;
  const res= await fetch('https://ats.api.mentorpal.ai/admin/get-job')
  const data = await res.json();
  const found=data.data.find(item=>item.job._id===id);
  const job = found ? found.job : null;
  if (job) {
  return (
    <div>
      <h1>{job.job_title}</h1>
      <p>{job.job_location}</p>
      <div dangerouslySetInnerHTML={{ __html: job.job_description }} />
      <button>Apply Now</button>
    </div>
  )
}
  return (
    <div>
    <p>Job not found</p>
    <a href="/jobs">Back to Jobs</a>
  </div>
  );
};

export default Page;
