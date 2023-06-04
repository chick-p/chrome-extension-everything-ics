const getEverythingIcsBaseUrl = () => {
  const key = "url";
  return new Promise<string>((resolve) => {
    chrome.storage.local.get(key, (items) => {
      const url = items[key];
      if (url) {
        resolve(items[key]);
      } else {
        chrome.tabs.create({
          url: "chrome://extensions/?options=" + chrome.runtime.id,
        });
      }
    });
  });
};

const sendToEverthingIcs = (everythingIcsBaseUrl: string, url: string) => {
  chrome.tabs.create({
    url: `${everythingIcsBaseUrl}/ics?url=${url}`,
  });
};

chrome.action.onClicked.addListener(async (tab) => {
  const everythingIcsBaseUrl: string = await getEverythingIcsBaseUrl();
  console.log(everythingIcsBaseUrl);
  const url = tab.url;
  if (everythingIcsBaseUrl && url) {
    sendToEverthingIcs(everythingIcsBaseUrl, url);
  }
});
