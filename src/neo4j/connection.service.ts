import { Injectable } from '@nestjs/common';
import neo4j from 'neo4j-driver';


@Injectable()
export class ConnectionService {
   
    async getSession() {
        const driver = neo4j.driver(process.env.URI, neo4j.auth.basic(process.env.USER, process.env.PASSWORD))
        const session = driver.session()

        return session
    }

    async readAll() {
        const result = await (await this.getSession()).run('MATCH (n:MetroStation) RETURN n.name AS name ORDER BY n.name')
            console.log(result.records[0])
            const count = JSON.stringify(result.records)

        return count;
    }

    async calcJourney(data) {
        let startNode = JSON.stringify(data.startNode).replace(/[^\w\s]/gi, '');
        let endNode =   JSON.stringify(data.endNode).replace(/[^\w\s]/gi, '');
        return await (await this.getSession()).run(
            `MATCH (start:MetroStation {name: '${startNode}'}), (end:MetroStation {name: '${endNode}'})
        CALL apoc.algo.dijkstra(start, end, 'TRAVEL_TO', 'time', 1) YIELD path, weight
        RETURN path, weight`
        )
      
    }

}

