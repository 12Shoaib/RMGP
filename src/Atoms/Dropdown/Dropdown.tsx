import { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io";
import style from "./dropdown.module.css"

interface DropdownProps{
  options:string[]
  name :string
  setDropdownCaptured: (details:any) => void
  initialOption: "string"
}


const Dropdown:React.FC<DropdownProps> = ({ options, name, setDropdownCaptured , initialOption }) => {
  const [isFocused , setIsFocused] = useState<boolean>(false)
  const [isDropdownMenu, setIsDropdownMenu] = useState(false)
  const [isSelected, setIsSelected] = useState(initialOption)
  const classaName = isFocused ? style.highlighter : style.dropdown

  console.log(isFocused)

  const handleSelect = (optionSelected: any) => {
    setIsSelected(optionSelected)
    setIsDropdownMenu(false)
    setIsFocused(false)
    setDropdownCaptured((prev: any) => ([
      ...prev,
      {
        [name]: optionSelected
      }
    ]))
  }
  function handleCustomFocus(){
    setIsDropdownMenu(!isDropdownMenu)
    setIsFocused(!isFocused)
  }

  return (
    <div className={style.dropdown_container}>

      <div className={classaName} onClick={handleCustomFocus }>
        {/* <h6 className={style.description}>Description</h6> */}
        {isSelected}
        <IoMdArrowDropdown className={style.dropdown_icon} />
      </div>
      {isDropdownMenu && <ul className={style.dropdown_options}>
        {
          isDropdownMenu &&
          options.map((element: string, i: number) => {
            return <li onClick={() => handleSelect(element)} className={style.option} key={i}>
              {element}
            </li>
          })
        }
      </ul>}
    </div>
  )
}

export default Dropdown