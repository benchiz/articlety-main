const regForm = document.querySelector("#reg-form");

// const getUserQuery = `{ register { firstName telephone email password } }`;

regForm.addEventListener("submit", getUserQuery)

const options = {
  method: "post",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    query: `
    mutation Register($firstName:String!, $telephone:String!, $email:String!, $password:String!) {
      username
      id
      token
    }
  }
`,
})
.then(res => console.log(res))
.catch(err => console.log(err))
};

fetch(`http://localhost:4000`, options)
  .then(res => res.json())

regForm.reset();


// async function handleFormSubmit(event) {
//     event.preventDefault();

//     const form = event.currentTarget;

//     const url = form.action;

//     try {
//         // const formData = new FormData (form);

//         // const responseData = await postFormDataAsJson({ url, formData });

//         // console.log({ responseData });

//     } catch (error) {
//         console.error(error);
//     }
// }



// async function postFormDataAsJson({ url, formData }) {
//     const plainFormData = Object.fromEntries(formData.entries());
//     const formDataJsonString = JSON.stringify(plainFormData);

//     const fetchOptions = {
//         method: "POST",
//         headers: {
// 			"Content-Type": "application/json",
// 			"Accept": "application/json"
// 		},

//         body: formDataJsonString,
//     };

//     const response = await fetch(url, fetchOptions);

// 	if (!response.ok) {
// 		const errorMessage = await response.text();
// 		throw new Error(errorMessage);
// 	}
// 	return response.json();
// }



// const bodyParser = require("body-parser");

// app.use(bodyParser.json());

// app.post("http://localhost:4000/graphql", (request, response) => {

//     const newUser = {
//         firstName: request.body.firstName,
//         telephone: request.body.telephone,
//         email: request.body.email,
//         password: request.body.password
//     };
//     response.status(201).json(newUser);
// });


// Тест для отображения статей
// const postList = document.querySelector('.article__main-list');
// const addPostBtn = document.querySelector('.main__btn');

// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max - min);
//   return Math.round(rand);
// }

// const getPost = function () {
//   fetch('https://jsonplaceholder.typicode.com/posts/' + randomInteger(1, 99))
//     .then((response) => response.json())
//     .then((post) => {
//       postList.insertAdjacentHTML(
//         'beforeend',
//         `<li class="main__item">
//       <p class="main__item-title">${post.title}</p>
//       <p class="main__item-text">${post.body}</p>
//       <a class="main__item-link" href="#">Read More</a>
//       </li>`
//       );
//     });
// };

// addPostBtn.addEventListener('click', function (e) {
//   e.preventDefault();
//   getPost();
//   getPost();
//   getPost();
//   getPost();
//   getPost();
//   getPost();
// });
