
import { useNavigate } from "react-router-dom";

function setNameToDisplay(name){

    const myArray = name.split(" ");
    let returnName = "moieinoeoignweogeoighewuneoivn";

    for (let i = 0; i < myArray.length; i++) {
        if (returnName.length > myArray[i].length){
            returnName = myArray[i];
        }
    }
    return returnName;
}

function OrderService(card) {
    console.log("info", card);
    return card;
}


export { 
    setNameToDisplay,
    OrderService
 };