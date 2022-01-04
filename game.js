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