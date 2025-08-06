"use client"
import TeamDataUtil from "../../utility/teamDataUtil"
import { useEffect } from "react"
export default function TeamSetup(){
    let {DATABASE_URL} = process.env; 
    const sql = new TeamDataUtil(DATABASE_URL!);
    useEffect(()=>{
        sql.getUserData().then((resp)=>{
            console.log(resp);
        })
    },[]);
    return(
        <>
            <p>ahhh</p>
        </>
    )
}