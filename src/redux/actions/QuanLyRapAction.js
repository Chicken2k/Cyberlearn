import { layDanhSachHeThongRap } from "../../services/QuanLyRapService"
import { SET_HE_THONG_RAP_CHIEU } from "./Types/QuayLyRapType"

export const layDanhSachHeThongRapAction = ()=>{
    return async (dispatch) =>{
        try{
            const result = await layDanhSachHeThongRap()
            if(result.status === 200 ){
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu:result.data.content,
                })
            }          
        }
        catch(errors) {
        console.log('error', errors.response?.data
        );
    }
}
}