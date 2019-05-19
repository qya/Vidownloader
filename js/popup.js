var listarray = [];
var html = '';
var curenttab = '';
var regExp = /^(http|https)\:\/\/(www|web).facebook.com\/.*/i;
    function onGot(page) {
    	listarray = page.fbarray;
}

function onError(error) {
  console.log(`Error: ${error}`);
}
function bytesToSize(bytes, decimals = 2) {
    if (bytes === 0) return '';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
function cvtosize(data){
	return bytesToSize(((71 * data.replace(/"/g,'')) * 1000 ) / 2);
}
function fancyTimeFormat(time)
{   
		time = time.replace(/"/g,'');
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
var getting = browser.runtime.getBackgroundPage();
getting.then(onGot, onError);

browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
      curenttab = tabs[0].url;
  })
function reloadList(){
			var match = curenttab.match(regExp);
			if(match != null){
				if(listarray.length > 1){
	$.each(listarray, function(index, item) {
		if(typeof item.image !== 'undefined' && typeof item.playback !== 'undefined'){
		html += '<li class="c-contact"><div class="c-contact__left"><div class="c-contact__avatar" style="background-image: url(&quot;'+item.image+'&quot;);"></div><div class="c-contact__content"><div class="ctime">'+fancyTimeFormat(item.playback)+'</div><div class="c-contact__name">'+item.name+'</div><span>'+item.id+'</span></div></div><div class="l-actions contact__right"><a href="https://downloader.download-lagu-mp3.com/#url=https://facebook.com/'+item.id+'" class="c-button c-button--sm c-button-dw">Download '+cvtosize(item.playback)+'</a></div></li>';
		}
});
}else{
	html = '<center><img src="i/notfound.png" width="187px" height="130px" /><br><h4>Try Scroll your Timeline to captured video</h4></center>';
}
}else{
	html = '<center><img src="i/notfound.png" width="187px" height="130px" /><br><h4>Please Open Facebook URL Only</h4></center>';
}
	$('#appendfb').html(html);
	html = '';
}
$(document).ready(function(){
			var match = curenttab.match(regExp);
			if(match != null){
setInterval(function() {
    reloadList()
}, 2e3);
}else{
	html = '<center><img src="i/notfound.png" width="187px" height="130px" /><br><h4>Please Open Facebook URL Only</h4></center>';
	$('#appendfb').html(html);
}
});
