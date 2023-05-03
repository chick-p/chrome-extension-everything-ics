const load = () => {
  const urlElement = <HTMLInputElement>document.querySelector(".js-url");
  chrome.storage.local.get("url").then(({ url }) => {
    if (url) {
      urlElement.value = url;
    }
  });
  const button = document.querySelector(".js-save");
  button?.addEventListener("click", () => {
    const url = urlElement.value;
    chrome.storage.local.set({ url }).then(() => {
      const messageElement = <HTMLDivElement>(
        document.querySelector(".js-message")
      );
      if (messageElement) {
        messageElement.textContent = "Saved!";
        messageElement.classList.remove("hidden");
      }
    });
  });
};

load();
