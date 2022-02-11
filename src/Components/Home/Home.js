import react, { useState, useEffect, useContext } from "react"
import HomeForm from './HomeForm'
import {
    BrowserRouter as Router,
    useNavigate
} from "react-router-dom";
import { SearchContext } from '../../Context/SearchContext'
import '../../App.css'

export default function Home() {

    const { setUserName } = useContext(SearchContext);
    const { userName } = useContext(SearchContext);
    const { setRepoName } = useContext(SearchContext);
    const { repoName } = useContext(SearchContext);
    const { loading } = useContext(SearchContext);
    const { repos } = useContext(SearchContext);
    const { handleSubmit } = useContext(SearchContext);

    let url_path = "/" + userName + "/" + repoName;

    let navigate = useNavigate();

    useEffect(() => {
    }, [repos]);

    let form_props = {
        userName,
        setUserName,
        setRepoName,
        repoName,
        handleSubmit,
        loading
    }
    return (
        <>
            {(repos.length > 0)
                ?
                navigate(url_path)
                :
                <HomeForm form_props={form_props} />
            }
        </>
    )
}