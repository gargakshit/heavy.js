# heavy.js

Is your site too light? Need more pizzaz?
Make it heavy with a single, zero dependency script.

## How to?

Just add this snippet to your HTML:

```html
<script
  src="https://rawcdn.githack.com/gargakshit/heavy.js/71f834dcbf339f7cee0e4ec403f5b183e14a6082/heavy.js"
  defer
  async
></script>
```

## How does it work?

It downscales all images on your webpage by a factor of 3, takes the RGB values
and creates spans with appropriate styles. Yes, this converts your images to
HTML `p` and `span`s.

Might be tuned to my display? Who cares about the actual users' machines
anyways. If my M1 Max 64GB MacBook can run it, their machines will surely run
it!

## Demo?

[Demo!](https://gargakshit.github.io/heavy.js/demo.html)

## Is this any good?

[Yes](https://news.ycombinator.com/item?id=3067434). Actually NO. This is
satire. Stop adding useless JavaScript to your websites just for the sake of it.
JS is alright if you are making an interactive webapp, but static content
should be static content.
