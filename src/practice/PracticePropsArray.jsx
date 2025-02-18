const User = ({users}) => {
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {/* map  () 형태로 데이터 불러오기     ㅇㅇㅇ 님은 ㅁㅁ 세 입니다.    */}
                {users.map((user, index) => (
                    <li key={index}>{user.name} 님은 {user.age}세 입니다.</li>
                ))
                };
            </ul>
        </div>
    );
};
const Product = ({products}) => {
    return (
        <div>
            <h2>제품 목록</h2>
            <ul>
                {/* map  {} 형태로 데이터 불러오기     제품명 - ㅇㅇㅇ ,   제품가격 - ㅁㅁㅁ    */}
                {products.map((product, index) => (
                    <li key={index}>제품명 - {product.name},제품가격 - {product.price}</li>
                ))
                }
            </ul>
        </div>
    );
};
const Score = ({scores}) => {
    return (
        <div>
            <h2>학생 점수 목록</h2>
            <ul>
                {/*1. 특정리스트를 가져와서 .순회하여 표시(  ( key, index   )    =>        (     key 나 index 를 이용해서 값 표기   )     )*/}
                {/*2. 특정리스트를 가져와서 .순회하여 표시(  ( key          )    => {return(     key          를 이용해서 값 표기  )}     )*/}
                {/*3. 특정리스트를 가져와서 .순회하여 표시(  ( index        )    =>        (            index 를 이용해서 값 표기   )     )*/}
                {scores.map((score, index) => (<li key={index}>{score.name} / {score.score}</li>))}
            </ul>
        </div>
    );
};
const Order = ({orders}) => {
    return (
        <div>
            <h2>주문 내역</h2>
            <ul>
                {orders.map((order, index) => {
                        // 만일 작성해야하는 javascript 가 존재한다면 javascript 코드를 작성하는 공간
                        return (
                            <li key={index}>주문할 메뉴이름 : {order.item}, 수량 : {order.quantity} </li>
                        )
                    }
                )}
            </ul>
        </div>
    );
};
const Book = ({books}) => {
    return (
        <div>
            <h2>도서 목록</h2>
            <ul>
                {books.map((book, index) => (<li key={index}>{book.title} / {book.author}</li>))}
            </ul>
        </div>
    );
};
const ParentOne = () => {
    // 부모 컴포넌트에서 전달할 데이터 작성
    const userList = [
        {name: "가나다", age: 5},
        {name: "마바사", age: 15},
        {name: "아자차", age: 25}
    ];
    const productList = [
        {name: "노트북", price: 1200000},
        {name: "스마트폰", price: 800000},
        {name: "태블릿", price: 600000}
    ];
    const scoreList = [
        {name: "김영희", score: 95},
        {name: "이철수", score: 88},
        {name: "박민준", score: 76}
    ];
    const orderList = [
        {item: "커피", quantity: 2},
        {item: "샌드위치", quantity: 1},
        {item: "케이크", quantity: 3}
    ];
    const bookList = [
        {title: "자바스크립트 완벽 가이드", author: "David Flanagan"},
        {title: "리액트 프로그래밍", author: "김민수"},
        {title: "모던 프론트엔드 개발", author: "이정환"}
    ];
    return (
        <>
            {/* 각 데이터 자식 컴포넌트에 각각 전달 */}
            <User users={userList}/>
            <Product products={productList}/>
            <Score scores={scoreList}/>
            <Order orders={orderList}/>
            <Book books={bookList}/>
        </>
    )
}


const MusicPlay = ({songs}) => {
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                {/*   삼항연산자 이용해서 null값이나 가져오지 못하는 데이터를 직접적으로 표시           */}
                제품명 : {songs.map((song, index) => (
                <li key={index}>
                    {song.title ? song.title : "알 수 없음"} - {song.artist}</li>
            ))}
            </ul>
        </div>
    );
};
// [] = 배열  {} = 배열 아님
// songs 에서 작성된 목록에서 값을 가져오는 것

