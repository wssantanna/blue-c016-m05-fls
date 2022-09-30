interface IUser {
    fistname: string,
    lastname: string
}

type UserResponse = IUser | null;

class AccountService {

    static async GetUser(): Promise<UserResponse> {
        const requireCurrentUser = await fetch('/api/account/user');
        const currentUser: UserResponse = await requireCurrentUser.json();

        return currentUser;
    }

    static async DeleteUser(idUser: number): Promise<boolean> {
        const requireUserDelete = await fetch(`/api/account/user/${idUser}`, { method: 'DELETE' });
        const userHasBeenDeleted: boolean = requireUserDelete.ok;

        return userHasBeenDeleted;
    }

    static async UpdateUser(idUser: number, updatedUser: IUser): Promise<boolean> {
        const requireUserUpdate = await fetch(`/api/account/user/${idUser}`, {
            method: 'PUT',
            body: JSON.stringify(updatedUser)
        });
        const userHasBeenUpdated: boolean = requireUserUpdate.ok;

        return userHasBeenUpdated;
    }

}

export default AccountService;