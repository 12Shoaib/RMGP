import { atom } from "recoil";

export const inputCaptured = atom({
    key:"test",
    default : {
    }
})

export const dropdownUserInputs = atom({
    key:'dropdown',
    default: []
})