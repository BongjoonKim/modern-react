import {atom} from "recoil";

export const recoilState = {
  variable: atom<any>({
    key : "variable",
    default : 0
  }),
  
  spaceId : atom<any>({
    key : "spaceId",
    default : 0,
  })
}