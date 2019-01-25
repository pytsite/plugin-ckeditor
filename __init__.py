"""PytSite CKEditor Plugin
"""
__author__ = 'Oleksandr Shepetko'
__email__ = 'a@shepetko.com'
__license__ = 'MIT'

# Public API
from . import _widget as widget
from ._widget import CKEditor


def plugin_install():
    from plugins import assetman

    assetman.build(__name__)
