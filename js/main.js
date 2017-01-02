var flashcards = (function() {

    var notes = ['A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab'];
    var strings = ['E', 'A', 'D', 'G', 'B'];

    var $app = $('#app');
    var $newButton = $app.find('.btn-new');
    var $stringHolder = $app.find('.card-string .holder');
    var $noteHolder = $app.find('.card-note .holder');

    var publicApi = {
        init: function() {
            flashcards.handleEvents();
            flashcards.findRandomString();
            flashcards.findRandomNote();
        },
        handleEvents: function() {
            $newButton.on('click', function() {
                flashcards.findRandomString();
                flashcards.findRandomNote();
            });
        },
        findRandomString: function() {
            var string = strings[Math.floor(Math.random() * strings.length)];
            flashcards.displayString(string);
        },
        findRandomNote: function() {
            var note = notes[Math.floor(Math.random() * notes.length)];
            flashcards.displayNote(note);
        },
        displayString: function(string) {
            $stringHolder.html(string);
        },
        displayNote: function(note) {
            $noteHolder.html(note);
        }
    }

    return publicApi;
})();

$(document).ready(function() {
    flashcards.init();
});
