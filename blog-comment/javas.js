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
    <div class="box-2">
    <p class="box2-text">What do you think of the article? ;)</p>
    <div class="emojis"> 
    <p class="box2-text">Feel free to live a comment below!</p>  
        <textarea id="text-message" placeholder="Message" name="text-message" rows="8" cols="80"></textarea> 
    <button  class="button-1" id="button_${ourBlog.id}" onclick="addcomment(this.id)"  name="button">Send Message</button>
        
        </div>   
    `
);

function addcomment(id){
  var index=id.split("_")
  var blogid=index[1]
 var user = localStorage.getItem("signedin");
 var comment= document.querySelector("#text-message").value

 var comments =  JSON.parse(localStorage.getItem("comments")) || []

var com={
  "user": user,
  "comment": comment,
  "blogid" : blogid
}
comments.push(com)
var newcomments= JSON.stringify(comments)
localStorage.setItem("comments", newcomments)

}

