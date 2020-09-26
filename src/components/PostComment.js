import React from "react";

class PostComment extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    let comments = JSON.parse(localStorage.getItem("comments"));
    comments.push({ name: "username", text: this.state.value });
    localStorage.setItem("comments", JSON.stringify(comments));
    this.setState({ value: "" });
    event.preventDefault();
  }

  render() {
    return (
      <form id="PostComment" onSubmit={this.handleSubmit}>
        <textarea
          type="text"
          className="post-comment-input"
          placeholder="Add a comment..."
          value={this.state.value}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="post-comment-button">
          <b>Post</b>
        </button>
      </form>
    );
  }
}

export default PostComment;

// const PostComment = () => {
//   function submitPost(e) {
//     e.preventDefault();
//     console.log(e.target);
//   }

//   return (
//     <form id="PostComment" onSubmit={submitPost}>
//       <textarea
//         type="text"
//         className="post-comment-input"
//         placeholder="Add a comment..."
//       ></textarea>
//       <button type="submit" className="post-comment-button">
//         <b>Post</b>
//       </button>
//     </form>
//   );
// };

// export default PostComment;
