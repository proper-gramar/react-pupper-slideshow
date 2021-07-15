import React, { useEffect, useRef, useState, TextInput } from "react";

// TODO

export function CommentBox(props) {
  const [comments, commentArray] = useState(new Map());
  const commentRef = useRef("");
  const [defValue, setDefaultValue] = useState("");

  useEffect(() => {
    setDefaultValue("");
  }, [props.url]);

  const addComment = () => {
    //commentArray(comments => comments.concat(commentRef.current.value));

    //proper implementation??
    const commentMap = new Map(comments);
    const commentData = commentMap.get(props.url)
      ? commentMap.get(props.url)
      : [];
    commentData.push(commentRef.current.value);
    commentMap.set(props.url, commentData);

    commentArray(commentMap);
    setDefaultValue("");
  };

  console.log(comments);
  const booba = comments.get(props.url);
  return (
    <div>
      <input
        type="text"
        id="inputBox"
        placeholder="Add a comment"
        value={defValue}
        onChange={(e) => setDefaultValue(e.target.value)}
        //onKeyPress={handleEnterKey}
        ref={commentRef}
      />
      {/* why is this so hard... */}
      <button onClick={() => addComment()}>Submit</button>
      <div>
        {booba &&
          booba.map((c) => {
            return <ul type="comments"> {c} </ul>;
          })}
      </div>
    </div>
  );
}
