import { Grid } from "@mui/material";

interface DividerProps {
    text: String
}

function Divider({ text }: DividerProps) {
    return (
        <Grid container width={"100%"} justifyContent={"end"} className="divider-container">
            <Grid item className="divider-text" color={"#543310"} fontFamily={"Playfair Display"} fontSize={"24px"} marginRight={"50px"} marginTop={"-140px"}>
                {text}
                <Grid item borderBottom={"2px solid black"} width={"160%"}></Grid>
            </Grid>
        </Grid>
    )
}
export default Divider  