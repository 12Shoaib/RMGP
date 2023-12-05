import { FiCheckCircle } from "react-icons/fi";
import { useRecoilValue } from "recoil"
import { inputCaptured } from "../Recoil/Recoil"
import style from "./sidenav.module.css"


const list = ['Consignee', 'Location', 'Date', 'Pass No', 'Purpose Of Issue', 'Description', 'Items']


export default function Sidenav() {
    const userInputs = useRecoilValue(inputCaptured)

    return (
        <div className={style.container}>
            <ul className={style.progress_group}>
                {
                    list.map((listName:string , i:number) =>  <li className={style.list}>
                    <div className={style.circle}> {userInputs[`${i}`] ? <FiCheckCircle className={style.icon} /> : null } </div>
                    {userInputs[`${i}`] ?  <span className={style.line_highlighter}></span> : <span className={style.line}></span>  }
                    
                    {listName}</li>)
                }
            </ul>
        </div>
    )
}

