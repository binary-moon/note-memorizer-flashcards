var flashcards = (function() {

    var naturalNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    var accidentalNotes = ['A#', 'Bb', 'C#', 'Db', 'D#', 'Eb', 'F#', 'Gb', 'G#', 'Ab']
    var allNotes = naturalNotes.concat(accidentalNotes);

    var strings = ['E', 'A', 'D', 'G', 'B'];

    var accidentalsExluded = false;

    var $app = $('#app');
    var $newButton = $app.find('.btn-new');
    var $stringHolder = $app.find('.card-string .holder');
    var $noteHolder = $app.find('.card-note .holder');
    var $accidentalSwitch = $app.find('.accidental-switch');

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

            $accidentalSwitch.on('change', function() {
                var $this = $(this);

                if ($this.is(":checked")) {
                    accidentalsExluded = true;
                } else {
                    accidentalsExluded = false;
                }
            });
        },
        findRandomString: function() {
            var string = strings[Math.floor(Math.random() * strings.length)];
            flashcards.displayString(string);
        },
        findRandomNote: function() {
            var note;

            if (!accidentalsExluded) {
                note = allNotes[Math.floor(Math.random() * allNotes.length)];
            } else {
                note = naturalNotes[Math.floor(Math.random() * naturalNotes.length)];
            }

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
