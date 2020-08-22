import { Event } from '@node-ts/bus-messages';
import { Uuid } from '@node-ts/ddd-types';

export class UserRegistered extends Event {
    static readonly NAME = 'star/account/user-registered';
    $name = UserRegistered.NAME;
    $version = 0;   // 版本

    constructor(readonly userId: Uuid, readonly email: string, readonly isEnabled: boolean) {
        super();
    }
}