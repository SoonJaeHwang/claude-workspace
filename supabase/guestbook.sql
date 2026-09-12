-- 방명록 테이블 생성 및 RLS 정책 설정
-- Supabase 대시보드 > SQL Editor 에서 실행하세요.

create table if not exists guestbook (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) between 1 and 30),
  message text not null check (char_length(message) between 1 and 300),
  created_at timestamptz not null default now()
);

alter table guestbook enable row level security;

create policy "guestbook_public_read"
  on guestbook for select
  using (true);

create policy "guestbook_public_insert"
  on guestbook for insert
  with check (true);

-- update/delete 정책은 만들지 않습니다 (삭제 기능 없음 요구사항)
