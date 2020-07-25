import { Injectable } from '@nestjs/common';

export type User = any;


@Injectable()
export class UserService {
    private readonly users: User[];

    constructor() {
        this.users = [
            {
                userId: 1,
                username: 'john',
                password: 'changeme',
                consumerKey: '1',
                consumerSecret: '1'
            },
            {
                userId: 2,
                username: 'chris',
                password: 'secret',
                consumerKey: '2',
                consumerSecret: '2'
            },
            {
                userId: 3,
                username: 'maria',
                password: 'guess',
                consumerKey: '3',
                consumerSecret: '3'
            },
        ];
    }

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
