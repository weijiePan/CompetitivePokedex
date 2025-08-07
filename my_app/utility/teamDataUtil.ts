import {neon} from "@neondatabase/serverless"


class TeamDataUtil{
    sql:any;
    constructor(Database_url:string){
        this.sql = neon(Database_url);
    }

    async getUserData(userId?:number){
        if(userId){
            return this.sql`SELECT * FROM team WHERE user_id = ${userId}`;
        }
        return this.sql`SELECT * FROM team`;
    }
}
export default TeamDataUtil;