// defaultProps 부모에게서 특정 값을 가져오지 못할 때를 대비해서 설정
// defaultProps 를 어떻게 작성해야할지 모르겠다면
// restController로 보여지는 json 형식대로 작성
// 부모에서 상태를 전달할 때는 props.songs 자체가 undefined 상태일 때 적용
// 상태 관리 부모 컴포넌트 이외 외부 작성했을 경우 많이 불러옴
MusicPlay.defaultProps = {
    songs: [
        {
            title: "알수 없음",
            artist: "아티스트 미상"
        }
    ]
}

const Todo = ({tasks}) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {tasks.map((todo, index) => {
                    // done = boolean = true , false 값
                    // true false 는  화면에 보이지 않으므로
                    // 화면에 보여지기 위해서는 값 변환을 해서 넣어줘야함
                    //  todo.done = true = 완료     todo.done = false = 미완료 표기
                    return (
                        <li key={index}>
                            {todo.task ?
                                todo.task :
                                "할 일이 없습니다."
                            } -
                            {todo.done ?
                                "완료" :
                                "미완료"
                            }
                        </li>)
                })}
            </ul>
        </div>
    );
};
const TeamMember = ({members}) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {members.map((member, index) => {
                    // javascript 작성하는 공간
                    // 예를 들어 가격을 표시할 때 DB에 작성된 가격에 한국기준 , 를 표기하거나 와 같은 설정
                    return (
                        <li key={index}>
                            {member.name ?
                                member.name :
                                "등록된 팀원이 없습니다."
                            } -
                            {member.role}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};
const ShoppingCart = ({cartItems}) => {
    return (
        <div>
            <h2>🛒 쇼핑 장바구니</h2>
            <ul>
                {cartItems.map(
                    (cartItem, index) =>
                        (
                            <li key={index}>
                                {cartItem.item} - {cartItem.quantity}
                            </li>
                        )
                )}
            </ul>
        </div>
    );
};

const EventSchedule = ({events}) => {
    return (
        <div>
            <h2>📅 행사 일정</h2>
            <ul>
                {events.map((event, index) => {
                    return (
                        <li key={index}>행사명 : {event.name} 행사일정 : {event.date}</li>
                    )
                })}
            </ul>
        </div>
    );
};
const ParentTwo = () => {
    // 추후 DB로 값 전달받거나 전달할 상태 작성
    // javascript 정규식 과 같은 코드
    // javascript 공간
    const songs = [
        {title: "Attention", artist: "Charlie Puth"},
        {title: "Shape of You", artist: "Ed Sheeran"},
        {title: "Dynamite", artist: "BTS"},
        {artist: "Black Pink"}
    ];
    const tasks = [
        {task: "React 공부하기", done: false},
        {task: "운동하기", done: true},
        {task: "책 읽기", done: false},
        {done: false}
    ];
    const teamMembers = [
        {name: "김철수", role: "프론트엔드 개발자"},
        {name: "박영희", role: "백엔드 개발자"},
        {name: "이민호", role: "디자이너"},
        {role: "시스템 개발자"}
    ];
    const cartItemsList = [
        {item: "노트북", quantity: 1},
        {item: "무선 마우스", quantity: 2},
        {item: "키보드", quantity: 1}
    ];
    const listEvent = [
        {name: "React 컨퍼런스", date: "2025-03-10"},
        {name: "개발자 밋업", date: "2025-04-22"},
        {name: "해커톤", date: "2025-05-15"}
    ];
    return (
        <div>
            <MusicPlay songs={songs}/>
            <Todo tasks={tasks}/>
            <TeamMember members={teamMembers}/>
            <ShoppingCart cartItems={cartItemsList}/>
            <EventSchedule events={listEvent}/>
        </div>
    )
}
const PracticePropsArray = () => {

    return (
        <div>
            {/*
            배열 형태의 데이터가 들어갈 때
            map 사용
            map 에서 배열 형태의 데이터가 존재하지 않으면 에러 발생
            Cannot read Properties of undefined (reading 'map') 발생
            주로 데이터 찾지 못할 때 발생하므로
            defaultProps 작성해줌으로써 에러 방지
            <User/>
            <ParentOne/>
            */}

            <ParentTwo/>
        </div>
    )

}
export default PracticePropsArray;