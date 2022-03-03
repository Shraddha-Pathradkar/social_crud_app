import postMessage from "../Models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMsg = await postMessage.find(); // finding posts from a model is time consuming thats why it is an asynchronous task add await before it.
    res.status(200).json(postMsg); // if no err, them send status 200 i.e success and send response as json. array of posts.
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPosts = (req, res) => {
  const post = req.body;
  const newPost = new postMessage(post);
  try {
    newPost.save();
    res.status(200).json(newPost); // suceessful creation is status 201
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
