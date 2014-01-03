/* Share No Cookies/No jQuery
 * 03 Jan 2014
 */
var epaCore = {

  articleShare : function(site) {
    var popUrl = encodeURIComponent(window.location.href);
    var title = encodeURIComponent(document.title);
    var description = '';
    switch (site) {
     case "facebook":
     epaCore.postPopUp("http://www.facebook.com/sharer.php?u=" + popUrl + "&t=" + title, "facebook");
     //_gaq.push(['_trackSocial', 'facebook', 'share click', popUrl]);
     break;

     case "google":
     epaCore.postPopUp("https://plusone.google.com/_/+1/confirm?hl=en&url=" + popUrl, "google");
     //_gaq.push(['_trackSocial', 'google', 'share click', popUrl]);
     break;

     case "pinterest":
     epaCore.postPopUp("http://pinterest.com/pin/create/button/?url=" + popUrl + "&description=" + title, "pinterest");
     //_gaq.push(['_trackSocial', 'pinterest', 'share click', popUrl]);
     break;

     case "twitter":
     epaCore.postPopUp("https://twitter.com/share?text=" + title + "&url=" + popUrl + "&via=EPA&count=none&lang=en", "twitter");
     //_gaq.push(['_trackSocial', 'twitter', 'share click', popUrl]);
     break;

     // An explanatory page; not necessary
     case "whatisthis":
     setTimeout('window.location = "http://www2.epa.gov/home/about-social-bookmarks"', 150);
     //_gaq.push(['_trackSocial', 'what is this', 'what is this click', popUrl]);
     break;
   }
 }, //articleShare

  postPopUp :function(url, name, params) { var win = window.open(url, name, "height=450,width=650,scrollbars=yes,resizable=yes"); },

  addPostItem : function(parentElement, style, post_link, text) {
    var postItem = document.createElement("li"); postItem.className = style;
    var itemLink = document.createElement("a");
    itemLink.setAttribute("href", post_link); itemLink.innerHTML = text;
    postItem.appendChild(itemLink); parentElement.appendChild(postItem);
  }, //addPostItem

  writePost : function() {
    if(!document.getElementById('footer')) return;
    var f = document.getElementById("footer");
    var parentElement = document.createElement("ul");
    parentElement.id = "bookmarkList";

    //create post li
    var postElement = document.createElement("li");
    postElement.className = "post"; postElement.setAttribute("id", "post");
    // create post link
    var postLink = document.createElement("a"); postLink.setAttribute("href", "#");
    postLink.onclick = function () { epaCore.showHideSwap('postList', 'post'); return false; };
    postLink.innerHTML = "Share";
    postElement.appendChild(postLink);

    // create unordered list for post items
    var postList = document.createElement("ul");
    postList.setAttribute("id","postList");	postList.className = "hide";

    //add post links
    epaCore.addPosts(postList);

    postElement.appendChild(postList);
    parentElement.appendChild(postElement);
    f.appendChild(parentElement);
  }, //writePost

	addPosts : function(shareList) {
		var sList;
		if(typeof(shareList)=='string') { sList = document.getElementById(shareList); }
		else if(typeof(shareList)=='object') { sList = shareList; }
		else return false;

    epaCore.addPostItem(sList, "facebook", "javascript:epaCore.articleShare('facebook');", "Facebook");
    epaCore.addPostItem(sList, "google", "javascript:epaCore.articleShare('google');", "Google+");
    epaCore.addPostItem(sList, "pinterest", "javascript:epaCore.articleShare('pinterest');", "Pinterest");
    epaCore.addPostItem(sList, "twitter", "javascript:epaCore.articleShare('twitter');", "Twitter");
    epaCore.addPostItem(sList, "whatisthis", "javascript:epaCore.articleShare('whatisthis');", "What is this?");
	} //addPosts

}; // end epaCore

function addEvent( obj, type, fn ) {
	if (document.getElementById && document.createTextNode) {
		if (obj.addEventListener)
			obj.addEventListener( type, fn, false );
		else if (obj.attachEvent) {
			obj['e'+type+fn] = fn;
			obj[type+fn] = function() { obj['e'+type+fn]( window.event ); }
			obj.attachEvent( 'on'+type, obj[type+fn] );
		}
	}
} //addEvent()
addEvent(window, 'load', epaCore.writePost);