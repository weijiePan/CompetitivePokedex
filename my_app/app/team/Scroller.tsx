import PkmonScrollIcon from "./PkmonScrollIcon"
export default function Scroller(ScrollIcon:any){
    let scrollStart = 1;
    let scrollRange = 10;//number scrolled before loading
    let scrollIcons:any[] = [];
    for(let i = scrollStart; i < scrollRange; i++ ){
        scrollIcons.push(() => <ScrollIcon id = {i}></ScrollIcon>)
    }
    return(
        <div className = "scroller">
            {scrollIcons}
        </div>
    )
}