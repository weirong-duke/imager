export const readFileAsText = (file: File): Promise<string> => {
  return new Promise((resolve,reject) => {
    const fileReader = new FileReader();
    fileReader.onload = function(){
      resolve(String(fileReader?.result));
    };

    fileReader.onerror = function(){
      reject(fileReader);
    };

    fileReader.readAsDataURL(file);
  });
}
