import React, { useState, useRef, useContext, useEffect } from 'react';
import RepoContext from "../context/repos/repoContext"
import RepoItem from './RepoItem';
const RepoList = () => {
    // const repos = [];
    const context = useContext(RepoContext);
    // const [name, setName] = useState("");
    // const [userName, setUserName] = useState("");
    // // const [repo, setRepo] = useState("");
    // const [avatar, setavatar] = useState("");
    // const [userInput, setUserInput] = useState("");
    // const [error, setError] = useState("");
    const [repo, setRepo] = useState({id:"", name: "", repoName: "", description: "" })
    const ref = useRef(null);
    const refClose = useRef(null);
    const { repos, addRepo, getRepo} = context;
    useEffect(() => {
        getRepo()
        // eslint-disable-next-line
    }, [])

    const onChange = (e) => {
        setRepo({ ...repo, [e.target.name]: e.target.value })
    }

    const handleClick = () => {
        ref.current.click();
    }


    const handleAddRepo = async () => {
        refClose.current.click();
        localStorage.setItem("name", repo.name);
        localStorage.setItem("repoName", repo.repoName);
        let owner = localStorage.getItem("name");
        let repositoryName = localStorage.getItem("repoName");
        // `https://api.github.com/repos/${owner}/${repositoryName}`
        fetch(`https://api.github.com/repos/${owner}/${repositoryName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setRepo({ name: owner, repoName: repositoryName, description: data.description })
                // const desc = await data.description;
                // repo.description = desc;
                addRepo(repo.name, repo.repoName, data.description);
            });
    }

    return (
            <div className="repoList">
                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Repository</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Auther</label>
                                        <input type="text" className="form-control" id="name" name="name" onChange={onChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="repoName" className="form-label">Repository Name</label>
                                        <input type="text" className="form-control" id="repoName" name="repoName" onChange={onChange} />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <button ref={refClose} type="button" className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary add" onClick={handleAddRepo}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <i className="fas fa-3x fa-plus-circle add-repo" onClick={handleClick}></i>
                <div className="row my-3">
                    <h1>Your Repository</h1>
                    {repos.map((repo) => {
                        return <RepoItem key={repo._id} repo={repo} />
                    })}
                </div>
            </div>
    )
}

export default RepoList
