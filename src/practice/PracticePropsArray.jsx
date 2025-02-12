import React from "react";


const User = ({ users }) => {
    return (
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{`"${user.name}" 님은 ${user.age}세 입니다.`}</li>
                ))}
            </ul>
        </div>
    );
};

const Product = ({ products }) => {
    return (
        <div>
            <h2>제품 목록</h2>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{`제품명 - ${product.name}, 제품가격 - ${product.price.toLocaleString()}원`}</li>
                ))}
            </ul>
        </div>
    );
};

const Score = ({ scores }) => {
    return (
        <div>
            <h2>학생 점수 목록</h2>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>{`${score.name} 학생의 점수: ${score.score}점`}</li>
                ))}
            </ul>
        </div>
    );
};

const Order = ({ orders }) => {
    return (
        <div>
            <h2>주문 내역</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>{`${order.item} - ${order.quantity}개`}</li>
                ))}
            </ul>
        </div>
    );
};

const Book = ({ books }) => {
    return (
        <div>
            <h2>도서 목록</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{`책 제목: "${book.title}", 저자: ${book.author}`}</li>
                ))}
            </ul>
        </div>
    );
};

const MusicPlay = ({ songs }) => {
    return (
        <div>
            <h2>🎵 음악 재생 목록</h2>
            <ul>
                {songs.map((song, index) => (
                    <li key={index}>
                        {song.title ? song.title : "알 수 없음"} - {song.artist ? song.artist : "아티스트 미상"}
                    </li>
                ))}
            </ul>
        </div>
    );
};
MusicPlay.defaultProps = {
    songs:[
        {
            title:"알 수 없음",
            artist: "아티스트 미상"
        }
    ]
}

const Tod = ({ tasks }) => {
    return (
        <div>
            <h2>✅ 할 일 목록</h2>
            <ul>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <li key={index}>{`할 일: "${task.task || '정보 없음'}"`}</li>
                    ))
                ) : (
                    <p>할 일이 없습니다.</p>
                )}
            </ul>
        </div>
    );
};

const TeamMembers = ({ members }) => {
    return (
        <div>
            <h2>👥 팀원 목록</h2>
            <ul>
                {members.map((member, index) => (
                    <li key={index}>{`이름: "${member.name || '정보 없음'}", 역할: ${member.role || '정보 없음'}`}</li>
                ))}
            </ul>
        </div>
    );
};

const ShoppingCart = ({ cartItems }) => {
    return (
        <div>
            <h2>🛒 쇼핑 장바구니</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>{`상품: "${item.item}", 수량: ${item.quantity}개`}</li>
                ))}
            </ul>
        </div>
    );
};

const EventSchedule = ({ events }) => {
    return (
        <div>
            <h2>📅 행사 일정</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>{`행사: "${event.name}", 날짜: ${event.date}`}</li>
                ))}
            </ul>
        </div>
    );
};

const Parent = () => {
    const userList = [
        { name: "가나다", age: 5 },
        { name: "마바사", age: 15 },
        { name: "아자차", age: 25 }
    ];

    const productList = [
        { name: "노트북", price: 1200000 },
        { name: "스마트폰", price: 800000 },
        { name: "태블릿", price: 600000 }
    ];

    const scoreList = [
        { name: "김영희", score: 95 },
        { name: "이철수", score: 88 },
        { name: "박민준", score: 76 }
    ];

    const orderList = [
        { item: "커피", quantity: 2 },
        { item: "샌드위치", quantity: 1 },
        { item: "케이크", quantity: 3 }
    ];

    const bookList = [
        { title: "자바스크립트 완벽 가이드", author: "David Flanagan" },
        { title: "리액트 프로그래밍", author: "김민수" },
        { title: "모던 프론트엔드 개발", author: "이정환" }
    ];

    const songs = [
        { title: "Attention", artist: "Charlie Puth" },
        { title: "Shape of You", artist: "Ed Sheeran" },
        { title: "Dynamite", artist: "BTS" },
        { artist: "Black Pink" }
    ];

    const tasks = [
        { task: "React 공부하기", done: false },
        { task: "운동하기", done: true },
        { task: "책 읽기", done: false },
        { done: false }
    ];

    const teamMembers = [
        { name: "김철수", role: "프론트엔드 개발자" },
        { name: "박영희", role: "백엔드 개발자" },
        { name: "이민호", role: "디자이너" },
        { role: "시스템 개발자" }
    ];

    const cartItems = [
        { item: "노트북", quantity: 1 },
        { item: "무선 마우스", quantity: 2 },
        { item: "키보드", quantity: 1 }
    ];

    const events = [
        { name: "React 컨퍼런스", date: "2025-03-10" },
        { name: "개발자 밋업", date: "2025-04-22" },
        { name: "해커톤", date: "2025-05-15" }
    ];
    return (
        <div>
            <User users={userList} />
            <Product products={productList} />
            <Score scores={scoreList} />
            <Order orders={orderList} />
            <Book books={bookList} />
            <MusicPlay songs={songs} />
            <Tod tasks={tasks} />
            <TeamMembers members={teamMembers} />
            <ShoppingCart cartItems={cartItems} />
            <EventSchedule events={events} />
        </div>
    );
};

const PracticePropsArray = () => {
    return (
        <div>
            <Parent />
        </div>
    );
}

export default PracticePropsArray;