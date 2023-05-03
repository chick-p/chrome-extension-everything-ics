const everthingIcsBaseUrl = "https://example.workers.dev"

chrome.action.onClicked.addListener((tab) => {
  const url = tab.url;
  if (url) {
    chrome.tabs.create({
      url: `${everthingIcsBaseUrl}/ics?url=${url}`,
    });
  }
});
