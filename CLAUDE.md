# CLAUDE.md


## 기술 스택
- npm
- html
- git + gh
- vercel
- supabase


## Gitflow 규칙
모든 기능 개발은 아래 순서를 따른다.

1. `main`에서 `feature/{연월일}_{순번}_{제목}` 형식으로 브랜치 생성
   - 예: `feature/20260912_01_portfolio-webpage`
2. 생성한 feature 브랜치로 checkout
3. 해당 브랜치에서 개발 진행 후 커밋, `origin`에 push
4. push한 브랜치를 `main`(또는 `master`)으로 병합
5. 병합에 사용한 feature 브랜치는 삭제하지 않고 보존한다
