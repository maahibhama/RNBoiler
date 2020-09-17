import { Platform } from "react-native";

export const getImageUrl = ({selectedImage}) => {
    if(Platform.OS == 'android'){
        return selectedImage.uri
    }
    const appleId = selectedImage.uri.substring(5, 41);
    const fileNameLength = selectedImage.filename.length;
    const ext = selectedImage.filename.substring(fileNameLength - 3);
    const uri = `assets-library://asset/asset.${ext}?id=${appleId}&ext=${ext}`;
    return uri
}