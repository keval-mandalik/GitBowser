import React,{useContext} from 'react'
import RepoContext from "../context/repos/repoContext"
const Branches = () => {
    const context = useContext(RepoContext);
    const { reposUserName,reposBranchName,reposRepoName } = context;
  return (
    <div className="mx-3">
       <h5 >BRANCHES </h5>
       {/* { "User Name: "+reposUserName+"\n"+"Repository Name: "+reposRepoName+"\n"+"Branch Name: "+reposBranchName} */}
       <span>User Name:</span><strong>{reposUserName}</strong> <br />
       <span>Repository Name:</span><strong>{reposRepoName}</strong> <br />
       <span>Branch Name:</span><strong>{reposBranchName}</strong>
    </div>
  )
}

export default Branches
