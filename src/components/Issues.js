import React, { useContext } from 'react'
import RepoContext from "../context/repos/repoContext"
// import IssueItem from './IssueItem';
const Issues = () => {
    const context = useContext(RepoContext);
    const { repoIssueTitle, repoLogin, repoAvtar } = context;
    var indents = [];
    for (var i = 0; i < repoIssueTitle.length; i++) {
        indents.push(<div class="card my-3">
        <h6 class="card-header">{repoIssueTitle[i]}</h6>
        <div class="card-body">
          <h6 class="card-title"> <img src={repoAvtar[i]} alt="" style={{ height: "40px", borderRadius: "50%" }} />{repoLogin[i]}</h6>
        </div>
      </div>);
    }

    return (
        <div>
            <h5>ISSUES</h5>
         {indents}
        </div>
     );
    }
    export default Issues;
    {/* <img src={repoAvtar} alt="" style={{ height: "40px", borderRadius: "50%" }} /> */ }
    {/* <div className="card">
                {repoIssueTitle.map(title=>(
                    <h5 className="card-header">{title}</h5>
                ))}
                <div className="card-body">
                {repoLogin.map(login=>(
                    <h5 className="card-header">{login}</h5>
                ))}
                </div>
            </div> */}