import { useContext } from "react";
import { VideoDetailContext } from "../../context/video/VideoDetailContext";

export default function Comment() {
  const { comment } = useContext(VideoDetailContext);

  if (!Array.isArray(comment)) {
    return <div className="no-data">No comments available.</div>;
  }

  console.log(comment);

  const commentList = comment.map((c) => {
    const commentDate = new Date(c.timestamp);
    const currentDate = new Date();

    const timeDifference = Math.floor(
      (currentDate - commentDate) / (1000 * 60)
    );

    let timeAgo;
    if (timeDifference < 60) {
      timeAgo = `${timeDifference} menit yang lalu`;
    } else if (timeDifference < 1440) {
      const hours = Math.floor(timeDifference / 60);
      timeAgo = `${hours} jam yang lalu`;
    } else if (timeDifference < 43200) {
      const days = Math.floor(timeDifference / 1440);
      timeAgo = `${days} hari yang lalu`;
    } else {
      const months = Math.floor(timeDifference / 43200);
      timeAgo = `${months} bulan yang lalu`;
    }

    return (
      <div className="comment" key={c._id}>
        <div className="comment-left">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt1ceyneFkZchgkrwN7dZxWNl_C5Dctvc5BzNh_rEzPQ&s"
            width={30}
            alt=""
          />
        </div>
        <div className="comment-right">
          <div className="username">{c.username}</div>
          <div className="text">
            {c.comment}
            <div className="date-comment">{timeAgo}</div>
          </div>
        </div>
      </div>
    );
  });

  return <>{commentList}</>;
}
