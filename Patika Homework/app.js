import axios from "axios";
//  const getData = (user_id) => {
//      return new Promise( async(resolve, reject) => {
//          const {data} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
//          const {post} = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id);

//          resolve(data, post);
//      });
//  };
//  export default getData(user_id);

 export default async function getData(user_id)  {
     const users = await axios.get("https://jsonplaceholder.typicode.com/users/"+user_id);
     const posts = await axios.get("https://jsonplaceholder.typicode.com/posts/"+user_id);

     console.log("user yüklendi", users.data);
     console.log("Post yüklendi", posts.data);
 };
