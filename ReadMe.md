# 영화 검색 사이트 만들기 프로젝트 <br/>
---
- 자바스크립트 or 타입스크립트 버젼으로 <br/>

## 프로젝트 설정 <br/>
---
- `npm init -y`<br/>
- `npm i -D parcel `<br/>
-  json에서 script에 dev 개발용 build 배포용 설정해주기 <br/>
- `reset.css cdn`로 css 리셋하기 <br/>
- `google fonts`로 폰트 설정 <br/>

## 입력창 <br/>
---
- 입력값 받기, 엔터키 적용, 클릭 적용 <br/>
- 엔터키 & 클릭 -> 정보받아옴 값이 없으면 무효 <br/>


## 스토어 생성 <br/>
---
- 입력값 searchText , 페이지값 page, movies 영화정보 배열형식<br/>
- OMDb api 사용 `https://www.omdbapi.com/`<br/>
- 비동기 fetch 함수로 연동 -> json형식으로 파싱<br/>
- search 부분 s = 영화의 제목을 검색 & page = 페이지값 반환 한번에 10개의 영화정보를 보여줌 <br/>
- store를 통해서 페이지 병합 & 검색시 데이터 갱신 <br/>

## 영화 리스트 추출 <br/>
---
- 사용자가 검색 후 해당 정보를 전달하여 전달<br/>
- subscribe 구독 함수를 통해서 갱신 될때 render함수 실행<br/>
- MovieItem.js 에서 이미지 아이디 년도 속성 받아오기 <br/>

