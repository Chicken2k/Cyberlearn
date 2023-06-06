import { layChiTietDatVe } from "../../services/QuanLyDatVeServices";
import { SET_CHI_TIET_PHONG_VE } from "./Types/QuanLyDatVeType";


export const QuanLyDatVeAction = (maLichChieu) =>{
    return async (dispatch)=>{
        try{
            const result = await layChiTietDatVe(maLichChieu)
            if(result.data.statusCode === 200)
            {
                dispatch({
                    type:SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe:result.data.content
                })
               
            }
        }
        catch(errors){
            console.log('error', errors);
        }
    }

}