import { Typography } from "@mui/material";

const NoSearchResults = ({noResults, language}) => {

    let message;

    if (language === "en-US") {    
        message = "Oops.. no results!"
    } else if (language === "fi-FI") {
        message = "Oops.. ei tuloksia!"
     } else if (language === "sv-SE") {
        message = "Oops.. inga resultat!"
    }

    const errorStyle = {
        color: "rgba(255,255,255,0.3)",
        fontSize: "x-large",
        textAlign: "center",
        padding: "0px"
      };
   
    if(noResults){
        return(
            <>
            <div style={errorStyle}>
                <h1 style={{marginBottom: "0px"}}>&#9785;</h1>
            </div>
                <Typography variant="h6" color="rgba(255,255,255,0.3)" padding>
                {message}
                </Typography>
            </>
            )
    }
    else {
        <>
        </>
    }
}

export default NoSearchResults;