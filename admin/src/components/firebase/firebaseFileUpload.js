import { app } from "./firebase.config";

export const fileUpload = (file) => {
  const storageRef = app.storage().ref();
  const fileRef = storageRef.child(file.name);
  await fileRef.put(file);
  const fileUrl = await fileRef.getDownloadURL();
  return fileUrl;
};
