use kdt;
drop table users;
drop table tweets;
create table users(      -- 테이블 만들기
   id int auto_increment primary key,
   username varchar(50) unique not null,
   password varchar(500) not null,
   name varchar(20) not null,
   email varchar(50) not null,
   url varchar(200) 
);

select *from users; -- 테이블 확인

create table tweets (
  id int auto_increment primary key,
  userId int not null,
  createdAt datetime default now(), -- 등록된 날짜
  text varchar(2000) not null,
  foreign key(userId) references users(id)   -- 테이블 간에 연결고리 역활을 하는 속성
);
select *from tweets;

SELECT u.id, u.username,u.name,u.url ,tw.text, tw.createdAt,tw.userId, text FROM users as u
JOIN tweets as tw ON u.id = tw.userID ORDER BY tw.createdAT DESC  -- 최신글
