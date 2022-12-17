import { Injectable } from '@nestjs/common';
import neo4j from 'neo4j-driver';

@Injectable()
export class ConnectionService{
    
     static async getSession() {
        const driver = neo4j.driver(process.env.URI, neo4j.auth.basic(process.env.USER, process.env.PASSWORD))
        const session = driver.session()

        return session
    }

}

