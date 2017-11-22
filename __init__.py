"""CKEditor Plugin Init.
"""
# Public API
from . import _widget as widget

__author__ = 'Alexander Shepetko'
__email__ = 'a@shepetko.com'
__license__ = 'MIT'


def _init():
    """Init wrapper.
    """
    from pytsite import assetman

    assetman.register_package(__name__)
    assetman.t_copy(__name__ + '@ckeditor/**', 'ckeditor')
    assetman.t_js(__name__ + '@*.js')

    assetman.js_module('ckeditor-vendor', __name__ + '@ckeditor/ckeditor.min', True)
    assetman.js_module('ckeditor-jquery', __name__ + '@ckeditor/adapters/jquery', True, ['jquery'])
    assetman.js_module('ckeditor', __name__ + '@ckeditor-loader')


_init()
