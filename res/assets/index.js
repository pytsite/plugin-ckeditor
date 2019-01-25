import setupWidget from '@pytsite/widget';
import httpApi from '@pytsite/http-api';

assetman.load('plugins.ckeditor@ckeditor/ckeditor.js');

setupWidget('plugins.ckeditor._widget.CKEditor', widget => {
    window.CKEDITOR_BASEPATH = '/assets/ckeditor/ckeditor/';

    const toolbarProfile = widget.data('toolbarProfile');
    let toolbar = [];
    let extraPlugins = '';
    let filebrowserUploadUrl = null;

    if (toolbarProfile === 'basic') {
        toolbar = [
            ['Format', 'Bold', 'Italic', 'Strike'],
            ['JustifyLeft', 'JustifyCenter', 'JustifyRight'],
            ['NumberedList', 'BulletedList'],
            ['Link', 'Unlink'],
            ['Undo', 'Redo'],
        ]
    } else {
        toolbar = [
            ['Bold', 'Italic', 'Strike', 'Format', 'RemoveFormat'],
            ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight'],
            ['Link', 'Unlink'],
            ['PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'],
            ['Image', 'Youtube', 'CodeSnippet', 'Iframe', 'Table', 'HorizontalRule', 'SpecialChar', 'Styles'],
            ['ShowBlocks', 'Source', 'Maximize']
        ];
        extraPlugins = 'youtube,codesnippet,stylescombo';
        filebrowserUploadUrl = httpApi.url('file');
    }

    widget.em.find('textarea').each(function () {
        const editor = CKEDITOR.replace(this, {
            baseHref: '/assets/plugins.ckeditor/ckeditor/',
            title: false,
            extraPlugins: extraPlugins,
            language: document.documentElement.getAttribute('lang'),
            filebrowserUploadUrl: filebrowserUploadUrl,
            height: 500,
            toolbar: toolbar,
            coreStyles_italic: {element: 'i'},
            extraAllowedContent: 'div p blockquote img ul ol li a i;span[data-*,hidden,lang](*);script[*];code(*);pre(*)',
            disableNativeSpellChecker: false,
            skin: widget.data('skin'),
        });

        editor.on('change', function () {
            this.updateElement();
        });
    });
});
