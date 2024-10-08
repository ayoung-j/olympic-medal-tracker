# Olympic Medal Tracker 만들기 
[🔗 2024 파리올림픽](https://ayoung-j.github.io/olympic-medal-tracker/)<br/><br/>
나라별 메달 집계 리스트를 보여주고 추가, 삭제, 업데이트를 할 수 있습니다.
<br/><br/>

## 프로젝트 구조
📦olympic-medal-tracker<br/>
┣ 📂public<br/>
┣ 📂src<br/>
┃ ┣ 📂assets<br/>
┃ ┃ ┗ 📂fonts<br/>
┃ ┣ 📂components<br/>
┃ ┣ 📂constants<br/>
┃ ┣ 📂styles<br/>
┃ ┣ 📂utils<br/>
┃ ┣ 📜App.jsx<br/>
┃ ┗ 📜main.jsx<br/>
┣ 📜index.html<br/>
┣ 📜README.md<br/>
┗ 📜vite.config.js
<br/><br/>

## 실행 방법
```
git clone https://github.com/ayoung-j/olympic-medal-tracker.git

yarn dev
```
<br/>

## 주요 기능
- **Create** : 새로운 나라와 그 나라가 획득한 메달 수를 추가합니다.
- **Read** : 나라별 메달 집계 리스트를 보여줍니다.
- **Update** : 기존에 추가된 나라의 메달 수를 수정할 수 있습니다.
- **Delete** : 나라 정보를 삭제할 수 있습니다.
- **정렬** : 메달 집계는 금메달 수를 기준으로 내림차순 정렬됩니다.
