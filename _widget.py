"""PytSite CKEditor Plugin Widgets
"""
__author__ = 'Oleksandr Shepetko'
__email__ = 'a@shepetko.com'
__license__ = 'MIT'

import htmler
from html import escape as html_escape
from plugins import widget


class CKEditor(widget.Abstract):
    """CKEditor Widget
    """

    def __init__(self, uid: str, **kwargs):
        """Init.
        """
        super().__init__(uid, **kwargs)

        self._toolbar_profile = kwargs.get('toolbar_profile', 'full')
        self._skin = kwargs.get('skin', 'moono')
        self._css += ' widget-ckeditor'

    def _get_element(self, **kwargs) -> htmler.Element:
        """Get HTML element of the widget.
        """
        self.data.update({
            'toolbar_profile': self._toolbar_profile,
            'skin': self._skin,
            'enabled': self._enabled,
        })

        return htmler.Textarea(html_escape(self.get_val()), name=self._uid)
