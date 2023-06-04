chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get("url").then(({ url: everthingIcsBaseUrl }) => {
    if (!everthingIcsBaseUrl) {
      chrome.tabs.create({
        url: "chrome://extensions/?options=" + chrome.runtime.id,
      });
      return;
    }
    const contentPageUrl = tab.url;
    if (contentPageUrl) {
      chrome.tabs.create({
        url: `${everthingIcsBaseUrl}/ics?url=${contentPageUrl}`,
      });
    }
  });
});
