import { Injectable } from '@nestjs/common';
import neo4j from 'neo4j-driver';


@Injectable()
export class ConnectionService {
   
    async getSession() {
        const driver = neo4j.driver(process.env.URI, neo4j.auth.basic(process.env.USER, process.env.PASSWORD))
        const session = driver.session()

        return session
    }

    async read() {
        const result = await (await this.getSession()).run('MATCH (n:MetroStation) RETURN n.name AS name ORDER BY n.name')
            console.log(result.records[0])
            const count = JSON.stringify(result.records)

        return `Hello World! There are${count} nodes in the database`;
    }
    
}
