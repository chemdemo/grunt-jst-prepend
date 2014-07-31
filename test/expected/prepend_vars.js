var foo = 1;

this["JST"] = this["JST"] || {};

this["JST"]["test/fixtures/template_prepend_vars.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<p>var foo = ' +
((__t = ( foo )) == null ? '' : __t) +
'</p>\n';

}
return __p
};