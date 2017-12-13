"""PytSite CKEditor Plugin
"""
# Public API
from . import _widget as widget

__author__ = 'Alexander Shepetko'
__email__ = 'a@shepetko.com'
__license__ = 'MIT'


def plugin_load():
    from plugins import assetman

    assetman.register_package(__name__)


def plugin_load_console():
    from plugins import assetman

    assetman.t_copy(__name__ + '@ckeditor/**', 'ckeditor')
    assetman.t_js(__name__)

    assetman.js_module('ckeditor-vendor', __name__ + '@ckeditor/ckeditor.min', True)
    assetman.js_module('ckeditor-jquery', __name__ + '@ckeditor/adapters/jquery', True, ['jquery'])
    assetman.js_module('ckeditor', __name__ + '@ckeditor-loader')
