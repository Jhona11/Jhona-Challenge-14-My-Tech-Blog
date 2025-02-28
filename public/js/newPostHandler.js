// Function set up so users can create new blog posts
async function newPostHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector("#titleInput").value.trim();
    const description = document.querySelector("#bodyInput").value.trim();
  
    if (title && description) {
      const blogPostId = 1;
      const url = `/api/blogposts`;
  
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert(response.statusText);
      }
    }
  }
  
  // Event Listener
  document.querySelector(".createBlogPost").addEventListener("submit", newPostHandler);