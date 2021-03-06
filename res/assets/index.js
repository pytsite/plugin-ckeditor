import setupWidget from '@pytsite/widget';
import assetman from '@pytsite/assetman';
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
            ['Undo', 'Redo'],
            ['Format', 'Bold', 'Italic', 'Underline', 'Strike', '-', 'Superscript', 'Subscript'],
            ['JustifyLeft', 'JustifyCenter', 'JustifyRight', '-', 'Outdent', 'Indent',],
            ['NumberedList', 'BulletedList'],
            ['Link', 'Unlink'],
            ['Blockquote', 'SpecialChar', 'Table'],
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
            extraAllowedContent:
                'h1[id];h2[id];h3[id];h4[id];h5[id];h6[id];' +
                'div[id];p[id];blockquote[id];header;footer;img[id];ul[id];ol[id];li;a;i;' +
                'span[data-*,hidden,lang](*);script[*];code(*);pre(*)',
            disableNativeSpellChecker: false,
            skin: widget.data('skin'),
            removeButtons: '',
            readOnly: widget.data('enabled') === 'False',
        });

        editor.on('change', function () {
            this.updateElement();
        });
    });
});
