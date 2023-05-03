chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get("url").then(({ url: everthingIcsBaseUrl }) => {
    if (!everthingIcsBaseUrl) {
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
