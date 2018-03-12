var chewHighlight = require('mc2/dist/plugins/chewHighlight');
var chewHide = require('mc2/dist/plugins/chewHide');
var chewDividers = require('mc2/dist/plugins/chewDividers');

module.exports = {
    title: 'Avoiding problems with CSS at scale: A look at CSS in JS',
    earlyChewers: [
        chewHighlight.early,
        chewHide.early,
        chewDividers.early

    ],
    chewers: [
        chewHighlight.late,
        chewDividers.late,
    ]
};
  
