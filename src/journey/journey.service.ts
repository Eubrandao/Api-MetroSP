import { Injectable } from '@nestjs/common';
import { ConnectionService } from '../neo4j/connection.service';
import { JourneyInterface } from './repository/journey.interface';

@Injectable()
export class JourneyService implements JourneyInterface {

     result = null

    async calcJourney(data) {
        let startNode = JSON.stringify(data.startNode).replace(/[^\w\s]/gi, '');
        let endNode =   JSON.stringify(data.endNode).replace(/[^\w\s]/gi, '');
        this.result = await (await ConnectionService.getSession()).run(`MATCH (start:MetroStation {name: '${startNode}'}), (end:MetroStation {name: '${endNode}'})
        CALL apoc.algo.dijkstra(start, end, 'TRAVEL_TO', 'time', 1) YIELD path, weight
        RETURN path, weight`)
        return this.result
    }
 
    
}
