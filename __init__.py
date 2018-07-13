"""PytSite CKEditor Plugin
"""
__author__ = 'Alexander Shepetko'
__email__ = 'a@shepetko.com'
__license__ = 'MIT'

from pytsite import plugman as _plugman

if _plugman.is_installed(__name__):
    # Public API
    from . import _widget as widget


def _register_assetman_resources():
    from plugins import assetman

    if not assetman.is_package_registered(__name__):
        assetman.register_package(__name__)

        assetman.t_copy(__name__ + '@ckeditor/**', 'ckeditor')
        assetman.t_js(__name__ + '@ckeditor-loader.js')

        assetman.js_module('ckeditor-vendor', __name__ + '@ckeditor/ckeditor.min', True)
        assetman.js_module('ckeditor-jquery', __name__ + '@ckeditor/adapters/jquery', True, ['jquery'])
        assetman.js_module('ckeditor', __name__ + '@ckeditor-loader')

    return assetman


def plugin_install():
    _register_assetman_resources().build(__name__)


def plugin_load():
    _register_assetman_resources()
