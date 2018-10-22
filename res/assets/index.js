import setupWidget from '@pytsite/widget';
import assetman from '@pytsite/assetman';
import httpApi from '@pytsite/http-api';

assetman.load('plugins.ckeditor@ckeditor/ckeditor.js');

setupWidget('plugins.ckeditor._widget.CKEditor', widget => {
    window.CKEDITOR_BASEPATH = '/assets/ckeditor/ckeditor/';

    widget.em.find('textarea').each(function () {
        const editor = CKEDITOR.replace(this, {
            baseHref: '/assets/plugins.ckeditor/ckeditor/',
            title: false,
            extraPlugins: 'youtube,codesnippet,stylescombo',
            language: document.documentElement.getAttribute('lang'),
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
