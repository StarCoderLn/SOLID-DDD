import { Event } from '@node-ts/bus-messages';
import { Uuid } from '@node-ts/ddd-types';

export class UserPasswordChanged extends Event {
    static readonly NAME = 'star/account/user-password-changed';
    $name = UserPasswordChanged.NAME;
    $version = 0;   // 版本

    constructor(readonly userId: Uuid, readonly passwordChangedAt: Date) {
        super();
    }
}