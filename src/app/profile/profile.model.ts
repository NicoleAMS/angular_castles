import { Castle } from '../castles/castle.model';

export class Profile {
    public firstName: string;
    public lastName: string;
    public avatar: string;
    public userKey: string;
    // public email: string;
    // public favouriteCastles: Castle[];

    constructor(
      firstName: string,
      lastName: string,
      avatar: string,
      userKey: string
      // email: string,
      // favouriteCastles: Castle[]
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.avatar = avatar;
      this.userKey = userKey;
      // this.email = email;
      // this.favouriteCastles = favouriteCastles;
    }
}
