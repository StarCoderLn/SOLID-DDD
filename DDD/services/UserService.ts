import { AggregateRoot } from '@node-ts/ddd';
import { AggregateRootProperties, Uuid } from '@node-ts/ddd-types';
import { provide } from 'inversify-binding-decorators';
import { UserRegistered, UserDisabled } from './users';
import TAGS from '../constant/tags';

export interface UserProperties extends AggregateRootProperties {
    isEnabled: boolean,
    email: string,
    passwordChangedAt: Date | undefined
}

// @provide(TAGS.UserService)
export class UserService extends AggregateRoot implements UserProperties {
    id: string;
    version: number;
    isEnabled: boolean;
    email: string;
    passwordChangedAt: Date | undefined;

    static register(id: Uuid, email: string): UserService {
        const userRegistered = new UserRegistered(id, email, true);
        const user = new UserService(id);
        user.when(userRegistered);
        return user;
    }

    disable(): void {
        const userDisabled = new UserDisabled(this.id, false);
        super.when(userDisabled);
    }

    protected whenUserRegistered(event: UserRegistered) {
        this.email = event.email;
        this.isEnabled = event.isEnabled;
    }

    protected whenUserDisabled(event: UserDisabled) {
        this.isEnabled = event.isEnabled;
    }
}
