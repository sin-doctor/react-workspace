import {useEffect, useState} from "react";
import axios from "axios";


const APIDog = () => {
    // axios 형식으로
    //
    // 최초 1회 강아지사진 랜덤 출력 후
    // 강아지 사진 새로고침 버튼을 클릭햇을 때
    // 새로운 강아지 사진이 보일수 있도록 코드 설정

    const [dog, setDog] = useState("");


        const dogBtn = () => {
            axios
                .get("https://api.thedogapi.com/v1/images/search")
                .then(
                    (res) => {
                        setDog(res.data[0].url);
                    }
                )
                .catch(
                    () => {
                        alert("API 에서 데이터를 가져올 수 없습니다. 백엔드를 확인하세요.");
                    }
                );
        }
        useEffect(() => {
            dogBtn();
        }, []);

        return (
            <div>
                <h1>랜덤 강아지 사진</h1>
                {dog ? <img src={dog}/> : <p> 로딩중 </p>}
                <button onClick={dogBtn}>새로운 강아지 보기</button>
            </div>
        )
}

const APIRandomJoke = () => {
    const [setup, setSetup] = useState("");
    const [delivery, setDelivery] = useState("");
    useEffect(() => {
        axios
            .get('https://v2.jokeapi.dev/joke/Any')
        .then(
            (res) => {
                setSetup(res.data.setup);
            }
        )
    },[]);
    return(
        <div>

        </div>
    )

}

const APIUser = () => {
    const [userInfo, setUserInfo] = useState(null);

    const fetchUserInfo = async () => {
        try {
            const response = await axios.get("https://randomuser.me/api/");
            const user = response.data.results[0];
            setUserInfo({
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                picture: user.picture,
            });
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <div>
            {userInfo ? (
                <div>
                    <img src={userInfo.picture.medium} alt="User" />
                    <h2>{userInfo.name}</h2>
                    <p>{userInfo.email}</p>
                    <button onClick={fetchUserInfo}>새로운 유저 정보 가져오기</button>
                </div>
            ) : (
                <p>로딩중</p>
            )}
        </div>
    );
};

const PracticeUseEffectAxios = () => {
    return (
        <div>
            <APIDog />
            <APIRandomJoke />
            <APIUser />
        </div>
    )
}

export default PracticeUseEffectAxios;