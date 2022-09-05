import { OkPacket, RowDataPacket, ResultSetHeader, FieldPacket } from 'mysql2';

export default interface IConnection {
  execute<
    T extends RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader>(
    sql: string,
    values: any | any[] | { [param: string]: any }
  ): Promise<[T, FieldPacket[]]>;
}
