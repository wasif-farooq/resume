import {HttpException, HttpStatus} from "@nestjs/common";

export class AlreadyExistsException extends HttpException {
    constructor() {
        super('Already Exists', HttpStatus.BAD_REQUEST);
    }
}