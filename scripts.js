function handleMouseOver(event) {
    const paragraphs = document.querySelectorAll('.left-content .paragraph');
    paragraphs.forEach(p => {
        if (p !== event.target) {
            p.style.color = 'grey';
            p.style.filter = 'blur(2px)'; // Apply blur effect
        } else {
            p.style.filter = 'none'; // Remove blur effect from the selected paragraph
        }
    });
}

function handleMouseOut(event) {
    const paragraphs = document.querySelectorAll('.left-content .paragraph');
    paragraphs.forEach(p => {
        p.style.color = '';
        p.style.filter = 'none'; // Remove blur effect
    });
}

document.querySelectorAll('.left-content .paragraph').forEach(p => {
    p.addEventListener('mouseover', handleMouseOver);
    p.addEventListener('mouseout', handleMouseOut);
});