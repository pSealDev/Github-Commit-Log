import { useState, setState, useEffect } from "react"
import Home from './Components/Home/Home'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import './App.css';
import axios from 'axios'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Results from './Components/Results/Results'
import {SearchContext} from './Context/SearchContext'


function App() {

  
  const [userName, setUserName] = useState("")
  const [repoName, setRepoName] = useState("")
  const [loading, setLoading] = useState(false)
  const [repos, setRepos] = useState([])
  const [visible, setVisible] = useState(10)

  let url_path = "/" + userName + "/" + repoName;

  let navigate = useNavigate();

  function handleSubmit(e) {
      e.preventDefault()
      searchRepos()
  }

  let res;

  function searchRepos() {
      setLoading(true)
      axios({
          method: 'get',
          url: `https://api.github.com/repos/${userName}/${repoName}/commits`,
      }).then(res => {
          setLoading(false);
          setRepos(res.data);
      })
          .catch(error => {
          { typeof res === "undefined" ? navigate('/does/not/exist') : console.log("All good.") }
              console.log.apply(error.res.data.error)
          });

  }

  let props = {
      repos,
      userName,
      visible,
      repoName,
      setVisible
  }

  let home_props = {
      userName,
      setUserName,
      repoName,
      setRepoName,
      handleSubmit,
      loading,
      repos,
      setRepos,
      setVisible,
      visible
  }


  return (
  
<>
<SearchContext.Provider value={{
   userName,
   setUserName,
   repoName,
   setRepoName,
   handleSubmit,
   loading,
   repos,
   setRepos,
   visible,
   setVisible
}}>


 <Routes>
   <Route exact path="/" element={<Home />} />
   <Route exact path={url_path} element={<Results home_props={home_props} /> }/> 
   <Route path="/does/not/exist" element={<Home />} /> 
   <Route path="*" element={<PageNotFound />} /> 
   </Routes>
 </SearchContext.Provider>
</>
  );
}

export default App;
