#Share-No-Cookies

Share no cookies is a pure JavaScript solution that allows you to easily share your page without any invasive tracking cookies.

Includes posting to Facebook, Google+, Pinterest, and Twitter, as well as an explanatory page, "What is this?"

## Setup

You need a `<div id="footer"></div>` element in place. This plugin will append to the bottom of this `div` a `ul` with `id` of `bookmarkList`. You can, of course, adjust the code to insert the `bookmarkList` anywhere you want on your page.

The full generated HTML is below:

```html
<ul id="bookmarkList">
  <li class="post" id="post"><a href="#">Share</a>
    <ul id="postList" class="hide">
      <li class="facebook"><a href="javascript:epaCore.articleShare('facebook');">Facebook</a></li>
      <li class="google"><a href="javascript:epaCore.articleShare('google');">Google+</a></li>
      <li class="pinterest"><a href="javascript:epaCore.articleShare('pinterest');">Pinterest</a></li>
      <li class="twitter"><a href="javascript:epaCore.articleShare('twitter');">Twitter</a></li>
      <li class="whatisthis"><a href="javascript:epaCore.articleShare('whatisthis');">What is this?</a></li>
    </ul>
  </li>
</ul>```

There are no images, but you can easily add your own, since there are classes for each bullet.

It includes a way to track clicks on these links with Google Analytics, but you must be using GA in the first place. The GA-specific portions are commented out.

Note that the Twitter link includes a `via` parameter. Using this parameter allows you to specify which account the link comes from. EPA's Twitter account, [epa](https://twitter.com/EPA), is in place right now. Replace it with your organization's Twitter account name.

## To-Do

* Remove the need for `javascript:` links.

## License

[MIT licensed][1]

[1]:http://opensource.org/licenses/MIT