const newURL = new URL(location.href);
// console.log(newURL);
let blogData = JSON.parse(window.localStorage.getItem("blogs")) ?? [];
const ourBlog = blogData.find(({ id }) => {
  return id == newURL.hash.replace("#", "");
});
console.log(ourBlog);
const articleDOM = document.querySelector(".outter-div");
// const { lang, title, image,topic } = ourBlog;
articleDOM.insertAdjacentHTML(
  "afterbegin",
  `
  <div class="box-1">
    <p class="j-head">${ourBlog.lang}</p>
    <p class="j-head-2">${ourBlog.title}</p>
    <img class="blog-img" src="${ourBlog.image}" alt="">
    <p class="j-head-3">${ourBlog.topic}</p>
    </div>
    `
);
