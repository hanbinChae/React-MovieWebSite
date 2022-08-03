import { useEffect } from "react";
import {useParams} from "react-router-dom"; /* useParam : url 상에서 변경된 값 반환*/

function Detail(){
    const {id} = useParams();
    const getMovie= async() =>{
        const json = await( 
            await fetch(`https:yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
        console.log(json)
    };
    useEffect(() =>{
        getMovie();
    },[]);
    return <h1>Detail</h1>
}

export default Detail;