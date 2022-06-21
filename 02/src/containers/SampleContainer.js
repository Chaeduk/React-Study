import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";

const SampleContainer = () => {
  const { post, users, loadingPost, loadingUsers } = useSelector(
    ({ sample, loading }) => ({
      post: sample.post,
      users: sample.users,
      loadingPost: loading["sample/GET_POST"],
      loadingUsers: loading["sample/GET_USERS"],
    })
  );
  const dispatch = useDispatch();
  const onGetPost = useCallback((num) => dispatch(getPost(num)), [dispatch]);
  const onGetUsers = useCallback((num) => dispatch(getUsers(num)), [dispatch]);

  useEffect(() => {
    onGetPost(1);
    onGetUsers(1);
  }, [onGetUsers, onGetPost]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default SampleContainer;
