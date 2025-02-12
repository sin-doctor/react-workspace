import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PizzaList from "./BackendAPI/PizzaList";
import RootPath from "./RootPath";
import {BrowserRouter} from "react-router-dom";
//import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* BrowserRouter 로
        이동할 경로 를 설정했다면
        index.js 최상단에 BrowserRouter 로

        모든 javascript, javascriptXML 파일을 감싸줘야함

        BrowserRouter 와 Routes 은 모든 파일에서  최초 1회만 작성
        */}

        <RootPath />
        {/* return 내에 사용할 수 있는 주석
        App.js 는 필수로 사용해야하는 자바스크립트 파일이 아님
        만일 App.js 가 아니라 다른 파일을 사용하길 원한다면
        파일명.js 를 import 해서 사용할 수 있음
        <ChapUseState/>
        <PracticeUseState />
        <ChapProps />
        <PracticeProps />
        <ChapPropsFunction />
         <PracticePropsFunction />
         <ChapPropsDefault/>
         <PracticePropsDefault />
         <ChapPropsArray />
        <PracticePropsArray />
        <ChapUseEffect />
        */}


    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();