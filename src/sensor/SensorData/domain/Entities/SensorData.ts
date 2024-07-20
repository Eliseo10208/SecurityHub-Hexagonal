export class SensorData {
    constructor(
        public sensor_id: number,
        public data_type: string,
        public data: Buffer,
        public id?: number
    ) {}
}
