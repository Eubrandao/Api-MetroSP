export interface neo4jInterface {
    getSession(): Promise<any>;
    readAll(): Promise<any>;
}