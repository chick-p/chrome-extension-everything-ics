function sayHello() {
  console.log("Hello from the background");
}

chrome.action.onClicked.addListener(sayHello);
