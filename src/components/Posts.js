const Posts = ({ postsList }) => {
  return (
    <div>
      {postsList.length > 0 &&
        postsList.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
};

export default Posts;
