
import { getListofTheaterSystems, getMovieShowtimeInformation } from "../../services/CinemaManagerService"
import { SET_DETAILS_MOVIE, SET_CINEMA_SYSTEM } from "./Types/QuayLyRapType"

export const getListofCinemaSystemAction = ()=>{
    return async (dispatch) =>{
        try{
            const result = await getListofTheaterSystems()

            if(result.status === 200 ){
                dispatch({
                    type: SET_CINEMA_SYSTEM,
                    CinemaSystem:result.data.content,
                })
            }          
        }
        catch(errors) {
        console.log('error', errors.response?.data
        );
    }
}
}
export const GetMovieShowtimeInformationAction = (id)=>{
    return async (dispatch) =>{
        try{
            const result =await getMovieShowtimeInformation(id)
            dispatch({
                type:SET_DETAILS_MOVIE,
                filmDetail:result.data.content
            })
        }
        catch(errors){
            console.log('error', errors.response?.data);
        }
    }
}