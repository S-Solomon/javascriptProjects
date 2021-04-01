const boxes = document.querySelectorAll('.box');

const myObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const infoEl = entry.target.querySelector('.info');
    const width = Math.floor(entry.contentRect.width);
    const height = Math.floor(entry.contentRect.height);

    const angle = Math.floor(width / 360 * 100);
    const gradient = `linear-gradient(${ angle }deg, rgba(0,143,104,1), rgba(250,224,66,1))`;

    entry.target.style.background = gradient;

    infoEl.innerText = `I'm ${width}px and ${height}px tall`;
  }
});

boxes.forEach(box => {
  myObserver.observe(box);
});