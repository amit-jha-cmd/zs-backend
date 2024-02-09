import request from "supertest";

import app from "app";

const {HOST, PORT} = process.env;

describe('Attack routes', () => {
    test('Get overview', async () => {
        const url = 'http://' + HOST + ':' + PORT;
        const endpoint: string = '/attacks/overview?startDateTime=2021-08-04T00:00:00.0000&endDateTime=2021-08-06T15:20:41.628Z'
        const res = await request(app).get(url + endpoint);
        expect(res.body).toEqual({
            "status": 200,
            "message": "",
            "data": [
                {
                    "minute": "2021-08-04T08:49:00.000Z",
                    "count": "13"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-06T03:48:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T12:08:00.000Z",
                    "count": "3"
                },
                {
                    "minute": "2021-08-05T12:07:00.000Z",
                    "count": "5"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "14"
                },
                {
                    "minute": "2021-08-06T03:49:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-04T13:46:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-06T03:49:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-06T03:45:00.000Z",
                    "count": "8"
                },
                {
                    "minute": "2021-08-04T13:45:00.000Z",
                    "count": "3"
                },
                {
                    "minute": "2021-08-04T13:46:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-06T03:45:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-04T13:26:00.000Z",
                    "count": "8"
                },
                {
                    "minute": "2021-08-04T13:46:00.000Z",
                    "count": "12"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "13"
                },
                {
                    "minute": "2021-08-05T07:39:00.000Z",
                    "count": "10"
                },
                {
                    "minute": "2021-08-05T12:07:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T05:10:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-06T03:48:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-04T13:46:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T12:06:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T07:56:00.000Z",
                    "count": "20"
                },
                {
                    "minute": "2021-08-06T03:48:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "5"
                },
                {
                    "minute": "2021-08-05T05:08:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T12:06:00.000Z",
                    "count": "7"
                },
                {
                    "minute": "2021-08-06T03:47:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "8"
                },
                {
                    "minute": "2021-08-04T08:49:00.000Z",
                    "count": "16"
                },
                {
                    "minute": "2021-08-05T07:39:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-04T08:46:00.000Z",
                    "count": "5"
                },
                {
                    "minute": "2021-08-06T03:48:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-06T03:49:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "28"
                },
                {
                    "minute": "2021-08-05T12:07:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-06T03:48:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T05:10:00.000Z",
                    "count": "9"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "6"
                },
                {
                    "minute": "2021-08-06T03:47:00.000Z",
                    "count": "4"
                },
                {
                    "minute": "2021-08-05T07:55:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T07:55:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-06T03:48:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-06T03:49:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-06T03:47:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-04T13:45:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-06T03:47:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-06T03:47:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T05:08:00.000Z",
                    "count": "10"
                },
                {
                    "minute": "2021-08-06T03:48:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-04T13:26:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T04:09:00.000Z",
                    "count": "12"
                },
                {
                    "minute": "2021-08-06T05:13:00.000Z",
                    "count": "3"
                },
                {
                    "minute": "2021-08-05T07:56:00.000Z",
                    "count": "11"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T12:07:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "42"
                },
                {
                    "minute": "2021-08-05T04:24:00.000Z",
                    "count": "10"
                },
                {
                    "minute": "2021-08-06T03:49:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T05:08:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-06T03:47:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-04T13:46:00.000Z",
                    "count": "20"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-04T08:49:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-04T13:45:00.000Z",
                    "count": "7"
                },
                {
                    "minute": "2021-08-05T04:07:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-06T03:47:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-04T13:46:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-04T13:54:00.000Z",
                    "count": "10"
                },
                {
                    "minute": "2021-08-05T12:06:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T12:06:00.000Z",
                    "count": "10"
                },
                {
                    "minute": "2021-08-06T03:48:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T04:09:00.000Z",
                    "count": "8"
                },
                {
                    "minute": "2021-08-05T05:08:00.000Z",
                    "count": "4"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T07:40:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T12:07:00.000Z",
                    "count": "3"
                },
                {
                    "minute": "2021-08-05T05:04:00.000Z",
                    "count": "10"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "12"
                },
                {
                    "minute": "2021-08-06T03:49:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-06T03:45:00.000Z",
                    "count": "3"
                },
                {
                    "minute": "2021-08-06T03:49:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-05T04:07:00.000Z",
                    "count": "9"
                },
                {
                    "minute": "2021-08-06T03:45:00.000Z",
                    "count": "13"
                },
                {
                    "minute": "2021-08-06T03:47:00.000Z",
                    "count": "2"
                },
                {
                    "minute": "2021-08-05T04:08:00.000Z",
                    "count": "1"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "14"
                },
                {
                    "minute": "2021-08-05T07:55:00.000Z",
                    "count": "8"
                },
                {
                    "minute": "2021-08-04T08:47:00.000Z",
                    "count": "1"
                }
            ]
        });
    });

    test('Get Attacks', async () => {
        const url = 'http://' + HOST + ':' + PORT;
        const endpoint: string = '/attacks/overview?startDateTime=2021-08-04T00:00:00.0000&endDateTime=2021-08-06T15:20:41.628Z&page=2&pageSize=10'
        const res = await request(app).get(url + endpoint);
        expect(res.body).toEqual({
            "status": 200,
            "message": "",
            "data": [
                {
                    "id": "2021-08-06T03:50:13.672600-web-e8b6b7bf-4d62-43c7-b7ad-d0a0549f5081",
                    "timestamp": "2021-08-06T03:48:54.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "web",
                    "decoyName": "keywordsswft54"
                },
                {
                    "id": "2021-08-06T03:52:08.698379-network-824b7cc1-d25b-46bc-a56d-8b0b6e997856",
                    "timestamp": "2021-08-06T03:48:51.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "network",
                    "decoyName": "keywordsswft54"
                },
                {
                    "id": "2021-08-06T03:50:10.630601-web-43817be8-fe5c-4336-99ad-3fe5cb0f46ba",
                    "timestamp": "2021-08-06T03:48:51.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "web",
                    "decoyName": "keywordsswft54"
                },
                {
                    "id": "2021-08-06T03:50:07.179258-web-1316c43f-bf26-45a8-bcaf-40d08e5428fa",
                    "timestamp": "2021-08-06T03:48:47.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "web",
                    "decoyName": "keywordsswft54"
                },
                {
                    "id": "2021-08-06T03:50:07.127502-network-1528bc52-951c-4e41-a2e5-b302e69022ea",
                    "timestamp": "2021-08-06T03:48:47.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "network",
                    "decoyName": "keywordsswft54"
                },
                {
                    "id": "2021-08-06T03:50:03.081026-network-d78dcf0a-caf7-4543-8741-56481fddf189",
                    "timestamp": "2021-08-06T03:48:42.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "network",
                    "decoyName": "keywordsswft54"
                },
                {
                    "id": "2021-08-06T03:50:01.807229-web-a3cb5e15-fb78-471a-b23d-24547f6abe94",
                    "timestamp": "2021-08-06T03:48:42.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "web",
                    "decoyName": "keywordsswft54"
                },
                {
                    "id": "2021-08-06T03:49:58.662956-network-74529161-b5d9-479c-a703-54bf6bd36604",
                    "timestamp": "2021-08-06T03:48:39.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "network",
                    "decoyName": "keywordsswft54"
                },
                {
                    "id": "2021-08-06T03:49:58.533424-web-5f5ce2b8-69e0-45ce-b62c-6c718a0f271a",
                    "timestamp": "2021-08-06T03:48:39.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "web",
                    "decoyName": "keywordsswft54"
                },
                {
                    "id": "2021-08-06T03:49:54.454599-web-06d9b01f-d5da-460e-bafb-09ff6b0b19a7",
                    "timestamp": "2021-08-06T03:48:35.000Z",
                    "attackerId": "10.10.6.9",
                    "attackerName": "10.10.6.9",
                    "attackerIp": "10.10.6.9",
                    "type": "web",
                    "decoyName": "keywordsswft54"
                }
            ]
        });
    });
});