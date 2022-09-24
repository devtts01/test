import { useEffect, useRef, useState } from "react";
import "./dropdownTextField.scss";
import TextFieldShopCoin from "../../components/textField/textFieldShopCoin";
import CheckBoxShopCoin from "../checkboxShopCoin/checkboxShopCoin";
import SearchIcon from "../../assets/icon/MagnifyingGlass.svg"
import ShopCoinTable, { ICoinTableColumn } from "../table/shopCoinTable";
import ButtonWithPopup from "../buttonWithPopup/ButtonWithPopup";
import ConfirmDialog from "../dialog/confirm-dialog/ConfirmDialog";
import useDialog from "../../shared/hooks/useDialog";
import IconEdit from "../../../assets/icon/PencilSimple.svg";
import DotsThree from "../../../assets/icon/DotsThree.svg";
import Trash from "../../assets/icon/Trash.svg";
import ShopCoinButton from "../shopCoinButton/shopCoinButton";
interface dropDownField {
    setValueState: any,
    dataSuggest: any[];

}

function DropDownTextField(props: dropDownField) {
    const [valueField, setValueField] = useState('');
    const [dataTable, setDataTable] = useState([] as any);
    const { openDialog, showLoading, hideLoading, closeDialog } = useDialog();
    let selectedData: any[] = [];
    const [dataChecked, setDataChecked] = useState([] as any)
    const [clickedSearchChecked,setClickedSearchChecked]= useState(false)
    // const handleField = () =>{
    //    if(valueField.length>0) {
    //     let tempData = props.dataSuggest;
    //     tempData =tempData.map((data:any)=> data.name.includes(valueField))
    //     setDataTable(tempData)
    //    }
    // }
    let tempData = props.dataSuggest;
    if (valueField.length > 0) {
        tempData = tempData.filter((data: any) => data.name.includes(valueField))
        // setDataTable(tempData)
    } 
    if (dataChecked.length > 0) {
        props.setValueState(dataChecked)
    } 
    const [isOpen, setIsOpen] = useState(false);

    const ref = useRef() as any;

    const clickOutSide = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", clickOutSide);

        return () => document.removeEventListener("click", clickOutSide);
    }, [ref]);


    return (
        <div className="suggest-textField-container" ref={ref} onClick={()=>{setIsOpen(true)}} >
            <TextFieldShopCoin placeholder="Search and select user to blacklist" iconBefore={SearchIcon} valueStateFunction={setValueField} ></TextFieldShopCoin>
            {(valueField.length > 0 && isOpen) && (
                <div className="data-dropdown"  >
                    { 
                        //     selectedData.push(dataChecked)
                        //     props.setValueState(selectedData)
                        //     console.log(dataChecked);
                        // } 
                        // else { selectedData=selectedData.filter((data:any)=>!data.name.includes(dataChecked.name))}

                        <CheckBoxShopCoin dataInput={tempData} isChecked={false} checkState={setDataChecked}></CheckBoxShopCoin>
                    }
                </div>
            )
            }
        </div>
    )
}
export default DropDownTextField;
