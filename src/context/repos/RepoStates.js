import RepoContext from "./repoContext";
import {useState} from "react";

const RepoState = (props)=>{
    // const repoInitials = []
    const repoInitials = []

    const [repos,setRepos] = useState(repoInitials);

    //Branch
    const [reposUserName,setReposUserName] = useState('');
    const [reposRepoName,setReposRepoName] = useState('');
    const [reposBranchName,setReposBranchName] = useState('');

    //Issues
    const [repoIssueTitle,setRepoIssueTitle] = useState('');
    const [repoLogin,setRepoLogin] = useState('');
    const [repoAvtar,setRepoAtar] = useState('');


    const getRepo = async()=>{
        const response = await fetch("http://localhost:5000/api/repo/fetchallrepos", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const json = await response.json()
          // console.log(json);
          setRepos(json)
      }

    //   Add a Repository
    const addRepo = async(name,repoName,description)=>{
        //Api call
        const response = await fetch("http://localhost:5000/api/repo/addrepos",{
            method:'POST',
            headers:{
               'Content-Type':'application/json'
            },
            body : JSON.stringify({name,repoName,description})
        });
        const repo = await response.json();
        setRepos(repos.concat(repo))
    }

    //   Delete a Repository
    const deleteRepo = async (id)=>{
         //Api call
         const response = await fetch(`http://localhost:5000/api/repo/deleterepo/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        const newRepo = repos.filter((repo)=>{return repo._id!==id})
         setRepos(newRepo)
        // console.log("deleting repo with id "+ id);
    }

    const branchIssue = async (id)=>{
      const response = await  fetch(`http://localhost:5000/api/repo/findONe/${id}`,{
        method:'GET',
        headers:{
           'Content-Type':'application/json'
        }
    });
    const reposBranch = await response.json()
    console.log(reposBranch.name,reposBranch.repoName);
    setReposUserName(reposBranch.name);
    setReposRepoName(reposBranch.repoName)
    fetch(`https://api.github.com/repos/${reposBranch.name}/${reposBranch.repoName}/branches`)
    .then(response => response.json())
    .then(data => {
      let names = data.map((item) => item.name);
      setReposBranchName(names);});
    fetch(`https://api.github.com/repos/${reposBranch.name}/${reposBranch.repoName}/issues`)
    .then(response => response.json())
    .then(data => {
      let titles = data.map((item) => item.title);
      let users = data.map((item) => item.user);
      let logins = users.map((item) => item.login);
      let avtar_urls = users.map((item) => item.avatar_url);
      console.log(avtar_urls)
      setRepoIssueTitle(titles);
      setRepoLogin(logins)
      setRepoAtar(avtar_urls)});

    }
    return (
        <RepoContext.Provider value={{repos,getRepo,addRepo,deleteRepo,branchIssue,reposUserName,reposBranchName,reposRepoName,repoIssueTitle,repoLogin,repoAvtar}}>
            {props.children}
        </RepoContext.Provider>
    )
}

export default RepoState;