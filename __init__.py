"""PytSite CKEditor Plugin
"""
__author__ = 'Alexander Shepetko'
__email__ = 'a@shepetko.com'
__license__ = 'MIT'

from pytsite import plugman as _plugman

if _plugman.is_installed(__name__):
    # Public API
    from . import _widget as widget


def plugin_load():
    from plugins import assetman

    assetman.register_package(__name__)

    assetman.t_copy(__name__ + '@ckeditor/**', 'ckeditor')
    assetman.t_js(__name__)

    assetman.js_module('ckeditor-vendor', __name__ + '@ckeditor/ckeditor.min', True)
    assetman.js_module('ckeditor-jquery', __name__ + '@ckeditor/adapters/jquery', True, ['jquery'])
    assetman.js_module('ckeditor', __name__ + '@ckeditor-loader')


def plugin_install():
    from plugins import assetman

    plugin_load()
    assetman.build(__name__)
