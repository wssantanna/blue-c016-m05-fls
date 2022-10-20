import { ServerAccount } from './config';

interface IUser {
    fistname: string,
    lastname: string
}

type UserResponse = IUser | null;

class AccountService {

    static async GetUser(): Promise<any> {
        const currentUser: any = await ServerAccount.get("/api/account/user");

        return currentUser.data;
    }

    static async DeleteUser(idUser: number): Promise<boolean> {
        const requireUserDelete = await ServerAccount.delete(`/api/account/user/${idUser}`);
        const userHasBeenDeleted: boolean = requireUserDelete.status == 200;

        return userHasBeenDeleted;
    }

    static async UpdateUser(idUser: number, updatedUser: any): Promise<boolean> {
        const requireUserUpdate = await ServerAccount.delete(`/api/account/user/${idUser}`, updatedUser);
        const userHasBeenUpdated: boolean = requireUserUpdate.status == 200;

        return userHasBeenUpdated;
    }

}

export default AccountService;