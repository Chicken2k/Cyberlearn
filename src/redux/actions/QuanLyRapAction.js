import { layDanhSachHeThongRap, layThongTinLichChieuPhim } from "../../services/QuanLyRapService"
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "./Types/QuayLyRapType"

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
export const layThongTinLichChieuPhimAction = (id)=>{
    return async (dispatch) =>{
        try{
            const result =await layThongTinLichChieuPhim(id)
            dispatch({
                type:SET_CHI_TIET_PHIM,
                filmDetail:result.data.content
            })
        }
        catch(errors){
            console.log('error', errors.response?.data);
        }
    }
}