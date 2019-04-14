str = '{{svg:android}}';

regex = /{{(svg|fav):(.*)}}/;

result = str.replace(regex, function($1, $2, $3) {
    console.log($1, $2, $3);
});
