const articles = document.querySelector('#t-body');
const articlesData = JSON.parse(localStorage.getItem('blogs')) ?? [];
console.log(articlesData);

articlesData.forEach((item, index) => {
  articles.insertAdjacentHTML(
    'afterbegin',
    `
    <tr>
    <td>${index}</td>
    <td>
    <img src="${item.image}" alt="" srcset="" />
    </td>
    <td>${item.title}</td>
    <td>${item.lang}</td>
    <td>${item.topic}</td>
    <td><button data-id = ${item.id} class= "delete-blog" name="button">Delete</button><a href="edit.html#${item.id}" rel="noopener noreferrer">
          <button id="edit" class="updateBlog">Edit</button>
          </a></td>

    </tr>

    `
  )
})


const deleteButtons = [...document.getElementsByClassName("delete-blog")];
deleteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const deleteID = e.target.dataset.id;
      deletePost(deleteID);
  });
});
function deletePost(deleteID) {
  localStorage.setItem(
    "blogs",
    JSON.stringify(articlesData.filter(({ id }) => id != deleteID))
  );
  location.reload();
}
