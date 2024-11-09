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

## 영화리스트 더보기 <br/>
---
- 한페이지엔 10개의 영화정보 추출 더보기 클릭시 다음 영화정보 확인 가능<br/>
- 영화의 page와 totalResult(전체정보)로 제어 및 확인 <br/>
- totalResult로 Math.ceil올림 -> 페이지 수 추출 <br/>
- subscribe로 페이지 변화 감시 <br/>
- page와 pageMax 비교를 통해 숨김처리 <br/>

## 로딩 애니메이션 추가 <br/>
---
- keframe과 animation 사용 <br/>
- searchMovies가 실행될고 모든 작업을 마치면 false처리 <br/>
- loading 역시 movieList.js에서 구독함수를 통해 변화 감지 <br/>

## 에외 처리 현상태 메세지 출력 <br/>
---
- Response값이 true이면 api에서 정보 출력 제대로 되고있음  <br/>
- movies 값이 있을 경우에만 append처리 optional chaining <br/>
- 결과값이 많거나 결과값이 없는 등 여러 오류메세지 출력 <br/>
- 에러메세지 도출시 더보기 버튼 사라짐<br/>
- javascript에서 오류가 생겨도 try catch문을 통해 계속적으로 작동 가능<br/>

