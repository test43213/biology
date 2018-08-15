class Posts {
    async getPost(id) {
        let response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
          );
          if (response.status === 404) {
            throw new Error();
          }
          let json = await response.json();
          return json;
    }
}

export default Posts;