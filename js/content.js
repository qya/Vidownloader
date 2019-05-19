var official = "https://downloader.download-lagu-mp3.com/";
var dl_link = official+"#url=";
var icon_img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAq0lEQVRIx2NgIAD+EwCE9BMEoxaMWjBqwVCz4N+/f72EDCQEQGbgtODnz59MQAVLKTB8KcgMvL748+cPG1DhbjIM3w3SS1RQ/f37lw+o4SwJhp8F6SEpPoAaJIAa7xJh+F2QWrJSEFCjCtCAl3gMfwlSQ5bhSCnLBIg/YzH8M0iOIsORLHED4p9Ihv8EiVHFcCRLYoD4LxTHUNVwJEtKQJgmhtMEEJsPBtQCAObvSlQB+LV+AAAAAElFTkSuQmCC";

function _getVideoData() {
    return {}
}

function bottomBtn(e, t, n,name,pb,img) {
    if(typeof pb !== 'undefined'){
    notifyBackgroundPage(e,name,pb,img);
    _getVideoData(e), $.isNumeric(e) ? (t.find("#getfvid-" + e).length || (n.after("<div id='getfvid-" + e + "' class='getfvid'><div class='buttonBtnDownloader'><div class='clearfix'><div class='poweredBy'><a target='_blank' href='"+official+"' title='ViDownloader'><b>ViDownloader FB</b></a></div><div class='linksBtn download-buttons'> <b><a class='btn btn-primary text-bold download-hd' target='_blank' href='"+dl_link+"https://www.facebook.com/"+e+"'>Download "+zcvtosize(pb)+"</a></b></div></div></div></div></div>")
        )) : (n.after("<div id='getfvid-" + e + "' class='getfvid'><div class='buttonBtnDownloader'>.userContent:lastwidthPlease right click on video -> Show video URL -> Copy Url -> Paste Url to new tab. Download buttons will be shown under video. <br /></div></div>"), t.addClass("has-getfvid"))
    }
}
function typeFB(){
regWatch = /^(http|https)\:\/\/(www|web).facebook.com\/watch.*/i;
regVidWatch = /^(http|https)\:\/\/(www|web).facebook.com\/watch\/\?v=([a-zA-Z0-9_-]{15}).*/i;
regFPWatch = /^(http|https)\:\/\/(www|web).facebook.com\/watch\/([a-zA-Z0-9_-]).*/i;
    uriku = window.location.href;
    if(uriku.match(regVidWatch)){
        return 'vidwatch';
    }else if(uriku.match(regFPWatch)){
        return 'listwatch';
    }else if(uriku.match(regWatch)){
        return 'watch';
    }else{
        return 'index';
    }

}
function zbytesToSize(bytes, decimals = 2) {
    if (bytes === 0) return '';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};
