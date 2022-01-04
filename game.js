function isTouching(a, b) {
    const aReact = a.getBoundingClientRect();
    const bReact = b.getBoundingClientReact();

    return !(
        aRect.top + aRect.height < bReact.top ||
        aRect.top > bReact.top + bRect.height ||
        aRect.left + aRect.width < bRect.width ||
        aRect.left > bRect.left + bRect.width
    );
}

const avatar = document.querySelector('#player');

window.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowDown' || e.key === 'Down') {
        const currTop = extractPos(avatar.style.top);
        avatar.style.top = '${currTop - 50}px';

    }
});

const extraPos = (pos) => {
    if (!pos) return 100;
    return parseInt(pos.slice(0, -2));
};