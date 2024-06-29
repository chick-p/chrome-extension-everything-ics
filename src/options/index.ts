const load = () => {
  const urlElement = <HTMLInputElement>document.querySelector(".js-url");
  chrome.storage.local.get("url").then(({ url }) => {
    if (url) {
      urlElement.value = url;
    }
  });
  const button = document.querySelector(".js-save");
  const messageElement = <HTMLDivElement>document.querySelector(".js-message");
  button?.addEventListener("click", () => {
    try {
      const { origin } = new URL(urlElement.value);
      chrome.storage.local.set({ url: origin }).then(() => {
        messageElement.textContent = "Saved!";
        messageElement.classList.remove("message--failure");
        messageElement.classList.add("message--success");
        messageElement.classList.remove("hidden");

        urlElement.value = origin;
      });
    } catch {
      messageElement.textContent = "Fail to save!";
      messageElement.classList.remove("message--success");
      messageElement.classList.add("message--failure");
      messageElement.classList.remove("hidden");
    }
  });
};

load();
