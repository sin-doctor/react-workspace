/*
package.json 에서
    dependencies" 내부에
        "axios" 가 작성되어있다면
            더이상 npm i axios 를 하지 않아도 됨
            설치가 되어있기 때문에 my-app 폴더 내에서
            언제든지 axios 를 사용할 수 있음
*/

import {useEffect, useState} from "react";
import axios from "axios";

const APIDog = () => {
    const [dog, setDog] = useState("");

    // axios 형식으로
    // https://api.thedogapi.com/v1/images/search
    // 최초 1회 강아지사진 랜덤 출력 후
    // 강아지 사진 새로고침 버튼을 클릭했을 때
    // 새로운 강아지 사진이 보일 수 있도록 코드 설정


    const dogBtn = () => {
        axios
            .get("https://api.thedogapi.com/v1/images/search")
            .then(
                (res) => {
                    setDog(res.data[0].url);
                }
            )
    }


    useEffect(() => {
        dogBtn();
    }, []);
    return(
        <>
            <h1>랜덤 강아지 사진</h1>
            {dog ? <img src={dog} /> : <p>로딩중</p>}
            <button onClick={dogBtn}>강아지 사진 새로고침</button>
        </>
    )

}


const APIRandomJoke = () => {
    const [setup, setSetup] = useState("");
    const [delivery, setDelivery] = useState("");
    useEffect(() => {

        //  jokeapi = []로 이루어진 배열 형태가아님!
        // category , setup , delivery
        axios
            .get("https://v2.jokeapi.dev/joke/Any")
            .then(
                (res) => {
                    setSetup(res.data.setup)
                }
            )
    }, []);
    return(
        <>
            <h1>랜덤으로 농담 설정하기</h1>
            {setup ? <p>{setup}</p> : <p>로딩중</p>}
            {delivery ? <p>delivery</p> : <p>로딩중</p>}
        </>
    )
}

const PracticeUseEffectAxios = () => {
    return(
        <>
            {/*<APIDog />*/}
            <APIRandomJoke />
        </>
    )
}

export  default  PracticeUseEffectAxios;