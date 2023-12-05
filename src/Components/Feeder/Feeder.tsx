import { useRecoilState } from "recoil"
import { data, itemsDropdown } from "../Constants"
import { inputCaptured, dropdownUserInputs } from "../Recoil/Recoil"
import Input from "../../Atoms/Input/Input"
import style from "./feeder.module.css"
import { useState } from "react"
import Dropdown from "../../Atoms/Dropdown/Dropdown"

export default function Feeder() {
  const [userInputs, setUserInputs] = useRecoilState<any>(inputCaptured)
  const [isCheck , setIsCheck] = useState<any>({})
  const [dropdownCaptured , setDropdownCaptured] = useRecoilState(dropdownUserInputs)

  const handleUserInputs = (event: React.ChangeEvent<HTMLInputElement> , i:number): void => {
    const { value, name } = event.target
    setUserInputs((prev: any) => ({
      ...prev,
      [name]: value,
      [i] : value === "" ? false : true
    }))
  }

  const handleBlur = (i:number) => {
    setIsCheck((prev:any) => ({
      ...prev,
      [i]: userInputs[`${i}`] ? true : false
    }))
  }
  console.log(dropdownCaptured)
  return (
    <div className={style.parent_wrapper}>
    <h1 className={style.heading}>Returnable Material Gate Pass</h1>
    <div className={style.parent_container}>
      {
        data.map((value:any,i:number) => {
          return <Input isCheck={isCheck} index={i} handleBlur={() => handleBlur(i)} onChange={(e) => handleUserInputs(e,i)} name={value.name} label={value.label} placeholder={value.placeholder} />
        })
      }
    <Dropdown  options={itemsDropdown} name={"ITEMS"} setDropdownCaptured={setDropdownCaptured}  initialOption={"Select The Item"} />  
    </div>
    </div>
  )
}
