import { useState } from "react";
import { FaCheckCircle  } from "react-icons/fa";
import style from "./input.module.css"

interface InputProps {
  label: string
  placeholder: string
  name:string
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (i:number) => void
  isCheck: {}
  index: number
}

export default function Input(props: InputProps) {
  const [isFocused , setIsFocused] = useState<boolean>(false)
  const className = isFocused ?  style.input_container_focused : style.input_container 
  const { label, placeholder , name , onChange , handleBlur, isCheck , index} = props

  function handleCustomBlur() {
    setIsFocused(false)
  }
  function handleCustomFocus(){
    setIsFocused(true)
  }
  return (
    <div className={style.container}>
      <label htmlFor="input" className={style.label}>{label} </label>
      <div onFocus={handleCustomFocus} onBlur={handleCustomBlur} className={className}>
      <input onBlur={handleBlur} onChange={onChange} name={name} id="input" className={style.input_box} placeholder={placeholder} type="text" />
      { isCheck[index] && <FaCheckCircle className={style.icon} /> }
      </div>
    </div>
  )
}

