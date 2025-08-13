import TeamDataUtil from "../../utility/teamDataUtil"
import PkballDisplay from "./PkballDisplay"
import Scroller from "./Scroller"
import "./team.css"
export default function TeamSetup(props:any){
    return(
        <div className="team_display">
            
            <div className = "team_setup">
                <PkballDisplay id = "1"></PkballDisplay>
          
            
            </div>
        </div>
    )
}
//passing a component to a server component for another server component as prop causes hydration?
//ex:passing import PkmonScrollIcon from "./PkmonScrollIcon"'s PkmonScrollIcon to Scroller as a prop for the specific icon