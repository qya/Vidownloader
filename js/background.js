localStorage.firstInstall ? chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({
        url: "https://download-lagu-mp3.com/addon/"
    })
}) : (window.open("https://download-lagu-mp3.com/addon/install.php"), localStorage.firstInstall = "false"), chrome.runtime.setUninstallURL && chrome.runtime.setUninstallURL("https://download-lagu-mp3.com/addon/uninstall.php");
var fbarray = [];
var datas = [];
function handleMessage(request, sender, sendResponse) {
  console.log("Captured from the content script FB ID: " +
    request.greeting);
  console.log("Captured from the content script FB Name: " +
      request.name);
  console.log("Captured from the content script FB Time: " +
        request.playback);
        console.log("Captured from the content script FB Foto: " +
              request.image);
datas =  { "id": request.greeting, "name": request.name,"playback": request.playback,"image": request.image };
  if (!fbarray.some(e => e.id === request.greeting)) {
  	fbarray.push(datas);
  }
  // sendResponse({response: "Response from background script to capture FB ID"});
}

browser.runtime.onMessage.addListener(handleMessage);