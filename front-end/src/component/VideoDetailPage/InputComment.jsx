import { useState, useContext } from "react";
import useVideoID from "../../hook/useVideoID";
import { VideoDetailContext } from "../../context/video/VideoDetailContext";

export default function InputComment() {
  const videoID = useVideoID();
  const { setComment } = useContext(VideoDetailContext);

  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      username,
      comment: commentText,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}${videoID}/addcomment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        setComment((prevComments) => [
          ...prevComments,
          { username, comment: commentText, timestamp: new Date() },
        ]);

        setUsername("");
        setCommentText("");

        console.log("Komentar berhasil dikirim");
      } else {
        console.error("Terjadi kesalahan saat mengirim komentar");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <>
      <div className="input-comment">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username..."
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="comment">comment</label>
            <textarea
              name="comment"
              placeholder="Comment...."
              id="comment"
              className="text-area"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>
          <button type="submit" className="button-form">
            Kirim
          </button>
        </form>
      </div>
    </>
  );
}
