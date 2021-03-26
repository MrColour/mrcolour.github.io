
var tag = "#typer";

function highlight() {
    document.querySelector(tag).style.background = "#85fff5";
}

document.addEventListener('DOMContentLoaded', function(event)
{
    var dataText = [
`I'm a Digital Binary Systems Translation Mage,
(formerly known as Software Developer).
`,

`I'm a Software Developer, my name is Kevin Mira and I write programs.....

Sincerely,
Kevin Mira`,

`I'm a self-taught Software Developer that has been writing and compiling code for the past three years.

I wrote the page you are on.

Below are ways in which you can contact me:
Tel:                 505 690 1646
Email: kecolour@gmail.com

Or the other form on this page?

Cheers,
Kevin Mira`,

    ];
    
    function typeWriter(text, j, i, fnCallback) {
        if (i < (text.length)) {
            document.querySelector(tag).placeholder = "Hello,\nPleased to meet you!\n\n" + text.substring(0, i+1);
            
            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, j, i + 1, fnCallback)
            }, 30);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 1400);
            if (j != 2)
                setTimeout(highlight, 500);
                
        }
    }
    
    function StartTextAnimation(j) {
        document.querySelector(tag).style.background = "white";
        // document.querySelector(tag).style.color = "rgba(92, 250, 255, 0.781"
        if (j < dataText[j].length) {
            typeWriter(dataText[j], j, 0, function(){
                StartTextAnimation(j + 1);
            });
        }
    }
    StartTextAnimation(0);
}
);