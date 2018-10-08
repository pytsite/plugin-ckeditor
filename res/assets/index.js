const $ = require('jquery');
const assetman = require('@pytsite/assetman');
const httpApi = require('@pytsite/http-api');

assetman.load('ckeditor@ckeditor/ckeditor.js');

require('@pytsite/widget').onWidgetLoad('plugins.ckeditor._widget.CKEditor', (widget) => {
    window.CKEDITOR_BASEPATH = '/assets/ckeditor/ckeditor/';

    widget.em.find('textarea').each(function () {
        const editor = CKEDITOR.replace(this, {
            baseHref: '/assets/plugins.ckeditor/ckeditor/',
            title: false,
            extraPlugins: 'youtube,codesnippet,stylescombo',
            language: lang.current(),
            filebrowserUploadUrl: httpApi.url('file'),
            height: 500,
            toolbar: [
                ['Bold', 'Italic', 'Strike', 'Format', 'RemoveFormat'],
                ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight'],
                ['Link', 'Unlink'],
                ['PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'],
                ['Image', 'Youtube', 'CodeSnippet', 'Iframe', 'Table', 'HorizontalRule', 'SpecialChar', 'Styles'],
                ['ShowBlocks', 'Source', 'Maximize']
            ],
            coreStyles_italic: {
                element: 'i'
            },
            extraAllowedContent: 'div p blockquote img ul ol li a i;span[data-*,hidden,lang](*);script[*];code(*);pre(*)',
            disableNativeSpellChecker: false
        });

        editor.on('change', function () {
            this.updateElement();
        });
    });
});
