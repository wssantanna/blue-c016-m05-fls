interface IUser {
    fistname: string,
    lastname: string
}

type UserResponse = IUser | null;

class AccountService {

    static async GetUser(token: any): Promise<UserResponse> {
        const requireCurrentUser = await fetch('/api/account/user', {
            method: 'GET',
            headers: {
                "Authorization": JSON.stringify(token)
            }
        });
        const currentUser: UserResponse = await requireCurrentUser.json();

        return currentUser;
    }

    static async DeleteUser(idUser: number, token: any): Promise<boolean> {
        const requireUserDelete = await fetch(`/api/account/user/${idUser}`, {
            method: 'DELETE',
            headers: {
                "Authorization": JSON.stringify(token)
            }
        });
        const userHasBeenDeleted: boolean = requireUserDelete.ok;

        return userHasBeenDeleted;
    }

    static async UpdateUser(idUser: number, updatedUser: IUser, token: any): Promise<boolean> {
        const requireUserUpdate = await fetch(`/api/account/user/${idUser}`, {
            method: 'PUT',
            body: JSON.stringify(updatedUser),
            headers: {
                "Authorization": JSON.stringify(token)
            }
        });
        const userHasBeenUpdated: boolean = requireUserUpdate.ok;

        return userHasBeenUpdated;
    }

}

export default AccountService;