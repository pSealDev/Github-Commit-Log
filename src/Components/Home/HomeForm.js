import react from "react"
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

export default function HomeForm(props){

  let prop = props.form_props; 

  return(
    <>
    {props.form_props != undefined ? 
     <div data-testid="form_test" className="form-info">
    <h1 data-testid="header">Github API Commit Log</h1> 
    <form className="form">
        <label data-testid="form-label" for="user-name">Enter Github User Name:</label>
        <br></br>
        <input
            data-testid="user-input"
            name="user-name"
            className="input"
            value={prop.userName}
            placeholder="Github User Name"
            onChange={e => prop.setUserName(e.target.value)}
        />

        <label for="repo-name"> Enter Github Repo Name: </label>
        <br></br>
        <input
            data-testid="repo-input"
            id="repo-name"
            className="input"
            value={prop.repoName}
            placeholder="Github Repo Name"
            onChange={e => prop.setRepoName(e.target.value)}
        />

        <Grid container spacing={2}>
            <Grid item xs={12} style={{textAlign:'center'}}>
            <Button
                        data-testid="form-btn"
                        className="submit-btn"
                        variant="contained"
                        onClick={prop.handleSubmit}
                        style={{ backgroundColor: "#1ed995", color: 'black', fontWeight: 'bold' }}>{prop.loading ? "Searching..." : "Search"}</Button>
            </Grid>
        </Grid>
    </form>
</div>
: <h1 data-testid="h1_test">form not found</h1> } 
    </>
   
  )
}