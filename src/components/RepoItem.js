import React,{useContext} from 'react'
import RepoContext from "../context/repos/repoContext"
const RepoItem = (props) => {
  const context = useContext(RepoContext);
    const {repo} = props;
    const { deleteRepo,branchIssue} = context;
  return (
    <div className="card w-75 repoItem"  onClick={()=>{branchIssue(repo._id)}}  >
  <div className="card-body" >
    <h6 className="card-subtitle mb-2" >{repo.repoName}</h6>
    <p className="card-text">{repo.description}</p>
    <i className="fas fa-trash-alt" style={{cursor:"pointer"}}onClick={()=>{deleteRepo(repo._id)}}></i>
  </div>
</div>
  )
}

export default RepoItem
// onClick={()=>{deleteRepo(repo._id)}}