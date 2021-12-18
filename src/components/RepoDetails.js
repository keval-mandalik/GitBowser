import React,{useContext} from 'react'
import RepoContext from "../context/repos/repoContext"
import Branches from './Branches';
import Issues from './Issues';
const RepoDetails = () => {

  const context = useContext(RepoContext);
  const { reposBranch } = context;
  // let names = reposBranch.map((item) => item.name);
  return (
    <div className="repoDetails d-inline" >
      <div className="d-flex">
     {/* <h5 >BRANCHES </h5>
     <h5> ISSUES</h5> */}
     <Branches/>
     <Issues/>
      </div>
    </div>
  )
}

export default RepoDetails
