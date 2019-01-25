"""PytSite CKEditor Plugin Widgets
"""
__author__ = 'Oleksandr Shepetko'
__email__ = 'a@shepetko.com'
__license__ = 'MIT'

from pytsite import html as _html
from plugins import widget as _widget


class CKEditor(_widget.Abstract):
    """CKEditor Widget
    """

    def __init__(self, uid: str, **kwargs):
        """Init.
        """
        super().__init__(uid, **kwargs)

        self._toolbar_profile = kwargs.get('toolbar_profile', 'full')
        self._skin = kwargs.get('toolbar_profile', 'moono')
        self._css += ' widget-ckeditor'

    def _get_element(self, **kwargs) -> _html.Element:
        """Get HTML element of the widget.
        """
        self.data.update({
            'toolbar_profile': self._toolbar_profile,
            'skin': self._skin,
        })

        return _html.TextArea(self.get_val(), name=self._uid)
