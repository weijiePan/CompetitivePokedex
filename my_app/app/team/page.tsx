import TeamDataUtil from "../../utility/teamDataUtil"
import PkmonScrollIcon from "./PkmonScrollIcon"
import Scroller from "./Scroller"
export default function TeamSetup(props:any){
    return(
        <>
            <Scroller ScrollIcon = {PkmonScrollIcon}></Scroller>
        </>
    )
}