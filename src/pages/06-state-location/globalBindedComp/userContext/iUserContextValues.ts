export interface IUserContextValues {
  user?: IUserInfo
  update: (user: IUserInfo) => void
}

export interface IUserInfo {
  id: string
  name: string
}