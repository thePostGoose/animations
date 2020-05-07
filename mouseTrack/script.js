
let trackItems = []
for (let i = 0; i < 1000; i++) {
    let trackItem = document.createElement('div');
    trackItem.classList.add('track-item');
    trackItems.push(trackItem);
}
let count = 0;
window.addEventListener('mousemove', (event) =>  {
    let currentItem = trackItems[count % trackItems.length];
    document.body.append(currentItem);
    currentItem.style.top = event.clientY + 'px';
    currentItem.style.left = event.clientX + 'px';
    count++;
})