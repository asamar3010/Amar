export const saveUserData = (data: any) => {
  // Remove the File object before storing
  const { profilePicture, ...storageData } = data;
  localStorage.setItem('userData', JSON.stringify(storageData));
};