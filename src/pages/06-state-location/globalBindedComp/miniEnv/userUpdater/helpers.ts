import { IUserInfo } from "../../userContext/iUserContextValues";

const users: IUserInfo[] = [
  {
    id: '8e3bc1eb-6b21-4b16-bc3b-79de800d7831',
    name: 'Raul Gil'
  },
  {
    id: 'ece84e35-cc46-4ed6-8018-ec9c5cce6fef',
    name: 'Fausto Silva'
  },
  {
    id: '1076f58d-be7b-4ed2-881d-8c0c1d5ae2a5',
    name: 'Galvão Bueno'
  },
]

export function getUser(): IUserInfo {
  const index = Math.floor(Math.random() * users.length)
  return users[index]
}