function zcvtosize(data){
	return zbytesToSize(((71 * data.replace(/"/g,'')) * 1000 ) / 2);
}
function checkFullscreen(){
    if($( "span[data-testid=actor-selector]" ).length && $('.uiStreamStory').length){
        $( "span[data-testid=actor-selector]" ).parent().parent().append('<a id="vidownfull" target="_blank" href="'+dl_link+''+window.location.href+'" style="color: #1d2129;background-color: #ffffff;border-color: #ffffff;line-height: 28px;border-radius: 1px;box-sizing: content-box;font-size: 15px;-moz-osx-font-smoothing: grayscale;font-weight: bold;justify-content: center;padding: 0 12px;position: relative;text-align: center;text-shadow: none;vertical-align: middle;font-family: inherit;cursor: pointer;display: inline-block;text-decoration: none;white-space: nowrap;border: 1px solid;margin: 10px;">Download Video</a>');
        $( "span[data-testid=actor-selector]" ).attr('data-testid','');
    }
    $('#vidownfull').attr('href',dl_link+''+window.location.href);
}
function bottomBtnDownload() {
    vidio = typeFB();
    console.log('Current type : '+vidio);
    if(vidio == 'index'){
    if ($(".fbUserPost:not(.has-downloader), .fbUserStory:not(.has-downloader), .userContentWrapper:not(.has-downloader)").each(function(e) {
            var t = (e = $(this)).find(".userContent:last").parent(),
                n = !1;
            if (e.find("video").each(function() {
                    100 < $(this).attr("width") && (n = !0)
                }), n) {
                var o = null,
                    a = e.find("a[rel=theater]").attr("href");
                    img = $(e.find("video").next().get(0)).find("img[src]").attr("src");;
                    pb = JSON.stringify($(e.find("div[playbackdurationtimestamp]")[0]).attr("playbackdurationtimestamp"));
                    name = e.find("img[role=img]").attr("aria-label");
                void 0 !== a && (o = a.replace(/.+\/(\d+)\/?.*/i, "$1")), $.isNumeric(o) || $("a", e).each(function(e) {
                    e = $(this).attr("ajaxify");
                    var t = $(this).attr("href");
                    if (void 0 !== e && (o = e.replace(/.+;id=(\d+).*/i, "$1")), $.isNumeric(o) || void 0 === t || (o = t.replace(/.+videos\/(\d+)\/?.*/i, "$1")), $.isNumeric(o)) return !1
                }), $.isNumeric(o) || (o = e.find("input[name=ft_ent_identifier]").val()), bottomBtn(o, e, t,name,pb,img)
            }
        }), $("#permalink_video_pagelet").length) {
        var e = $("#permalink_video_pagelet").parent().parent();
        if (e.hasClass("has-getfvid")) return !1;
        var t = $("#permalink_video_pagelet").parent(),
            n = $(location).attr("href");
        bottomBtn((e = /.+videos\/(\d+)\/?/gi.exec(n))[1], e, t,name,pb,img)
    }
    }else if(vidio == 'listwatch'){
if($( "span[reactionvideochanneltype=video_home_followed_shows] button" ).length){
$( "span[reactionvideochanneltype=video_home_followed_shows] button" ).each(function(e){
$(this).parent().prepend('<a onclick="return false" target="_blank" href="'+dl_link+''+$( this ).parent().attr('href')+'" style="color: white;background-color: #00c733;border-color: #00c733;line-height: 22px;border-radius: 2px;box-sizing: content-box;font-size: 12px;-moz-osx-font-smoothing: grayscale;font-weight: bold;justify-content: center;padding: 0 8px;position: relative;text-align: center;text-shadow: none;vertical-align: middle;font-family: inherit;cursor: pointer;display: inline-block;text-decoration: none;white-space: nowrap;border: 1px solid;margin-right: 4px;">Download Video</a>');
$( "span[reactionvideochanneltype=video_home_followed_shows]" ).attr('reactionvideochanneltype','avideo_home_followed_shows');
}
)
}else if($( "span[reactionvideochanneltype=video_home_saved_queue] button" ).length){
$( "span[reactionvideochanneltype=video_home_saved_queue] button" ).each(function(e){
$(this).parent().prepend('<a onclick="return false" target="_blank" href="'+dl_link+''+$( this ).parent().attr('href')+'" style="color: white;background-color: #00c733;border-color: #00c733;line-height: 22px;border-radius: 2px;box-sizing: content-box;font-size: 12px;-moz-osx-font-smoothing: grayscale;font-weight: bold;justify-content: center;padding: 0 8px;position: relative;text-align: center;text-shadow: none;vertical-align: middle;font-family: inherit;cursor: pointer;display: inline-block;text-decoration: none;white-space: nowrap;border: 1px solid;margin-right: 4px;">Download Video</a>');
$( "span[reactionvideochanneltype=video_home_saved_queue]" ).attr('reactionvideochanneltype','avideo_home_followed_shows');
}
)
}else if($( "span[reactionvideochanneltype=video_home_unwatched_queue] button" ).length){
$( "span[reactionvideochanneltype=video_home_unwatched_queue] button" ).each(function(e){
$(this).parent().prepend('<a onclick="return false" target="_blank" href="'+dl_link+''+$( this ).parent().attr('href')+'" style="color: white;background-color: #00c733;border-color: #00c733;line-height: 22px;border-radius: 2px;box-sizing: content-box;font-size: 12px;-moz-osx-font-smoothing: grayscale;font-weight: bold;justify-content: center;padding: 0 8px;position: relative;text-align: center;text-shadow: none;vertical-align: middle;font-family: inherit;cursor: pointer;display: inline-block;text-decoration: none;white-space: nowrap;border: 1px solid;margin-right: 4px;">Download Video</a>');
$( "span[reactionvideochanneltype=video_home_unwatched_queue]" ).attr('reactionvideochanneltype','avideo_home_followed_shows');
}
)
}

    }else if(vidio == 'watch'){
$( "a[testid=UFI2CommentLink]" ).each(function(e){
pb = $($("div[playbackdurationtimestamp]")[e]).attr("playbackdurationtimestamp")
$($("div[playbackdurationtimestamp]")[e]).removeAttr("playbackdurationtimestamp");
pw = $(this).closest('div[data-ft]').attr('data-ft').match(/post_id\"\:\"(\d+)\"/)[1];
$(this).parent().parent().parent().parent().parent().prepend('<div class="buttonBtnDownloader" style="padding: 10px;background: white;"><div class="clearfix"><div class="poweredBy"><a target="_blank" href="'+official+'" title="ViDownloader"><b>ViDownloader FB</b></a></div><div class="linksBtn download-buttons"> <b><a class="btn btn-primary text-bold download-hd" target="_blank" href="'+dl_link+'https://www.facebook.com/'+pw+'">Download '+zcvtosize(pb)+'</a></b></div></div></div>');
$(this).attr('testid','UFI2CommentLinks');
}
)
    }
}
function handleResponse(message) {
  // console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
  // console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e,n,pb) {
  var sending = browser.runtime.sendMessage({
    greeting: e,
    name: n,
    playback: pb,
    image: img 
  });
  sending.then(handleResponse, handleError);  
}
setInterval(function() {
    bottomBtnDownload()
}, 2e3);
setInterval(function() {
    checkFullscreen()
}, 2e2);