{{ with .Site.Params.markmap }}
{{ if .enable }}

(function($) {
    var needMarkmap = false;

{{ if ge hugo.Version "0.93.0" -}}
    if ($('.markmap').length > 0) {
        needMarkmap = true;
    };
{{ else -}}
    $('.language-markmap').parent().replaceWith(function() {
        needMarkmap = true;
        return $('<div class="markmap">').text($(this).text());
    });
{{ end -}}

    const { markmap } = window;
    if(needMarkmap) {
        markmap.autoLoader.renderAll();
    }

})(jQuery);
{{ end }}
{{ end }}
