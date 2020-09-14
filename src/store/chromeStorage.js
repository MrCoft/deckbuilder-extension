export async function storageGet(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, (result) => {
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export async function storageSet(key, value) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.set(
        {
          [key]: value,
        },
        (result) => {
          resolve(result);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
}
