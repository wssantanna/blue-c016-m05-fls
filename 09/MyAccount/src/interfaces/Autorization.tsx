interface IUser {
    id: number | string,
    fullname: string,
}

export default interface IAuthorization {
    token: string,
    user?: IUser
}