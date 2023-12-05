import { useRecoilValue } from "recoil"
import { inputCaptured, dropdownUserInputs } from "../Recoil/Recoil"
import style from "./previewpage.module.css"

export default function Previewpage() {
  const data = useRecoilValue(inputCaptured)
  const dropdownData = useRecoilValue(dropdownUserInputs)
  const columns = dropdownData.length > 0 ? Object.keys(dropdownData[0]) : [];
  console.warn(dropdownData)
  return (
    <div className={style.container}>
      <div className={style.pagePreview}>
        <h1 className={style.heading}>ApexPlus  Technologies</h1>
        <p className={style.sub_heading_one}>B-70/A A.A.P.I.E Balanagar Hyderabad 500037</p>
        <p className={style.sub_heading_two}>Ph No: 040-23875552, 8099337510</p>
        <p className={style.sub_heading_three}>Returnbale Material Gate Pass</p>

        <div className={style.content}>
          <h6 className={style.side_heading}>Consignee: <p className={style.text}>{data['consigneeName']} </p> </h6>
          <p className={style.location}>{data['location']}</p>
          <h6 className={style.side_heading}>Date : <p className={style.text}>{data['date']} </p> </h6>
          <h6 className={style.side_heading}>Pass No : <p className={style.text}>{data['passNo']} </p> </h6>
          <h6 className={style.side_heading}>Purpose Of Issue : <p className={style.text}>{data['purpose']} </p> </h6>
        </div>

        <table>
          <thead>
            <tr>
            <th>S.NO </th>
            <th>ITEM NAME</th>
            <th>DESCRIPTION </th>
            <th>QTY </th>
            </tr>
          </thead>
          <tbody>
            {
              dropdownData.map((data, rowIndex) => (
                <tr key={rowIndex}>
                  <th>{rowIndex+1}</th>
                  {columns.map((column, columnIndex) => (
                  <td key={columnIndex}>{data[column]}</td>
                    ))}
                </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}
