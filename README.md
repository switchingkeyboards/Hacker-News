# Hacker News ([Demo URL](https://hacker-news-26qns3y7f.vercel.app))

This is an MVP demonstrating the scraping and displaying of data from Hacker News through Apollo GraphQL and React. This project is bootstraped with `create-next-app`.

### Prerequisites

- Node.js
- Yarn
  
### Local dev setup

Install all dependencies:

```
yarn
```
Start development server:

```
yarn dev
```
---
### Data structure
```
type News {
  title: String
  points: String
  author: String
  time: String
  commentsCount: Int
  link: String
}
```
---

### Known issues
- Current scraping process is heavily reliant on DOM node positions, which might be vulnerable to changes or updates to the site.
  
---
### Future improvements
- Loading indicator while fetching data
- Refactor API for more robust and efficient scraping
- Lazy loading/scroll or pagination
- Improve layout, e.g. list view
- Auto-refresh of content