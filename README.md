# 프론트엔드 개발자 홍다희 포트폴리오입니다.


<img width="1425" alt="스크린샷 2023-04-19 오후 10 07 23" src="https://user-images.githubusercontent.com/107875003/233778435-01131227-863c-4d90-b007-1cdb943ed1e6.png">

* 배포 링크: https://hongdahee-portfolio.vercel.app/ 

## 사이트 소개
제가 평소에 좋아하는 ott 사이트인 "왓챠"를 컨셉으로 포트폴리오 사이트를 만들면 재밌을 거 같다고 생각해서 왓챠 컨셉의 포트폴리오를 만들게 됐습니다.
<br> 슬라이드에는 드라마, 영화 대신에 지금까지 했던 프로젝트를 넣어서 소개했습니다.    

## 기술 스택
* Next.js
* Typescript
* styled-components
* Framer Motion
* Notion API

## 개발 기간
2023.3 ~ 2023.4

## 주요 구현 사항
* 빠른 초기 렌더링 속도를 위해서 SSR 방식으로 데이터 패칭을 했습니다.
* 모바일을 고려해서 반응형 ui로 개발했습니다.
* Framer Motion을 이용하여 슬라이드를 구현했습니다.
* background-image로 이미지를 보여줄 경우 이미지 로딩 속도가 너무 느렸습니다. <br> 그래서 이를 개선하기 위해서 Next.js image 컴포넌트를 사용하여 로딩 속도를 단축시키고 로딩되는 동안 스켈레톤 ui가 나오게 해서 ux를 향상시켰습니다.
