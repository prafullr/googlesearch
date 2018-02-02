CKEDITOR.plugins.add('search', {
    icons: 'search', // %REMOVE_LINE_CORE%
    init: function( editor ) {
        editor.addCommand( 'startSearch', {
            exec: function( editor ) {
                var sel = editor.getSelection();
                var url = "https://www.google.com/search?q="+sel.getSelectedText();
                window.open(url, '_blank');
            }
        });
        if ( editor.ui.addButton ) {
            editor.ui.addButton( 'search', {
                label: 'Search',
                id: 'search',
                command: 'startSearch',
                toolbar: 'search,10',
            } );
        }
    }
} );