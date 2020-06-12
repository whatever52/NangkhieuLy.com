// This array holds the sub-websites, which are the mindmaps
let mindmaps = ['mind map 1.html', 'mind map 2.html', 'mind map 3.html']

let slider = document.getElementById('valR');
let frame = document.getElementById('mindmap');

// initialize the min and max value of the slider
// based on the number of mindmaps element
slider.min = 0;
slider.max = mindmaps.length - 1;
// initialize the source of the iframe to the first mindmap
frame.src = mindmaps[0];
// when the slider changes, change the mindmap based on the slider's value
slider.onchange = function() {
    frame.src = mindmaps[slider.value];
}