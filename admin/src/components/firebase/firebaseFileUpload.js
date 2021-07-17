import { app } from './firebase.config';
import imageCompression from 'browser-image-compression';

export const fileUpload = async (fileToCompress) => {
    //  Compress image  //
    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 600,
        useWebWorker: true,
    };
    const file = await imageCompression(fileToCompress, options); // compressed image
    //Compressed image gone for upload
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const fileUrl = await fileRef.getDownloadURL();
    return fileUrl;
};
