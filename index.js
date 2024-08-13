// // Отримати список користувачів з GitHub API Опис:
// // Використайте публічне API GitHub для отримання списку користувачів.
// Зробіть GET - запит
// //  за адресою https://api.github.com/users та перегляньте
// отримані дані щодо користувачів.

const userList = document.querySelector(".user__list")
const getUsers = () => {
  const getUsers = fetch("https://api.github.com/users").then((users) => {
    return users.json()
  })
  return getUsers
}
getUsers().then((users) => {
  console.log(users)
  const dataUsers = users.map((usersMap) => {
    const constructUserHtml = `    <li class="user__item">
    <p class="user__log">User-Login: ${usersMap.login}</p>
    <p class="user__id">User-Id: ${usersMap.node_id}</p>
    <img class="user__img" src="${usersMap.avatar_url}">
  </li>`
  return constructUserHtml
  }).join("")
  userList.innerHTML = dataUsers
})