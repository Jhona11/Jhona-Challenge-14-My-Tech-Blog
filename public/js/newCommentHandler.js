// Function that allows users to post comments to blog posts
async function newCommentHandler(event) {
    event.preventDefault();
  
    console.log("clicked me");
  
    // get text and trim whitespace
    const comment_body = document.getElementById("comment").value.trim();
    // get post id from URL
    const url = window.location.toString("/")[2];
    const blogPost_id = url[url.length - 1];
  
    if (comment_body) {
      const response = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify({
          blogPost_id,
          comment_body,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  }
  
  // Event Listener
  console.log("HERE!");
  console.log(document.getElementById("comment-form"));
  document
    .getElementById("comment-form")
    .addEventListener("submit", newCommentHandler);