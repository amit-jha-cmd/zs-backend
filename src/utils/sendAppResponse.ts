import {Response} from "express";
import {StatusCodes} from "http-status-codes";

function sendAppResponse<T = null>(res: Response, data: T, status: number = StatusCodes.OK, message: string = "") {
    const response = { status, message, data };
    res.status(status).json(response);
}

export default sendAppResponse;