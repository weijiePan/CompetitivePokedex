import TeamDataUtil from "../../utility/teamDataUtil"

import Scroller from "./Scroller"
export default function TeamSetup(props:any){
    return(
        <>
            <Scroller></Scroller>
        </>
    )
}
//passing a component to a server component for another server component as prop causes hydration?
//ex:passing import PkmonScrollIcon from "./PkmonScrollIcon"'s PkmonScrollIcon to Scroller as a prop for the specific icon